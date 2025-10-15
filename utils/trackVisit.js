import axios from "axios";

export async function trackVisit() {
  try {
    const params = new URLSearchParams(window.location.search);
    const ref = params.get("ref") || params.get("track");

    // Get IP and location
    const ipRes = await axios.get("https://api.ipify.org?format=json");
    const ip = ipRes.data.ip;
    const locRes = await axios.get(`https://ipapi.co/${ip}/json/`);
    const { city, region, country_name } = locRes.data;

    // Prepare payload
    const payload = {
      ip_address: ip,
      city,
      region,
      country: country_name,
      timestamp: new Date().toISOString(),
      ref: ref || "unknown", // recruiter identifier
    };

    await axios
      .post("https://portfolio-tracker-475117.el.r.appspot.com/api/track", payload)
      .then((res) => console.log("Tracked successfully", res.data))
      .catch((err) => console.error("Tracking error", err));
    // This is the Render backend URL. Replace with your actual backend URL.
  } catch (err) {
    console.error("Error tracking visit:", err);
  }
}
