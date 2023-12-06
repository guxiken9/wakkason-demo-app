import { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={inter.className}>
      <body>
        <header
          className={`
        h-16
        bg-transparent
        backdrop-blur-md
        flex
        fixed
        w-full
        px-6
      `}
        >
          <div
            className={`
            h-auto
            my-auto
            font-bold
            text-5xl
            tracking-tighter
          `}
          >
            Life
          </div>
          <Link
            href="/"
            className={`
              px-10
              h-auto
              my-6
              font-bold
              text-2xl
              tracking-tighter
            `}
          >
            Home
          </Link>
          <Link
            href="/message"
            className={`
          
              h-auto
              my-6
              font-bold
              text-2xl
              tracking-tighter
            `}
          >
            Message
          </Link>
        </header>
        <main className="pt-20 pb-8 min-h-screen">
          <Suspense fallback={"loading..."}></Suspense>
          {children}
        </main>
      </body>
    </html>
  );
}
