"use client"

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules'
import { heroData } from '@/data/hero'

import HeroSlide from '@/components/HeroSlide'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Hero() {
  return (
    <section
      id="hero"
      className={`
        hero
        w-full
        relative
        bg-white
      `}
    >
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Pagination, A11y, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        className={`
          w-full
        `}
      >
        {
          heroData.map((slide, index) => (
            <SwiperSlide
              key={index}
            >
              <HeroSlide 
                index={index}
                texts={slide.texts}
                cta={slide.cta}
              />
              
            </SwiperSlide>
          ))
        }
      </Swiper>


    </section>
  )
}