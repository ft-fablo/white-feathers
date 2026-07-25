"use client";

import React from "react";

export function TopographyBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden select-none"
    >
      {/* High-Definition Topographic Background Texture Overlay */}
      <div
        className="w-full h-full bg-repeat opacity-35 dark:opacity-25 mix-blend-multiply dark:mix-blend-screen dark:invert contrast-125 dark:contrast-150 transition-all duration-500"
        style={{
          backgroundImage: "url('/topography.jpg')",
          backgroundSize: "750px auto",
          backgroundAttachment: "fixed",
        }}
      />
    </div>
  );
}
