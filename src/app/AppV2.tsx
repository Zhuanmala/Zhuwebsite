import { useEffect, useMemo, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  X,
} from "lucide-react";

type Language = "en" | "zh";

type LocalizedText = Record<Language, string>;

type Project = {
  id: number;
  title: string;
  subtitle: LocalizedText;
  year: string;
  venue: LocalizedText;
  credit: LocalizedText;
  description: LocalizedText;
  image: string;
  images?: string[];
  source?: string;
};

const tranquillaImages = [
  "https://www.in-muenchen.de/wp-content/uploads/2025/05/fe477bf-013320-e9ad7f2db87df252959d935ca886f144dc3288fd-tranquilawebsite-programm-header-1920x10802.webp",
  "https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?w=1600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1523374228107-6e44bd2b524e?w=1600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1503095396549-807759245b35?w=1600&auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=1600&auto=format&fit=crop&q=80",
];

const projects: Project[] = [
  {
    id: 1,
    title: "Tranquilla Trampeltreu / Der Lindwurm und der Schmetterling",
    subtitle: {
      en: "Kind&Co children's concert by Wilfried Hiller / Michael Ende",
      zh: "Wilfried Hiller / Michael Ende 儿童音乐会",
    },
    year: "2025",
    venue: {
      en: "Bavarian State Opera · Bergson Kunstkraftwerk",
      zh: "巴伐利亚国立歌剧院 · Bergson Kunstkraftwerk",
    },
    credit: {
      en: "Set and visual design · Jiale Zhu",
      zh: "舞台与视觉设计 · 朱佳乐",
    },
    description: {
      en: "A Bayerische Staatsoper Kind&Co concert for audiences aged 5 and above. The Bavarian State Orchestra and singers from the State Opera tell two animal fables by Michael Ende, set to music by Wilfried Hiller. The production runs about 60 minutes without an interval, with musical direction by Rafaela Seywald and direction by Catharina von Bülow.",
      zh: "巴伐利亚国立歌剧院 Kind&Co 儿童音乐会，面向 5 岁以上观众，时长约 60 分钟且无中场休息。巴伐利亚国家管弦乐团与国立歌剧院歌唱演员讲述 Michael Ende 的两则动物寓言，由 Wilfried Hiller 作曲，Rafaela Seywald 担任音乐指导，Catharina von Bülow 执导。",
    },
    image: tranquillaImages[0],
    images: tranquillaImages,
    source:
      "https://www.staatsoper.de/stuecke/tranquilla-trampeltreu-der-lindwurm-und-der-schmetterling-1",
  },
  {
    id: 2,
    title: "Il Trittico",
    subtitle: {
      en: "Puccini's opera triptych",
      zh: "普契尼歌剧《三部曲》",
    },
    year: "2023",
    venue: {
      en: "Vienna State Opera",
      zh: "维也纳国家歌剧院",
    },
    credit: {
      en: "Assistant stage design",
      zh: "舞台设计助理",
    },
    description: {
      en: "Assisted Professor Henrik Ahr in completing the stage design, exploring how modernist visual language can inhabit classical opera.",
      zh: "协助 Henrik Ahr 教授完成舞美设计，探索现代主义视觉语言在古典歌剧中的应用。",
    },
    image:
      "https://images.unsplash.com/photo-1762786113000-fa587fd3d69c?w=1080&auto=format&fit=crop&q=80",
  },
  {
    id: 3,
    title: "Die Zauberflöte",
    subtitle: {
      en: "Mozart's The Magic Flute",
      zh: "莫扎特《魔笛》",
    },
    year: "2022",
    venue: {
      en: "Independent design project",
      zh: "独立设计项目",
    },
    credit: {
      en: "Stage, costume and light concept",
      zh: "舞台、服装与灯光方案",
    },
    description: {
      en: "Developed an independent design system spanning stage, costume, and lighting, using minimal spatial language as the central study.",
      zh: "全系统独立设计，包含舞台、服装、灯光整体方案，探索极简主义舞台空间。",
    },
    image:
      "https://images.unsplash.com/photo-1774123949516-804516f53614?w=1080&auto=format&fit=crop&q=80",
  },
  {
    id: 4,
    title: "Orfeo ed Euridice",
    subtitle: {
      en: "Gluck's Orfeo ed Euridice",
      zh: "格鲁克《奥菲欧与尤丽狄茜》",
    },
    year: "2023",
    venue: {
      en: "Salzburg International Theater Festival",
      zh: "萨尔茨堡国际戏剧节",
    },
    credit: {
      en: "Stage and costume execution",
      zh: "舞台与服装执行",
    },
    description: {
      en: "Supported Christof Loy's directing team in stage and costume execution, balancing classical references with contemporary aesthetics.",
      zh: "协助 Christof Loy 导演团队完成舞台服装执行，融合古典与当代美学。",
    },
    image:
      "https://images.unsplash.com/photo-1767294274254-57367fa62236?w=1080&auto=format&fit=crop&q=80",
  },
  {
    id: 5,
    title: "Costume Design Series",
    subtitle: {
      en: "Selected costume works",
      zh: "服装设计系列",
    },
    year: "2021-2023",
    venue: {
      en: "Selected productions",
      zh: "多个制作",
    },
    credit: {
      en: "Costume design",
      zh: "服装设计",
    },
    description: {
      en: "A series of costume works across opera, theater, and contemporary dance, shaped by close research into material, silhouette, and movement.",
      zh: "涵盖歌剧、话剧、当代舞等多个领域的服装设计作品，体现对材质、轮廓与身体动作的持续研究。",
    },
    image:
      "https://images.unsplash.com/photo-1768885560793-f44873d9b19c?w=1080&auto=format&fit=crop&q=80",
  },
  {
    id: 6,
    title: "Rausch",
    subtitle: {
      en: "Theater work",
      zh: "话剧作品",
    },
    year: "2022",
    venue: {
      en: "Independent design project",
      zh: "独立设计项目",
    },
    credit: {
      en: "Stage, costume and light design",
      zh: "舞台、服装与灯光设计",
    },
    description: {
      en: "Created the overall stage, costume, and lighting concept for an immersive theatrical environment.",
      zh: "完成话剧舞台、服装、灯光整体设计，营造沉浸式戏剧空间。",
    },
    image:
      "https://images.unsplash.com/photo-1623838556905-359e1b448b21?w=1080&auto=format&fit=crop&q=80",
  },
];

