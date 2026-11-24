'use client'
import React, { useEffect, useState } from "react";
import { getVisitCount } from "@/utils/trackVisit";

const VisitCount = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    let active = true;
    getVisitCount().then((data) => {
      if (active) setCount(data);
    });
    return () => {
      active = false;
    };
  }, []);

  if (!count) return null;

  return (
    <p className="text-[12px] text-secondary tracking-[-0.005em]">
      {count.total.toLocaleString()} visits · {count.last30Days.toLocaleString()} in the last 30 days
    </p>
  );
};

export default VisitCount;
