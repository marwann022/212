import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "212°F Franchise Egypt | The Extra Degree",
  description:
    "212°F connects international manufacturers and innovators with opportunities across the Gulf Region and North Africa.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