const copy = {
  en: {
    nav: ["Work", "About", "Contact"],
    name: "Jiale Zhu",
    role: "Stage and Costume Designer",
    location: "Munich / Shanghai",
    hero:
      "Stage and costume designer currently working with the Bavarian State Opera in Germany, creating visual worlds for opera, theater, and performance.",
    selectedWork: "Selected Work",
    selectedWorkKicker: "Portfolio",
    viewProject: "Open project",
    aboutTitle: "About",
    about:
      "Jiale Zhu studied costume and make-up design in Beijing and completed stage and costume design, film, and exhibition architecture at Universität Mozarteum Salzburg. Her practice connects precise theatrical craft with a contemporary sense of space, movement, and image.",
    experienceTitle: "Experience",
    experience: [
      ["2024 - Present", "Bayerische Staatsoper", "Assistant Stage and Costume Designer"],
      ["2022 - 2023", "European opera houses and festivals", "Stage and costume assistant"],
    ],
    skillsTitle: "Focus",
    skills: ["Stage design", "Costume design", "Opera production", "Visual research"],
    contactTitle: "Contact",
    contact:
      "Available for collaborations in stage design, costume design, opera, theater, and visual art projects.",
    previous: "Previous image",
    next: "Next image",
    close: "Close project",
    source: "Source",
  },
  zh: {
    nav: ["作品", "关于", "联系"],
    name: "朱佳乐",
    role: "舞台和服装设计师",
    location: "慕尼黑 / 上海",
    hero:
      "舞台和服装设计师，现与德国巴伐利亚国立歌剧院合作，为歌剧、戏剧与表演创作具有空间感和叙事性的视觉世界。",
    selectedWork: "作品选集",
    selectedWorkKicker: "Portfolio",
    viewProject: "打开项目",
    aboutTitle: "关于",
    about:
      "朱佳乐在北京学习服装与化妆设计，随后于奥地利萨尔茨堡莫扎特大学完成舞台与服装设计、电影及展览建筑方向学习。她的创作结合严谨的剧场工艺、当代空间意识、身体动作与视觉叙事。",
    experienceTitle: "经历",
    experience: [
      ["2024 - 至今", "Bayerische Staatsoper", "舞台和服装设计助理"],
      ["2022 - 2023", "欧洲歌剧院与艺术节", "舞台与服装设计助理"],
    ],
    skillsTitle: "方向",
    skills: ["舞台设计", "服装设计", "歌剧制作", "视觉研究"],
    contactTitle: "联系",
    contact: "开放舞台设计、服装设计、歌剧、戏剧与视觉艺术相关项目合作。",
    previous: "上一张图片",
    next: "下一张图片",
    close: "关闭项目",
    source: "资料来源",
  },
} satisfies Record<Language, Record<string, unknown>>;

