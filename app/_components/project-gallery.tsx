// /components/project/project-gallery.tsx
"use client";

import { useState } from "react";
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

  if (!media || media.length === 0) return null;

  const next = () => {
    setCurrent((prev) => (prev + 1) % media.length);
  };

  const prev = () => {
    setCurrent((prev) => (prev - 1 + media.length) % media.length);
  };

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
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
      >
        <ChevronLeft size={20} />
      </button>

      
      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black"
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
    </section>
  );
}