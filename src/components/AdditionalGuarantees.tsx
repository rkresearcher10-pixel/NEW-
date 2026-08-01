import React from 'react';
import { motion } from 'motion/react';
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Zap,
  BotOff,
  Lock,
  FileCheck2,
  Image as ImageIcon,
  LayoutDashboard
} from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const AdditionalGuarantees: React.FC = () => {
  const { content } = useContent();

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
    <section id="guarantees" className="w-full py-16 relative z-10 scroll-mt-24">
      {/* Background Lighting Orbs */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-25 overflow-hidden">
        <div className="w-[500px] h-[500px] rounded-full bg-pink-600/20 blur-[150px]" />
        <div className="w-[400px] h-[400px] rounded-full bg-cyan-500/20 blur-[130px] -mr-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 border border-white/10 text-pink-300 text-xs font-mono font-medium mb-4 backdrop-blur-md"
          >
            <Zap className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
            <span>Ironclad Service Commitments</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight"
          >
            Additional Features &{' '}
            <span className="bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Guarantees
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-sm sm:text-base text-neutral-300 leading-relaxed"
          >
            We adhere to the highest scientific standards, providing seamless platform workflow and complete peace of mind.
          </motion.p>
        </div>

        {/* Guarantees Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.guarantees.map((item, index) => {
            const IconComponent = (guaranteeIcons[index % guaranteeIcons.length]) as any;
            const isLarge = index === 4;
            const gradient = guaranteeGradients[index % guaranteeGradients.length];
            const bgGlow = guaranteeGlows[index % guaranteeGlows.length];

            return (
              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group relative rounded-3xl p-6 sm:p-8 bg-neutral-900/60 border border-white/10 hover:border-pink-500/40 backdrop-blur-xl shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden ${
                  isLarge ? 'md:col-span-2 lg:col-span-2' : ''
                }`}
              >
                {/* Background Ambient Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
                />

                <div>
                  {/* Icon & Badge Row */}
                  <div className="flex items-center justify-between mb-6">
                    <div
                      className={`p-3.5 rounded-2xl bg-gradient-to-tr ${gradient} text-neutral-950 font-bold shadow-lg shadow-pink-500/10 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 group-hover:border-pink-500/30 group-hover:text-pink-300 transition-colors">
                      {item.badge}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-pink-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-neutral-400 mt-1">
                    {item.subtitle}
                  </p>

                  <p className="mt-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullets List */}
                  <div className="mt-6 pt-5 border-t border-white/10 space-y-2.5">
                    {item.bullets.map((bullet, bIdx) => (
                      <div
                        key={bIdx}
                        className="flex items-center gap-2.5 text-xs text-neutral-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Footer Guarantee Badge */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-semibold text-neutral-400 group-hover:text-pink-300 transition-colors">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-pink-400" />
                    Verified Guarantee
                  </span>
                  <Sparkles className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-pink-400 animate-pulse" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
