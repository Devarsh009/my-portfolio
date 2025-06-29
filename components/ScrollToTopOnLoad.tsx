"use client";
import { useEffect } from "react";

export default function ScrollToTopOnLoad() {
  useEffect(() => {
    if (window.location.hash) {
      window.scrollTo(0, 0);
      history.replaceState(null, '', window.location.pathname);
    }
  }, []);
  return null;
} 