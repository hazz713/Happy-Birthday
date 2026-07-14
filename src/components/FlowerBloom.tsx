import type { CSSProperties } from "react";

export function FlowerBloom() {
  return (
    <div className="flower-field" aria-hidden="true">
      {Array.from({ length: 14 }, (_, index) => (
        <span key={index} style={{ "--i": index } as CSSProperties} />
      ))}
    </div>
  );
}
