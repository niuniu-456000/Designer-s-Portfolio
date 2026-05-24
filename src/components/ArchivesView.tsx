/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  Mail, 
  MessageSquare, 
  Copy, 
  Check, 
  Briefcase, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  GraduationCap, 
  MapPin, 
  TrendingUp, 
  ShieldCheck, 
  Atom,
  ArrowUpRight 
} from 'lucide-react';

interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  highlightMetric: string;
  highlightLabel: string;
  bullets: string[];
  techUsed: string[];
}

const CAREER_TIMELINE: ExperienceItem[] = [
  {
    id: 'tianjiu',
    company: '天九控股集团',
    role: '设计专家',
    period: '2024.07 – 至今',
    highlightMetric: '提效 80%',
    highlightLabel: '营销设计综合产出效能跃升',
    bullets: [
      '**AI-UX 商业落地**：负责数科集团旗舰级平台「企座」(PC端 + 小程序) 界面设计与交互重构，创新引入 Midjourney、Figma AI 全链路提效生态，将 AI 精准映射至实际数字资产产出中。',
      '**0-1 AI 原生产品主导**：主导内部「AI 项目助手」、「AI 会议助手」等 AIGC 产品的一体化 UI/UE 及视觉推广，助力公司实现生成式 AI 生产工具的从零到一扎实商用。',
      '**营销视觉高效降本**：全面支撑集团总部核心营销峰会活动。自研即梦、海螺、可灵的整合后期短视频生成工作流，全面替代高昂的传统外包拍摄，创意广度与资产流转速度呈指数级提升。'
    ],
    techUsed: ['Midjourney', 'Figma AI', '可灵 AI', '海螺 AI', '即梦', 'UI/UE']
  },
  {
    id: 'fuguang',
    company: '扶光望舒科技有限公司',
    role: '联合创始人 / 设计总监 (技术入股)',
    period: '2023.07 – 2024.07',
    highlightMetric: '降本 100%',
    highlightLabel: '虚拟模特全面替代传统拍摄',
    bullets: [
      '**AI + 品牌全链路搭建**：全盘主导集团旗下「望舒」、「目愉」两大微商城多端体验，利用 Midjourney 与 ComfyUI 协同建模，对线下店面空间进行同步品牌级视觉穿透设计，达成跨媒介的深度体验一致性。',
      '**AIGC 模特商业突破**：首创引入 Nanobanana（星流）生成高拟真电商虚拟形象，全面干预传统高成本真人模特拍摄链路，灵活性提升一倍并直接省去极大的传统拍摄支出。',
      '**标准化 AI 工作流品控**：起草全套 AI 赋能的包材、海报及高定 PPT 输出质量指标，建立系统性 AIGC 成果判定与合规把主策略，带领内外包团队缩减运营摩擦并提升 70% 的产能。'
    ],
    techUsed: ['ComfyUI', 'Midjourney', 'Nanobanana', '星流', '品牌 VI', 'Space Design']
  },
  {
    id: 'beiming',
    company: '北明软件',
    role: '产品部 设计组长',
    period: '2018.10 – 2023.06',
    highlightMetric: '千万级 G/B 端',
    highlightLabel: '全周期国家级监管平台交付',
    bullets: [
      '**国家级 G/B 体验担当**：主笔「预付宝监管平台」、「至信链」等国家核心 G/B 端系统的全链路体验设计与海量级巨幕数据大屏交互架构，统筹整条需求到交付的品控流水线。',
      '**设计资产高还原标准化**：拟定跨终端 B2B 体系设计白皮书与组件库规范，打通从原型映射到研发编码的高还原衔接回路，实现复杂重载系统的安全顺滑发布。',
      '**操作流向体验改版**：针对金融大屏及监管后台的数据链路深度重组布局，精简 35% 以上冗余节点，大幅加强系统可用度等级与人机易用度测试表现。'
    ],
    techUsed: ['B/G 端 UI', '数据大屏', 'Design System', '交互重组', '数据可视化']
  },
  {
    id: 'hongling',
    company: '红岭创投集团有限公司',
    role: 'IT部门 设计部负责人',
    period: '2015.10 - 2018.08',
    highlightMetric: '品牌体系重塑',
    highlightLabel: '构建统一金融品牌辨识度',
    bullets: [
      '**企业级品牌调性升维**：主掌集团全链条品牌体系，从底层 LOGO 到高维度 VI 标准件、大会 KV、大型高端画册及商务宣讲，成功提升在严肃金融领域的视觉公信力。',
      '**互联网金融多维输出**：主板红岭资本核心 App 业务线、H5 及数据管理大屏首版视觉风控面板，订立金融专线资产体验体系。',
      '**调研驱动转化提速**：下场组织多批次重点理财群体的用研，利用结构化画像优化投资链路决策点，从而提高留存。'
    ],
    techUsed: ['VI 品牌书', '金融 App', '用户研究', '视觉大屏']
  },
  {
    id: 'anbang',
    company: '安邦保险集团',
    role: '用户体验部 部门设计经理',
    period: '2012.01 - 2015.10',
    highlightMetric: '5人主力团队',
    highlightLabel: '多维保险场景体验集群统筹',
    bullets: [
      '**保险高通量终端统领**：总体分管公司保险电商、移动投保微网及大后台系统的多端 UI/UE 落地，极佳地支撑百亿级传统金融险企向数字触点化演进。',
      '**跨端多功能零售设计**：重点主导成都农商行专版客户端、天天买零售系统等多跨行业头部应用的全流程交互定义。',
      '**研发交付标准梳理**：管理 5 人核心体验部门，制定完备的高端金融组件审查及协作机制，并完成高质量上线。'
    ],
    techUsed: ['保险 H5', '农商行 App', '设计团队管理', '全链路设计']
  },
  {
    id: 'sohu',
    company: '北京搜狐公司',
    role: '搜狐房产 UED 设计中心 资深 UI 设计师',
    period: '2009.05 - 2012.01',
    highlightMetric: '门户改版升级',
    highlightLabel: '核心房产焦点网网格更新提效',
    bullets: [
      '**亿级门户子网大改版**：全面梳理搜狐焦点房产、精品二手房及租房装修等一揽子垂直频道的视觉系统更替，提炼现代响应式大内容排版。',
      '**大促电商卡位运营**：担任搜狐爱家团（团购）首期系统体验与多维度爆破运营专题方案，深度贴合市场需求提升专题转换。'
    ],
    techUsed: ['网页重组', '搜狐焦点网', '大促运营', '网格排版']
  },
  {
    id: 'zhilian',
    company: '智联招聘',
    role: '网页设计师',
    period: '2007.02 - 2009.10',
    highlightMetric: '500强高定',
    highlightLabel: '企业品牌专属招聘门户交付',
    bullets: [
      '**政企级定制体验契合**：针对跨国及特大世界 500 强高管招聘诉求定制高能门户设计，契合其独有雇主品牌。',
      '**网络平台迭代支撑**：平稳维护全站主要信息检索流改版，实现大量日常招聘需求的迅速落地。'
    ],
    techUsed: ['招聘门户', '定制设计', '高留存网页']
  }
];

