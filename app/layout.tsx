import type { Metadata } from "next";
import "./globals.css";

import { raleway } from '@/src/fonts/raleway'
import { inter } from '@/src/fonts/inter'


export const metadata: Metadata = {
  title: "Vikas Singh",
  description: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased font-helvetica ${raleway.variable} ${inter.className}`}
      >
        {children}
      </body>
    </html>
  );
}
