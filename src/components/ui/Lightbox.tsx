import { motion, AnimatePresence } from "motion/react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import type { GalleryImage } from "../../lib/types";

interface LightboxProps {
  images: GalleryImage[];
  selectedIndex: number | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox = ({ images, selectedIndex, onClose, onPrev, onNext }: LightboxProps) => {
  if (selectedIndex === null) return null;

  const image = images[selectedIndex];

  return (
    <AnimatePresence>
      {selectedIndex !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          onClick={onClose}
          onKeyDown={(e) => {
            if (e.key === "ArrowRight") { e.preventDefault(); onNext(); }
            else if (e.key === "ArrowLeft") { e.preventDefault(); onPrev(); }
            else if (e.key === "Escape") { e.preventDefault(); onClose(); }
          }}
          tabIndex={0}
          autoFocus
        >
          <button
            className="absolute top-5 right-5 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors"
            onClick={onClose}
          >
            <X size={22} />
          </button>
          <button
            className="absolute top-1/2 left-2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
            onClick={(e) => { e.stopPropagation(); onPrev(); }}
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="absolute top-1/2 right-2 -translate-y-1/2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-colors"
            onClick={(e) => { e.stopPropagation(); onNext(); }}
          >
            <ChevronRight size={24} />
          </button>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            className="flex flex-col items-center gap-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={image.src}
              className="max-w-[90vw] max-h-[80vh] rounded-2xl object-contain shadow-2xl"
              alt={image.label}
            />
            <span className="text-white/80 text-sm font-bold">{image.label}</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
