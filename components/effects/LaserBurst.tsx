"use client";

export default function LaserBurst() {
  const rays = Array.from({ length: 24 });

  return (
    <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-visible">
      {rays.map((_, i) => {
        const angle = (360 / rays.length) * i;

        return (
          <span
            key={i}
            className="laser-ray"
            style={
              {
                "--angle": `${angle}deg`,
              } as React.CSSProperties
            }
          />
        );
      })}
    </div>
  );
}