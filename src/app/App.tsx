import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, Mail, Phone, MapPin, X } from "lucide-react";

type Language = "zh" | "en";

type LocalizedText = Record<Language, string>;

type Project = {
  id: number;
  title: string;
  subtitle: LocalizedText;
  year: string;
  venue: LocalizedText;
  image: string;
  images?: string[];
  description: LocalizedText;
};

const tranquillaGalleryImages = [
  "/tranquilla/01.jpg",
  "/tranquilla/02.jpg",
  "/tranquilla/03.jpg",
  "/tranquilla/04.jpg",
  "/tranquilla/05.jpg",
  "/tranquilla/06.jpg",
  "/tranquilla/07.jpg",
  "/tranquilla/08.jpg",
  "/tranquilla/09.jpg",
  "/tranquilla/10.jpg",
];

const unterweltGalleryImages = [
  "/unterwelt/01.jpg",
  "/unterwelt/02.jpg",
  "/unterwelt/03.jpg",
  "/unterwelt/04.jpg",
  "/unterwelt/05.jpg",
  "/unterwelt/06.jpg",
  "/unterwelt/07.jpg",
  "/unterwelt/08.jpg",
];

const panicGalleryImages = [
  "/panic-attacks/01.jpg",
  "/panic-attacks/02.jpg",
];

const rauschGalleryImages = [
  "/rausch/01.jpg",
  "/rausch/02.jpg",
  "/rausch/03.jpg",
  "/rausch/04.jpg",
  "/rausch/05.jpg",
  "/rausch/06.jpg",
];

const zauberGalleryImages = [
  "/zauber/01.jpg",
];

const xingHanYunYiGalleryImages = [
  "/xing-han-yun-yi/01.jpg",
  "/xing-han-yun-yi/02.jpg",
  "/xing-han-yun-yi/03.jpg",
];

const chaYuFanHouGalleryImages = [
  "/cha-yu-fan-hou/01.jpg",
  "/cha-yu-fan-hou/02.jpg",
  "/cha-yu-fan-hou/03.jpg",
  "/cha-yu-fan-hou/04.jpg",
];

const hongGaoLiangGalleryImages = [
  "/hong-gao-liang/01.jpg",
  "/hong-gao-liang/02.jpg",
  "/hong-gao-liang/03.jpg",
];

