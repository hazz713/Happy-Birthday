import { useEffect, useState } from "react";

type Position = {
  x: number;
  y: number;
};

export function MouseGlow() {
  const [position, setPosition] = useState<Position>({ x: -400, y: -400 });

  useEffect(() => {
    function handleMove(event: PointerEvent) {
      setPosition({ x: event.clientX, y: event.clientY });
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    }

    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-20 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-softPink/20 blur-3xl transition-transform duration-700"
      style={{ left: position.x, top: position.y }}
      aria-hidden="true"
    />
  );
}
