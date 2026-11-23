'use client'
import { useEffect } from "react";
import { trackVisit } from "@/utils/trackVisit";

// Records one visit per browser session.
const VisitTracker = () => {
  useEffect(() => {
    try {
      if (!sessionStorage.getItem("visitTracked")) {
        trackVisit();
        sessionStorage.setItem("visitTracked", "1");
      }
    } catch {
      // sessionStorage can be unavailable (private mode); skip tracking.
    }
  }, []);
  return null;
};

export default VisitTracker;
