"use client";

import { useSyncExternalStore } from "react";

function subscribe(onStoreChange: () => void) {
  const el = document.documentElement;
  const obs = new MutationObserver(onStoreChange);
  obs.observe(el, { attributes: true, attributeFilter: ["class"] });
  return () => obs.disconnect();
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  return false;
}

/** Tracks whether the `dark` class is present on <html>, reacting to changes. */
export function useIsDark() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
