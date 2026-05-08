import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Der Ring des Nibelungen",
    subtitle: "瓦格纳《指环》四部曲",
    year: "2026",
    venue: "巴伐利亚国立歌剧院",
    image: "https://images.unsplash.com/photo-1654773615210-cc0e1899d934?w=1080",
    description: "深度参与 2026 版瓦格纳《指环》四部曲视觉开发与制作执行，负责舞美设计协调与技术实现。",
  },
  {
    id: 2,
    title: "Il Trittico",
    subtitle: "普契尼歌剧《三部曲》",
    year: "2023",
    venue: "维也纳国家歌剧院",
    image: "https://images.unsplash.com/photo-1762786113000-fa587fd3d69c?w=1080",
    description: "协助 Henrik Ahr 教授完成舞美设计，探索现代主义视觉语言在古典歌剧中的应用。",
  },
  {
    id: 3,
    title: "Die Zauberflöte",
    subtitle: "莫扎特《魔笛》",
    year: "2022",
    venue: "独立设计项目",
    image: "https://images.unsplash.com/photo-1774123949516-804516f53614?w=1080",
    description: "全系统独立设计，包含舞台、服装、灯光整体方案，探索极简主义舞台空间。",
  },
  {
    id: 4,
    title: "Orfeo ed Euridice",
    subtitle: "格鲁克《奥菲欧与尤丽狄茜》",
    year: "2023",
    venue: "萨尔茨堡国际戏剧节",
    image: "https://images.unsplash.com/photo-1767294274254-57367fa62236?w=1080",
    description: "协助 Christof Loy 导演团队完成舞台服装执行，融合古典与当代美学。",
  },
  {
    id: 5,
    title: "Costume Design Series",
    subtitle: "服装设计系列",
    year: "2021-2023",
    venue: "多个制作",
    image: "https://images.unsplash.com/photo-1768885560793-f44873d9b19c?w=1080",
    description: "涵盖歌剧、话剧、当代舞等多个领域的服装设计作品，体现对材质与形态的深入探索。",
  },
  {
    id: 6,
    title: "Rausch",
    subtitle: "话剧《陶醉》",
    year: "2022",
    venue: "独立设计项目",
    image: "https://images.unsplash.com/photo-1623838556905-359e1b448b21?w=1080",
    description: "话剧舞台、服装、灯光整体设计，营造沉浸式戏剧空间。",
  },
];

