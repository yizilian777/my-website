"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "显卡价格追踪器",
    description: "基于 Python 的自动化爬虫，实时监控 Amazon 和京东的显卡价格波动。",
    tags: ["Python", "Data", "Automation"],
    color: "bg-blue-500",
  },
  {
    title: "我的个人数字空间",
    description: "使用 Next.js 和 Framer Motion 构建的高性能个人网站，具有极简美学设计。",
    tags: ["Next.js", "React", "Tailwind"],
    color: "bg-purple-500",
  },
  {
    title: "未来项目预留位",
    description: "正在构思中的创意，敬请期待...",
    tags: ["Idea", "Future"],
    color: "bg-green-500",
  },
];

export default function Projects() {
  return (
    <div className="min-h-screen w-full bg-black text-white pt-24 px-6 pb-16">
      
      {/* 返回首页按钮 */}
      <div className="max-w-4xl mx-auto mb-8">
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
          >
            <span>←</span> 返回首页
          </motion.button>
        </Link>
      </div>

      {/* 标题区域 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          我的 <span className="text-gray-500">项目</span>
        </h1>
        <p className="text-gray-400 text-lg">这里是我将想法转化为代码的实验场。</p>
      </motion.div>

      {/* 项目卡片网格 */}
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            className="group relative p-6 rounded-3xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors overflow-hidden"
          >
            {/* 卡片左侧的彩色条 */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${project.color}`} />
            
            <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-300 transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-400 mb-6 h-20">
              {project.description}
            </p>
            
            {/* 标签 */}
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-gray-300">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}