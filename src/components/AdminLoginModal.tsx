import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Lock, Mail, KeyRound, X, AlertCircle, Sparkles, LogIn, Eye, EyeOff, ShieldCheck } from 'lucide-react';
import { useContent } from '../context/ContentContext';

export const AdminLoginModal: React.FC = () => {
  const { isLoginModalOpen, setIsLoginModalOpen, login } = useContent();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isLoginModalOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    const success = login(email, password);
    if (!success) {
      setErrorMsg('Invalid Credentials! Only RK Researcher Admin can access.');
    } else {
      setEmail('');
      setPassword('');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-md rounded-3xl p-6 sm:p-8 bg-neutral-900 border border-pink-500/30 text-white shadow-2xl shadow-pink-500/20 overflow-hidden"
        >
          {/* Top Ambient Glow */}
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

          {/* Close Button */}
          <button
            onClick={() => {
              setIsLoginModalOpen(false);
              setErrorMsg('');
            }}
            className="absolute top-5 right-5 p-2 rounded-xl bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Icon Header */}
          <div className="flex flex-col items-center text-center space-y-3 mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-tr from-pink-500 via-purple-600 to-cyan-500 text-white shadow-lg shadow-pink-500/30">
              <ShieldCheck className="w-8 h-8" />
            </div>

            <h2 className="text-2xl font-black text-white tracking-tight">
              Admin Portal Sign In
            </h2>

            <p className="text-xs text-neutral-400 max-w-xs leading-relaxed">
              Enter authorized <span className="text-pink-300 font-mono font-bold">RK Researcher</span> credentials to unlock the text customization panel.
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {errorMsg && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-3 rounded-xl bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs flex items-center gap-2 font-mono"
              >
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMsg}</span>
              </motion.div>
            )}

            {/* Admin ID Field */}
            <div>
              <label className="block text-xs font-mono font-bold text-neutral-300 mb-1.5 flex items-center justify-between">
                <span>Admin ID</span>
                <span className="text-[10px] text-pink-400 font-normal">Required</span>
              </label>
              <div className="relative flex items-center">
                <Mail className="w-4 h-4 text-neutral-400 absolute left-3.5 pointer-events-none" />
                <input
                  type="text"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="rk109"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-950 border border-white/10 text-white text-sm focus:border-pink-500 focus:outline-none placeholder:text-neutral-600 font-mono"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-xs font-mono font-bold text-neutral-300 mb-1.5 flex items-center justify-between">
                <span>Password</span>
                <span className="text-[10px] text-pink-400 font-normal">Required</span>
              </label>
              <div className="relative flex items-center">
                <KeyRound className="w-4 h-4 text-neutral-400 absolute left-3.5 pointer-events-none" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-neutral-950 border border-white/10 text-white text-sm focus:border-pink-500 focus:outline-none placeholder:text-neutral-600 font-mono"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3.5 text-neutral-400 hover:text-white transition-colors cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Hint Box */}
            <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-[11px] text-neutral-400 flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-pink-300">
                <Sparkles className="w-3.5 h-3.5 text-pink-400" />
                RK Admin Verification Required
              </span>
              <span className="font-mono text-[10px] bg-pink-500/20 px-2 py-0.5 rounded text-pink-300 border border-pink-500/30">
                Protected
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-pink-500 via-purple-600 to-pink-600 text-white font-bold text-sm shadow-lg shadow-pink-500/25 hover:shadow-pink-500/40 hover:scale-[1.02] transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
            >
              <LogIn className="w-4 h-4" />
              <span>Sign In & Open Admin Panel</span>
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
