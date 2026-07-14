import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ChapterShellProps = {
  eyebrow: string;
  title: string;
  children: ReactNode;
  align?: "left" | "center";
  className?: string;
};

export function ChapterShell({
  eyebrow,
  title,
  children,
  align = "center",
  className = ""
}: ChapterShellProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <section className={`chapter ${className}`}>
      <motion.div
        className={`relative z-10 flex w-full max-w-5xl flex-col ${alignment}`}
        initial={{ opacity: 0, y: 60, filter: "blur(18px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: false, amount: 0.45 }}
        transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="chapter-eyebrow">{eyebrow}</p>
        <h2 className="chapter-title">{title}</h2>
        <div className="chapter-copy">{children}</div>
      </motion.div>
    </section>
  );
}
