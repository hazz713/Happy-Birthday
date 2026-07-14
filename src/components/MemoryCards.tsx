import { motion } from "framer-motion";
import { memoryCards } from "../data/chapters";

const toneClass = {
  rose: "from-[#ff9fb0]/20",
  blue: "from-[#8fc7ff]/20",
  gold: "from-gold/20"
};

export function MemoryCards() {
  return (
    <div className="mt-12 grid w-full max-w-5xl gap-5 md:grid-cols-3">
      {memoryCards.map((card, index) => (
        <motion.article
          key={card.sentence}
          className={`memory-card bg-gradient-to-br ${toneClass[card.tone]} to-softWhite/[0.035]`}
          initial={{ opacity: 0, y: 72, filter: "blur(22px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: false, amount: 0.55 }}
          transition={{ delay: index * 0.18, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="memory-image">
           <img
           src={`/foto${index + 1}.jpg`}
            alt=""
           className="memory-photo"
           />
           </div>
          <p>{card.sentence}</p>
        </motion.article>
      ))}
    </div>
  );
}
