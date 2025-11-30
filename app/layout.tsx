import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "一字链 - 个人数字空间",
  description: "欢迎来到一字链的个人数字空间，这里展示我的项目、技能和技术栈。",
  keywords: ["一字链", "个人网站", "全栈开发", "Next.js", "React", "TypeScript"],
  authors: [{ name: "一字链" }],
  openGraph: {
    title: "一字链 - 个人数字空间",
    description: "欢迎来到一字链的个人数字空间，这里展示我的项目和技术栈。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
