"use client"

import { useState } from "react"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { EffectCards } from "swiper/modules"
import type { Swiper as SwiperType } from "swiper"
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2"
import { sliderImages } from "@/constants/slider"
import { toPersianDigits } from "@/utils/digits"
import "swiper/css"
import "swiper/css/effect-cards"

const arrowClass = "cursor-pointer text-secondary transition disabled:cursor-default disabled:opacity-40"

const ImageSlider = () => {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const isFirst = activeIndex === 0
  const isLast = activeIndex === sliderImages.length - 1

  return (
    <div className="flex w-full flex-col items-center gap-6 pe-16 sm:pe-24">
      <Swiper
        effect="cards"
        cardsEffect={{ rotate: false, perSlideOffset: 12 }}
        grabCursor
        modules={[EffectCards]}
        onSwiper={setSwiper}
        onSlideChange={(instance) => setActiveIndex(instance.activeIndex)}
        className="aspect-4/5 w-64 sm:w-80 lg:w-96"
      >
        {sliderImages.map(({ src, alt }) => (
          <SwiperSlide key={alt} className="overflow-hidden rounded-3xl">
            <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 384px, 320px" className="object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center gap-8 text-xl text-text">
        <button type="button" onClick={() => swiper?.slideNext()} disabled={isLast} className={arrowClass}>
          <HiArrowLongRight className="size-7" />
        </button>
        <span dir="ltr">
          {toPersianDigits(activeIndex + 1)} / {toPersianDigits(sliderImages.length)}
        </span>
        <button type="button" onClick={() => swiper?.slidePrev()} disabled={isFirst} className={arrowClass}>
          <HiArrowLongLeft className="size-7" />
        </button>
      </div>
    </div>
  )
}

export default ImageSlider