const projects: Project[] = [
  {
    id: 1,
    title: "Tranquilla Trampeltreu / Der Lindwurm und der Schmetterling",
    subtitle: {
      zh: "Wilfried Hiller / Michael Ende 儿童音乐会",
      en: "Children's concert by Wilfried Hiller / Michael Ende",
    },
    year: "2025",
    venue: {
      zh: "巴伐利亚国立歌剧院 · Bergson Kunstkraftwerk",
      en: "Bavarian State Opera · Bergson Kunstkraftwerk",
    },
    image: tranquillaGalleryImages[0],
    images: tranquillaGalleryImages,
    description: {
      zh: "Bayerische Staatsoper Kind&Co 儿童音乐会，面向 5 岁以上观众，时长约 60 分钟、无中场休息。作品由巴伐利亚国家管弦乐团与国立歌剧院歌唱家讲述两则 Michael Ende 的动物寓言，音乐由 Wilfried Hiller 创作。导演 Catharina von Bülow，音乐指导 Rafaela Seywald；朱佳乐负责道具设计。",
      en: "A Bayerische Staatsoper Kind&Co children's concert for audiences aged 5 and above, with a running time of about 60 minutes and no interval. The Bavarian State Orchestra and singers from the State Opera tell two animal fables by Michael Ende, set to music by Wilfried Hiller. Directed by Catharina von Bülow and conducted by Rafaela Seywald; Jiale Zhu is credited with prop design.",
    },
  },
  {
    id: 2,
    title: "Orpheus in der Unterwelt",
    subtitle: {
      zh: "作品集项目",
      en: "Portfolio work",
    },
    year: "Selected Work",
    venue: {
      zh: "舞台与服装设计",
      en: "Stage and costume design",
    },
    image: unterweltGalleryImages[0],
    images: unterweltGalleryImages,
    description: {
      zh: "Orpheus in der Unterwelt 作品图集，展示舞台、服装与整体视觉设计。",
      en: "Portfolio documentation for Orpheus in der Unterwelt, presenting stage, costume, and visual design work.",
    },
  },
  {
    id: 3,
    title: "Panic:Attacks",
    subtitle: {
      zh: "作品集项目",
      en: "Portfolio work",
    },
    year: "Selected Work",
    venue: {
      zh: "舞台与服装设计",
      en: "Stage and costume design",
    },
    image: panicGalleryImages[0],
    images: panicGalleryImages,
    description: {
      zh: "Panic:Attacks 作品图集，展示舞台、服装与整体视觉设计。",
      en: "Portfolio documentation for Panic:Attacks, presenting stage, costume, and visual design work.",
    },
  },
  {
    id: 4,
    title: "Rausch",
    subtitle: {
      zh: "作品集项目",
      en: "Portfolio work",
    },
    year: "Selected Work",
    venue: {
      zh: "舞台与服装设计",
      en: "Stage and costume design",
    },
    image: rauschGalleryImages[0],
    images: rauschGalleryImages,
    description: {
      zh: "Rausch 作品图集，展示舞台、服装与整体视觉设计。",
      en: "Portfolio documentation for Rausch, presenting stage, costume, and visual design work.",
    },
  },
  {
    id: 5,
    title: "Die Zauberflote",
    subtitle: {
      zh: "作品集项目",
      en: "Portfolio work",
    },
    year: "Selected Work",
    venue: {
      zh: "舞台与服装设计",
      en: "Stage and costume design",
    },
    image: zauberGalleryImages[0],
    images: zauberGalleryImages,
    description: {
      zh: "Die Zauberflote 作品图集，展示舞台、服装与整体视觉设计。",
      en: "Portfolio documentation for Die Zauberflote, presenting stage, costume, and visual design work.",
    },
  },
  {
    id: 6,
    title: "Xing Han Yun Yi",
    subtitle: {
      zh: "作品集项目",
      en: "Portfolio work",
    },
    year: "Selected Work",
    venue: {
      zh: "舞台与服装设计",
      en: "Stage and costume design",
    },
    image: xingHanYunYiGalleryImages[0],
    images: xingHanYunYiGalleryImages,
    description: {
      zh: "Xing Han Yun Yi 作品图集，展示舞台、服装与整体视觉设计。",
      en: "Portfolio documentation for Xing Han Yun Yi, presenting stage, costume, and visual design work.",
    },
  },
  {
    id: 7,
    title: "Cha Yu Fan Hou",
    subtitle: {
      zh: "作品集项目",
      en: "Portfolio work",
    },
    year: "Selected Work",
    venue: {
      zh: "舞台与服装设计",
      en: "Stage and costume design",
    },
    image: chaYuFanHouGalleryImages[0],
    images: chaYuFanHouGalleryImages,
    description: {
      zh: "Cha Yu Fan Hou 作品图集，展示舞台、服装与整体视觉设计。",
      en: "Portfolio documentation for Cha Yu Fan Hou, presenting stage, costume, and visual design work.",
    },
  },
  {
    id: 8,
    title: "Hong Gao Liang",
    subtitle: {
      zh: "作品集项目",
      en: "Portfolio work",
    },
    year: "Selected Work",
    venue: {
      zh: "舞台与服装设计",
      en: "Stage and costume design",
    },
    image: hongGaoLiangGalleryImages[0],
    images: hongGaoLiangGalleryImages,
    description: {
      zh: "Hong Gao Liang 作品图集，展示舞台、服装与整体视觉设计。",
      en: "Portfolio documentation for Hong Gao Liang, presenting stage, costume, and visual design work.",
    },
  },
];

