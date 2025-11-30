"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const socialLinks = [
  { name: "GitHub", href: "https://github.com", icon: "🐙" },
  { name: "Twitter", href: "https://twitter.com", icon: "🐦" },
  { name: "Email", href: "mailto:your-email@example.com", icon: "✉️" },
];

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-black/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* 版权信息 */}
          <div className="text-gray-400 text-sm">
            © {new Date().getFullYear()} 一字链. 保留所有权利.
          </div>

          {/* 社交媒体链接 */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="text-2xl hover:text-red-500 transition-colors"
                aria-label={link.name}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>

          {/* 导航链接 */}
          <div className="flex items-center gap-4 text-sm">
            <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
              关于
            </Link>
            <span className="text-gray-600">•</span>
            <Link href="/projects" className="text-gray-400 hover:text-white transition-colors">
              项目
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

