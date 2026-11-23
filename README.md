<div align="center">

<img src="app/icon.png" alt="" width="96" height="96" />

# Sohith Reddy · Portfolio

**Software Engineer building backend systems that scale.**<br/>
Next.js · Three.js · live LeetCode and GitHub activity

[![Live site](https://img.shields.io/badge/sohithreddy.dev-Visit-0071e3?style=for-the-badge&logo=vercel&logoColor=white)](https://www.sohithreddy.dev/)
[![Next.js](https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-149eca?style=for-the-badge&logo=react&logoColor=white)](https://react.dev)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-000000?style=for-the-badge&logo=threedotjs&logoColor=white)](https://threejs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

[**Live site**](https://www.sohithreddy.dev/) · [Résumé](https://www.sohithreddy.dev/Resume.pdf) · [Backend](https://github.com/Sohith-reddy/Portfolio-Backend) · [Report a bug](https://github.com/Sohith-reddy/Portfolio/issues)

<br/>

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="docs/screenshots/hero-dark.png" />
  <source media="(prefers-color-scheme: light)" srcset="docs/screenshots/hero-light.png" />
  <img src="docs/screenshots/hero-dark.png" alt="Portfolio hero: avatar, headline 'I build systems that scale', and metric chips over a Three.js network-graph background" width="100%" />
</picture>

</div>

<br/>

## ✨ Highlights

<table>
  <tr>
    <td width="50%" valign="top">
      <h4>🌐 3D background</h4>
      A Three.js network graph of drifting nodes linked by proximity edges, around a wireframe core. It follows the light/dark theme, reacts to the mouse and scroll, pauses in hidden tabs, and shows a still frame when the visitor prefers reduced motion.
    </td>
    <td width="50%" valign="top">
      <h4>📈 Live coding activity</h4>
      LeetCode solved count by difficulty, contest rating, streak, top topics and languages, plus submission and GitHub contribution heatmaps. Fetched on the server and cached for 6 hours.
    </td>
  </tr>
  <tr>
    <td width="50%" valign="top">
      <h4>🗂️ Categorized projects</h4>
      Pinned GitHub repositories, filterable by <i>Backend & Systems</i>, <i>AI & ML</i> and <i>Full Stack</i>. Cards have a cursor spotlight, a subtle 3D tilt, and Code / Live links.
    </td>
    <td width="50%" valign="top">
      <h4>🌗 Light & dark</h4>
      Apple-inspired design tokens with an explicit theme toggle that remembers your choice and otherwise follows the OS, with no flash of the wrong theme on load.
    </td>
  </tr>
</table>

## 📸 Screenshots

### Projects

<img src="docs/screenshots/work-dark.png" alt="Selected projects section with category filter and the featured Shortify card" width="100%" />

<table>
  <tr>
    <td width="50%"><img src="docs/screenshots/work-light.png" alt="Projects section in light theme" /></td>
    <td width="50%"><img src="docs/screenshots/experience-dark.png" alt="Experience timeline with the current SDE-1 role" /></td>
  </tr>
  <tr>
    <td align="center"><sub>Projects · light theme</sub></td>
    <td align="center"><sub>Experience timeline</sub></td>
  </tr>
</table>

### Coding activity

<img src="docs/screenshots/leetcode-dark.png" alt="LeetCode card: solved ring by difficulty, contest rating, streak, ranking and a one-year submission heatmap" width="100%" />

<img src="docs/screenshots/github-dark.png" alt="GitHub card: contributions, repositories, followers and a one-year contribution heatmap" width="100%" />

### Technical skills

<img src="docs/screenshots/skills-dark.png" alt="Technical skills grouped into Languages, Backend, Databases, Distributed Systems, Cloud & DevOps, Frontend, AI & LLM and Core CS" width="100%" />

### Mobile

<img src="docs/screenshots/mobile.png" alt="Three mobile screens: hero, projects and coding activity" width="100%" />

## 🧱 Tech stack

| Area | Stack |
|:--|:--|
| **Framework** | Next.js 16 (App Router, Turbopack), React 19 |
| **Styling** | Tailwind CSS 4, CSS design tokens for light/dark |
| **Motion & 3D** | Motion, Three.js |
| **Icons** | React Icons |
| **Data** | LeetCode GraphQL and GitHub contributions, fetched server-side with ISR |
| **Contact form** | Web3Forms |
| **Visit tracking** | [Portfolio-Backend](https://github.com/Sohith-reddy/Portfolio-Backend), a Spring Boot service with PostgreSQL |
| **Hosting** | Vercel |

## 🗺️ How it works

```
app/
├── page.js                 # Server component; revalidates every 6 hours
├── layout.js               # Metadata, theme bootstrap, fonts
├── icon.png, opengraph-image.png, …   # Favicon and social preview images
└── components/
    ├── ThreeBackground.jsx # WebGL network graph (client only)
    ├── CodingStats.jsx     # Server: fetches LeetCode + GitHub data
    ├── CodingStatsView.jsx # Client: ring, stat tiles, bar charts
    ├── Heatmap.jsx         # 53-week contribution grid
    ├── Work.jsx            # Category filter + project cards
    └── …                   # Header, About, Services, Experience, Contact
assets/assets.js            # All content: projects, skills, experience
utils/stats.js              # LeetCode / GitHub fetchers
utils/trackVisit.js         # Optional visit tracking
```

- **Content lives in one file.** To add a project, skill or role, edit [`assets/assets.js`](assets/assets.js).
- **Stats never hit the browser.** LeetCode blocks cross-origin requests, so [`utils/stats.js`](utils/stats.js) fetches during build and revalidation. If a source is down, the section falls back gracefully instead of failing the build.

## 💻 Local development

```bash
git clone https://github.com/Sohith-reddy/Portfolio.git
cd Portfolio
npm install
npm run dev          # http://localhost:3000
```

| Script | What it does |
|:--|:--|
| `npm run dev` | Dev server with Turbopack |
| `npm run build` | Production build (fetches live stats) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint |

### Environment variables

Copy `.env.example` to `.env.local`, or set it in the Vercel project settings:

```env
# Base URL of the deployed Portfolio-Backend service, without a trailing slash.
# When unset, visit tracking is disabled.
NEXT_PUBLIC_API_URL=https://portfolio-backend-xxxxxxxxxx-el.a.run.app
```

Visits are sent once per browser session to `POST {NEXT_PUBLIC_API_URL}/api/track`. Append `?ref=<name>` to the site URL to tag visits from a specific link, such as a job application.

<br/>

<div align="center">

## 🤝 Connect

[![LinkedIn](https://img.shields.io/badge/LinkedIn-sohithreddy-0a66c2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/sohithreddy/)
[![GitHub](https://img.shields.io/badge/GitHub-Sohith--reddy-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Sohith-reddy)
[![LeetCode](https://img.shields.io/badge/LeetCode-sohith__reddy01-ffa116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/sohith_reddy01/)
[![X](https://img.shields.io/badge/X-Sohith__01-000000?style=for-the-badge&logo=x&logoColor=white)](https://twitter.com/Sohith_01)

<sub>Designed and built by Sohith Reddy</sub>

</div>
