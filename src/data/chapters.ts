export type MemoryCard = {
  sentence: string;
  tone: "rose" | "blue" | "gold";
};

export type Chapter = {
  eyebrow: string;
  title: string;
  lines: string[];
};

export const memoryCards: MemoryCard[] = [
  {
    sentence: "Kamu selalu cantik setiap detiknya, menitnya, setiap harinya.",
    tone: "blue"
  },
  {
    sentence: "Aku selalu bangga melihatmu menjadi perempuan yang kuat, bahkan di hari-hari yang tidak mudah.",
    tone: "gold"
  },
  {
    sentence: "Dunia beruntung memilikimu di dalamnya.",
    tone: "rose"
  }
];

export const gratitudeLines = [
  "Terima kasih...",
  "karena sudah menjadi perempuan yang kuat.",
  "...",
  "Terima kasih...",
  "untuk setiap tawa cantikmu yang pernah menghiasi hari.",
  "...",
  "Terima kasih...",
  "karena selalu mengajarkan bahwa kebaikan bisa hadir dalam hal-hal yang sederhana.",
  "...",
  "Terima kasih...",
  "karena sudah bertahan hingga hari ini.",
  "...",
  "Dan yang terakhir...",
  "terima kasih,",
  "karena pernah menjadi bagian dari cerita yang akan selalu kuingat dengan baik."
];

export const finalMessage = [
  "Tidak semua doa perlu diketahui siapa yang mengucapkannya.",
  "Tidak semua kebaikan membutuhkan sebuah nama.",
  "Ada seseorang...",
  "yang hanya ingin memastikan...",
  "kamu tersenyum di ulang tahunmu.",
  "Selamat ulang tahun."
];
