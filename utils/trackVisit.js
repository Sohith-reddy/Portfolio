import axios from "axios";
import { api } from "./api";

export async function trackVisit() {
  if (!api) return;

  try {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref") || params.get("track");

    // Approximate location of the visitor; the backend records the IP itself.
    let location = {};
    try {
      const { data } = await axios.get("https://ipapi.co/json/", { timeout: 3000 });
      location = { city: data.city, region: data.region, country: data.country_name };
    } catch {
      // Location is optional, still record the visit.
    }

    await api.post("/api/track", {
      ...location,
      ref: ref || "unknown", 
      page: window.location.pathname,
      referrer: document.referrer || null,
    });
  } catch (err) {
    console.error("Error tracking visit:", err);
  }
}

export async function getVisitCount() {
  if (!api) return null;
  try {
    const { data } = await api.get("/api/track/count");
    return data;
  } catch {
    return null;
  }
}