const METRICS_SUMMARY = [
  { value: '19 +', label: '工作设计年限', desc: '丰富数字全平台/严肃金融/AIGC 实战积淀' },
  { value: '80 %', label: '天九控股设计提效', desc: '利用 AIGC 生态颠覆传统外包，实现创意井喷' },
  { value: '100 %', label: '虚拟模特成本替代', desc: '利用星流多模态生成省去大额拍摄真人投入' },
  { value: '70 %', label: '扶光望舒综合提效', desc: '首推 AI output 审核品控，实现高产优质输出' }
];

export default function ArchivesView() {
  const [expandedId, setExpandedId] = useState<string | null>('tianjiu');
  const [copyState, setCopyState] = useState<{ [key: string]: boolean }>({});

  const handleCopy = (text: string, key: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setCopyState({ ...copyState, [key]: true });
    setTimeout(() => {
      setCopyState(prev => ({ ...prev, [key]: false }));
    }, 2000);
  };

  return (
    <div className="w-full max-w-5xl mx-auto py-24 px-6 min-h-[90vh] flex flex-col justify-start">
      {/* 1. Header Portion with Recruiters' Favorite Profile Outline */}
      <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-16 border-b border-black/10 pb-12">
        <div className="text-left max-w-2xl">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-mono text-xs tracking-[0.2em] text-[#666666] uppercase">PROFESSIONAL DOSSIER</span>
          </div>
          
          <h1 className="font-sans text-4xl md:text-5xl font-semibold text-black leading-tight tracking-tight">
            牛志超 <span className="text-xl md:text-2xl font-light text-neutral-500 font-serif italic ml-2">Zhichao Niu</span>
          </h1>
          
          <h2 className="text-neutral-700 font-mono text-sm tracking-widest uppercase mt-3 font-semibold text-left">
            资深 AI 设计专家 & 设计总监 / Senior AI Design Expert & Creative Director
          </h2>
          
          <p className="text-neutral-500 text-xs md:text-sm mt-5 tracking-[0.06em] leading-relaxed text-left text-neutral-600">
            <strong>19 年顶尖平台设计沉淀（清华美院 MFA、天九、安邦、搜狐）</strong>。
            深谙 UI/UE、品牌搭建及前沿 AIGC（Midjourney、Stable Diffusion/ComfyUI、即梦、可灵、海螺）的商业变现。
            擅长将 AIGC 全链路融入创意流水线，实现<strong>降本 100%</strong>（虚拟模特代真人）与<strong>提效 80%</strong>，
            是以商业成效、流程提效与跨职能高还原交付为核心指向的高段位设计领军者。
          </p>

          {/* Core Labels badges */}
          <div className="flex flex-wrap gap-2 mt-6">
            {['清华美院 MFA', '19年资深底蕴', 'AIGC 流程增能', 'G/B端与C端大师', 'UX 决策驱动'].map((tag) => (
              <span key={tag} className="font-mono text-[9px] bg-black/5 text-[#444444] px-2.5 py-1 rounded-[3px] font-semibold uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 2. Beautiful Recruitment Actionable Cards */}
        <div className="w-full md:w-80 bg-white/40 border border-black/10 backdrop-blur-md rounded-[8px] p-6 shadow-sm flex flex-col gap-4 text-left">
          <h3 className="font-mono text-xs font-bold text-black tracking-widest uppercase border-b border-black/5 pb-2">
            RECRUITER ACTION / 快速联络
          </h3>
          
          {/* Phone */}
          <div 
            onClick={(e) => handleCopy('18611728073', 'phone', e)}
            className="group flex justify-between items-center p-2.5 rounded-[4px] bg-white/50 border border-black/5 hover:border-black/25 transition-all text-neutral-800 cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <Phone className="w-3.5 h-3.5 text-neutral-600" />
              <div className="flex flex-col">
                <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest">Phone / 电话</span>
                <span className="text-xs font-mono font-bold">18611728073</span>
              </div>
            </div>
            <button className="text-neutral-400 hover:text-black transition-colors" aria-label="Copy phone number">
              {copyState['phone'] ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 group-hover:scale-105 transition-transform" />}
            </button>
          </div>

          {/* WeChat */}
          <div 
            onClick={(e) => handleCopy('niuniu456000', 'wechat', e)}
            className="group flex justify-between items-center p-2.5 rounded-[4px] bg-white/50 border border-black/5 hover:border-black/25 transition-all text-neutral-800 cursor-pointer"
          >
            <div className="flex items-center gap-2.5">
              <MessageSquare className="w-3.5 h-3.5 text-neutral-600" />
              <div className="flex flex-col">
                <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest">WeChat / 微信</span>
                <span className="text-xs font-mono font-bold">niuniu456000</span>
              </div>
            </div>
            <button className="text-neutral-400 hover:text-black transition-colors" aria-label="Copy WeChat ID">
              {copyState['wechat'] ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5 group-hover:scale-105 transition-transform" />}
            </button>
          </div>

          {/* Email */}
          <a 
            href="mailto:niuniu456000@gmail.com"
            className="group flex justify-between items-center p-2.5 rounded-[4px] bg-white/50 border border-black/5 hover:border-black/25 transition-all text-neutral-800"
          >
            <div className="flex items-center gap-2.5">
              <Mail className="w-3.5 h-3.5 text-neutral-600" />
              <div className="flex flex-col">
                <span className="text-[9px] font-mono text-neutral-400 uppercase tracking-widest">Email / 邮箱</span>
                <span className="text-xs font-mono font-bold">niuniu456000@gmail.com</span>
              </div>
            </div>
            <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
          </a>
        </div>
      </div>

      {/* 3. Executive Metrics Highlights (Fast Reading) */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
        {METRICS_SUMMARY.map((metric, mIdx) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: mIdx * 0.1 }}
            className="p-5 bg-white/40 border border-black/5 rounded-[6px] flex flex-col items-start text-left shadow-sm justify-between gap-2"
          >
            <div className="flex flex-col">
              <span className="font-mono text-2xl md:text-3xl font-bold text-black tracking-tight flex items-baseline gap-1">
                {metric.value.split(' ')[0]}
                <span className="text-sm font-semibold text-emerald-500">{metric.value.split(' ')[1]}</span>
              </span>
              <span className="font-mono text-[9px] md:text-[10px] text-neutral-500 uppercase tracking-widest font-bold mt-1">
                {metric.label}
              </span>
            </div>
            <p className="text-[11px] text-[#666666] leading-normal font-light">
              {metric.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* 4. Strengths & Workflow Matrix */}
      <div className="mb-20">
        <div className="flex items-center gap-2 mb-8">
          <Atom className="w-4 h-4 text-emerald-500 animate-[spin_8s_linear_infinite]" />
          <h3 className="font-mono text-xs font-bold text-black tracking-[0.2em] uppercase">
            AIGC & DESIGN CAPABILITIES BOARD / AIGC 提效及设计流
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {/* Capability list 1 */}
          <div className="p-6 bg-white/40 border border-black/5 rounded-[6px] shadow-sm">
            <div className="flex items-center gap-2 mb-4 border-b border-black/5 pb-3">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <h4 className="font-sans font-medium text-sm text-[#111111]">生成式 AI / AIGC 落地</h4>
            </div>
            <ul className="space-y-2 text-xs text-neutral-600 font-light leading-relaxed">
              <li>• <strong className="font-medium text-black">全案图像定制</strong>: 高效编排 Midjourney / ComfyUI 完成电商模特与空间造型。</li>
              <li>• <strong className="font-medium text-black">多模态创意流</strong>: Kling, 海螺及即梦高级流。替代昂贵拍摄，效率提升 80%。</li>
              <li>• <strong className="font-medium text-black">AI 体系标准制</strong>: 精益把控 AI 内容生成合格线，缩减外包品控损耗。</li>
            </ul>
          </div>

          {/* Capability list 2 */}
          <div className="p-6 bg-white/40 border border-black/5 rounded-[6px] shadow-sm">
            <div className="flex items-center gap-2 mb-4 border-b border-black/5 pb-3">
              <TrendingUp className="w-4 h-4 text-emerald-500" />
              <h4 className="font-sans font-medium text-sm text-[#111111]">UI/UE 用户体验体系</h4>
            </div>
            <ul className="space-y-2 text-xs text-neutral-600 font-light leading-relaxed">
              <li>• <strong className="font-medium text-black">B端/G端/C端多场景</strong>: 兼收至信链、安邦移动及房产焦点网的多维业务。</li>
              <li>• <strong className="font-medium text-black">数据大屏核心体验</strong>: 极致简化数据流向，动效逻辑闭环，操作转化极佳。</li>
              <li>• <strong className="font-medium text-black">体验工程拉通</strong>: 熟稔 Figma-Vite 原型规范及开发流契合，强还原上线。</li>
            </ul>
          </div>

          {/* Capability list 3 */}
          <div className="p-6 bg-white/40 border border-black/5 rounded-[6px] shadow-sm">
            <div className="flex items-center gap-2 mb-4 border-b border-black/5 pb-3">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <h4 className="font-sans font-medium text-sm text-[#111111]">卓越管理与品牌经营</h4>
            </div>
            <ul className="space-y-2 text-xs text-neutral-600 font-light leading-relaxed">
              <li>• <strong className="font-medium text-black">高产能团队领导力</strong>: 曾统筹 5 人核能设计团队，跨国 500 强专属。</li>
              <li>• <strong className="font-medium text-black">全矩阵 VI 视觉建制</strong>: 全生命周期统合 LOGO、提案及会议场景规范体系。</li>
              <li>• <strong className="font-medium text-black">商战降本先锋</strong>: 精算人力/外包拍摄损耗比，为企业实现大额盈损平衡。</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 5. Deep Detail Vertical Carrer Timeline */}
      <div className="mb-14">
        <div className="flex items-center gap-2 mb-8">
          <Briefcase className="w-4 h-4 text-[#CDD2D5]" />
          <h3 className="font-mono text-xs font-bold text-black tracking-[0.2em] uppercase">
            CAREER EXPERIENCE TIMELINE / 工作经历及核心实绩
          </h3>
        </div>

        {/* Dynamic Accordion list of experience */}
        <div className="flex flex-col gap-4">
          {CAREER_TIMELINE.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setExpandedId(isExpanded ? null : item.id)}
                className={`border rounded-[6px] transition-all duration-300 text-left overflow-hidden relative cursor-pointer ${
                  isExpanded
                    ? 'bg-black text-white border-transparent shadow-md'
                    : 'bg-white/40 border-black/5 hover:border-black/15 text-black'
                }`}
                id={`job-milestone-${item.id}`}
              >
                {/* Accordion header brief row */}
                <div className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 font-sans">
                  <div className="flex items-start md:items-center gap-4 flex-grow">
                    <div className={`p-2.5 rounded-[4px] shrink-0 ${
                      isExpanded ? 'bg-white/10' : 'bg-black/5 border border-black/5'
                    }`}>
                      <Briefcase className={`w-4 h-4 ${isExpanded ? 'text-emerald-400' : 'text-[#666666]'}`} />
                    </div>

                    <div className="flex flex-col">
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <h4 className={`text-base md:text-lg font-bold ${isExpanded ? 'text-white' : 'text-neutral-800'}`}>
                          {item.company}
                        </h4>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-[4px] border ${
                          isExpanded ? 'bg-white/10 border-white/10 text-neutral-300' : 'bg-black/5 border-black/10 text-[#666666]'
                        }`}>
                          {item.role}
                        </span>
                      </div>
                      
                      {/* Period */}
                      <span className="text-xs font-mono text-neutral-400 mt-1">{item.period}</span>
                    </div>
                  </div>

                  {/* Highlights Metric section */}
                  <div className="flex items-center gap-4 self-start md:self-center pr-2">
                    <div className="text-right">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
                        {item.highlightMetric}
                      </span>
                      <span className={`text-[11px] font-sans font-light hidden sm:block ${isExpanded ? 'text-neutral-300' : 'text-neutral-500'}`}>
                        {item.highlightLabel}
                      </span>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-neutral-400 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#888888] shrink-0" />
                    )}
                  </div>
                </div>

                {/* Sub Expanded details block */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="border-t border-white/5 bg-[#09090B] px-6 py-5 flex flex-col gap-6"
                      onClick={(e) => e.stopPropagation()} // Stop bubble trigger
                    >
                      <div className="flex flex-col gap-3">
                        <span className="text-[9px] uppercase font-mono tracking-widest text-emerald-400 font-bold">工作内容与成就 / KEY ACCOMPLISHMENTS:</span>
                        <div className="space-y-4 text-xs font-light tracking-wide text-neutral-200 leading-relaxed md:ml-1">
                          {item.bullets.map((bullet, bIdx) => {
                            // Render bullet points nicely, handling markdown bold tags manually
                            const parts = bullet.split('**');
                            return (
                              <div key={bIdx} className="flex gap-2.5 items-start">
                                <span className="text-emerald-400 text-xs mt-0.5">▪</span>
                                <p className="text-left leading-relaxed">
                                  {parts.map((p, pIdx) => (
                                    pIdx % 2 === 1 ? (
                                      <strong key={pIdx} className="font-bold text-white bg-white/5 px-1 py-0.5 rounded-[2px] border border-white/5 inline-block mr-0.5">
                                        {p}
                                      </strong>
                                    ) : p
                                  ))}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Tech stack badges on this job */}
                      <div className="border-t border-white/5 pt-4 flex flex-col gap-2">
                        <span className="text-[9px] uppercase font-mono tracking-widest text-[#CDD2D5] font-semibold">所用工具 & 专业领域:</span>
                        <div className="flex flex-wrap gap-1.5 mt-1">
                          {item.techUsed.map((tech) => (
                            <span key={tech} className="bg-white/5 border border-white/10 font-mono text-[9px] text-[#DDDDDD] px-2 py-0.5 rounded-[3px] uppercase tracking-wider">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>

      {/* 6. Professional Educational/Academic Background Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 text-left">
        {/* Education */}
        <div className="bg-white/40 border border-black/5 p-6 rounded-[6px] shadow-sm flex flex-col justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-black/5 rounded-[4px] border border-black/5 text-[#333333]">
              <GraduationCap className="w-4 h-4 text-neutral-800" />
            </div>
            <div>
              <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 font-bold">Academic Background / 教育背景</span>
              <h4 className="text-base text-black font-semibold mt-0.5">清华大学美术学院 (Tsinghua MFA)</h4>
            </div>
          </div>
          <p className="text-xs text-neutral-600 font-light leading-relaxed">
            硕士学位 (Artistic & Multi-modal design direction)。
            系统探索数字化人机物理、设计美学。
            艺术与科技的多维交错让 AIGC 从概念设想到工业化高效率流落地奠定了不可多得的学术功底。
          </p>
        </div>

        {/* Commitment */}
        <div className="bg-white/40 border border-black/5 p-6 rounded-[6px] shadow-sm flex flex-col justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-black/5 rounded-[4px] border border-black/5 text-[#333333]">
              <ShieldCheck className="w-4 h-4 text-neutral-800" />
            </div>
            <div>
              <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 font-bold">Professional Attitude / 设计与执行理念</span>
              <h4 className="text-base text-black font-semibold mt-0.5">艺术思维，工业级交付</h4>
            </div>
          </div>
          <p className="text-xs text-neutral-600 font-light leading-relaxed">
            拒绝盲目的 AIGC 图像堆砌，始终秉持「以业务指标跃迁、研发高还原流、综合成本优化」为皈依的设计工程逻辑，
            为企业在 AI 科技浪潮下赢得真正的业务竞争突破。
          </p>
        </div>
      </div>

      {/* 7. Action CTA Footer Banner */}
      <div className="bg-white/50 border border-black/10 p-6 rounded-[8px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mt-6">
        <div className="text-left">
          <h4 className="text-black text-sm font-semibold tracking-wide">Looking for a Design Director or Senior AI-Design Generalist?</h4>
          <p className="text-[11px] text-neutral-600 font-light mt-1 leading-normal max-w-xl">
            牛志超兼备丰富的传统大体量数字产品架构底蕴与前沿多模态 AIGC 工具的顶尖商业渗透，随时可以切入团队并进行全方位提效。期待您的正式会谈或电话邀请。
          </p>
        </div>
        <a 
          href="mailto:niuniu456000@gmail.com"
          className="bg-black hover:bg-neutral-800 text-white font-mono text-xs font-semibold px-5 py-3 rounded-[4px] transition-colors flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-emerald-500 hover:scale-[1.01] active:scale-95 transition-transform"
        >
          <span>Send Mail Offer</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
