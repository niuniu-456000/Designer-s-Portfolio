/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  ChevronLeft, 
  ChevronRight, 
  Maximize2, 
  Sparkles, 
  ArrowRight,
  Monitor,
  Video,
  Smartphone,
  Layers,
  ChevronDown
} from 'lucide-react';

interface ProjectImage {
  url: string;
  title: string;
  description: string;
}

interface ProjectData {
  id: string;
  num: string;
  title: string;
  engTitle: string;
  tagline: string;
  tags: string[];
  description: string;
  year: string;
  videoUrl?: string;
  images: ProjectImage[];
}

const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'wangshu',
    num: '01',
    title: '望舒视觉健康',
    engTitle: 'WANGSHU VISION',
    tagline: '品牌联合创始 / 保障商业链路闭环 / AIGC 创意摄影重置',
    tags: ['Brand Strategy', 'Offline Space Design', 'UI/UX Experience', 'AIGC Visual Modeling'],
    description: '作为品牌联合创始人，独立全盘主导望舒视觉健康的商业创意与设计落地。从品牌商业化心智定位、线下客户视力照护实体空间陈列，到严整的标准化 VI 品牌手册。设计渠道覆盖线上、线下全向度宣传、海报系统、产品手册以及核心在线电商零售小程序。同时首次在工作流中全面导入 AIGC 虚拟商业模特，将精美奢适感的人物摄影创制成本下调数十倍，以前沿多模态人工智能重新定义实体品牌的高阶视觉溢价。',
    year: '2026',
    videoUrl: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/WANGHSU%20TVC.mp4',
    images: [
      {
        url: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/%E6%9C%9B%E8%88%92VI.png',
        title: '望舒VI品牌视觉识别手册',
        description: '系统化的VI规范，构筑极具现代高奢感的黑白灰极致视觉秩序。'
      },
      {
        url: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/%E6%9C%9B%E8%88%92%E9%97%A8%E5%BA%97.png',
        title: '实体旗舰店空间形象设计',
        description: '极简柔体美学、流线轮廓与通透采光的物理融合，传达纯净卓越的视觉尊护体验。'
      },
      {
        url: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/wangshumendian.png',
        title: '品牌在线会员服务小程序',
        description: '以极化轻薄的卡片排版、呼吸感呼吸微拟物控件，促成极客格调 of the shopping process.'
      },
      {
        url: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/%E6%9C%9B%E8%88%92app.png',
        title: '定制化眼科诊疗与眼镜零售体验 App',
        description: '数字化视力评测、视光数据链路追溯，无缝交付行业先锋级别的医疗级服务。'
      }
    ]
  },
  {
    id: 'rmango',
    num: '02',
    title: '小芒学伴',
    engTitle: 'RMANGO',
    tagline: '软硬件融合生态 / 原创 IP 伴学潮玩 / 暖心多屏互动 system',
    tags: ['Smart Toy Design', 'Character IP Strategy', 'App Interface UI', 'Retail Launch Deck'],
    description: '小芒学伴（RMANGO）是将高科技物理伴学硬件与数字化趣味生态深度缝合的里程碑创意。主导研发了涵盖立体 IP 角色重塑、伴学机器人硬件交互 model、伴学 App 系统级卡片UI、电商品牌宣传手册，以及开箱即惊艳的全套零售体验物料。通过极具包裹感的温暖圆弧、元气色彩与儿童友好信息架构，打破机器人的冰冷感，开辟温馨治愈的多维数字化学习与亲子陪护链路。',
    year: '2025',
    images: [
      {
        url: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/%E5%B0%8F%E8%8A%92%E7%95%8C%E9%9D%A21.png',
        title: '芒学伴官网01',
        description: '圆润大气的卡牌架构与微拟物情感按钮，极其迎合孩童的触控知觉。'
      },
      {
        url: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/mango%E7%95%8C%E9%9D%A22.png',
        title: '小芒学伴官网02',
        description: '通过插画游戏式主轴、欢快勋章奖励建立自我管理正循环。'
      },
      {
        url: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/REMANGO1%20.png',
        title: 'RMANGO IP 延展推广',
        description: '极具纵深与科技感的气氛色温，烘托学伴跨时代的设计内涵。'
      },
      {
        url: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/rmango2.png',
        title: 'IP延展产品效果图。',
        description: '小芒IP家族系列推广海报demo'
      },
      {
        url: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/rmango3.png',
        title: '外销海报模版02',
        description: 'APP外销商业化BANNER模版'
      },
      {
        url: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/remango4.png',
        title: 'IP角色延展-表情包 APP辅助角色延展',
        description: '科学防滚缓冲阻尼包装和贴纸卡折，让每次开启都成为沉浸的启智仪式。'
      },
      {
        url: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/remango5.png',
        title: '外销IP海报',
        description: '对外销售的海报系列模版01'
      }
    ]
  },
  {
    id: 'tianjiu',
    num: '03',
    title: '天九数科AI赋能',
    engTitle: 'TOJOY AI TECH',
    tagline: 'AI 赋能界面设计体系 / 系统性规范建构 / 企业服务全场景效能提质',
    tags: ['Digital Product Design', 'AIGC Dashboard', 'Enterprise UI Kit', 'System Architecture'],
    description: '深度聚焦 AI 赋能的数智化产品界面设计，通过定制系统化的视觉设计规范与交互框架，实现业务流程的高效增效。项目整体设计以精密的逻辑视流与清晰的层次布局，将复杂、高密度的企业级数据形态转化为高质感的可视窗口，全方位赋能企业运营，提升集团数智服务的卓越品质与体验水准。',
    year: '2025',
    videoUrl: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/%E6%B5%8B%E5%AF%BF.mp4',
    images: [
      {
        url: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/tianjiu01.png',
        title: '天九老板云商户界面优化',
        description: '针对老板云商户端管理后台进行深度视觉重构与布局优化，精细设计清晰的账目明细与核心经营看板。'
      },
      {
        url: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/tianjiu02.png',
        title: '企业财税风险监测',
        description: '系统性整合企业财税多维风险监测及预警指标，实现智能诊断流程与合规体检的直观可视化呈现。'
      },
      {
        url: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/tianjiu03.png',
        title: '天九数科企服PC端',
        description: '通过轻量化的内容架构与精细规范的栅格布局，打通并赋能PC端企业级服务全场景高效运转工作台。'
      },
      {
        url: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/tianjiu04.png',
        title: '企业服务内外运营长图',
        description: '全景梳理内外运营链路，在整体视觉规范指引下呈现一体化系统性的企业级运营长图范例。'
      },
      {
        url: 'https://raw.githubusercontent.com/niuniu-456000/niuniu/main/%E6%B5%8B%E5%AF%BF01.png',
        title: '“测寿宝”健康小程序系统',
        description: '基于卡片式内容框架，提供健康数据深度溯源与寿期趋势动态测评小程序系统规范设计。'
      }
    ]
  }
];

