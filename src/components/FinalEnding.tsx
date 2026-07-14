import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { finalMessage } from "../data/chapters";

const flowerHeads = [
  "rose-a",
  "rose-b",
  "rose-c",
  "rose-d",
  "rose-e",
  "rose-f",
  "rose-g",
  "rose-h",
  "rose-i"
];

const babyBreath = Array.from({ length: 18 }, (_, index) => index);
const driftingPetals = Array.from({ length: 26 }, (_, index) => index);
const risingStars = Array.from({ length: 22 }, (_, index) => index);

export function FinalEnding() {
  const [hasEntered, setHasEntered] = useState(false);
  const [showGift, setShowGift] = useState(false);
  const [opened, setOpened] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [fadeToBlack, setFadeToBlack] = useState(false);

  useEffect(() => {
    if (!hasEntered) {
      return;
    }

    const timer = window.setTimeout(() => setShowGift(true), 3000);
    return () => window.clearTimeout(timer);
  }, [hasEntered]);

  useEffect(() => {
    if (!opened) {
      return;
    }

    const messageTimer = window.setTimeout(() => setShowMessage(true), 6500);
    const endingTimer = window.setTimeout(() => setFadeToBlack(true), 14500);

    return () => {
      window.clearTimeout(messageTimer);
      window.clearTimeout(endingTimer);
    };
  }, [opened]);

  return (
    <section
      className={[
        "final-gift",
        showGift ? "is-gift-visible" : "",
        opened ? "is-blooming" : "",
        showMessage ? "is-message-visible" : "",
        fadeToBlack ? "is-ending-dark" : ""
      ].join(" ")}
    >
      <motion.div
        className="final-gift-stage"
        onViewportEnter={() => setHasEntered(true)}
        viewport={{ once: true, amount: 0.55 }}
      >
        <div className="final-gift-constellation" aria-hidden="true">
          {risingStars.map((star) => (
            <span
              key={star}
              style={
                {
                  "--star-left": `${10 + ((star * 3.75) % 82)}%`,
                  "--star-top": `${12 + ((star * 1.7) % 34)}%`,
                  "--star-delay": `${3.8 + star * 0.04}s`
                } as CSSProperties
              }
            />
          ))}
        </div>

        <div className="final-gift-petals" aria-hidden="true">
          {driftingPetals.map((petal) => (
            <span
              key={petal}
              style={
                {
                  "--petal-left": `${4 + ((petal * 3.6) % 92)}%`,
                  "--petal-drift-delay": `${petal * -0.48}s`,
                  "--petal-rise-delay": `${petal * 0.06}s`
                } as CSSProperties
              }
            />
          ))}
        </div>

        {!showMessage && (
          <motion.p
            className="final-gift-line"
            initial={{ opacity: 0, y: 18, filter: "blur(12px)" }}
            animate={{ opacity: showGift && !opened ? 1 : 0, y: showGift ? 0 : 18, filter: "blur(0px)" }}
            transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
          >
            gimana bunga dari aku?
             kamu suka? aku juga buat disini,
             pencet cobaa .
          </motion.p>
        )}

        {!showMessage && (
          <motion.button
            type="button"
            className="bouquet-button"
            onClick={() => setOpened(true)}
            aria-label="Open the final bouquet gift"
            initial={{ opacity: 0, y: 120, filter: "blur(20px)" }}
            animate={{
              opacity: showGift ? 1 : 0,
              y: showGift ? 0 : 120,
              filter: showGift ? "blur(0px)" : "blur(20px)"
            }}
            transition={{ duration: 2.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="bouquet-glow" />
            <span className="bouquet" aria-hidden="true">
              <span className="baby-breath">
                {babyBreath.map((dot) => (
                  <i
                    key={dot}
                    style={
                      {
                        "--dot-left": `${8 + ((dot * 4.7) % 84)}%`,
                        "--dot-top": `${4 + ((dot * 3.1) % 72)}%`
                      } as CSSProperties
                    }
                  />
                ))}
              </span>
              <span className="flower-cluster">
                {flowerHeads.map((flower) => (
                  <i key={flower} className={flower}>
                    <b />
                  </i>
                ))}
              </span>
              <span className="wrapping wrapping-left" />
              <span className="wrapping wrapping-right" />
              <span className="wrapping wrapping-front" />
              <span className="ribbon">
                <i />
                <b />
              </span>
            </span>
          </motion.button>
        )}

        {showMessage && (
          <motion.div
            className="final-message"
            initial={{ opacity: 0, y: 24, filter: "blur(18px)" }}
            animate={{ opacity: fadeToBlack ? 0 : 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 2.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div>
              {finalMessage.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <p className="final-signature">— Seseorang yang selalu mendoakanmu.</p>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
