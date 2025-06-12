import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/src/provider/theme-provider";

import { raleway } from "@/src/fonts/raleway";
import ParticlesComponent from "@/src/components/particle/partical";
import SplashCursor from "@/src/animations/splash";

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
      <body className={`antialiased  ${raleway.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <ParticlesComponent/>
          <SplashCursor/>
        </ThemeProvider>
      </body>
    </html>
  );
}
