import { CosmicBackground } from "./components/CosmicBackground";
import { FlowerBloom } from "./components/FlowerBloom";
import { BirthdayLetter } from "./components/BirthdayLetter";

type Props = {
  onBack: () => void;
};

export default function LetterPage({ onBack }: Props) {
  return (
    <main className="experience is-open">

      <CosmicBackground />

      <button
        className="back-button"
        onClick={onBack}
      >
        ← Kembali
      </button>

      <section className="chapter chapter-five chapter-warm">

        <FlowerBloom />

        <BirthdayLetter />

      </section>

    </main>
  );
}