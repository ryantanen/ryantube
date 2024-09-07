import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "@/components/SideBar";
import { cn } from "@/lib/utils";
import TopBar from "@/components/TopBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "RyanTube",
  description: "A YouTube clone built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.ico" sizes="any" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div
          className={cn(
            "grid h-screen w-full grid-rows-[130px_1fr] md:grid-cols-[50px_1fr] md:grid-rows-[70px_1fr] ",
            " lg:grid-cols-[200px_1fr] lg:grid-rows-[70px_1fr] "
          )}
        >
          <div className="col-span-full h-[70px]">
            <TopBar />
          </div>
          <div className="hidden md:block m-0">
            <Sidebar />
          </div>
          <div className="overflow-y-scroll">{children}</div>
        </div>
      </body>
    </html>
  );
}
