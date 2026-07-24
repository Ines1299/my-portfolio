import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function SlideShow({ images }: { images: string[] }) {
  return (
    <Swiper
      modules={[Navigation]}
      navigation
      loop={true}
      className="w-full mt-10"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt={`slide ${index + 1}`}
            className="w-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
