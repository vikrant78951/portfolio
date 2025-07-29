import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/src/provider/theme-provider";

import { raleway } from "@/src/fonts/raleway";

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
        </ThemeProvider>
      </body>
    </html>
  );
}
