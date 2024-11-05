import { fontTitle } from "@/data/fonts"

import Cta from "@/components/Cta"
import Image from 'next/image'

/**
 * Hero slide component
 * Swiper slide with hero content
 * 
 * @param {object} props - component props
 * @param {number} props.index - slide index
 * @param {object} props.texts - slide text object
 * @param {string} props.texts.top - slide top text
 * @param {string} props.texts.middle - slide middle text
 * @param {string} props.texts.bottom - slide bottom text
 * @param {object} props.cta - slide call to action object
 * @param {string} props.cta.text - call to action text
 * @param {string} props.cta.link - call to action link
 * @param {string} props.image - slide image src
 * @returns 
 */
export default function HeroSlide({ index, texts, cta, image }) {

  const titleContent = (
    <>
      <span
        className={`
          font-bold
        `}
        data-aos="fade-up"
      >
        {
          texts.middle.map((line, index) => (
            <span
              key={index}
              className={`
                block
                my-0 sm:mb-16 last:mb-0
              `}
            >
              {line}
            </span>
          ))
        }
      </span>
      <p
        className={`
          text-3xl sm:text-4xl
        `}
        data-aos="fade-down"
        data-aos-delay="400"
      >
        {
          texts.bottom.map((line, index) => (
            <span
              key={index}
              className={`
                block
                my-6
              `}
            >
              {line}
            </span>
          ))
        }
      </p>
    </>
  )

  const titleClassName = `
    ${fontTitle.className}
    text-5xl sm:text-6xl md:text-7xl
    flex
    flex-col
    items-center
    justify-center
    gap-3 sm:gap-6 lg:gap-10
    my-6
    leading-loose
  `

  return (
    <div
      className={`
        content                  
        text-white
        text-center
        w-full
        h-screen
        mx-auto
        relative
        flex 
        flex-col
        items-center
        justify-center
      `}
    >
      <Image
        src={`/images/hero/${image}`}
        alt={`Imagen de fondo ${texts.middle}`}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className={`
          absolute
          top-0
          left-0
          w-full
          h-full
          object-cover
          -z-10
        `}
      />

      <p
        className={`
          uppercase
          text-lg 
          mb-0 md:mb-4
          tracking-widest
        `}
      >
        {texts.top}
      </p>
      
      {
        index === 0
          ? (
            <h1
              className={`
                ${titleClassName}
              `}
            >
              {titleContent}
            </h1>
          )
          : (
            <h2
              className={`
                ${titleClassName}
              `}
            >
              {titleContent}
            </h2>
          )
      }

      <Cta
        link={cta.link}
        text={cta.text}
        className={`
          ${cta.margin == "big" ? 'mt-96' : 'mt-8'}
        `}
      />
    </div>

  )
}