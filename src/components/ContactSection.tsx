import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  PhoneCall,
  Phone,
  Check,
  Copy,
  Sparkles,
  MessageSquare,
  Building2,
  Clock,
  ArrowUpRight
} from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const ContactSection: React.FC = () => {
  const { content } = useContent();
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const phoneNumbers = [
    {
      display: content.contact.phone1Display,
      raw: content.contact.phone1Raw,
      label: content.contact.phone1Label,
      available: content.contact.phone1Available,
      whatsapp: `https://wa.me/${content.contact.phone1Raw.replace(/[^0-9]/g, '')}`,
    },
    {
      display: content.contact.phone2Display,
      raw: content.contact.phone2Raw,
      label: content.contact.phone2Label,
      available: content.contact.phone2Available,
      whatsapp: `https://wa.me/${content.contact.phone2Raw.replace(/[^0-9]/g, '')}`,
    },
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="contact" className="w-full py-16 sm:py-24 relative z-10 scroll-mt-24">
      {/* Background Lighting Effects */}
      <div className="absolute inset-0 pointer-events-none flex justify-center items-center opacity-30 overflow-hidden">
        <div className="w-[650px] h-[650px] rounded-full bg-gradient-to-r from-pink-600/30 to-purple-600/30 blur-[160px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Banner Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl p-8 sm:p-12 md:p-16 bg-gradient-to-br from-neutral-900/90 via-neutral-900/95 to-neutral-950 border border-pink-500/30 backdrop-blur-2xl shadow-2xl shadow-pink-500/15 overflow-hidden"
        >
          {/* Animated Background Pulse Rings */}
          <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-pink-500/10 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Header Column */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono font-bold"
              >
                <Building2 className="w-4 h-4 text-pink-400" />
                <span>{content.contact.brandTitle}</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase leading-tight"
              >
                {content.contact.mainHeadingPrefix} <br />
                <span className="bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
                  {content.contact.mainHeadingHighlight}
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="text-neutral-300 text-sm sm:text-base leading-relaxed"
              >
                {content.contact.description}
              </motion.p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-mono text-neutral-400">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-pink-400" />
                  Fast 15-Min Response
                </span>
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  Free Initial Consultation
                </span>
              </div>
            </div>

            {/* Right Contact Cards Column */}
            <div className="lg:col-span-7 space-y-4">
              {phoneNumbers.map((phone, idx) => (
                <motion.div
                  key={phone.raw + idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.15 }}
                  whileHover={{ scale: 1.02 }}
                  className="group relative rounded-2xl p-5 sm:p-6 bg-neutral-900/90 border border-white/10 hover:border-pink-500/50 transition-all duration-300 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-lg hover:shadow-pink-500/10"
                >
                  <div className="flex items-center gap-4 text-center sm:text-left">
                    <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-pink-500 to-purple-600 text-white shadow-lg shadow-pink-500/20 group-hover:scale-110 transition-transform">
                      <PhoneCall className="w-6 h-6 animate-bounce" />
                    </div>

                    <div>
                      <div className="flex items-center justify-center sm:justify-start gap-2">
                        <span className="text-[11px] font-mono font-bold uppercase text-pink-400 tracking-wider">
                          {phone.label}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                          Active
                        </span>
                      </div>
                      <a
                        href={`tel:${phone.raw}`}
                        className="text-xl sm:text-2xl font-black font-mono text-white group-hover:text-pink-300 transition-colors tracking-wider block mt-1"
                      >
                        {phone.display}
                      </a>
                      <p className="text-xs text-neutral-400 mt-0.5">
                        {phone.available}
                      </p>
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="flex items-center gap-2.5 w-full sm:w-auto justify-center">
                    <a
                      href={`tel:${phone.raw}`}
                      className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-xs shadow-md shadow-pink-500/20 hover:shadow-pink-500/40 hover:scale-105 transition-all flex items-center justify-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </a>

                    <a
                      href={phone.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3.5 py-2.5 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 border border-emerald-500/30 text-emerald-300 font-bold text-xs transition-all flex items-center justify-center gap-1"
                      title="Chat on WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span className="hidden sm:inline">WhatsApp</span>
                    </a>

                    <button
                      onClick={() => handleCopy(phone.raw, idx)}
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
                      title="Copy Phone Number"
                    >
                      {copiedIndex === idx ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </motion.div>
              ))}

              {/* Bottom Quick Call Tagline Banner */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-cyan-500/10 border border-pink-500/20 text-center flex items-center justify-between gap-2">
                <span className="text-xs font-mono font-extrabold text-pink-300 uppercase tracking-wide">
                  {content.contact.bottomBannerText}
                </span>
                <ArrowUpRight className="w-4 h-4 text-pink-400" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
