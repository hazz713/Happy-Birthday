import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Props = {
  text: string;
};

export function TypewriterLetter({ text }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    once: true,
    amount: 0.4,
  });

  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!inView) return;

    let i = 0;
    let timer: number;

    const type = () => {
      if (i >= text.length) return;

      const char = text[i];

      setDisplayed((prev) => prev + char);

      i++;

      // 👇 ini yang bikin kamera ikut turun
      requestAnimationFrame(() => {
        window.scrollBy({
          top: 0.7,
          behavior: "instant" as ScrollBehavior,
        });
      });

      let speed = 26;

      if (char === ".") speed = 450;
      else if (char === ",") speed = 120;
      else if (char === "\n") speed = 220;

      timer = window.setTimeout(type, speed);
    };

    type();

    return () => clearTimeout(timer);
  }, [inView, text]);

  return (
    <div ref={ref} className="typewriter-letter">
      {displayed}
      <span className="typing-cursor"></span>
    </div>
  );
}