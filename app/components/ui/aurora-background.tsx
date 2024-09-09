"use client";
import React, { ReactNode } from "react";
import { cn } from "./../../libs/utils";
interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    
      <div>
      <div className="absolute inset-0 overflow-hidden h-[100dvh] w-[100dvw] z-[-10]">
          <div
            className={cn(
              `
                  [--base-color:#060808]
            [--slate-gradient:repeating-linear-gradient(100deg,var(--slate)_0%,var(--slate)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--slate)_5%)]
            [--dark-gradient:repeating-linear-gradient(100deg,var(--base-color)_0%,var(--base-color)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--base-color)_16%)]
            [--aurora:repeating-linear-gradient(100deg,var(--sky-800)_10%,var(--sky-500)_15%,var(--sky-900)_20%,var(--sky-950)_25%,var(--sky-700)_30%)]
            [background-image:var(--slate-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[10px] invert dark:invert-0
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--slate-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
            pointer-events-none
            absolute inset-0 opacity-15 will-change-transform z-[-10] w-full`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]`
            )}
          ></div>
        </div >
        {children}
      </div>
  );
};
