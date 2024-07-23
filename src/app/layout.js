import { Barlow_Semi_Condensed } from "next/font/google";
import "./globals.css";

const barlow = Barlow_Semi_Condensed({ subsets: ["latin"], weight: ["600", "700"] });

export const metadata = {
  title: "Rock-Paper-Scissors",
  description: "Rock-Paper-Scissors Game.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={barlow.className}>{children}</body>
    </html>
  );
}
