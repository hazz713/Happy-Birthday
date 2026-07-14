import { useEffect, useRef, useState } from "react";

type Props = {
  children: string;
  speed?: number;
};

export function TypewriterText({
  children,
  speed = 35,
}: Props) {
  const ref = useRef<HTMLParagraphElement>(null);

  const [text, setText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = ref.current;

    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.55,
      }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let i = 0;

    const timer = setInterval(() => {
      i++;

      setText(children.slice(0, i));

      if (i >= children.length) {
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [started, children, speed]);

  return (
    <p
      ref={ref}
      className="typewriter"
    >
      {text}
      <span className="cursor">|</span>
    </p>
  );
}