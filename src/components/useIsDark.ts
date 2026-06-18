"use client";

import { useEffect, useState } from "react";

/** Tracks whether the `dark` class is present on <html>, reacting to changes. */
export function useIsDark() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const el = document.documentElement;
    const update = () => setIsDark(el.classList.contains("dark"));
    update();
    const obs = new MutationObserver(update);
    obs.observe(el, { attributes: true, attributeFilter: ["class"] });
    return () => obs.disconnect();
  }, []);

  return isDark;
}
