"use client";

import React from "react";

interface RainbowButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export function RainbowButton({ className, children, ...props }: RainbowButtonProps) {
  return (
    <a
      className={[
        "relative cursor-pointer inline-flex items-center justify-center gap-2 shrink-0 flex-1",
        "rounded-xl px-6 py-4 text-sm font-bold whitespace-nowrap text-white text-center",
        "animate-rainbow transition-all",
        "bg-[length:200%]",
        "[background-clip:padding-box,border-box,border-box]",
        "[background-origin:border-box]",
        "[border:2px_solid_transparent]",
        "bg-[linear-gradient(#121213,#121213),linear-gradient(#121213_50%,rgba(18,18,19,0.6)_80%,rgba(18,18,19,0)),linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        "before:absolute before:bottom-[-20%] before:left-1/2 before:z-0",
        "before:h-1/5 before:w-3/5 before:-translate-x-1/2",
        "before:animate-rainbow",
        "before:bg-[linear-gradient(90deg,hsl(var(--color-1)),hsl(var(--color-5)),hsl(var(--color-3)),hsl(var(--color-4)),hsl(var(--color-2)))]",
        "before:bg-[length:200%]",
        "before:[filter:blur(0.75rem)]",
        className ?? "",
      ].join(" ")}
      {...props}
    >
      {children}
    </a>
  );
}
