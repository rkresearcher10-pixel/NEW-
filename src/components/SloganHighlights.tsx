import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, CheckCircle2, Layers, Award, Target } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const SloganTicker: React.FC = () => {
  const { content } = useContent();

  return (
    <div className="w-full bg-gradient-to-r from-pink-950/60 via-purple-950/80 to-neutral-950 border-y border-pink-500/20 py-3.5 overflow-hidden backdrop-blur-md relative my-8">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, arrayIdx) => (
          <div key={arrayIdx} className="flex items-center gap-8 px-4 shrink-0">
            {content.tickerItems.map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-extrabold uppercase font-mono tracking-wider bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                  <Sparkles className="w-4 h-4 text-pink-400 inline" />
                  {text}
                </span>
                <span className="text-white/20 text-xs">★</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const SloganHighlights: React.FC = () => {
  const { content } = useContent();

  const icons = [Target, Award, Layers];
  const gradients = [
    'from-pink-500 via-rose-500 to-purple-600',
    'from-purple-500 via-indigo-500 to-cyan-500',
    'from-cyan-400 via-teal-500 to-emerald-500',
  ];

  return (
    <section className="w-full py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {content.sloganHighlights.map((item, index) => {
            const Icon = icons[index % icons.length];
            const gradient = gradients[index % gradients.length];

            return (
              <motion.div
                key={item.id || index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl p-6 sm:p-8 bg-neutral-900/80 border border-pink-500/30 hover:border-pink-400 backdrop-blur-xl shadow-2xl shadow-pink-500/10 transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Glowing Corner Effect */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`p-3.5 rounded-2xl bg-gradient-to-tr ${gradient} text-white shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-pink-500/20 border border-pink-500/40 text-pink-300">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-white group-hover:text-pink-300 transition-colors uppercase tracking-tight leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-pink-400 mt-1 font-semibold">
                    {item.subtitle}
                  </p>

                  <p className="mt-4 text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
                    {item.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-pink-400 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-bold text-pink-400 group-hover:text-pink-300">
                  <span className="uppercase font-mono tracking-wider">Highlight Commitment</span>
                  <Sparkles className="w-4 h-4 animate-pulse" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
