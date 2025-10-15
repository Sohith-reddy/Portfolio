import axios from "axios";

export async function trackVisit() {
  try {
    const params = new URLSearchParams(window.location.search);
    const encodedRef = params.get("ref") || params.get("track");
    
    // Decode the ref parameter
    let ref = "unknown";
    if (encodedRef) {
      try {
        ref = atob(encodedRef);
      } catch (decodeError) {
        console.error("Failed to decode ref:", decodeError);
        ref = "invalid_encoding";
      }
    }
    
    // Get IP and location
    const ipRes = await axios.get("https://api.ipify.org?format=json");
    const ip = ipRes.data.ip;
    const locRes = await axios.get(`https://ipapi.co/${ip}/json/`);
    const { city, region, country_name } = locRes.data;
    
    // Prepare payload
    const payload = {
      ipAddress: ip,
      city,
      region,
      country: country_name,
      timestamp: new Date().toISOString(),
      ref: ref, // decoded recruiter identifier
    };
    
    await axios
      .post("https://portfolio-tracker-475117.el.r.appspot.com/api/track", payload)
      .then((res) => console.log("Tracked successfully", res.data))
      .catch((err) => console.error("Tracking error", err));
      
  } catch (err) {
    console.error("Error tracking visit:", err);
  }
}

// Helper function to create encoded tracking URLs
export function createTrackedURL(baseURL, recruiterName) {
  const encodedName = btoa(recruiterName);
  return `${baseURL}?ref=${encodedName}`;
}

// Example usage:
// const url = createTrackedURL("https://myportfolio.com", "google_recruiter");
// Result: https://myportfolio.com?ref=Z29vZ2xlX3JlY3J1aXRlcg==
//
// When visited, trackVisit() will decode it back to "google_recruiter"