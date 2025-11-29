"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    // 外层容器：黑色背景，全屏居中
    <div className="h-screen w-full bg-black flex flex-col items-center justify-center overflow-hidden">
      
      {/* 动画元素 1：发光的小圆点背景 */}
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50" />

      {/* 动画元素 2：文字容器 */}
      <div className="z-10 text-center px-4">
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
          className="text-neutral-400 text-lg md:text-xl max-w-lg mx-auto"
        >
          欢迎来到我的个人数字空间。
        </motion.p>

        {/* 动画元素 3：按钮 */}
        <motion.button
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
        >
          进入
        </motion.button>
      </div>
    </div>
  );
}