const content = {
  zh: {
    nav: {
      work: "作品",
      about: "关于",
      contact: "联系",
    },
    hero: {
      name: "朱佳乐",
      role: "舞台和服装设计师",
      location: "慕尼黑 / 上海",
      intro: [
        "舞台和服装设计师，现供职于德国巴伐利亚国立歌剧院。",
        "专注于歌剧、戏剧的空间与视觉创作，探索舞台艺术的当代表达。",
      ],
    },
    work: {
      title: "作品选集",
      subtitle: "Selected Work",
    },
    about: {
      title: "关于",
      backgroundTitle: "背景",
      paragraphs: [
        "拥有中欧顶尖艺术院校双重教育背景（北京舞蹈学院 & 奥地利莫扎特大学），现供职于世界顶尖歌剧院 - 德国巴伐利亚国立歌剧院。",
        "具备国际化审美视野与严谨的德国剧院工业化生产流程经验。擅长跨国团队沟通，拥有处理大型歌剧复杂视觉系统落地的实战经验。",
      ],
      educationTitle: "教育背景",
      education: [
        {
          years: "2018 - 2023",
          school: "Universitat Mozarteum Salzburg",
          degree: "MA · 舞台、服装、电影及空间展示",
        },
        {
          years: "2012 - 2016",
          school: "Beijing Dance Academy",
          degree: "BA · 舞台服装与化妆",
        },
      ],
      experienceTitle: "经历",
      experience: [
        {
          years: "2024 - Present",
          place: "Bayerische Staatsoper",
          role: "舞台和服装设计助理 · 慕尼黑",
        },
        {
          years: "2022 - 2023",
          place: "European Opera Houses & Festivals",
          role: "舞台和服装设计助理",
        },
      ],
      skillsTitle: "技能",
      technical: "技术",
      creative: "创作",
      languagesTitle: "语言",
      languages: ["中文", "Deutsch", "English"],
    },
    contact: {
      title: "联系",
      copy: "开放合作机会，欢迎讨论舞台设计、服装设计、歌剧、戏剧与视觉艺术相关项目。",
    },
    footerRole: "舞台和服装设计师",
    closeProject: "关闭项目详情",
    previousImage: "上一张图片",
    nextImage: "下一张图片",
  },
  en: {
    nav: {
      work: "WORK",
      about: "ABOUT",
      contact: "CONTACT",
    },
    hero: {
      name: "Zhu Jiale",
      role: "Stage and Costume Designer",
      location: "Munich / Shanghai",
      intro: [
        "Stage and costume designer currently working at the Bavarian State Opera in Germany.",
        "Focused on spatial and visual creation for opera and theater, exploring contemporary expressions of stage art.",
      ],
    },
    work: {
      title: "Selected Work",
      subtitle: "作品选集",
    },
    about: {
      title: "About",
      backgroundTitle: "Background",
      paragraphs: [
        "Educated across leading art institutions in China and Europe, including Beijing Dance Academy and Universitat Mozarteum Salzburg, Zhu Jiale currently works at the Bavarian State Opera.",
        "Her practice combines an international visual perspective with hands-on experience in rigorous German theater production workflows, especially for large-scale opera and complex visual systems.",
      ],
      educationTitle: "EDUCATION",
      education: [
        {
          years: "2018 - 2023",
          school: "Universitat Mozarteum Salzburg",
          degree: "MA · Stage, costume, film, and exhibition architecture",
        },
        {
          years: "2012 - 2016",
          school: "Beijing Dance Academy",
          degree: "BA · Stage costume and makeup design",
        },
      ],
      experienceTitle: "Experience",
      experience: [
        {
          years: "2024 - Present",
          place: "Bayerische Staatsoper",
          role: "Assistant Stage and Costume Designer · Munich",
        },
        {
          years: "2022 - 2023",
          place: "European Opera Houses & Festivals",
          role: "Assistant Stage and Costume Designer",
        },
      ],
      skillsTitle: "SKILLS",
      technical: "Technical",
      creative: "Creative",
      languagesTitle: "LANGUAGES",
      languages: ["Chinese", "Deutsch", "English"],
    },
    contact: {
      title: "Get in Touch",
      copy: "Available for collaborations in stage design, costume design, opera, theater, and visual arts projects.",
    },
    footerRole: "Stage and Costume Designer",
    closeProject: "Close project details",
    previousImage: "Previous image",
    nextImage: "Next image",
  },
} satisfies Record<Language, unknown>;

const technicalSkills = ["MegaCAD, AutoCAD", "Cinema 4D", "ArchiCAD"];
const creativeSkills = ["Photoshop, InDesign", "Premiere, Final Cut", "Costume Construction"];

