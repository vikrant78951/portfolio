import { Playfair } from "next/font/google";

export const playfair = Playfair({
  subsets: ["latin"],
  weight: ["400", "600", "700", "900"],
  display: "swap",
  variable: "--font-playfair",
});
