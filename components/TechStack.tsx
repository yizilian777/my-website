"use client";
import { motion } from "framer-motion";

const skills = [
  "Next.js", "React", "TypeScript", "Tailwind CSS", 
  "Python", "Git", "Framer Motion", "Node.js", "Vercel"
];

export default function TechStack() {
  return (
    <div className="w-full bg-neutral-900 py-10 overflow-hidden flex flex-col items-center">
      <h2 className="text-gray-500 text-sm mb-6 tracking-widest uppercase">
        技术栈
      </h2>
      
      {/* 滚动容器，带渐隐遮罩效果 */}
      <div className="relative w-full max-w-4xl flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 20
          }}
        >
          {/* 重复两遍列表以实现无缝循环 */}
          {[...skills, ...skills].map((skill, index) => (
            <span 
              key={index} 
              className="text-2xl md:text-4xl font-bold text-gray-400 hover:text-white transition-colors cursor-default"
            >
              {skill}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
