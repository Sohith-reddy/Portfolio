'use client'
import { useEffect, useRef } from "react";

// A fixed, full-viewport WebGL scene behind the page: a slowly drifting
// network graph (nodes + proximity edges) around a wireframe core, with
// mouse parallax and scroll-driven depth. It reads the page's accent colours
// from CSS tokens so it follows the light / dark theme.

const readTheme = () => {
  const css = getComputedStyle(document.documentElement);
  const bg = css.getPropertyValue("--apple-bg").trim() || "#ffffff";
  const isDark = (() => {
    const hex = bg.replace("#", "");
    if (hex.length < 6) return false;
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    return (r * 299 + g * 587 + b * 114) / 1000 < 128;
  })();
  return {
    isDark,
    bg,
    primary: css.getPropertyValue("--apple-blue").trim() || "#0071e3",
    secondary: isDark ? "#bf5af2" : "#8e44d9",
  };
};

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const THREE = await import("three");
      if (disposed) return;

      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const isSmall = window.innerWidth < 768;

      let renderer;
      try {
        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
      } catch {
        return; // No WebGL: the page still works without the background.
      }
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      mount.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 200);
      camera.position.set(0, 0, 32);

      const root = new THREE.Group();
      scene.add(root);

      /* ---------------- Network graph ---------------- */
      const NODE_COUNT = isSmall ? 70 : 130;
      const BOUNDS = { x: 34, y: 22, z: 14 };
      const LINK_DIST = isSmall ? 6.5 : 6;
      const MAX_LINKS = NODE_COUNT * 6;

      const positions = new Float32Array(NODE_COUNT * 3);
      const velocities = new Float32Array(NODE_COUNT * 3);
      for (let i = 0; i < NODE_COUNT; i++) {
        positions[i * 3] = (Math.random() - 0.5) * BOUNDS.x * 2;
        positions[i * 3 + 1] = (Math.random() - 0.5) * BOUNDS.y * 2;
        positions[i * 3 + 2] = (Math.random() - 0.5) * BOUNDS.z * 2;
        velocities[i * 3] = (Math.random() - 0.5) * 0.02;
        velocities[i * 3 + 1] = (Math.random() - 0.5) * 0.02;
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.02;
      }

      // Soft round sprite so points render as dots rather than squares.
      const spriteCanvas = document.createElement("canvas");
      spriteCanvas.width = spriteCanvas.height = 64;
      const ctx = spriteCanvas.getContext("2d");
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, "rgba(255,255,255,1)");
      grad.addColorStop(0.35, "rgba(255,255,255,0.85)");
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 64, 64);
      const sprite = new THREE.CanvasTexture(spriteCanvas);

      const pointGeo = new THREE.BufferGeometry();
      pointGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      const pointMat = new THREE.PointsMaterial({
        size: 0.55,
        map: sprite,
        transparent: true,
        depthWrite: false,
        sizeAttenuation: true,
      });
      const points = new THREE.Points(pointGeo, pointMat);
      root.add(points);

      const linePositions = new Float32Array(MAX_LINKS * 6);
      const lineColors = new Float32Array(MAX_LINKS * 6);
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute("position", new THREE.BufferAttribute(linePositions, 3).setUsage(THREE.DynamicDrawUsage));
      lineGeo.setAttribute("color", new THREE.BufferAttribute(lineColors, 3).setUsage(THREE.DynamicDrawUsage));
      const lineMat = new THREE.LineBasicMaterial({ vertexColors: true, transparent: true, depthWrite: false });
      const lines = new THREE.LineSegments(lineGeo, lineMat);
      root.add(lines);

      /* ---------------- Wireframe core ---------------- */
      const core = new THREE.Group();
      // Sits off to the right of the hero copy on desktop, above it on mobile.
      const coreBase = { x: isSmall ? 0 : 23, y: isSmall ? 10 : 5 };
      core.position.set(coreBase.x, coreBase.y, -4);
      root.add(core);

      const icoGeo = new THREE.IcosahedronGeometry(isSmall ? 4.2 : 6, 1);
      const icoMat = new THREE.MeshBasicMaterial({ wireframe: true, transparent: true });
      const ico = new THREE.Mesh(icoGeo, icoMat);
      core.add(ico);

      const vertGeo = new THREE.BufferGeometry();
      vertGeo.setAttribute("position", icoGeo.getAttribute("position").clone());
      const vertMat = new THREE.PointsMaterial({ size: 0.45, map: sprite, transparent: true, depthWrite: false });
      core.add(new THREE.Points(vertGeo, vertMat));

      const ringGeo = new THREE.TorusGeometry(isSmall ? 6 : 8.6, 0.03, 8, 160);
      const ringMat = new THREE.MeshBasicMaterial({ transparent: true });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI / 2.3;
      core.add(ring);
      const ring2 = new THREE.Mesh(ringGeo, ringMat);
      ring2.rotation.set(Math.PI / 1.7, Math.PI / 5, 0);
      ring2.scale.setScalar(1.15);
      core.add(ring2);

      const coreMats = [icoMat, vertMat, ringMat];

      /* ---------------- Theme ---------------- */
      const colorA = new THREE.Color();
      const colorB = new THREE.Color();
      const bgColor = new THREE.Color();
      let lineAlpha = 0.5;
      const applyTheme = () => {
        const t = readTheme();
        colorA.set(t.primary);
        colorB.set(t.secondary);
        bgColor.set(t.isDark ? "#000000" : t.bg);
        // Light pages need more opacity for the same perceived weight.
        const blending = t.isDark ? THREE.AdditiveBlending : THREE.NormalBlending;
        pointMat.color.copy(colorA);
        pointMat.opacity = t.isDark ? 0.9 : 0.55;
        pointMat.blending = blending;
        lineMat.opacity = t.isDark ? 0.55 : 0.35;
        lineMat.blending = blending;
        icoMat.color.copy(colorB);
        icoMat.opacity = t.isDark ? 0.28 : 0.2;
        vertMat.color.copy(colorB);
        vertMat.opacity = t.isDark ? 0.9 : 0.6;
        ringMat.color.copy(colorA);
        ringMat.opacity = t.isDark ? 0.35 : 0.25;
        [pointMat, lineMat, icoMat, vertMat, ringMat].forEach((m) => (m.needsUpdate = true));
        coreMats.forEach((m) => (m.userData.baseOpacity = m.opacity));
        lineAlpha = t.isDark ? 1 : 0.9;
        if (reduceMotion) render(0);
      };

      const themeObserver = new MutationObserver(applyTheme);
      themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", applyTheme);

      /* ---------------- Interaction ---------------- */
      const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
      const onPointerMove = (e) => {
        pointer.tx = (e.clientX / window.innerWidth) * 2 - 1;
        pointer.ty = (e.clientY / window.innerHeight) * 2 - 1;
      };
      window.addEventListener("pointermove", onPointerMove, { passive: true });

      let scrollProgress = 0;
      // 1 in the hero, easing to a faint 0.25 once the hero has scrolled
      // away, so the core never competes with section headings.
      let coreFade = 1;
      const updateScroll = () => {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        scrollProgress = max > 0 ? window.scrollY / max : 0;
        coreFade = Math.max(0.25, 1 - (window.scrollY / window.innerHeight) * 0.9);
      };
      const onScroll = () => {
        updateScroll();
        // With no animation loop, redraw on scroll so depth still follows.
        if (reduceMotion) render(0);
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      updateScroll();

      const onResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        if (reduceMotion) render(0);
      };
      window.addEventListener("resize", onResize);

      /* ---------------- Frame ---------------- */
      const updateLinks = () => {
        let n = 0;
        const d2max = LINK_DIST * LINK_DIST;
        for (let i = 0; i < NODE_COUNT && n < MAX_LINKS; i++) {
          const ix = positions[i * 3], iy = positions[i * 3 + 1], iz = positions[i * 3 + 2];
          for (let j = i + 1; j < NODE_COUNT && n < MAX_LINKS; j++) {
            const dx = ix - positions[j * 3];
            const dy = iy - positions[j * 3 + 1];
            const dz = iz - positions[j * 3 + 2];
            const d2 = dx * dx + dy * dy + dz * dz;
            if (d2 > d2max) continue;
            // Fade edges with distance by blending their colour toward the
            // page background (black for additive, the page colour otherwise).
            const a = (1 - d2 / d2max) * lineAlpha;
            const o = n * 6;
            linePositions[o] = ix; linePositions[o + 1] = iy; linePositions[o + 2] = iz;
            linePositions[o + 3] = positions[j * 3]; linePositions[o + 4] = positions[j * 3 + 1]; linePositions[o + 5] = positions[j * 3 + 2];
            const mix = (iy + BOUNDS.y) / (BOUNDS.y * 2);
            const r = bgColor.r + ((colorA.r * (1 - mix) + colorB.r * mix) - bgColor.r) * a;
            const g = bgColor.g + ((colorA.g * (1 - mix) + colorB.g * mix) - bgColor.g) * a;
            const b = bgColor.b + ((colorA.b * (1 - mix) + colorB.b * mix) - bgColor.b) * a;
            lineColors[o] = r; lineColors[o + 1] = g; lineColors[o + 2] = b;
            lineColors[o + 3] = r; lineColors[o + 4] = g; lineColors[o + 5] = b;
            n++;
          }
        }
        lineGeo.setDrawRange(0, n * 2);
        lineGeo.attributes.position.needsUpdate = true;
        lineGeo.attributes.color.needsUpdate = true;
      };

      const step = () => {
        for (let i = 0; i < NODE_COUNT; i++) {
          for (let k = 0; k < 3; k++) {
            const idx = i * 3 + k;
            positions[idx] += velocities[idx];
            const lim = k === 0 ? BOUNDS.x : k === 1 ? BOUNDS.y : BOUNDS.z;
            if (positions[idx] > lim || positions[idx] < -lim) velocities[idx] *= -1;
          }
        }
        pointGeo.attributes.position.needsUpdate = true;
      };

      const render = (t) => {
        updateLinks();
        pointer.x += (pointer.tx - pointer.x) * 0.04;
        pointer.y += (pointer.ty - pointer.y) * 0.04;
        root.rotation.y = pointer.x * 0.12 + t * 0.00002;
        root.rotation.x = pointer.y * 0.08;
        ico.rotation.x = t * 0.00012;
        ico.rotation.y = t * 0.00018;
        ring.rotation.z = t * 0.0001;
        ring2.rotation.z = -t * 0.00008;
        // Pull the camera back and drift the core away as the page scrolls.
        camera.position.z = 32 + scrollProgress * 10;
        camera.position.y = -scrollProgress * 6;
        core.position.y = coreBase.y + scrollProgress * 8;
        coreMats.forEach((m) => (m.opacity = m.userData.baseOpacity * coreFade));
        renderer.render(scene, camera);
      };

      applyTheme();

      if (reduceMotion) {
        render(0);
      } else {
        renderer.setAnimationLoop((t) => {
          step();
          render(t);
        });
      }

      // Stop rendering while the tab is hidden.
      const onVisibility = () => {
        if (reduceMotion) return;
        renderer.setAnimationLoop(document.hidden ? null : (t) => { step(); render(t); });
      };
      document.addEventListener("visibilitychange", onVisibility);

      cleanup = () => {
        renderer.setAnimationLoop(null);
        themeObserver.disconnect();
        mq.removeEventListener("change", applyTheme);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("scroll", onScroll);
        window.removeEventListener("resize", onResize);
        document.removeEventListener("visibilitychange", onVisibility);
        [pointGeo, lineGeo, icoGeo, vertGeo, ringGeo].forEach((g) => g.dispose());
        [pointMat, lineMat, icoMat, vertMat, ringMat].forEach((m) => m.dispose());
        sprite.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    })();

    return () => {
      disposed = true;
      cleanup();
    };
  }, []);

  return <div ref={mountRef} aria-hidden="true" className="three-bg" />;
};

export default ThreeBackground;