export default function App() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-light tracking-wide">JL</div>
          <div className="flex gap-8 text-sm font-light">
            <a href="#work" className="text-white/60 hover:text-white transition-colors">WORK</a>
            <a href="#about" className="text-white/60 hover:text-white transition-colors">ABOUT</a>
            <a href="#contact" className="text-white/60 hover:text-white transition-colors">CONTACT</a>
          </div>
        </div>
      </nav>

      {/* Decorative Grid */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }} />
      </div>

      {/* Geometric Decorations */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Top Right Triangle */}
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.1, rotate: 45 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-20 right-20 w-40 h-40 border border-white"
          style={{ transform: 'rotate(45deg)' }}
        />

        {/* Left Circle */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute top-1/3 left-10 w-32 h-32 border border-white/20 rounded-full"
        />

        {/* Bottom Triangle */}
        <div className="absolute bottom-40 right-1/4 w-0 h-0 opacity-10"
          style={{
            borderLeft: '80px solid transparent',
            borderRight: '80px solid transparent',
            borderBottom: '140px solid white',
          }}
        />

        {/* Diagonal Lines */}
        <div className="absolute top-1/4 left-1/3 w-64 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-45" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
          {/* Geometric Accents */}
          <div className="absolute top-1/4 right-12 w-24 h-24 border-2 border-white/10" />
          <div className="absolute bottom-32 left-20 w-16 h-16 border border-white/10 rotate-45" />
          <motion.div
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, delay: 1 }}
            className="absolute top-1/3 right-1/4"
          >
            <svg width="60" height="60" viewBox="0 0 60 60">
              <motion.circle
                cx="30"
                cy="30"
                r="28"
                stroke="white"
                strokeWidth="0.5"
                fill="none"
                opacity="0.2"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1.2 }}
              />
            </svg>
          </motion.div>

          <div className="max-w-6xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="absolute -left-4 top-0 w-0.5 h-full bg-gradient-to-b from-white via-white/50 to-transparent" />

              {/* Triangle decoration near name */}
              <div className="absolute -right-12 top-12 w-0 h-0 opacity-20"
                style={{
                  borderLeft: '30px solid transparent',
                  borderRight: '30px solid transparent',
                  borderBottom: '52px solid white',
                }}
              />

              <h1 className="text-7xl md:text-9xl font-light tracking-tight mb-6">
                朱佳乐
              </h1>

              <div className="flex items-center gap-6 text-2xl md:text-3xl text-white/50 mb-12 font-light">
                <span>Stage Designer</span>
                <span className="w-16 h-px bg-white/30" />
                <span className="text-lg">Munich / Shanghai</span>
              </div>

              <p className="max-w-2xl text-xl text-white/60 leading-relaxed font-light">
                舞美设计师，现供职于德国巴伐利亚国立歌剧院。
                专注于歌剧、戏剧的空间与视觉创作，探索舞台艺术的当代表达。
              </p>
            </motion.div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="min-h-screen px-6 py-32 relative">
          {/* Decorative shapes */}
          <div className="absolute top-20 right-10 w-20 h-20 border border-white/10 rotate-45" />
          <div className="absolute bottom-40 left-16 w-12 h-12 border-2 border-white/10 rounded-full" />

          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-20 relative"
            >
              {/* Small triangle accent */}
              <div className="absolute -left-8 top-0 w-0 h-0 opacity-20"
                style={{
                  borderLeft: '20px solid transparent',
                  borderRight: '20px solid transparent',
                  borderTop: '35px solid white',
                }}
              />

              <div className="flex items-center gap-6 mb-4">
                <h2 className="text-5xl md:text-6xl font-light">Selected Work</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
                <div className="w-8 h-8 border border-white/20" />
              </div>
              <p className="text-white/40 font-light">作品选集</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => setSelectedProject(project)}
                  className="group cursor-pointer relative"
                >
                  {/* Corner decorations */}
                  <div className="absolute -top-2 -left-2 w-4 h-4 border-l border-t border-white/0 group-hover:border-white/30 transition-colors duration-500 z-10" />
                  <div className="absolute -bottom-2 -right-2 w-4 h-4 border-r border-b border-white/0 group-hover:border-white/30 transition-colors duration-500 z-10" />

                  <div className="relative aspect-[3/4] overflow-hidden bg-white/5 mb-4">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="text-sm text-white/60 mb-1">{project.year}</div>
                      <div className="text-sm text-white/80">{project.venue}</div>
                    </div>
                  </div>
                  <h3 className="text-xl mb-1 font-light">{project.title}</h3>
                  <p className="text-white/50 text-sm font-light">{project.subtitle}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen px-6 py-32 bg-white/[0.02] relative">
          {/* Geometric decorations */}
          <div className="absolute top-32 left-10 w-16 h-16 border border-white/10" />
          <div className="absolute top-1/2 right-12">
            <svg width="80" height="80" viewBox="0 0 80 80">
              <polygon points="40,10 70,70 10,70" stroke="white" strokeWidth="0.5" fill="none" opacity="0.1" />
            </svg>
          </div>
          <div className="absolute bottom-20 left-1/3 w-24 h-px bg-gradient-to-r from-white/20 via-white/10 to-transparent rotate-45" />

          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-6 mb-20">
                <div className="w-6 h-6 border border-white/30" />
                <h2 className="text-5xl md:text-6xl font-light">About</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
                <div className="w-10 h-10 border border-white/10 rotate-45" />
              </div>

              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  <h3 className="text-2xl mb-6 font-light">Background</h3>
                  <div className="space-y-4 text-white/60 font-light leading-relaxed">
                    <p>
                      拥有中欧顶尖艺术院校双重教育背景（北京舞蹈学院 & 奥地利莫扎特大学），
                      现供职于世界顶尖歌剧院——德国巴伐利亚国立歌剧院。
                    </p>
                    <p>
                      具备极强的国际化审美视野与严谨的德国剧院工业化生产流程经验。
                      擅长跨国团队沟通，拥有处理大型歌剧（如瓦格纳《指环》）复杂视觉系统落地的实战经验。
                    </p>
                  </div>

                  <div className="mt-12">
                    <h4 className="text-sm text-white/40 mb-4 tracking-widest">EDUCATION</h4>
                    <div className="space-y-6">
                      <div>
                        <div className="text-white/40 text-sm mb-1">2018 - 2023</div>
                        <div className="font-light">Universität Mozarteum Salzburg</div>
                        <div className="text-white/60 text-sm">MA · 舞台、服装、电影及空间展示</div>
                      </div>
                      <div>
                        <div className="text-white/40 text-sm mb-1">2012 - 2016</div>
                        <div className="font-light">Beijing Dance Academy</div>
                        <div className="text-white/60 text-sm">BA · 舞台服装与化妆</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl mb-6 font-light">Experience</h3>
                  <div className="space-y-8">
                    <div className="relative pl-6 border-l border-white/10">
                      <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-white" />
                      <div className="text-white/40 text-sm mb-1">2024 - Present</div>
                      <div className="font-light mb-1">Bayerische Staatsoper</div>
                      <div className="text-white/60 text-sm">舞美设计助理 · 慕尼黑</div>
                    </div>
                    <div className="relative pl-6 border-l border-white/10">
                      <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-white/50" />
                      <div className="text-white/40 text-sm mb-1">2022 - 2023</div>
                      <div className="font-light mb-1">European Opera Houses & Festivals</div>
                      <div className="text-white/60 text-sm">舞美设计助理</div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h4 className="text-sm text-white/40 mb-4 tracking-widest">SKILLS</h4>
                    <div className="grid grid-cols-2 gap-6 text-sm">
                      <div>
                        <div className="text-white/60 mb-2">Technical</div>
                        <div className="space-y-1 text-white/40 font-light">
                          <div>MegaCAD, AutoCAD</div>
                          <div>Cinema 4D</div>
                          <div>ArchiCAD</div>
                        </div>
                      </div>
                      <div>
                        <div className="text-white/60 mb-2">Creative</div>
                        <div className="space-y-1 text-white/40 font-light">
                          <div>Photoshop, InDesign</div>
                          <div>Premiere, Final Cut</div>
                          <div>Costume Construction</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h4 className="text-sm text-white/40 mb-4 tracking-widest">LANGUAGES</h4>
                    <div className="flex gap-8 text-sm text-white/60 font-light">
                      <div>中文</div>
                      <div>Deutsch</div>
                      <div>English</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-[60vh] px-6 py-32 flex items-center relative">
          {/* Geometric accents */}
          <div className="absolute top-20 right-20 w-32 h-32 border border-white/10 rounded-full" />
          <div className="absolute bottom-32 left-12">
            <svg width="60" height="60" viewBox="0 0 60 60">
              <rect x="10" y="10" width="40" height="40" stroke="white" strokeWidth="0.5" fill="none" opacity="0.15" transform="rotate(45 30 30)" />
            </svg>
          </div>

          <div className="max-w-6xl mx-auto w-full">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-6 mb-16 relative">
                {/* Triangle decoration */}
                <div className="w-0 h-0 opacity-30"
                  style={{
                    borderLeft: '12px solid transparent',
                    borderRight: '12px solid transparent',
                    borderBottom: '20px solid white',
                  }}
                />
                <h2 className="text-5xl md:text-6xl font-light">Get in Touch</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <a href="mailto:zhujiale0208@icloud.com" className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group">
                    <div className="w-12 h-12 border border-white/20 group-hover:border-white/40 transition-colors flex items-center justify-center">
                      <Mail size={20} />
                    </div>
                    <div className="font-light">zhujiale0208@icloud.com</div>
                  </a>
                  <a href="tel:13002150771" className="flex items-center gap-4 text-white/60 hover:text-white transition-colors group">
                    <div className="w-12 h-12 border border-white/20 group-hover:border-white/40 transition-colors flex items-center justify-center">
                      <Phone size={20} />
                    </div>
                    <div className="font-light">+86 130 0215 0771</div>
                  </a>
                  <div className="flex items-center gap-4 text-white/60">
                    <div className="w-12 h-12 border border-white/20 flex items-center justify-center">
                      <MapPin size={20} />
                    </div>
                    <div className="font-light">上海 / München</div>
                  </div>
                </div>

                <div className="text-white/40 font-light text-sm leading-relaxed">
                  <p>
                    开放合作机会，欢迎讨论舞台设计、视觉艺术相关项目。
                    Available for collaborations in stage design, opera, theater, and visual arts projects.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-white/30 font-light">
            <div>© 2026 Zhu Jiale</div>
            <div>Stage Designer</div>
          </div>
        </footer>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-6"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl w-full bg-black border border-white/10 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="text-sm text-white/40 mb-2">{selectedProject.year} · {selectedProject.venue}</div>
                  <h3 className="text-3xl md:text-4xl font-light mb-2">{selectedProject.title}</h3>
                  <p className="text-xl text-white/60 font-light">{selectedProject.subtitle}</p>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 border border-white/20 hover:border-white/40 transition-colors flex items-center justify-center"
                >
                  <X size={20} />
                </button>
              </div>
              <p className="text-white/60 leading-relaxed font-light">
                {selectedProject.description}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}