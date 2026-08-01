import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  RotateCcw,
  Sparkles,
  Layout,
  FileText,
  GraduationCap,
  ShieldCheck,
  PhoneCall,
  Edit3,
  Check,
  Save,
  Megaphone,
  LogOut,
  Upload,
  Image as ImageIcon,
  Trash2,
  Link
} from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const AdminPanel: React.FC = () => {
  const { content, updateContent, resetToDefault, isAdminOpen, setIsAdminOpen, isAuthenticated, logout } = useContent();
  const [activeTab, setActiveTab] = useState<
    'hero' | 'slogans' | 'research' | 'services' | 'guarantees' | 'contact'
  >('hero');

  const [savedNotification, setSavedNotification] = useState(false);

  const handleSaveNotice = () => {
    setSavedNotification(true);
    setTimeout(() => setSavedNotification(false), 2000);
  };

  const handleLogoFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File size too large! Please choose an image under 5MB.');
        return;
      }
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          updateContent({ logoUrl: event.target.result as string });
          handleSaveNotice();
        }
      };
      reader.readAsDataURL(file);
    }
  };

  if (!isAdminOpen || !isAuthenticated) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm">
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="w-full max-w-2xl h-full bg-neutral-950 border-l border-pink-500/30 text-white flex flex-col shadow-2xl overflow-hidden"
        >
          {/* Admin Header */}
          <div className="p-5 border-b border-white/10 bg-neutral-900 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-tr from-pink-500 to-purple-600 text-white shadow-md">
                <Edit3 className="w-5 h-5" />
              </div>
              <div>
                <h2 className="text-lg font-extrabold text-white flex items-center gap-2">
                  <span>Website Text Customizer</span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-pink-500/20 text-pink-300 border border-pink-500/30">
                    Live Sync
                  </span>
                </h2>
                <p className="text-xs text-neutral-400">
                  Edit any text across the website with dedicated input boxes.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (confirm('Are you sure you want to reset all text to defaults?')) {
                    resetToDefault();
                    handleSaveNotice();
                  }
                }}
                className="px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-neutral-300 hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Reset to default text"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Reset</span>
              </button>

              <button
                onClick={() => {
                  logout();
                }}
                className="px-3 py-1.5 rounded-xl bg-rose-500/20 hover:bg-rose-500/30 border border-rose-500/30 text-xs text-rose-300 hover:text-rose-200 flex items-center gap-1.5 transition-colors cursor-pointer"
                title="Sign Out Admin"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>

              <button
                onClick={() => setIsAdminOpen(false)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Admin Navigation Tabs */}
          <div className="flex items-center gap-1 p-2 bg-neutral-900/60 border-b border-white/10 overflow-x-auto text-xs font-semibold scrollbar-none">
            <button
              onClick={() => setActiveTab('hero')}
              className={`px-3.5 py-2 rounded-xl flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                activeTab === 'hero'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Layout className="w-3.5 h-3.5" />
              <span>Hero & Branding</span>
            </button>

            <button
              onClick={() => setActiveTab('slogans')}
              className={`px-3.5 py-2 rounded-xl flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                activeTab === 'slogans'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Megaphone className="w-3.5 h-3.5 text-amber-300" />
              <span>Slogans & Ticker</span>
            </button>

            <button
              onClick={() => setActiveTab('research')}
              className={`px-3.5 py-2 rounded-xl flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                activeTab === 'research'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Research Types</span>
            </button>

            <button
              onClick={() => setActiveTab('services')}
              className={`px-3.5 py-2 rounded-xl flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                activeTab === 'services'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Postgraduate Services</span>
            </button>

            <button
              onClick={() => setActiveTab('guarantees')}
              className={`px-3.5 py-2 rounded-xl flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                activeTab === 'guarantees'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Guarantees</span>
            </button>

            <button
              onClick={() => setActiveTab('contact')}
              className={`px-3.5 py-2 rounded-xl flex items-center gap-1.5 whitespace-nowrap transition-colors ${
                activeTab === 'contact'
                  ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>RK Publication & Contact</span>
            </button>
          </div>

          {/* Form Content Area */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            {/* TAB 1: HERO & BRANDING */}
            {activeTab === 'hero' && (
              <div className="space-y-5">
                <div className="p-4 rounded-xl bg-pink-500/10 border border-pink-500/20 text-xs text-pink-300">
                  ✏️ Edit website logo, brand name, hero titles, header badges, and action buttons.
                </div>

                {/* WEBSITE LOGO UPLOADER */}
                <div className="p-4 rounded-2xl bg-neutral-900 border border-pink-500/30 space-y-3">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-mono font-bold text-pink-300 flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-pink-400" />
                      <span>Website Logo (Upload from Drive / File Manager)</span>
                    </label>
                    {content.logoUrl && (
                      <button
                        type="button"
                        onClick={() => {
                          updateContent({ logoUrl: '' });
                          handleSaveNotice();
                        }}
                        className="text-[11px] text-rose-400 hover:text-rose-300 flex items-center gap-1 bg-rose-500/10 px-2.5 py-1 rounded-lg border border-rose-500/20 cursor-pointer hover:bg-rose-500/20 transition-colors"
                      >
                        <Trash2 className="w-3 h-3" />
                        <span>Remove Logo</span>
                      </button>
                    )}
                  </div>

                  {/* Logo Preview & File Upload Controls */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
                    {/* Preview Box */}
                    <div className="sm:col-span-1 flex flex-col items-center justify-center p-3 rounded-xl bg-neutral-950 border border-white/10 text-center min-h-[90px]">
                      {content.logoUrl ? (
                        <div className="space-y-1">
                          <img
                            src={content.logoUrl}
                            alt="Logo Preview"
                            className="max-h-12 w-auto mx-auto object-contain rounded p-1 bg-neutral-900 border border-white/10"
                          />
                          <span className="text-[10px] text-emerald-400 font-mono block">Custom Logo Active</span>
                        </div>
                      ) : (
                        <div className="text-neutral-500 text-xs flex flex-col items-center gap-1">
                          <ImageIcon className="w-6 h-6 opacity-40" />
                          <span>No Logo Uploaded</span>
                        </div>
                      )}
                    </div>

                    {/* Upload Controls */}
                    <div className="sm:col-span-2 space-y-2">
                      <label className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-cyan-500 text-white font-bold text-xs cursor-pointer hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-pink-500/20 transition-all">
                        <Upload className="w-4 h-4" />
                        <span>Select Logo File from Device / Drive</span>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleLogoFileUpload}
                          className="hidden"
                        />
                      </label>

                      <div className="relative flex items-center">
                        <Link className="w-3.5 h-3.5 text-neutral-500 absolute left-3 pointer-events-none" />
                        <input
                          type="text"
                          placeholder="Or paste image URL..."
                          value={content.logoUrl || ''}
                          onChange={(e) => updateContent({ logoUrl: e.target.value })}
                          className="w-full pl-9 pr-3 py-2 rounded-xl bg-neutral-950 border border-white/10 text-white text-xs focus:border-pink-500 focus:outline-none placeholder:text-neutral-600 font-mono"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-neutral-300 mb-1">
                    Brand Name
                  </label>
                  <input
                    type="text"
                    value={content.brandName}
                    onChange={(e) => updateContent({ brandName: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-sm focus:border-pink-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-neutral-300 mb-1">
                    Hero Headline Text
                  </label>
                  <input
                    type="text"
                    value={content.heroTitle}
                    onChange={(e) => updateContent({ heroTitle: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-sm focus:border-pink-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-neutral-300 mb-1">
                    Hero Subtitle / Description
                  </label>
                  <textarea
                    rows={3}
                    value={content.heroSubtitle}
                    onChange={(e) => updateContent({ heroSubtitle: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-sm focus:border-pink-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-neutral-300 mb-1">
                    Main Button Label
                  </label>
                  <input
                    type="text"
                    value={content.heroButtonText}
                    onChange={(e) => updateContent({ heroButtonText: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-sm focus:border-pink-500 focus:outline-none"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-xs font-mono font-bold text-neutral-300 mb-1">
                      Pill Badge 1
                    </label>
                    <input
                      type="text"
                      value={content.heroPill1}
                      onChange={(e) => updateContent({ heroPill1: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:border-pink-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-neutral-300 mb-1">
                      Pill Badge 2
                    </label>
                    <input
                      type="text"
                      value={content.heroPill2}
                      onChange={(e) => updateContent({ heroPill2: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:border-pink-500 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-neutral-300 mb-1">
                      Pill Badge 3
                    </label>
                    <input
                      type="text"
                      value={content.heroPill3}
                      onChange={(e) => updateContent({ heroPill3: e.target.value })}
                      className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:border-pink-500 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: SLOGANS & TICKER */}
            {activeTab === 'slogans' && (
              <div className="space-y-6">
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-xs text-amber-300">
                  📢 Customize the 3 main slogans and the scrolling marquee ticker.
                </div>

                {/* Marquee Ticker Texts */}
                <div className="space-y-3 border-b border-white/10 pb-5">
                  <h3 className="text-sm font-bold text-white uppercase font-mono">
                    Marquee Ticker Phrases
                  </h3>
                  {content.tickerItems.map((item, idx) => (
                    <div key={idx}>
                      <label className="block text-[11px] font-mono text-neutral-400 mb-1">
                        Ticker Phrase #{idx + 1}
                      </label>
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => {
                          const updated = [...content.tickerItems];
                          updated[idx] = e.target.value;
                          updateContent({ tickerItems: updated });
                        }}
                        className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs focus:border-pink-500 focus:outline-none"
                      />
                    </div>
                  ))}
                </div>

                {/* 3 Slogan Highlight Cards */}
                <div className="space-y-5">
                  <h3 className="text-sm font-bold text-white uppercase font-mono">
                    Slogan Highlight Cards
                  </h3>

                  {content.sloganHighlights.map((sh, idx) => (
                    <div
                      key={sh.id}
                      className="p-4 rounded-2xl bg-neutral-900 border border-white/10 space-y-3"
                    >
                      <span className="text-[10px] font-mono font-bold text-pink-400">
                        Card #{idx + 1}
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        <div>
                          <label className="block text-[10px] text-neutral-400">Title</label>
                          <input
                            type="text"
                            value={sh.title}
                            onChange={(e) => {
                              const updated = [...content.sloganHighlights];
                              updated[idx].title = e.target.value;
                              updateContent({ sloganHighlights: updated });
                            }}
                            className="w-full px-3 py-1.5 rounded-lg bg-neutral-950 border border-white/10 text-xs text-white"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] text-neutral-400">Subtitle</label>
                          <input
                            type="text"
                            value={sh.subtitle}
                            onChange={(e) => {
                              const updated = [...content.sloganHighlights];
                              updated[idx].subtitle = e.target.value;
                              updateContent({ sloganHighlights: updated });
                            }}
                            className="w-full px-3 py-1.5 rounded-lg bg-neutral-950 border border-white/10 text-xs text-white"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] text-neutral-400">Description</label>
                        <textarea
                          rows={2}
                          value={sh.description}
                          onChange={(e) => {
                            const updated = [...content.sloganHighlights];
                            updated[idx].description = e.target.value;
                            updateContent({ sloganHighlights: updated });
                          }}
                          className="w-full px-3 py-1.5 rounded-lg bg-neutral-950 border border-white/10 text-xs text-white"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: RESEARCH TYPES */}
            {activeTab === 'research' && (
              <div className="space-y-5">
                <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-xs text-purple-300">
                  📚 Edit titles, tags, descriptions, and feature checklists for Research Types.
                </div>

                {content.researchTypes.map((rt, idx) => (
                  <div
                    key={rt.id}
                    className="p-4 rounded-2xl bg-neutral-900 border border-white/10 space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-pink-400">
                        Type #{idx + 1}: {rt.title}
                      </span>
                      <input
                        type="text"
                        value={rt.tag}
                        onChange={(e) => {
                          const updated = [...content.researchTypes];
                          updated[idx].tag = e.target.value;
                          updateContent({ researchTypes: updated });
                        }}
                        className="px-2 py-1 rounded bg-neutral-950 border border-white/10 text-[10px] text-pink-300"
                        placeholder="Tag"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-neutral-400">Title</label>
                      <input
                        type="text"
                        value={rt.title}
                        onChange={(e) => {
                          const updated = [...content.researchTypes];
                          updated[idx].title = e.target.value;
                          updateContent({ researchTypes: updated });
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-neutral-950 border border-white/10 text-xs text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-neutral-400">Description</label>
                      <textarea
                        rows={2}
                        value={rt.description}
                        onChange={(e) => {
                          const updated = [...content.researchTypes];
                          updated[idx].description = e.target.value;
                          updateContent({ researchTypes: updated });
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-neutral-950 border border-white/10 text-xs text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-neutral-400 mb-1">
                        Highlights (comma separated)
                      </label>
                      <input
                        type="text"
                        value={rt.highlights.join(', ')}
                        onChange={(e) => {
                          const updated = [...content.researchTypes];
                          updated[idx].highlights = e.target.value
                            .split(',')
                            .map((s) => s.trim());
                          updateContent({ researchTypes: updated });
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-neutral-950 border border-white/10 text-xs text-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 4: POSTGRADUATE SERVICES */}
            {activeTab === 'services' && (
              <div className="space-y-5">
                <div className="p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-300">
                  🎓 Customize Postgraduate Services titles, short descriptions, and bullet points.
                </div>

                {content.postgraduateServices.map((ps, idx) => (
                  <div
                    key={ps.id}
                    className="p-4 rounded-2xl bg-neutral-900 border border-white/10 space-y-3"
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono font-bold text-pink-400 text-xs">
                        {ps.number}
                      </span>
                      <input
                        type="text"
                        value={ps.title}
                        onChange={(e) => {
                          const updated = [...content.postgraduateServices];
                          updated[idx].title = e.target.value;
                          updateContent({ postgraduateServices: updated });
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-neutral-950 border border-white/10 text-xs font-bold text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-neutral-400">Short Summary</label>
                      <textarea
                        rows={2}
                        value={ps.shortDesc}
                        onChange={(e) => {
                          const updated = [...content.postgraduateServices];
                          updated[idx].shortDesc = e.target.value;
                          updateContent({ postgraduateServices: updated });
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-neutral-950 border border-white/10 text-xs text-white"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] text-neutral-400 mb-1">
                        Detailed Items (comma separated)
                      </label>
                      <input
                        type="text"
                        value={ps.details.join(', ')}
                        onChange={(e) => {
                          const updated = [...content.postgraduateServices];
                          updated[idx].details = e.target.value
                            .split(',')
                            .map((s) => s.trim());
                          updateContent({ postgraduateServices: updated });
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-neutral-950 border border-white/10 text-xs text-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 5: GUARANTEES */}
            {activeTab === 'guarantees' && (
              <div className="space-y-5">
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300">
                  🛡️ Edit additional guarantees, AI Free Content, Data Privacy, and SAAS CRM descriptions.
                </div>

                {content.guarantees.map((g, idx) => (
                  <div
                    key={g.id}
                    className="p-4 rounded-2xl bg-neutral-900 border border-white/10 space-y-3"
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono font-bold text-pink-400">
                        Guarantee #{idx + 1}
                      </span>
                      <input
                        type="text"
                        value={g.badge}
                        onChange={(e) => {
                          const updated = [...content.guarantees];
                          updated[idx].badge = e.target.value;
                          updateContent({ guarantees: updated });
                        }}
                        className="px-2 py-1 rounded bg-neutral-950 border border-white/10 text-[10px] text-emerald-300"
                        placeholder="Badge"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] text-neutral-400">Title</label>
                        <input
                          type="text"
                          value={g.title}
                          onChange={(e) => {
                            const updated = [...content.guarantees];
                            updated[idx].title = e.target.value;
                            updateContent({ guarantees: updated });
                          }}
                          className="w-full px-3 py-1.5 rounded-lg bg-neutral-950 border border-white/10 text-xs text-white"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] text-neutral-400">Subtitle</label>
                        <input
                          type="text"
                          value={g.subtitle}
                          onChange={(e) => {
                            const updated = [...content.guarantees];
                            updated[idx].subtitle = e.target.value;
                            updateContent({ guarantees: updated });
                          }}
                          className="w-full px-3 py-1.5 rounded-lg bg-neutral-950 border border-white/10 text-xs text-white"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-[10px] text-neutral-400">Description</label>
                      <textarea
                        rows={2}
                        value={g.description}
                        onChange={(e) => {
                          const updated = [...content.guarantees];
                          updated[idx].description = e.target.value;
                          updateContent({ guarantees: updated });
                        }}
                        className="w-full px-3 py-1.5 rounded-lg bg-neutral-950 border border-white/10 text-xs text-white"
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* TAB 6: CONTACT & RK PUBLICATION */}
            {activeTab === 'contact' && (
              <div className="space-y-5">
                <div className="p-4 rounded-xl bg-pink-500/10 border border-pink-500/20 text-xs text-pink-300">
                  📞 Customize phone numbers, contact headlines, and RK Publication details.
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-neutral-300 mb-1">
                    Company / Publisher Name
                  </label>
                  <input
                    type="text"
                    value={content.contact.brandTitle}
                    onChange={(e) =>
                      updateContent({
                        contact: { ...content.contact, brandTitle: e.target.value },
                      })
                    }
                    className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-white/10 text-white text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono font-bold text-neutral-300 mb-1">
                      Main Heading Prefix
                    </label>
                    <input
                      type="text"
                      value={content.contact.mainHeadingPrefix}
                      onChange={(e) =>
                        updateContent({
                          contact: { ...content.contact, mainHeadingPrefix: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono font-bold text-neutral-300 mb-1">
                      Main Heading Highlight
                    </label>
                    <input
                      type="text"
                      value={content.contact.mainHeadingHighlight}
                      onChange={(e) =>
                        updateContent({
                          contact: { ...content.contact, mainHeadingHighlight: e.target.value },
                        })
                      }
                      className="w-full px-3 py-2 rounded-xl bg-neutral-900 border border-white/10 text-white text-xs text-pink-400 font-bold"
                    />
                  </div>
                </div>

                {/* Phone 1 */}
                <div className="p-4 rounded-2xl bg-neutral-900 border border-white/10 space-y-3">
                  <span className="text-xs font-mono font-bold text-pink-400">
                    Phone Helpline #1
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] text-neutral-400">Display Phone</label>
                      <input
                        type="text"
                        value={content.contact.phone1Display}
                        onChange={(e) =>
                          updateContent({
                            contact: { ...content.contact, phone1Display: e.target.value },
                          })
                        }
                        className="w-full px-3 py-1.5 rounded-lg bg-neutral-950 border border-white/10 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-neutral-400">Raw Tel Link</label>
                      <input
                        type="text"
                        value={content.contact.phone1Raw}
                        onChange={(e) =>
                          updateContent({
                            contact: { ...content.contact, phone1Raw: e.target.value },
                          })
                        }
                        className="w-full px-3 py-1.5 rounded-lg bg-neutral-950 border border-white/10 text-xs text-white"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone 2 */}
                <div className="p-4 rounded-2xl bg-neutral-900 border border-white/10 space-y-3">
                  <span className="text-xs font-mono font-bold text-pink-400">
                    Phone Helpline #2
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] text-neutral-400">Display Phone</label>
                      <input
                        type="text"
                        value={content.contact.phone2Display}
                        onChange={(e) =>
                          updateContent({
                            contact: { ...content.contact, phone2Display: e.target.value },
                          })
                        }
                        className="w-full px-3 py-1.5 rounded-lg bg-neutral-950 border border-white/10 text-xs text-white"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-neutral-400">Raw Tel Link</label>
                      <input
                        type="text"
                        value={content.contact.phone2Raw}
                        onChange={(e) =>
                          updateContent({
                            contact: { ...content.contact, phone2Raw: e.target.value },
                          })
                        }
                        className="w-full px-3 py-1.5 rounded-lg bg-neutral-950 border border-white/10 text-xs text-white"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Panel Footer */}
          <div className="p-4 border-t border-white/10 bg-neutral-900 flex items-center justify-between">
            <span className="text-xs text-neutral-400 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-pink-400" />
              Changes saved automatically to local storage
            </span>

            <button
              onClick={() => {
                handleSaveNotice();
                setIsAdminOpen(false);
              }}
              className="px-5 py-2 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold text-xs shadow-lg shadow-pink-500/20 hover:scale-105 transition-all flex items-center gap-1.5"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Done Editing</span>
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