const contact = {
  email: "houjian0712@icloud.com",
  phone: "+49 152 3878 6588",
};

export default function AppV2() {
  const [language, setLanguage] = useState<Language>("en");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImage, setCurrentImage] = useState(0);
  const t = copy[language] as typeof copy.en;
  const selectedImages = useMemo(
    () => selectedProject?.images ?? (selectedProject ? [selectedProject.image] : []),
    [selectedProject],
  );

  useEffect(() => {
    if (selectedImages.length <= 1) return;

    const timer = window.setInterval(() => {
      setCurrentImage((index) => (index + 1) % selectedImages.length);
    }, 4200);

    return () => window.clearInterval(timer);
  }, [selectedImages.length]);

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImage(0);
  };

  const showPrevious = () => {
    setCurrentImage((index) => (index - 1 + selectedImages.length) % selectedImages.length);
  };

  const showNext = () => {
    setCurrentImage((index) => (index + 1) % selectedImages.length);
  };

  return (
    <div className="min-h-screen bg-neutral-950 text-white" lang={language === "zh" ? "zh-CN" : "en"}>
      <nav className="fixed inset-x-0 top-0 z-40 border-b border-white/10 bg-neutral-950/82 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-8">
          <a href="#home" className="text-xl font-light tracking-[0.18em]" aria-label="Jiale Zhu">
            JL
          </a>

          <div className="hidden items-center gap-8 text-sm uppercase tracking-[0.16em] text-white/62 md:flex">
            <a className="transition hover:text-white" href="#work">
              {t.nav[0]}
            </a>
            <a className="transition hover:text-white" href="#about">
              {t.nav[1]}
            </a>
            <a className="transition hover:text-white" href="#contact">
              {t.nav[2]}
            </a>
          </div>

          <div className="flex items-center border border-white/15 text-sm">
            {(["en", "zh"] as Language[]).map((option) => (
              <button
                aria-pressed={language === option}
                className={`px-3 py-1.5 transition ${
                  language === option ? "bg-white text-black" : "text-white/55 hover:text-white"
                }`}
                key={option}
                onClick={() => setLanguage(option)}
                type="button"
              >
                {option === "en" ? "EN" : "中文"}
              </button>
            ))}
          </div>
        </div>
      </nav>

      <main id="home">
        <section className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-5 pb-16 pt-28 md:grid-cols-[1.12fr_0.88fr] md:px-8 md:pt-24">
          <div>
            <p className="mb-7 text-sm uppercase tracking-[0.28em] text-white/45">{t.role}</p>
            <h1 className="max-w-5xl text-6xl font-light leading-[0.95] tracking-normal md:text-8xl">
              {t.name}
            </h1>
            <p className="mt-8 max-w-2xl text-xl font-light leading-relaxed text-white/72 md:text-2xl">
              {t.hero}
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5 text-sm uppercase tracking-[0.16em] text-white/48">
              <span>{t.location}</span>
              <span className="h-px w-12 bg-white/25" />
              <a className="transition hover:text-white" href="#work">
                {t.selectedWork}
              </a>
            </div>
          </div>

          <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-white/[0.03]">
            <img
              alt="Tranquilla Trampeltreu production visual"
              className="h-full w-full object-cover"
              src={tranquillaImages[0]}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-xs uppercase tracking-[0.22em] text-white/55">Featured work</p>
              <p className="mt-2 text-2xl font-light leading-tight">
                Tranquilla Trampeltreu / Der Lindwurm und der Schmetterling
              </p>
            </div>
          </div>
        </section>

        <section id="work" className="border-t border-white/10 py-24">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-white/45">
                  {t.selectedWorkKicker}
                </p>
                <h2 className="mt-3 text-4xl font-light md:text-6xl">{t.selectedWork}</h2>
              </div>
              <p className="max-w-xl text-sm leading-relaxed text-white/45">
                {language === "en"
                  ? "A concise selection of opera, theater, stage, and costume work."
                  : "歌剧、戏剧、舞台与服装方向的作品精选。"}
              </p>
            </div>

            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project) => (
                <button
                  className="group text-left"
                  key={project.id}
                  onClick={() => openProject(project)}
                  type="button"
                >
                  <div className="relative aspect-[4/5] overflow-hidden border border-white/10 bg-white/[0.03]">
                    <img
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
                      loading="lazy"
                      src={project.image}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/78 via-black/12 to-transparent opacity-80 transition group-hover:opacity-95" />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <div className="mb-3 flex items-center justify-between gap-4 text-xs uppercase tracking-[0.18em] text-white/58">
                        <span>{project.year}</span>
                        <span>{t.viewProject}</span>
                      </div>
                      <h3 className="text-2xl font-light leading-tight">{project.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-white/62">
                        {project.subtitle[language]}
                      </p>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="border-t border-white/10 py-24">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 md:grid-cols-[0.75fr_1.25fr] md:px-8">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-white/45">{t.aboutTitle}</p>
              <h2 className="mt-3 text-4xl font-light md:text-6xl">{t.role}</h2>
            </div>
            <div>
              <p className="max-w-4xl text-xl font-light leading-relaxed text-white/70">
                {t.about}
              </p>

              <div className="mt-14 grid gap-10 md:grid-cols-2">
                <div>
                  <h3 className="mb-5 text-sm uppercase tracking-[0.22em] text-white/45">
                    {t.experienceTitle}
                  </h3>
                  <div className="space-y-5">
                    {t.experience.map(([years, place, role]) => (
                      <div className="border-t border-white/10 pt-5" key={years}>
                        <p className="text-sm text-white/42">{years}</p>
                        <p className="mt-1 text-lg font-light">{place}</p>
                        <p className="text-sm text-white/55">{role}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="mb-5 text-sm uppercase tracking-[0.22em] text-white/45">
                    {t.skillsTitle}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {t.skills.map((skill) => (
                      <div className="border border-white/10 px-4 py-3 text-sm text-white/70" key={skill}>
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-white/10 py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[1fr_1fr] md:px-8">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-white/45">{t.contactTitle}</p>
              <h2 className="mt-3 text-4xl font-light md:text-6xl">Let&apos;s Work</h2>
              <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-white/66">
                {t.contact}
              </p>
            </div>

            <div className="space-y-5 text-white/72">
              <a className="flex items-center gap-4 transition hover:text-white" href={`mailto:${contact.email}`}>
                <Mail size={20} />
                <span>{contact.email}</span>
              </a>
              <a className="flex items-center gap-4 transition hover:text-white" href={`tel:${contact.phone.replace(/\s/g, "")}`}>
                <Phone size={20} />
                <span>{contact.phone}</span>
              </a>
              <div className="flex items-center gap-4">
                <MapPin size={20} />
                <span>{t.location}</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 text-sm text-white/38 md:flex-row md:px-8">
          <span>© 2026 Jiale Zhu</span>
          <span>{t.role}</span>
        </div>
      </footer>

      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/94 p-4 backdrop-blur-sm md:p-8"
          onClick={() => setSelectedProject(null)}
          role="presentation"
        >
          <div
            className="max-h-[92vh] w-full max-w-6xl overflow-auto border border-white/12 bg-neutral-950"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selectedProject.title}
          >
            <div className="relative aspect-[16/10] min-h-[280px] bg-black md:aspect-[16/8]">
              <img
                alt={selectedProject.title}
                className="h-full w-full object-cover"
                src={selectedImages[currentImage] ?? selectedProject.image}
              />

              {selectedImages.length > 1 && (
                <>
                  <button
                    aria-label={t.previous}
                    className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/45 text-white backdrop-blur transition hover:bg-white hover:text-black"
                    onClick={showPrevious}
                    type="button"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    aria-label={t.next}
                    className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-white/30 bg-black/45 text-white backdrop-blur transition hover:bg-white hover:text-black"
                    onClick={showNext}
                    type="button"
                  >
                    <ChevronRight size={22} />
                  </button>

                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-4">
                    <span className="bg-black/50 px-3 py-1 text-xs text-white/80 backdrop-blur">
                      {String(currentImage + 1).padStart(2, "0")} /{" "}
                      {String(selectedImages.length).padStart(2, "0")}
                    </span>
                    <div className="flex gap-2">
                      {selectedImages.map((image, index) => (
                        <button
                          aria-label={`${index + 1}`}
                          className={`h-2.5 w-2.5 rounded-full transition ${
                            currentImage === index ? "bg-white" : "bg-white/35 hover:bg-white/65"
                          }`}
                          key={image}
                          onClick={() => setCurrentImage(index)}
                          type="button"
                        />
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="grid gap-8 p-6 md:grid-cols-[0.82fr_1.18fr] md:p-9">
              <div>
                <p className="text-sm uppercase tracking-[0.22em] text-white/42">
                  {selectedProject.year} · {selectedProject.venue[language]}
                </p>
                <h3 className="mt-3 text-3xl font-light leading-tight md:text-5xl">
                  {selectedProject.title}
                </h3>
                <p className="mt-4 text-lg font-light text-white/65">
                  {selectedProject.subtitle[language]}
                </p>
                <p className="mt-4 text-sm uppercase tracking-[0.16em] text-white/48">
                  {selectedProject.credit[language]}
                </p>
              </div>

              <div>
                <div className="flex justify-end">
                  <button
                    aria-label={t.close}
                    className="flex h-10 w-10 items-center justify-center border border-white/20 transition hover:border-white/50 hover:bg-white hover:text-black"
                    onClick={() => setSelectedProject(null)}
                    type="button"
                  >
                    <X size={20} />
                  </button>
                </div>
                <p className="mt-8 text-base font-light leading-relaxed text-white/68 md:text-lg">
                  {selectedProject.description[language]}
                </p>
                {selectedProject.source && (
                  <a
                    className="mt-6 inline-flex items-center gap-2 text-sm uppercase tracking-[0.16em] text-white/50 transition hover:text-white"
                    href={selectedProject.source}
                    rel="noreferrer"
                    target="_blank"
                  >
                    {t.source}
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
