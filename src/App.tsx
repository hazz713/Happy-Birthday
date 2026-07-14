import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ChapterShell } from "./components/ChapterShell";
import { Constellation } from "./components/Constellation";
import { CosmicBackground } from "./components/CosmicBackground";
import { FinalEnding } from "./components/FinalEnding";
import { FlowerBloom } from "./components/FlowerBloom";
import { MemoryCards } from "./components/MemoryCards";
import { MouseGlow } from "./components/MouseGlow";
import { Preloader } from "./components/Preloader";
import { gratitudeLines } from "./data/chapters";
import { useLenis } from "./hooks/useLenis";
import { BirthdayLetter } from "./components/BirthdayLetter";
import LetterPage from "./LetterPage";

export default function App() {
  const [hasOpened, setHasOpened] = useState(false);
  useLenis(hasOpened);
  const [showLetter, setShowLetter] = useState(false);


  if (showLetter) {
  return (
  <LetterPage
    onBack={() => setShowLetter(false)}
  />
);
}
  return (
    <>
      <AnimatePresence>{!hasOpened && <Preloader onOpen={() => setHasOpened(true)} />}</AnimatePresence>

      <main className={hasOpened ? "experience is-open" : "experience"} aria-hidden={!hasOpened}>
        <CosmicBackground />
        <MouseGlow />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: hasOpened ? 1 : 0 }}
          transition={{ duration: 1.4, delay: 0.2 }}
        >
          <ChapterShell
         eyebrow="Hari Ini"
         title="Happy Birthday."
         className="chapter-one"
>
       <p>Hari ini aku berusaha untuk merayakanmu...</p>
       <p>merayakan hanya dengan bunga kecil berwarna warna favoritmu.</p>

       <div style={{ height: "48px" }} />

       <p>meskipun namanya ga tertulis di sini..</p>
       <p>aku cuma berharap...</p>
       <p>kamu tersenyum hari ini.</p>
         </ChapterShell>

          <ChapterShell eyebrow="Chapter II" title="about u" className="chapter-two items-center">
            <MemoryCards />
          </ChapterShell>

          <ChapterShell eyebrow="Chapter III" title="Terima Kasih." align="left" className="chapter-three chapter-long">
            <div className="space-y-5">
              {gratitudeLines.map((line, index) => (
                <motion.p
                  key={`${line}-${index}`}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.7 }}
                  transition={{ duration: 0.9, ease: "easeOut" }}
                >
                  {line}
                </motion.p>
              ))}
            </div>
          </ChapterShell>

          <ChapterShell eyebrow="Chapter IV" title="The Constellation" className="chapter-four">
            <Constellation />
            <p>
           Tidak semua bintang ditakdirkan
           untuk tetap berada
           di langit yang sama.
           </p>

          <div style={{ height: "40px" }} />

           <p>
           Namun beberapa...
          akan selalu menjadi
          langit yang paling indah
          untuk diingat.
         </p>
          </ChapterShell>

          <ChapterShell
  eyebrow="Last Chapter"
  title="One More Thing..."
>
  <button
    className="open-letter-btn"
    onClick={() => setShowLetter(true)}
  >
    one last letter
  </button>
</ChapterShell>

          <FinalEnding />
        </motion.div>
      </main>
    </>
  );
}
