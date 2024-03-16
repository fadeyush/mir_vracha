import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.scss";

const notoSans = Noto_Sans({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "ХОБЛ",
  description: "ХОБЛ: мифы и реальность"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={notoSans.className}>{children}</body>
    </html>
  );
}
