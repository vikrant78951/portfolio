import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/src/provider/theme-provider";

import { raleway } from "@/src/fonts/raleway";
import { inter } from "@/src/fonts/inter";
import { playfair } from "@/src/fonts/playfair";
import { manrope } from "@/src/fonts/manrope";

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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased font-helvetica ${raleway.variable} ${playfair.variable} ${manrope.variable} ${inter.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
