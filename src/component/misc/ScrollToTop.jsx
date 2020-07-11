import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { WebpMachine } from 'webp-hero';
const webpMachine = new WebpMachine();

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    webpMachine.polyfillDocument();
  }, [pathname]);

  return null;
}
