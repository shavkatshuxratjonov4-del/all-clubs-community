"use client";
import LaserBurst from "@/components/effects/LaserBurst";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  end: number;
  duration?: number;
}

export default function AnimatedCounter({
  end,
  duration = 1500,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const [finished, setFinished] = useState(false);

  const ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let startTime: number;

    const animate = (time: number) => {
      if (!startTime) startTime = time;

      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
        setFinished(true);
      }
    };

    requestAnimationFrame(animate);
  }, [started, end, duration]);

  useEffect(() => {
    if (!finished) return;

    const timer = setTimeout(() => {
      setFinished(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [finished]);

return (
  <div className="relative inline-flex items-center justify-center">
    <h2
      ref={ref}
      className={`
        relative z-10
        text-5xl
        font-black
        transition-all
        duration-700
        ${
          finished
            ? "scale-110 text-green-400 drop-shadow-[0_0_25px_rgba(34,197,94,0.95)]"
            : "scale-100 text-white"
        }
      `}
    >
      {count}
    </h2>

    {finished && <LaserBurst />}
  </div>
);
}