// /components/project/project-gallery.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

type MediaItem = {
  src: string;
  alt?: string;
};

type Props = {
  media: MediaItem[];
};

export default function ProjectGallery({ media }: Props) {
  const [current, setCurrent] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // Ensure hooks run unconditionally before any early returns
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  if (!media || media.length === 0) return null;

  const next = () => {
    setCurrent((prev) => (prev + 1) % media.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + media.length) % media.length);
  };

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <section className="relative overflow-hidden rounded-2xl border border-border bg-panel shadow-sm">
      <Image
        width={1200}
        height={800}
        src={media[current].src}
        alt={media[current].alt || "Project image"}
        className="w-full h-auto object-cover max-h-100"
        priority
      />

      <button
        type="button"
        onClick={open}
        className="absolute right-3 top-3 inline-flex h-9 items-center justify-center rounded-full border border-border bg-panel/80 px-4 text-xs font-medium text-foreground backdrop-blur hover:bg-panel"
      >
        View
      </button>

     
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
      >
        <ChevronLeft size={20} />
      </button>

      
      <button
        onClick={next}
        className="absolute cursor-pointer right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
      >
        <ChevronRight size={20} />
      </button>

      
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2">
        {media.map((_, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === current ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>

      {isOpen ? (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onMouseDown={(e) => {
            if (e.currentTarget === e.target) close();
          }}
        >
          <div className="relative w-full max-w-5xl overflow-hidden rounded-2xl border border-border bg-panel shadow-sm">
            <button
              type="button"
              onClick={close}
              className="absolute right-3 top-3 inline-flex h-9 items-center justify-center rounded-full border border-border bg-panel/80 px-4 text-xs font-medium text-foreground backdrop-blur hover:bg-panel"
            >
              Close
            </button>

            <Image
              width={1600}
              height={1000}
              src={media[current].src}
              alt={media[current].alt || "Project image"}
              className="w-full max-h-[85vh] object-contain"
              priority
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}