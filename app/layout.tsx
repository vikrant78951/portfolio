import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/src/provider/theme-provider";

import { raleway } from "@/src/fonts/raleway";
import ParticlesComponent from "@/src/components/particle/partical";
import CustomCursor from "@/src/animations/cursor";

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
          <ParticlesComponent />
          <CustomCursor />
        </ThemeProvider>
      </body>
    </html>
  );
}
