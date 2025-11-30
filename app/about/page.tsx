"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const skills = [
  { category: "前端", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "后端", items: ["Python", "Node.js", "Git"] },
  { category: "工具", items: ["Framer Motion", "Vercel", "VS Code"] },
];

const experiences = [
  {
    title: "全栈开发者",
    period: "2024 - 至今",
    description: "专注于构建现代化的 Web 应用，热爱将创意转化为代码。",
  },
  {
    title: "项目实践",
    period: "持续学习",
    description: "通过实际项目不断学习和提升技术能力。",
  },
];

export default function About() {
  return (
    <div className="min-h-screen w-full bg-black text-white pt-24 px-6 pb-16">
      <div className="max-w-4xl mx-auto">

        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            关于 <span className="text-gray-500">我</span>
          </h1>
          <p className="text-gray-400 text-lg">
            了解我的背景、技能和经历
          </p>
        </motion.div>

        {/* 个人介绍 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <div className="p-6 rounded-3xl border border-white/10 bg-white/5">
            <h2 className="text-2xl font-bold mb-4 text-red-500">简介</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              你好，我是一字链。我是一名全栈开发者，专注于构建美观且功能强大的 Web 应用。
              我热爱编程，享受将想法转化为现实的过程。
            </p>
            <p className="text-gray-300 leading-relaxed">
              在我的数字空间中，你可以找到我的项目作品、技术栈，以及我对技术的思考。
              欢迎探索，也欢迎与我交流！
            </p>
          </div>
        </motion.section>

        {/* 技能 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-bold mb-6 text-red-500">技能</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="p-6 rounded-3xl border border-white/10 bg-white/5"
              >
                <h3 className="text-xl font-bold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-mono px-3 py-1 rounded-full bg-white/10 text-gray-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 经历 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold mb-6 text-red-500">经历</h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="p-6 rounded-3xl border border-white/10 bg-white/5 relative pl-8"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-red-500 rounded-l-3xl" />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold">{exp.title}</h3>
                  <span className="text-gray-400 text-sm">{exp.period}</span>
                </div>
                <p className="text-gray-300">{exp.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* 联系按钮 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-16 text-center"
        >
          <Link href="mailto:your-email@example.com">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-colors"
            >
              联系我
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

