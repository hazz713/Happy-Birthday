import { motion } from "framer-motion";

type PreloaderProps = {
  onOpen: () => void;
};

const typingLines = [
  { text: "Hai.", delay: 0.4 },
  { text: "Hari ini...", delay: 1.8 },
  { text: "aku, seseorang yang masih mengingat hari ulang tahunmu.", delay: 3.15 },
  { text: " menyiapkan hadiah kecil ini...", delay: 4.5 },
  { text: "hanya untukmu.", delay: 5.65 }
];

export function Preloader({ onOpen }: PreloaderProps) {
  return (
    <motion.section
      className="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-midnight px-6 text-softWhite"
      exit={{ opacity: 0, filter: "blur(18px)" }}
      transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="preloader-stars" aria-hidden="true" />
      <div className="relative z-10 mx-auto flex min-h-[22rem] w-full max-w-3xl flex-col items-center justify-center text-center">
        <motion.p
          className="mb-8 text-[0.68rem] font-semibold uppercase tracking-[0.55em] text-gold/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1.4 }}
        >
          Finding the right stars...
        </motion.p>

        <div className="space-y-5 font-serif text-3xl leading-tight text-softWhite sm:text-5xl md:text-6xl">
          {typingLines.map((line) => (
            <motion.p
              key={line.text}
              className="typing-line"
              initial={{ opacity: 0, y: 14, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: line.delay, duration: 1.2, ease: "easeOut" }}
            >
              {line.text}
            </motion.p>
          ))}
        </div>

        <motion.button
          type="button"
          onClick={onOpen}
          className="gift-button mt-14"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 7.1, duration: 1.2, ease: "easeOut" }}
        >
          Next?
        </motion.button>
      </div>
    </motion.section>
  );
}
