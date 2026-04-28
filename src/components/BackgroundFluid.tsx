"use client";

import { useEffect, useState, useMemo } from "react";
import { usePathname } from "next/navigation";
import "./BackgroundFluid.css";

type Orb = {
  id: number;
  width: string;
  height: string;
  top: string;
  left: string;
  animationDuration: string;
  opacity: number;
  animationDirection: "alternate" | "alternate-reverse";
};

export default function BackgroundFluid() {
  const pathname = usePathname();
  const [orbs, setOrbs] = useState<Orb[]>([]);

  const orbColor = useMemo(() => {
    if (pathname.includes("/global-volunteer")) return "rgba(248, 90, 64, 0.7)";
    if (pathname.includes("/global-talent")) return "rgba(12, 185, 193, 0.7)";
    if (pathname.includes("/global-teacher")) return "rgba(244, 137, 36, 0.7)";
    return "rgba(3, 126, 243, 0.7)"; // Default AIESEC Blue
  }, [pathname]);

  const orbColorFaded = useMemo(() => {
    if (pathname.includes("/global-volunteer")) return "rgba(248, 90, 64, 0.2)";
    if (pathname.includes("/global-talent")) return "rgba(12, 185, 193, 0.2)";
    if (pathname.includes("/global-teacher")) return "rgba(244, 137, 36, 0.2)";
    return "rgba(3, 126, 243, 0.2)";
  }, [pathname]);

  useEffect(() => {
    const generatedOrbs = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      width: `${Math.floor(Math.random() * 30 + 10)}vw`, // 10vw - 40vw
      height: `${Math.floor(Math.random() * 30 + 10)}vw`,
      top: `${Math.floor(Math.random() * 120 - 10)}%`, // -10% - 110%
      left: `${Math.floor(Math.random() * 120 - 10)}%`,
      animationDuration: `${Math.floor(Math.random() * 20 + 15)}s`, // 15s - 35s
      opacity: Math.random() * 0.4 + 0.4, // 0.4 - 0.8
      animationDirection: (Math.random() > 0.5 ? "alternate" : "alternate-reverse") as "alternate" | "alternate-reverse",
    }));
    setOrbs(generatedOrbs);
  }, []);

  return (
    <>
      <div 
        className="liquid-bg"
        style={{ 
          // @ts-ignore
          "--fluid-orb-custom": `radial-gradient(circle, ${orbColor}, ${orbColorFaded}, transparent)` 
        } as React.CSSProperties}
      >
        {orbs.map((orb) => (
          <div
            key={orb.id}
            className="liquid-orb"
            style={{
              width: orb.width,
              height: orb.height,
              top: orb.top,
              left: orb.left,
              animationDuration: orb.animationDuration,
              opacity: orb.opacity,
              animationDirection: orb.animationDirection,
            }}
          />
        ))}
      </div>
      <div className="background-grid"></div>
    </>
  );
}
