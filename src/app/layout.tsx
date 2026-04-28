import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import BackgroundFluid from "@/components/BackgroundFluid";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AIESEC | Develop Leadership",
  description: "AIESEC is the world's largest youth-led organization, facilitating a network of Cross-cultural Exchanges to enable Leadership Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased selection:bg-[var(--teal)]/30`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
          scriptProps={{ "data-cfasync": "false" }}
        >
          <BackgroundFluid />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 pt-24">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
