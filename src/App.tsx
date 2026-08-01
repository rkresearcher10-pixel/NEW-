import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Hero3DBackground } from './components/ThreeCanvas';
import { ResearchServices } from './components/ResearchServices';
import { AdditionalGuarantees } from './components/AdditionalGuarantees';
import { SloganTicker, SloganHighlights } from './components/SloganHighlights';
import { ContactSection } from './components/ContactSection';
import { AdminPanel } from './components/AdminPanel';
import { AdminLoginModal } from './components/AdminLoginModal';
import { ContentProvider, useContent } from './context/ContentContext';
import {
  Sparkles,
  Box,
  ArrowRight,
  Disc,
  Menu,
  X,
  Target,
  Award,
  Layers,
  Edit3,
  Sliders,
  LogIn,
  LogOut,
  ShieldCheck
} from 'lucide-react';

function MainAppContent() {
  const { content, openAdmin, isAuthenticated, logout } = useContent();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 font-sans selection:bg-pink-500 selection:text-white relative overflow-x-hidden">
      {/* BACKGROUND 3D CANVAS */}
      <Hero3DBackground />

      {/* HEADER NAVBAR */}
      <motion.header
        initial={{ y: -28, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="sticky top-0 z-40 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur-xl"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            {content.logoUrl ? (
              <img
                src={content.logoUrl}
                alt={content.brandName}
                className="h-10 w-auto max-w-[160px] sm:h-12 object-contain rounded-xl border border-pink-500/30 p-1 bg-neutral-900 shadow-md shadow-pink-500/10"
              />
            ) : (
              <div className="p-2 rounded-xl bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-500 text-white shadow-lg shadow-pink-500/20">
                <Box className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
            )}
            <span className="font-extrabold text-lg sm:text-xl tracking-wider uppercase bg-gradient-to-r from-white via-neutral-200 to-pink-400 bg-clip-text text-transparent">
              {content.brandName}
            </span>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs sm:text-sm font-medium text-neutral-300">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              onClick={() => {
                const el = document.getElementById('research-services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-pink-400 transition-colors cursor-pointer"
            >
              Research & Services
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 300, damping: 24 }}
              onClick={() => {
                const el = document.getElementById('guarantees');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="hover:text-pink-400 transition-colors cursor-pointer"
            >
              Guarantees & Features
            </motion.button>
          </nav>

          {/* Right Action Controls */}
          <div className="hidden md:flex items-center gap-3">
            {/* ADMIN PANEL BUTTON IN HEADER - ONLY SHOWN WHEN SIGNED IN */}
            {isAuthenticated && (
              <button
                onClick={openAdmin}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-cyan-500/20 border border-pink-500/40 hover:border-pink-400 text-pink-300 font-bold text-xs flex items-center gap-2 hover:scale-105 transition-all cursor-pointer shadow-lg shadow-pink-500/10"
              >
                <Edit3 className="w-3.5 h-3.5 text-pink-400" />
                <span>Admin Text Panel</span>
              </button>
            )}

            {isAuthenticated ? (
              <button
                onClick={logout}
                className="px-4 py-2 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 text-rose-300 border border-rose-500/30 font-medium text-xs sm:text-sm transition-all cursor-pointer flex items-center gap-1.5"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span>Sign Out</span>
              </button>
            ) : (
              <button
                onClick={openAdmin}
                className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs sm:text-sm transition-all border border-white/10 cursor-pointer flex items-center gap-1.5"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Sign In</span>
              </button>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <motion.button
            whileHover={{ scale: 1.05, y: -1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 320, damping: 24 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-neutral-300 hover:text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>

        {/* Mobile Dropdown Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.28, ease: 'easeOut' }}
              className="md:hidden border-b border-white/10 bg-neutral-950/95 backdrop-blur-2xl p-4 space-y-3 overflow-hidden"
            >
              <motion.button
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  const el = document.getElementById('research-services');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block w-full text-left py-2 text-sm text-neutral-300 hover:text-white font-medium cursor-pointer"
              >
                Research & Services
              </motion.button>

              <motion.button
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'spring', stiffness: 280, damping: 22 }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  const el = document.getElementById('guarantees');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="block w-full text-left py-2 text-sm text-neutral-300 hover:text-white font-medium cursor-pointer"
              >
                Guarantees & Features
              </motion.button>

              <div className="pt-2 border-t border-white/10 flex flex-col gap-2">
                {isAuthenticated && (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openAdmin();
                    }}
                    className="w-full py-2.5 rounded-xl bg-pink-500/20 border border-pink-500/40 text-pink-300 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Edit3 className="w-4 h-4" />
                    <span>Open Admin Text Customizer</span>
                  </button>
                )}

                {isAuthenticated ? (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      logout();
                    }}
                    className="w-full py-2 rounded-xl bg-rose-500/20 text-rose-300 border border-rose-500/30 font-medium text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>Sign Out</span>
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openAdmin();
                    }}
                    className="w-full py-2 rounded-xl bg-white/10 text-white font-medium text-xs flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <LogIn className="w-3.5 h-3.5" />
                    <span>Sign In</span>
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* MAIN BODY CONTENT */}
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.65, ease: 'easeOut' }}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 py-12 sm:py-16"
      >
        {/* HERO SECTION */}
        <motion.section
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="text-center max-w-4xl mx-auto flex flex-col items-center"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-[1.1] uppercase">
            <span className="bg-gradient-to-r from-white via-pink-200 to-pink-500 bg-clip-text text-transparent">
              {content.heroTitle}
            </span>
          </h1>

          {/* Highlight Tagline Pill Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {content.heroPill1 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-mono font-bold">
                <Target className="w-3.5 h-3.5 text-pink-400" />
                {content.heroPill1}
              </span>
            )}
            {content.heroPill2 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-bold">
                <Award className="w-3.5 h-3.5 text-purple-400" />
                {content.heroPill2}
              </span>
            )}
            {content.heroPill3 && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-mono font-bold">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                {content.heroPill3}
              </span>
            )}
          </div>

          <p className="mt-6 text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl leading-relaxed">
            {content.heroSubtitle}
          </p>

          <div className="mt-8 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 280, damping: 24 }}
              onClick={() => {
                const el = document.getElementById('research-services');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="group px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-500 via-purple-600 to-pink-600 text-white font-bold text-sm sm:text-base shadow-xl shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-105 transition-all duration-300 flex items-center gap-3 cursor-pointer"
            >
              <span>{content.heroButtonText}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </div>
        </motion.section>

        {/* INFINITE ANIMATED SLOGAN MARQUEE TICKER */}
        <SloganTicker />

        {/* 3 HIGHLIGHT CARDS FOR THE SLOGANS */}
        <SloganHighlights />

        {/* RESEARCH TYPES & POSTGRADUATE SERVICES SECTION */}
        <div id="research-services" className="scroll-mt-24">
          <ResearchServices />
        </div>

        {/* ADDITIONAL FEATURES & GUARANTEES SECTION */}
        <AdditionalGuarantees />

        {/* HIGH IMPACT ANIMATED CONTACT DETAILS SECTION */}
        <ContactSection />
      </motion.main>

      {/* FLOATING ACTION BUTTON TO OPEN ADMIN PANEL - ONLY WHEN AUTHENTICATED */}
      {isAuthenticated && (
        <motion.button
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          onClick={openAdmin}
          className="fixed bottom-6 right-6 z-40 p-4 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-xs shadow-2xl shadow-pink-500/50 hover:scale-110 transition-all flex items-center gap-2 cursor-pointer border border-white/20 group"
          title="Open Admin Text Customizer Panel"
        >
          <Sliders className="w-5 h-5 text-white group-hover:rotate-90 transition-transform" />
          <span className="hidden sm:inline font-mono uppercase tracking-wider">Admin Text Panel</span>
        </motion.button>
      )}

      {/* RENDER ADMIN LOGIN MODAL */}
      <AdminLoginModal />

      {/* RENDER ADMIN PANEL DRAWER */}
      <AdminPanel />

      {/* FOOTER */}
      <motion.footer
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.1, ease: 'easeOut' }}
        className="relative z-10 border-t border-white/10 bg-neutral-950 py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-pink-500 text-white">
              <Box className="w-4 h-4" />
            </div>
            <span className="font-bold text-sm tracking-wider uppercase text-neutral-300">
              {content.brandName}
            </span>
          </div>

          <p className="text-xs font-mono text-neutral-300">
            {content.footerCopyright}
          </p>
        </div>
      </motion.footer>
    </div>
  );
}

export default function App() {
  return (
    <ContentProvider>
      <MainAppContent />
    </ContentProvider>
  );
}
