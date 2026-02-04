"use client";
import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const CometCard = ({
  rotateDepth = 8,
  translateDepth = 3,
  className,
  children,
}: {
  rotateDepth?: number;
  translateDepth?: number;
  className?: string;
  children: React.ReactNode;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState("");
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width - 0.5);
    const yPct = (mouseY / height - 0.5);

    const rotateX = -yPct * rotateDepth;
    const rotateY = xPct * rotateDepth;
    const translateX = xPct * translateDepth;
    const translateY = -yPct * translateDepth;

    setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateX(${translateX}px) translateY(${translateY}px) scale(1.001)`);
    setGlarePosition({ 
      x: (xPct + 0.5) * 100, 
      y: (yPct + 0.5) * 100 
    });
  };

  const handleMouseLeave = () => {
    setTransform("perspective(1000px) rotateX(0deg) rotateY(0deg) translateX(0px) translateY(0px) scale(1)");
    setGlarePosition({ x: 50, y: 50 });
  };

  return (
    <div className={cn("h-full", className)}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform,
          transition: "transform 0.2s ease-out",
        }}
        className="relative rounded-tl-4xl rounded-br-4xl h-full hover:z-50"
      >
        {children}
        <div
          className="pointer-events-none absolute inset-0 z-50 h-full w-full rounded-[16px] mix-blend-overlay opacity-60 transition-all duration-200"
          style={{
            background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.9) 10%, rgba(255, 255, 255, 0.75) 20%, rgba(255, 255, 255, 0) 80%)`,
          }}
        />
      </div>
    </div>
  );
};