export default function App() {
  const [language, setLanguage] = useState<Language>("en");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const t = content[language];
  const selectedProjectImages = selectedProject
    ? selectedProject.images?.length ? selectedProject.images : [selectedProject.image]
    : [];
  const currentProjectImage = selectedProjectImages[currentImageIndex] ?? selectedProject?.image ?? "";

  useEffect(() => {
    if (selectedProjectImages.length <= 1) return;

    const timer = window.setInterval(() => {
      setCurrentImageIndex((current) => (current + 1) % selectedProjectImages.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [selectedProjectImages.length]);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const showPreviousProjectImage = () => {
    if (selectedProjectImages.length <= 1) return;
    setCurrentImageIndex((current) => (
      current - 1 + selectedProjectImages.length
    ) % selectedProjectImages.length);
  };

  const showNextProjectImage = () => {
    if (selectedProjectImages.length <= 1) return;
    setCurrentImageIndex((current) => (current + 1) % selectedProjectImages.length);
  };

  return (
    <div className="min-h-screen bg-black text-white" lang={language === "zh" ? "zh-CN" : "en"}>
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center gap-4">
          <div className="text-xl font-light tracking-wide shrink-0">JL</div>
          <div className="flex items-center gap-4 md:gap-8 text-xs md:text-sm font-light">
            <div className="hidden sm:flex gap-5 md:gap-8">
              <a href="#work" className="text-white/60 hover:text-white transition-colors">{t.nav.work}</a>
              <a href="#about" className="text-white/60 hover:text-white transition-colors">{t.nav.about}</a>
              <a href="#contact" className="text-white/60 hover:text-white transition-colors">{t.nav.contact}</a>
            </div>

            <div className="flex border border-white/20">
              {(["zh", "en"] as const).map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={language === option}
                  onClick={() => setLanguage(option)}
                  className={`px-3 py-1.5 transition-colors ${
                    language === option
                      ? "bg-white text-black"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {option === "zh" ? "中文" : "EN"}
                </button>
              ))}
            </div>
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
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.1, rotate: 45 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-20 right-20 w-40 h-40 border border-white"
          style={{ transform: 'rotate(45deg)' }}
        />

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute top-1/3 left-10 w-32 h-32 border border-white/20 rounded-full"
        />

        <div className="absolute bottom-40 right-1/4 w-0 h-0 opacity-10"
          style={{
            borderLeft: '80px solid transparent',
            borderRight: '80px solid transparent',
            borderBottom: '140px solid white',
          }}
        />

        <div className="absolute top-1/4 left-1/3 w-64 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-45" />
        <div className="absolute bottom-1/3 right-1/4 w-48 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent -rotate-45" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
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

              <div className="absolute -right-12 top-12 w-0 h-0 opacity-20"
                style={{
                  borderLeft: '30px solid transparent',
                  borderRight: '30px solid transparent',
                  borderBottom: '52px solid white',
                }}
              />

              <h1 className="text-7xl md:text-9xl font-light tracking-tight mb-6">
                {t.hero.name}
              </h1>

              <div className="flex flex-wrap items-center gap-4 md:gap-6 text-2xl md:text-3xl text-white/50 mb-12 font-light">
                <span>{t.hero.role}</span>
                <span className="w-16 h-px bg-white/30" />
                <span className="text-lg">{t.hero.location}</span>
              </div>

              <p className="max-w-2xl text-xl text-white/60 leading-relaxed font-light">
                {t.hero.intro.map((line) => (
                  <span key={line} className="block">{line}</span>
                ))}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Work Section */}
        <section id="work" className="min-h-screen px-6 py-32 relative">
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
              <div className="absolute -left-8 top-0 w-0 h-0 opacity-20"
                style={{
                  borderLeft: '20px solid transparent',
                  borderRight: '20px solid transparent',
                  borderTop: '35px solid white',
                }}
              />

              <div className="flex items-center gap-6 mb-4">
                <h2 className="text-5xl md:text-6xl font-light">{t.work.title}</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
                <div className="w-8 h-8 border border-white/20" />
              </div>
              <p className="text-white/40 font-light">{t.work.subtitle}</p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  onClick={() => openProject(project)}
                  className="group cursor-pointer relative"
                >
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
                      <div className="text-sm text-white/80">{project.venue[language]}</div>
                    </div>
                  </div>
                  <h3 className="text-xl mb-1 font-light">{project.title}</h3>
                  <p className="text-white/50 text-sm font-light">{project.subtitle[language]}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="min-h-screen px-6 py-32 bg-white/[0.02] relative">
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
                <h2 className="text-5xl md:text-6xl font-light">{t.about.title}</h2>
                <div className="flex-1 h-px bg-gradient-to-r from-white/20 to-transparent" />
                <div className="w-10 h-10 border border-white/10 rotate-45" />
              </div>

              <div className="grid md:grid-cols-2 gap-16">
                <div>
                  <h3 className="text-2xl mb-6 font-light">{t.about.backgroundTitle}</h3>
                  <div className="space-y-4 text-white/60 font-light leading-relaxed">
                    {t.about.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  <div className="mt-12">
                    <h4 className="text-sm text-white/40 mb-4 tracking-widest">{t.about.educationTitle}</h4>
                    <div className="space-y-6">
                      {t.about.education.map((item) => (
                        <div key={item.years}>
                          <div className="text-white/40 text-sm mb-1">{item.years}</div>
                          <div className="font-light">{item.school}</div>
                          <div className="text-white/60 text-sm">{item.degree}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-2xl mb-6 font-light">{t.about.experienceTitle}</h3>
                  <div className="space-y-8">
                    {t.about.experience.map((item, index) => (
                      <div key={item.years} className="relative pl-6 border-l border-white/10">
                        <div className={`absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full ${index === 0 ? "bg-white" : "bg-white/50"}`} />
                        <div className="text-white/40 text-sm mb-1">{item.years}</div>
                        <div className="font-light mb-1">{item.place}</div>
                        <div className="text-white/60 text-sm">{item.role}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-12">
                    <h4 className="text-sm text-white/40 mb-4 tracking-widest">{t.about.skillsTitle}</h4>
                    <div className="grid grid-cols-2 gap-6 text-sm">
                      <div>
                        <div className="text-white/60 mb-2">{t.about.technical}</div>
                        <div className="space-y-1 text-white/40 font-light">
                          {technicalSkills.map((skill) => (
                            <div key={skill}>{skill}</div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <div className="text-white/60 mb-2">{t.about.creative}</div>
                        <div className="space-y-1 text-white/40 font-light">
                          {creativeSkills.map((skill) => (
                            <div key={skill}>{skill}</div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-12">
                    <h4 className="text-sm text-white/40 mb-4 tracking-widest">{t.about.languagesTitle}</h4>
                    <div className="flex gap-8 text-sm text-white/60 font-light">
                      {t.about.languages.map((item) => (
                        <div key={item}>{item}</div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-[60vh] px-6 py-32 flex items-center relative">
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
                <div className="w-0 h-0 opacity-30"
                  style={{
                    borderLeft: '12px solid transparent',
                    borderRight: '12px solid transparent',
                    borderBottom: '20px solid white',
                  }}
                />
                <h2 className="text-5xl md:text-6xl font-light">{t.contact.title}</h2>
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
                    <div className="font-light">{language === "zh" ? "上海 / 慕尼黑" : "Shanghai / Munich"}</div>
                  </div>
                </div>

                <div className="text-white/40 font-light text-sm leading-relaxed">
                  <p>{t.contact.copy}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-12 border-t border-white/10">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm text-white/30 font-light">
            <div>© 2026 Zhu Jiale</div>
            <div>{t.footerRole}</div>
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
            <div className="relative aspect-[16/9] overflow-hidden bg-white/5">
              <img
                src={currentProjectImage}
                alt={selectedProject.title}
                className="w-full h-full object-contain"
              />

              {selectedProjectImages.length > 1 && (
                <>
                  <button
                    type="button"
                    aria-label={t.previousImage}
                    onClick={showPreviousProjectImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 border border-white/25 bg-black/45 hover:bg-white hover:text-black transition-colors flex items-center justify-center"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    type="button"
                    aria-label={t.nextImage}
                    onClick={showNextProjectImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 border border-white/25 bg-black/45 hover:bg-white hover:text-black transition-colors flex items-center justify-center"
                  >
                    <ChevronRight size={22} />
                  </button>
                  <div className="absolute left-6 right-6 bottom-5 flex items-center justify-between gap-4">
                    <div className="text-xs text-white/80 bg-black/45 px-3 py-1">
                      {String(currentImageIndex + 1).padStart(2, "0")} / {String(selectedProjectImages.length).padStart(2, "0")}
                    </div>
                    <div className="flex gap-2">
                      {selectedProjectImages.map((image, index) => (
                        <button
                          key={image}
                          type="button"
                          aria-label={`${index + 1}`}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`h-1.5 transition-all ${
                            index === currentImageIndex ? "w-8 bg-white" : "w-3 bg-white/40 hover:bg-white/70"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
            <div className="p-8 md:p-12">
              <div className="flex justify-between items-start mb-6 gap-6">
                <div>
                  <div className="text-sm text-white/40 mb-2">{selectedProject.year} · {selectedProject.venue[language]}</div>
                  <h3 className="text-3xl md:text-4xl font-light mb-2">{selectedProject.title}</h3>
                  <p className="text-xl text-white/60 font-light">{selectedProject.subtitle[language]}</p>
                </div>
                <button
                  type="button"
                  aria-label={t.closeProject}
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 shrink-0 border border-white/20 hover:border-white/40 transition-colors flex items-center justify-center"
                >
                  <X size={20} />
                </button>
              </div>
              <p className="text-white/60 leading-relaxed font-light">
                {selectedProject.description[language]}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
