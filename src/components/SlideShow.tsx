import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

interface SlideShowProps {
  images: string[];
  height?: number;
}

export default function SlideShow({ images, height }: SlideShowProps) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      loop={true}
      className={height ? "w-full" : "w-full"}
      style={height ? { height: `${height}px` } : undefined}
    >
      {images.map((src, index) => (
        <SwiperSlide
          key={index}
          className={height ? "flex! items-center justify-center" : ""}
        >
          <img
            src={src}
            alt={`slide ${index + 1}`}
            className={
              height
                ? "block h-full w-full object-contain"
                : "w-full object-cover"
            }
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
