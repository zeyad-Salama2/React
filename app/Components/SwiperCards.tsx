'use client';

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperType from "swiper";
import "swiper/css";

const SwiperCards = ({
  items,
  paginationImages,
  className,
  slidesPerView,
}: {
  items: any[];
  paginationImages?: boolean;
  className?: string;
  slidesPerView?: number;
}) => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [progress, setProgress] = useState(0); // Initial value for progress

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 100 : prev + 3.7));
    }, 110);
    return () => clearInterval(interval);
  }, [progress]);

  useEffect(() => {
    if (swiper) {
      const handleSlideChange = () => {
        setProgress(0);
      };
      swiper.on("slideChange", handleSlideChange);
      return () => {
        swiper.off("slideChange", handleSlideChange);
      };
    }
  }, [swiper]);

  return (
    <div className="relative h-full gap-3 w-full flex flex-col">
      <Swiper
        autoplay={{ delay: 3000 }}
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={slidesPerView || 1}
        className={`w-full relative ${className || "h-96"}`}
        onSwiper={setSwiper}
      >
        {items.map(({ card }, i) => (
          <SwiperSlide key={i}>
            {card}
          </SwiperSlide>
        ))}
      </Swiper>
      {paginationImages && (
        <div className="flex items-center gap-4 mt-4">
          {items.map(({ src }, i) => (
            <div
              key={i}
              onClick={() => {
                swiper?.slideTo(i);
                swiper?.autoplay.stop();
              }}
              className={`relative cursor-pointer rounded-xl overflow-hidden max-w-lg w-full h-40 transition-transform duration-200 ${
                swiper?.realIndex === i ? "shadow-md -translate-y-5 border-rose-500 border opacity-90" : ""
              } hover:-translate-y-5 z-10 hover:shadow-md hover:opacity-90`}
            >
              {swiper?.realIndex === i && swiper.autoplay.running && (
                <div
                  style={{ width: `${progress}%` }}
                  className="absolute inset-0 bg-gray-600 opacity-50 z-10 transition-all duration-200"
                ></div>
              )}
              {src && src !== "" ? (
                <Image alt="Image-pagination" src={src} fill className="object-cover" />
              ) : null}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SwiperCards;
