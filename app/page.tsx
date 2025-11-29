"use client";
import { motion } from "framer-motion";
import Link from "next/link";
// 👇 关键：必须引入这个组件，它才会显示！
import TechStack from "@/components/TechStack"; 

export default function Home() {
  return (
    // 1. 改成 min-h-screen 防止内容截断
    <div className="min-h-screen w-full bg-black flex flex-col items-center justify-center overflow-x-hidden pt-20"> 
      
      {/* 背景动画 */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50 pointer-events-none" />

      {/* 主要内容区域 */}
      <div className="z-10 text-center px-4 mb-20 mt-20 flex-1 flex flex-col justify-center">  
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-7xl font-bold text-white mb-6"
        >
          你好，我是 <span className="text-red-500">一字链</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-neutral-400 text-lg md:text-xl max-w-lg mx-auto mb-4"
        >
          欢迎来到我的个人数字空间。
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="text-neutral-500 text-sm md:text-base max-w-lg mx-auto"
        >
          探索我的项目，了解我的技术栈
        </motion.p>

        {/* 导航按钮组 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-10"
        >
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              查看项目
            </motion.button>
          </Link>
          
          <motion.a
            href="mailto:your-email@example.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-white/20 text-white rounded-full font-medium hover:bg-white/10 transition-colors"
          >
            联系我
          </motion.a>
        </motion.div>
      </div>

      {/* 技术栈滚动展示 */}
      <div className="w-full z-10 pb-10">
        <TechStack />
      </div>

    </div>
  );
}