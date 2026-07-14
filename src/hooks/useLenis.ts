import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export function useLenis(enabled: boolean) {
  useEffect(() => {
    if (!enabled) {
      return;
    }

    const lenis = new Lenis({
      duration: 1.55,
      easing: (time: number) => Math.min(1, 1.001 - Math.pow(2, -10 * time)),
      smoothWheel: true,
      wheelMultiplier: 0.75
    });

    let frameId = 0;

    function animate(time: number) {
      lenis.raf(time);
      frameId = requestAnimationFrame(animate);
    }

    frameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, [enabled]);
}
