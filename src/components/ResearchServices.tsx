import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  FileText,
  Search,
  BookOpen,
  BarChart3,
  GraduationCap,
  Sparkles,
  ChevronRight,
  Award,
  Zap,
  CheckCircle2,
  ShieldCheck,
  BotOff,
  Lock,
  FileCheck2,
  Image as ImageIcon,
  LayoutDashboard
} from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const ResearchServices: React.FC = () => {
  const { content } = useContent();
  const [activeTab, setActiveTab] = useState<'types' | 'services' | 'guarantees'>('types');
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const typeIcons = [FileText, Search, BookOpen, BarChart3];
  const guaranteeIcons = [BotOff, Lock, FileCheck2, ImageIcon, LayoutDashboard];
  const guaranteeGradients = [
    'from-emerald-400 to-teal-500',
    'from-cyan-400 to-blue-500',
    'from-pink-400 to-rose-500',
    'from-amber-400 to-orange-500',
    'from-purple-400 to-indigo-500'
  ];
  const guaranteeGlows = [
    'from-emerald-500/20 to-teal-500/5',
    'from-cyan-500/20 to-blue-500/5',
    'from-pink-500/20 to-rose-500/5',
    'from-amber-500/20 to-orange-500/5',
    'from-purple-500/20 to-indigo-500/5'
  ];

  return (
    <section className="w-full py-16 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-pink-300 text-xs font-mono font-medium mb-4 backdrop-blur-md"
          >
            <Award className="w-3.5 h-3.5 text-pink-400" />
            <span>Academic Excellence & Support</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Research Solutions &{' '}
            <span className="bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Postgraduate Services
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed"
          >
            End-to-end guidance for university researchers, PhD scholars, and clinical authors.
          </motion.p>

          {/* Navigation Pill Toggle */}
          <div className="mt-8 flex justify-center">
            <div className="p-1.5 rounded-2xl bg-neutral-900/80 border border-white/10 backdrop-blur-xl flex items-center gap-2 shadow-2xl">
              <button
                onClick={() => setActiveTab('types')}
                className={`relative px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeTab === 'types'
                    ? 'text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {activeTab === 'types' && (
                  <motion.div
                    layoutId="activeTabBadge"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg shadow-pink-500/25"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <FileText className="w-4 h-4" />
                  Research Types
                </span>
              </button>

              <button
                onClick={() => setActiveTab('services')}
                className={`relative px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeTab === 'services'
                    ? 'text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {activeTab === 'services' && (
                  <motion.div
                    layoutId="activeTabBadge"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg shadow-pink-500/25"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4" />
                  Postgraduate Services
                </span>
              </button>

              <button
                onClick={() => setActiveTab('guarantees')}
                className={`relative px-5 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                  activeTab === 'guarantees'
                    ? 'text-white'
                    : 'text-neutral-400 hover:text-white'
                }`}
              >
                {activeTab === 'guarantees' && (
                  <motion.div
                    layoutId="activeTabBadge"
                    className="absolute inset-0 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg shadow-pink-500/25"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Zap className="w-4 h-4 text-amber-400" />
                  Features & Guarantees
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* TAB 1: RESEARCH TYPES */}
        {activeTab === 'types' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {content.researchTypes.map((type, index) => {
              const IconComponent = typeIcons[index % typeIcons.length];

              return (
                <motion.div
                  key={type.id || index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group relative rounded-3xl p-6 sm:p-8 bg-neutral-900/60 border border-white/10 hover:border-pink-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl group-hover:bg-pink-500/20 transition-all pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-pink-500/20 to-purple-500/20 border border-pink-500/30 text-pink-400 group-hover:scale-110 transition-transform">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-pink-300">
                        {type.tag}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-pink-300 transition-colors">
                      {type.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {type.description}
                    </p>

                    <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5">
                      {type.highlights.map((item, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2.5 text-xs text-neutral-300">
                          <CheckCircle2 className="w-4 h-4 text-pink-400 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-neutral-400 group-hover:text-pink-300">
                    <span>Explore Methodology Support</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* TAB 2: POSTGRADUATE SERVICES */}
        {activeTab === 'services' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="space-y-4"
          >
            {content.postgraduateServices.map((service, index) => {
              const isExpanded = selectedService === index;

              return (
                <motion.div
                  key={service.id || index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="rounded-2xl bg-neutral-900/60 border border-white/10 hover:border-pink-500/30 backdrop-blur-xl overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setSelectedService(isExpanded ? null : index)}
                    className="w-full p-6 text-left flex items-start justify-between gap-4 cursor-pointer"
                  >
                    <div className="flex items-start gap-4 sm:gap-6">
                      <span className="text-2xl sm:text-3xl font-black font-mono bg-gradient-to-br from-pink-400 to-purple-500 bg-clip-text text-transparent">
                        {service.number}
                      </span>
                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-white hover:text-pink-300 transition-colors">
                          {service.title}
                        </h3>
                        <p className="mt-1 text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-3xl">
                          {service.shortDesc}
                        </p>
                      </div>
                    </div>

                    <div
                      className={`p-2 rounded-xl bg-white/5 text-neutral-400 transition-transform duration-300 ${
                        isExpanded ? 'rotate-90 text-pink-400 bg-pink-500/10' : ''
                      }`}
                    >
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </button>

                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="px-6 pb-6 pt-2 border-t border-white/5 bg-neutral-950/40"
                      >
                        <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-pink-400 mb-3">
                          Service Deliverables & Scope
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {service.details.map((detail, dIdx) => (
                            <div key={dIdx} className="flex items-center gap-2.5 text-xs text-neutral-300">
                              <Sparkles className="w-3.5 h-3.5 text-purple-400 flex-shrink-0" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        )}

        {/* TAB 3: FEATURES & GUARANTEES */}
        {activeTab === 'guarantees' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {content.guarantees.map((item, index) => {
              const IconComp = (guaranteeIcons[index % guaranteeIcons.length]) as any;
              const isWide = index === 4;
              const gradient = guaranteeGradients[index % guaranteeGradients.length];
              const bgGlow = guaranteeGlows[index % guaranteeGlows.length];

              return (
                <motion.div
                  key={item.id || index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -6 }}
                  className={`group relative rounded-3xl p-6 sm:p-8 bg-neutral-900/60 border border-white/10 hover:border-pink-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                    isWide ? 'md:col-span-2 lg:col-span-2' : ''
                  }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <div className={`p-3.5 rounded-2xl bg-gradient-to-tr ${gradient} text-neutral-950 font-bold shadow-lg shadow-pink-500/10 group-hover:scale-110 transition-transform`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-pink-300 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs font-mono text-neutral-400 mt-1">
                      {item.subtitle}
                    </p>

                    <p className="mt-3 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                      {item.description}
                    </p>

                    <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5">
                      {item.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2.5 text-xs text-neutral-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-neutral-400 group-hover:text-pink-300">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-pink-400" />
                      Verified Guarantee
                    </span>
                    <Sparkles className="w-4 h-4 text-pink-400 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse" />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
};