export default function CommercialView() {
  // Video 1 (Wangshu)
  const [isPlayingW, setIsPlayingW] = useState<boolean>(true);
  const [isMutedW, setIsMutedW] = useState<boolean>(true);
  const [progressW, setProgressW] = useState<number>(0);
  const videoRefW = useRef<HTMLVideoElement>(null);

  // Video 2 (Tianjiu)
  const [isPlayingT, setIsPlayingT] = useState<boolean>(true);
  const [isMutedT, setIsMutedT] = useState<boolean>(true);
  const [progressT, setProgressT] = useState<number>(0);
  const videoRefT = useRef<HTMLVideoElement>(null);

  // Lightbox states
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxProject, setLightboxProject] = useState<ProjectData>(PROJECTS_DATA[0]);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);
  const [lightboxMode, setLightboxMode] = useState<'image' | 'video'>('image');
  const [lightboxVideoUrl, setLightboxVideoUrl] = useState<string>('');

  // Active Section Tracker (for sticky side navigator)
  const [activeSection, setActiveSection] = useState<string>('project-wangshu');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['project-wangshu', 'project-rmango', 'project-tianjiu'];
      let current = 'project-wangshu';
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            current = section;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Run immediately to sync initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Sync Wangshu Video
  useEffect(() => {
    const video = videoRefW.current;
    if (!video) return;
    if (isPlayingW) {
      video.play().catch(() => setIsPlayingW(false));
    } else {
      video.pause();
    }
  }, [isPlayingW]);

  useEffect(() => {
    if (videoRefW.current) {
      videoRefW.current.muted = isMutedW;
    }
  }, [isMutedW]);

  // Sync Tianjiu Video
  useEffect(() => {
    const video = videoRefT.current;
    if (!video) return;
    if (isPlayingT) {
      video.play().catch(() => setIsPlayingT(false));
    } else {
      video.pause();
    }
  }, [isPlayingT]);

  useEffect(() => {
    if (videoRefT.current) {
      videoRefT.current.muted = isMutedT;
    }
  }, [isMutedT]);

  // Handles for Wangshu Video
  const handleTimeUpdateW = () => {
    const video = videoRefW.current;
    if (!video) return;
    setProgressW((video.currentTime / (video.duration || 1)) * 100);
  };

  const handleProgressClickW = (e: MouseEvent<HTMLDivElement>) => {
    const video = videoRefW.current;
    if (!video) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * video.duration;
  };

  // Handles for Tianjiu Video
  const handleTimeUpdateT = () => {
    const video = videoRefT.current;
    if (!video) return;
    setProgressT((video.currentTime / (video.duration || 1)) * 100);
  };

  const handleProgressClickT = (e: MouseEvent<HTMLDivElement>) => {
    const video = videoRefT.current;
    if (!video) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    video.currentTime = pos * video.duration;
  };

  // Lightbox Handlers
  const handleOpenImageLightbox = (proj: ProjectData, idx: number) => {
    setLightboxProject(proj);
    setLightboxIndex(idx);
    setLightboxMode('image');
    setLightboxOpen(true);
  };

  const handleOpenVideoLightbox = (proj: ProjectData, videoUrl: string) => {
    setLightboxProject(proj);
    setLightboxVideoUrl(videoUrl);
    setLightboxMode('video');
    setLightboxOpen(true);
  };

  const handleNextMedia = () => {
    if (lightboxMode === 'video' || !lightboxProject) return;
    setLightboxIndex((prev) => (prev + 1) % lightboxProject.images.length);
  };

  const handlePrevMedia = () => {
    if (lightboxMode === 'video' || !lightboxProject) return;
    setLightboxIndex((prev) => (prev - 1 + lightboxProject.images.length) % lightboxProject.images.length);
  };

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') handleNextMedia();
      if (e.key === 'ArrowLeft') handlePrevMedia();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, lightboxMode, lightboxIndex, lightboxProject]);

  // Extract separate projects for clear inline reference
  const wangshuProj = PROJECTS_DATA[0];
  const rmangoProj = PROJECTS_DATA[1];
  const tianjiuProj = PROJECTS_DATA[2];

  return (
    <div className="w-full max-w-7xl mx-auto py-20 px-6 md:px-12 xl:pr-12 xl:pl-48 min-h-screen flex flex-col justify-start relative">
      
      {/* Floating Progressive Sidebar Index */}
      <div className="hidden xl:flex flex-col gap-6 fixed left-12 top-1/3 z-40 p-5 bg-white/40 border border-black/5 backdrop-blur-md rounded-[4px] shadow-sm text-[10px] font-mono tracking-widest text-[#000000]/60 w-36">
        <div className="text-black text-[9px] font-bold border-b border-black/5 pb-2 uppercase tracking-widest">
          PROJECTS
        </div>
        {[
          { id: 'project-wangshu', num: '01', label: 'WANGSHU' },
          { id: 'project-rmango', num: '02', label: 'RMANGO' },
          { id: 'project-tianjiu', num: '03', label: 'TIANJIU' }
        ].map((sec) => {
          const isActive = activeSection === sec.id;
          return (
            <button
              key={sec.id}
              onClick={() => {
                document.getElementById(sec.id)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
              }}
              className="flex items-center gap-3 text-left group cursor-pointer transition-all"
            >
              <span className={`transition-all duration-300 font-bold ${isActive ? 'text-black scale-110' : 'text-neutral-400 group-hover:text-neutral-700'}`}>
                {sec.num}
              </span>
              <div className="flex flex-col flex-grow">
                <span className={`text-[9px] transition-colors duration-300 ${isActive ? 'text-black font-semibold' : 'text-neutral-400 group-hover:text-neutral-700'}`}>
                  {sec.label}
                </span>
                <span className={`h-0.5 bg-black rounded-full transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-2'}`} />
              </div>
            </button>
          );
        })}
      </div>

      {/* 1. Header Area without tabs */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-black/10 pb-8 mb-16">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse"></span>
            <span className="font-mono text-[9px] md:text-[10px] tracking-[0.25em] text-[#555555] uppercase">
              Selected Commercial Designs
            </span>
          </div>
          <h2 className="font-vogue text-3xl md:text-5xl font-light text-black leading-tight">
            商业代表作 • <span className="italic">SELECTED</span>
          </h2>
        </div>
      </div>

      <div className="w-full flex flex-col gap-24">
        
        {/* ================= PROJECT 01: 望舒视觉健康 ================= */}
        <section id="project-wangshu" className="w-full flex flex-col gap-10">
          {/* Narrative Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col justify-center">
              <span className="font-mono text-[24px] font-bold text-black/15 tracking-tight leading-none block mb-2">01</span>
              <h3 className="text-2xl md:text-4xl font-sans font-semibold text-black tracking-tight mb-3">
                {wangshuProj.title} <span className="font-vogue italic font-light ml-2 text-neutral-600">{wangshuProj.engTitle}</span>
              </h3>
              <div className="text-black/60 text-xs md:text-sm font-medium tracking-wider uppercase mb-6 flex gap-2 items-center flex-wrap">
                {wangshuProj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="bg-black/5 border border-black/10 px-2.5 py-1 rounded-[4px] text-[10px] tracking-widest text-[#555555]">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="max-w-3xl">
                <p className="text-neutral-800 text-[14px] leading-[1.8] tracking-[0.12em] text-left font-sans bg-black/5 p-5 rounded-[4px] border border-black/5">
                  {wangshuProj.description}
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 bg-black/[0.03] p-6 rounded-[4px] border border-black/5 flex flex-col gap-4 font-mono text-[11px] text-neutral-500">
              <div className="flex border-b border-black/5 pb-2 justify-between">
                <span>ROLE & DELIVERY</span>
                <span className="text-black font-semibold">Brand Co-Founder</span>
              </div>
              <div className="flex border-b border-black/5 pb-2 justify-between">
                <span>YEAR OF PRODUCTION</span>
                <span className="text-black font-semibold">{wangshuProj.year}</span>
              </div>
              <div className="flex border-b border-black/5 pb-2 justify-between">
                <span>CORE PARADIGM</span>
                <span className="text-emerald-700 font-bold">AIGC Visual Modeling</span>
              </div>
              <div className="flex justify-between items-center bg-black/5 p-3 rounded-[4px] border border-black/5 mt-2">
                <span className="text-black text-[12px] flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-3 h-3 text-amber-600" /> AI Agent Match
                </span>
                <span className="text-[10.5px] text-neutral-700">Tsinghua Design MFA</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-4">
            {/* Visual Column: 4 images listed directly on page */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {wangshuProj.images.map((img, idx) => (
                  <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
                    key={idx}
                    onClick={() => handleOpenImageLightbox(wangshuProj, idx)}
                    className="group cursor-zoom-in flex flex-col"
                  >
                    <div className="aspect-video relative overflow-hidden rounded-[4px] bg-neutral-200/40 border border-black/5 shadow-sm">
                      <img 
                        src={img.url} 
                        alt={img.title} 
                        className="w-full h-full object-cover rounded-[4px] transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                        referrerPolicy="no-referrer"
                      />
                      {/* Premium Blur Hover Overlay */}
                      <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 backdrop-blur-[2.5px] transition-all duration-350 flex items-center justify-center">
                        <span className="text-white text-[9.5px] font-mono tracking-[0.25em] uppercase border border-white/20 px-3 py-1.5 rounded-[4px] bg-black/40 shadow-xl transform translate-y-2.5 group-hover:translate-y-0 transition-all duration-300">
                          Inspect Spec [ + ]
                        </span>
                      </div>
                      <span className="absolute bottom-3 left-3 bg-black/75 rounded-[4px] px-2.5 py-0.5 text-[8.5px] font-mono tracking-widest uppercase text-neutral-300">
                        Asset 0{idx + 1}
                      </span>
                    </div>

                    <div className="pt-3 pb-1 flex flex-col gap-1 flex-grow text-left items-start">
                      <h4 className="text-[#000000] text-[14px] font-semibold tracking-tight leading-snug flex items-center text-left justify-start">
                        {img.title}
                      </h4>
                      <p className="text-[#666666] text-[12px] leading-relaxed line-clamp-2 font-light text-left">
                        {img.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Column: Video TVC Stream */}
            <div className="lg:col-span-5 flex flex-col">
              <div className="flex-grow w-full relative aspect-video bg-neutral-950 rounded-[4px] overflow-hidden flex items-center justify-center group shadow-md">
                {wangshuProj.videoUrl && (
                  <video
                    ref={videoRefW}
                    src={wangshuProj.videoUrl}
                    className="w-full h-full object-cover cursor-pointer"
                    autoPlay
                    loop
                    playsInline
                    muted={isMutedW}
                    onTimeUpdate={handleTimeUpdateW}
                    onClick={() => setIsPlayingW(!isPlayingW)}
                  />
                )}

                {/* Video controls */}
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-5 pointer-events-none">
                  <div className="flex justify-between items-center">
                    <span className="text-[9px] font-mono tracking-widest bg-black/75 rounded-[4px] px-2 py-1 text-white flex items-center gap-1">
                      <Video className="w-3.5 h-3.5 text-indigo-400" /> COMMERCIAL TVC
                    </span>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        if (wangshuProj.videoUrl) {
                          handleOpenVideoLightbox(wangshuProj, wangshuProj.videoUrl);
                        }
                      }}
                      className="pointer-events-auto bg-black/75 hover:bg-black p-2.5 rounded-[4px] border border-white/10 text-white cursor-pointer"
                      title="Maximize Player"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <div className="flex items-center gap-3 bg-black/75 pointer-events-auto rounded-[4px] p-3 border border-white/10">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsPlayingW(!isPlayingW);
                      }}
                      className="text-white hover:text-indigo-300 transition-colors shrink-0 cursor-pointer"
                    >
                      {isPlayingW ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                    </button>

                    {/* Video Progress line */}
                    <div 
                      onClick={handleProgressClickW}
                      className="flex-grow h-1 bg-white/20 rounded-[4px] relative cursor-pointer"
                    >
                      <div 
                        className="h-full bg-white rounded-[4px]" 
                        style={{ width: `${progressW}%` }}
                      />
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsMutedW(!isMutedW);
                      }}
                      className="text-white hover:text-indigo-300 transition-colors shrink-0 cursor-pointer"
                    >
                      {isMutedW ? <VolumeX className="w-4 h-4 text-neutral-400" /> : <Volume2 className="w-4 h-4" />}
                    </button>
                  </div>
                </div>
              </div>
              <div className="mt-3 flex justify-between items-start text-xs font-mono text-[#666666] px-2">
                <span>© WANGSHU TVC PROD.</span>
                <span>16:9 RAW ASPECT RATIO</span>
              </div>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-black/5 my-4" />

        {/* ================= PROJECT 02: 小芒学伴 ================= */}
        <section id="project-rmango" className="w-full flex flex-col gap-10">
          {/* Narrative Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col justify-center">
              <span className="font-mono text-[24px] font-bold text-black/15 tracking-tight leading-none block mb-2">02</span>
              <h3 className="text-2xl md:text-4xl font-sans font-semibold text-black tracking-tight mb-3">
                {rmangoProj.title} <span className="font-vogue italic font-light ml-2 text-neutral-600">{rmangoProj.engTitle}</span>
              </h3>
              <div className="text-black/60 text-xs md:text-sm font-medium tracking-wider uppercase mb-6 flex gap-2 items-center flex-wrap">
                {rmangoProj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="bg-black/5 border border-black/10 px-2.5 py-1 rounded-[4px] text-[10px] tracking-widest text-[#555555]">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="max-w-3xl">
                <p className="text-neutral-800 text-[14px] leading-[1.8] tracking-[0.12em] text-left font-sans bg-black/5 p-5 rounded-[4px] border border-black/5">
                  {rmangoProj.description}
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 bg-black/[0.03] p-6 rounded-[4px] border border-black/5 flex flex-col gap-4 font-mono text-[11px] text-neutral-500">
              <div className="flex border-b border-black/5 pb-2 justify-between">
                <span>ROLE & DELIVERY</span>
                <span className="text-black font-semibold">Lead Product Designer</span>
              </div>
              <div className="flex border-b border-black/5 pb-2 justify-between">
                <span>YEAR OF PRODUCTION</span>
                <span className="text-black font-semibold">{rmangoProj.year}</span>
              </div>
              <div className="flex border-b border-black/5 pb-2 justify-between">
                <span>CORE PARADIGM</span>
                <span className="text-emerald-700 font-bold">Hardware-App Dual Ecosystem</span>
              </div>
              <div className="flex justify-between items-center bg-black/5 p-3 rounded-[4px] border border-black/5 mt-2">
                <span className="text-black text-[12px] flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-3 h-3 text-amber-600" /> User Experience Match
                </span>
                <span className="text-[10.5px] text-neutral-700">Tsinghua Design MFA</span>
              </div>
            </div>
          </div>

          {/* Grid of All Seven Assets Listed Directly */}
          <div className="w-full flex-col mt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {rmangoProj.images.map((img, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: idx * 0.05 }}
                  key={idx}
                  onClick={() => handleOpenImageLightbox(rmangoProj, idx)}
                  className="group cursor-zoom-in flex flex-col"
                >
                  <div className="aspect-video relative overflow-hidden rounded-[4px] bg-neutral-200/40 border border-black/5 shadow-sm">
                    <img 
                      src={img.url} 
                      alt={img.title} 
                      className="w-full h-full object-cover rounded-[4px] transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      referrerPolicy="no-referrer"
                    />
                    {/* Premium Blur Hover Overlay */}
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 backdrop-blur-[2.5px] transition-all duration-350 flex items-center justify-center">
                      <span className="text-white text-[9.5px] font-mono tracking-[0.25em] uppercase border border-white/20 px-3 py-1.5 rounded-[4px] bg-black/40 shadow-xl transform translate-y-2.5 group-hover:translate-y-0 transition-all duration-300">
                        Inspect Spec [ + ]
                      </span>
                    </div>
                    <span className="absolute bottom-3 left-3 bg-black/75 rounded-[4px] px-2.5 py-0.5 text-[8.5px] font-mono tracking-widest uppercase text-neutral-300">
                      Asset 0{idx + 1}
                    </span>
                  </div>

                  <div className="pt-3 pb-1 flex flex-col gap-1 flex-grow text-left items-start">
                    <h4 className="text-[#000000] text-[12px] font-normal tracking-tight leading-snug flex items-center text-left justify-start">
                      {img.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="border-t border-black/5 my-4" />

        {/* ================= PROJECT 03: 天九数科大盘赋能 ================= */}
        <section id="project-tianjiu" className="w-full flex flex-col gap-10 pb-16">
          {/* Narrative Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8 flex flex-col justify-center">
              <span className="font-mono text-[24px] font-bold text-black/15 tracking-tight leading-none block mb-2">03</span>
              <h3 className="text-2xl md:text-4xl font-sans font-semibold text-black tracking-tight mb-3">
                {tianjiuProj.title} <span className="font-vogue italic font-light ml-2 text-neutral-600">{tianjiuProj.engTitle}</span>
              </h3>
              <div className="text-black/60 text-xs md:text-sm font-medium tracking-wider uppercase mb-6 flex gap-2 items-center flex-wrap">
                {tianjiuProj.tags.map((tag, tIdx) => (
                  <span key={tIdx} className="bg-black/5 border border-black/10 px-2.5 py-1 rounded-[4px] text-[10px] tracking-widest text-[#555555]">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="max-w-3xl">
                <p className="text-neutral-800 text-[14px] leading-[1.8] tracking-[0.12em] text-left font-sans bg-black/5 p-5 rounded-[4px] border border-black/5">
                  {tianjiuProj.description}
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 bg-black/[0.03] p-6 rounded-[4px] border border-black/5 flex flex-col gap-4 font-mono text-[11px] text-neutral-500">
              <div className="flex border-b border-black/5 pb-2 justify-between">
                <span>ROLE & DELIVERY</span>
                <span className="text-black font-semibold">Chief Digital Designer</span>
              </div>
              <div className="flex border-b border-black/5 pb-2 justify-between">
                <span>YEAR OF PRODUCTION</span>
                <span className="text-black font-semibold">{tianjiuProj.year}</span>
              </div>
              <div className="flex border-b border-black/5 pb-2 justify-between">
                <span>CORE PARADIGM</span>
                <span className="text-emerald-700 font-bold">Group Enterprise AIGC Suite</span>
              </div>
              <div className="flex justify-between items-center bg-black/5 p-3 rounded-[4px] border border-black/5 mt-2">
                <span className="text-black text-[12px] flex items-center gap-1.5 font-medium">
                  <Sparkles className="w-3 h-3 text-amber-600" /> Performance & Design Match
                </span>
                <span className="text-[10.5px] text-neutral-700">Tsinghua Design MFA</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-10 mt-2">
            {/* Top Row: First 4 images in standard 2-column list layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tianjiuProj.images.slice(0, 4).map((img, idx) => (
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: idx * 0.08 }}
                  key={idx}
                  onClick={() => handleOpenImageLightbox(tianjiuProj, idx)}
                  className="group cursor-zoom-in flex flex-col"
                >
                  <div className="aspect-video relative overflow-hidden rounded-[4px] bg-neutral-200/40 border border-black/5 shadow-sm">
                    <img 
                      src={img.url} 
                      alt={img.title} 
                      className="w-full h-full object-cover rounded-[4px] transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      referrerPolicy="no-referrer"
                    />
                    {/* Premium Blur Hover Overlay */}
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 backdrop-blur-[2.5px] transition-all duration-350 flex items-center justify-center">
                      <span className="text-white text-[9.5px] font-mono tracking-[0.25em] uppercase border border-white/20 px-3 py-1.5 rounded-[4px] bg-black/40 shadow-xl transform translate-y-2.5 group-hover:translate-y-0 transition-all duration-300">
                        Inspect Spec [ + ]
                      </span>
                    </div>
                    <span className="absolute bottom-3 left-3 bg-black/75 rounded-[4px] px-2.5 py-0.5 text-[8.5px] font-mono tracking-widest uppercase text-neutral-300">
                      Asset 0{idx + 1}
                    </span>
                  </div>

                  <div className="pt-3 pb-1 flex flex-col gap-1 flex-grow text-left items-start">
                    <h4 className="text-[#000000] text-[14px] font-semibold tracking-tight leading-snug flex items-center text-left justify-start">
                      {img.title}
                    </h4>
                    <p className="text-[#666666] text-[12px] leading-relaxed line-clamp-2 font-light text-left">
                      {img.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Row: 5th image (Asset 05) and video side-by-side inside equal columns, both with 16:9 ratio */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Asset 05 */}
              {tianjiuProj.images[4] && (
                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  onClick={() => handleOpenImageLightbox(tianjiuProj, 4)}
                  className="group cursor-zoom-in flex flex-col w-full"
                >
                  <div className="aspect-video relative overflow-hidden rounded-[4px] bg-neutral-200/40 border border-black/5 shadow-sm">
                    <img 
                      src={tianjiuProj.images[4].url} 
                      alt={tianjiuProj.images[4].title} 
                      className="w-full h-full object-cover rounded-[4px] transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      referrerPolicy="no-referrer"
                    />
                    {/* Premium Blur Hover Overlay */}
                    <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 backdrop-blur-[2.5px] transition-all duration-350 flex items-center justify-center">
                      <span className="text-white text-[9.5px] font-mono tracking-[0.25em] uppercase border border-white/20 px-3 py-1.5 rounded-[4px] bg-black/40 shadow-xl transform translate-y-2.5 group-hover:translate-y-0 transition-all duration-300">
                        Inspect Spec [ + ]
                      </span>
                    </div>
                    <span className="absolute bottom-3 left-3 bg-black/75 rounded-[4px] px-2.5 py-0.5 text-[8.5px] font-mono tracking-widest uppercase text-neutral-300">
                      Asset 05
                    </span>
                  </div>

                  <div className="pt-3 pb-1 flex flex-col gap-1 flex-grow text-left items-start">
                    <h4 className="text-[#000000] text-[14px] font-semibold tracking-tight leading-snug flex items-center text-left justify-start">
                      {tianjiuProj.images[4].title}
                    </h4>
                    <p className="text-[#666666] text-[12px] leading-relaxed line-clamp-2 font-light text-left">
                      {tianjiuProj.images[4].description}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* "测寿宝" Demo video stream as 16:9 */}
              <div className="flex flex-col w-full">
                <div className="relative aspect-video bg-neutral-950 rounded-[4px] overflow-hidden flex items-center justify-center group shadow-md pages">
                  {tianjiuProj.videoUrl && (
                    <video
                      ref={videoRefT}
                      src={tianjiuProj.videoUrl}
                      className="w-full h-full object-contain bg-black cursor-pointer"
                      autoPlay
                      loop
                      playsInline
                      muted={isMutedT}
                      onTimeUpdate={handleTimeUpdateT}
                      onClick={() => setIsPlayingT(!isPlayingT)}
                    />
                  )}

                  {/* Video controls */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-5 pointer-events-none">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-mono tracking-widest bg-emerald-500 text-black font-extrabold rounded-[4px] px-3 py-1 flex items-center gap-1 shadow-md animate">
                        <Sparkles className="w-3 h-3" /> ACTIVE APPLET PREVIEW
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          if (tianjiuProj.videoUrl) {
                            handleOpenVideoLightbox(tianjiuProj, tianjiuProj.videoUrl);
                          }
                        }}
                        className="pointer-events-auto bg-black/75 hover:bg-black p-2.5 rounded-[4px] border border-white/10 text-white cursor-pointer"
                        title="Enlarge Video Stream"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="flex items-center gap-3 bg-black/75 pointer-events-auto rounded-[4px] p-3 border border-white/10">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsPlayingT(!isPlayingT);
                        }}
                        className="text-white hover:text-indigo-300 transition-colors shrink-0 cursor-pointer"
                      >
                        {isPlayingT ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>

                      <div 
                        onClick={handleProgressClickT}
                        className="flex-grow h-1 bg-white/20 rounded-[4px] relative cursor-pointer"
                      >
                        <div 
                          className="h-full bg-white rounded-[4px]" 
                          style={{ width: `${progressT}%` }}
                        />
                      </div>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setIsMutedT(!isMutedT);
                        }}
                        className="text-white hover:text-indigo-300 transition-colors shrink-0 cursor-pointer"
                      >
                        {isMutedT ? <VolumeX className="w-4 h-4 text-neutral-400" /> : <Volume2 className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                </div>
                <div className="mt-3 flex justify-between items-start text-xs font-mono text-[#666666] px-2">
                  <span>© CE SHOU BAO SYS.</span>
                  <span>16:9 ENCRYPTED FEED</span>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* 4. IMMERSIVE LIGHTBOX/EXPLORER OVERLAY */}
      <AnimatePresence>
        {lightboxOpen && (
          <div className="fixed inset-0 z-[1000] flex flex-col items-center justify-center p-4">
            
            {/* Backdrop with elegant blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.95 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightboxOpen(false)}
              className="absolute inset-0 bg-[#000000]/98 backdrop-blur-md cursor-zoom-out"
            />

            {/* Lightbox Shell content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ type: 'spring', damping: 26, stiffness: 190 }}
              className="relative w-full max-w-5xl h-[85vh] flex flex-col justify-between z-10 pointer-events-none"
            >
              
              {/* Sticky Top Bar info inside overlay */}
              <div className="flex justify-between items-center pointer-events-auto bg-neutral-950/80 p-4 rounded-[4px] border border-white/5 backdrop-blur-sm shadow-xl">
                <div>
                  <span className="font-mono text-[9px] text-[#666666] tracking-[0.2em] uppercase">
                    {lightboxProject?.engTitle} — Deliverable {lightboxMode === 'video' ? 'Video' : `0${lightboxIndex + 1}`}
                  </span>
                  <h4 className="text-white text-sm font-semibold mt-0.5">
                    {lightboxMode === 'video' ? 'Interactive Promotional TVC Showreel' : lightboxProject?.images[lightboxIndex]?.title}
                  </h4>
                </div>
                <button
                  onClick={() => setLightboxOpen(false)}
                  className="p-2 ml-4 rounded-[4px] bg-white/5 hover:bg-white/10 text-white transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Major Display Center view */}
              <div className="flex-grow flex items-center justify-center relative my-4 pointer-events-auto">
                
                {lightboxMode === 'image' && lightboxProject ? (
                  <div className="relative aspect-video w-full max-w-4xl bg-black rounded-[4px] overflow-hidden shadow-2xl group flex items-center justify-center">
                    <img
                      src={lightboxProject.images[lightboxIndex]?.url}
                      alt={lightboxProject.images[lightboxIndex]?.title}
                      className="w-full h-full object-cover pointer-events-none select-none"
                    />
                    
                    {/* Lateral Navigation buttons floating inside card */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handlePrevMedia();
                      }}
                      className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/75 hover:bg-black p-3.5 rounded-[4px] border border-white/10 text-white transition-opacity duration-300 cursor-pointer"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleNextMedia();
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/75 hover:bg-black p-3.5 rounded-[4px] border border-white/10 text-white transition-opacity duration-300 cursor-pointer"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                ) : (
                  // Full scale video
                  <div className="relative max-h-[60vh] aspect-video w-full max-w-4xl bg-black rounded-[4px] overflow-hidden shadow-2xl">
                    {lightboxVideoUrl && (
                      <video
                        src={lightboxVideoUrl}
                        className="w-full h-full object-contain"
                        controls
                        autoPlay
                        playsInline
                      />
                    )}
                  </div>
                )}
              </div>

              {/* Premium Behance-style horizontal thumbnail drawer for easy deliverable navigation */}
              {lightboxMode === 'image' && lightboxProject && (
                <div className="flex justify-center gap-2 px-6 overflow-x-auto py-3 pointer-events-auto max-w-xl mx-auto w-full border border-white/5 rounded-[4px] bg-neutral-900/60 backdrop-blur-sm shadow-xl mt-1 mb-3 scrollbar-thin">
                  {lightboxProject.images.map((img, idx) => {
                    const isSelected = idx === lightboxIndex;
                    return (
                      <button
                        key={idx}
                        onClick={() => setLightboxIndex(idx)}
                        className={`relative aspect-video w-16 md:w-20 rounded-[4px] overflow-hidden border transition-all duration-300 cursor-pointer shrink-0 ${
                          isSelected 
                            ? 'border-emerald-400 scale-105 shadow-md shadow-emerald-400/20 opacity-100' 
                            : 'border-white/10 opacity-45 hover:opacity-100 hover:border-white/30'
                        }`}
                        title={img.title}
                      >
                        <img 
                          src={img.url} 
                          alt={img.title} 
                          className="w-full h-full object-cover" 
                          referrerPolicy="no-referrer"
                        />
                      </button>
                    );
                  })}
                </div>
              )}

              {/* Bottom Metadata sheet */}
              <div className="pointer-events-auto bg-neutral-950/80 p-5 rounded-[4px] border border-white/5 backdrop-blur-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs font-sans text-neutral-300 shadow-xl">
                <p className="max-w-2xl leading-relaxed">
                  {lightboxMode === 'image' && lightboxProject
                    ? lightboxProject.images[lightboxIndex]?.description 
                    : '全面铺开的交互动态演示，支持高清帧流处理与系统闭环触觉检验。'}
                </p>
                <div className="flex gap-2">
                  <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-[4px] text-[10px] font-mono uppercase tracking-wide">
                    {lightboxProject?.year} Deliverables
                  </span>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
