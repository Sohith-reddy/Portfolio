import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function trackVisit() {
  if (!API_URL) return;

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

    await axios.post(`${API_URL.replace(/\/$/, "")}/api/track`, {
      ...location,
      ref: ref || "unknown", // recruiter identifier
      page: window.location.pathname,
      referrer: document.referrer || null,
    });
  } catch (err) {
    console.error("Error tracking visit:", err);
  }
}
