import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { useData } from '../../context/DataContext';

export const Toast: React.FC = () => {
  const { toast } = useData();

  if (!toast) return null;

  const isSuccess = toast.type === 'success';
  const isError = toast.type === 'error';

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl bg-[#131317]/95 border border-white/10 shadow-2xl backdrop-blur-xl max-w-md"
      >
        <div className={`p-2 rounded-xl border ${
          isSuccess 
            ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' 
            : isError 
              ? 'bg-rose-500/10 text-rose-400 border-rose-500/20' 
              : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20'
        }`}>
          {isSuccess && <CheckCircle2 className="w-5 h-5" />}
          {isError && <AlertCircle className="w-5 h-5" />}
          {!isSuccess && !isError && <Info className="w-5 h-5" />}
        </div>
        <p className="text-xs font-semibold text-zinc-100 leading-snug">
          {toast.message}
        </p>
      </motion.div>
    </AnimatePresence>
  );
};
