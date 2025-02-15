import type { Metadata } from "next";
import localFont from "next/font/local";
import Link from "next/link";
import "../globals.css";

const geistSans = localFont({
  src: "../fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <div className="space-x-2">
            <Link href="/en">English</Link>
            <span>|</span>
            <Link href="/de">Deutsch</Link>
            <span>|</span>
            <Link href="/fr">Français</Link>
            <span>|</span>
            <Link href="/it">Italiano</Link>
            <span>|</span>
            <Link href="/es">Español</Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
