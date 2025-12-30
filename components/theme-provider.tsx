"use client";

import { useEffect } from "react";
import { theme } from "@/lib/theme";

/**
 * ThemeProvider component that sets CSS variables from theme configuration
 * This ensures the brand color updates automatically when changed in theme.ts
 */
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // Set the CSS variable from theme configuration
    // Use requestAnimationFrame to ensure this happens after React hydration
    requestAnimationFrame(() => {
      if (typeof window !== "undefined") {
        document.documentElement.style.setProperty("--brand", theme.brand);
      }
    });
  }, []);

  return <>{children}</>;
}

