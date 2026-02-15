"use client";

import { useEffect, useState } from "react";

import { PageLoader } from "@/components/layout/page-loader";
import { cn } from "@/lib/utils";

export function InitialLoader({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(true);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const hideTimer = window.setTimeout(() => setVisible(false), 1200);
    const unmountTimer = window.setTimeout(() => setMounted(false), 1700);

    return () => {
      window.clearTimeout(hideTimer);
      window.clearTimeout(unmountTimer);
    };
  }, []);

  return (
    <>
      {children}
      {mounted ? (
        <div
          className={cn(
            "fixed inset-0 z-[999] transition-opacity duration-500",
            visible ? "opacity-100" : "pointer-events-none opacity-0",
          )}
          aria-hidden={!visible}
        >
          <PageLoader />
        </div>
      ) : null}
    </>
  );
}
