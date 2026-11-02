"use client";

import { useEffect } from "react";

// Opens each project page at the top. Next.js keeps the scroll position when
// the new page's top is already on screen, so coming from the project cards
// would otherwise land halfway down the case study.
export default function ScrollToTop() {
  useEffect(() => {
    if (!window.location.hash) window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return null;
}
