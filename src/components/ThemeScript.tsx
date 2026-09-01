"use client";

import { useServerInsertedHTML } from "next/navigation";

const THEME_INIT =
  "(function(){try{if(localStorage.getItem('theme')==='dark'){document.documentElement.classList.add('dark');}}catch(e){}})();";

/** Injects the theme boot script during SSR only, so React 19 never sees a <script> on the client. */
export default function ThemeScript() {
  useServerInsertedHTML(() => (
    <script id="theme-init" dangerouslySetInnerHTML={{ __html: THEME_INIT }} />
  ));
  return null;
}
