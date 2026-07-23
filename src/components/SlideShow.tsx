import { useState } from "react";

export default function SlideShow({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative w-full">
      <img
        src={images[current]}
        alt={`slide ${current + 1}`}
        className="w-full object-contain"
      />
      <div className="flex justify-between mt-4">
        <button
          onClick={() =>
            setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1))
          }
          className="text-sm font-body"
        >
          ← Prev
        </button>
        <p className="text-xs">
          {current + 1} / {images.length}
        </p>
        <button
          onClick={() =>
            setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1))
          }
          className="text-sm"
        >
          Next →
        </button>
      </div>
    </div>
  );
}
