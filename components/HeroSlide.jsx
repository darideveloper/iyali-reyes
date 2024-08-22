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
      >
        {texts.middle}
      </span>
      <p
        className={`
          text-2xl
          mt-20
        `}
      >
        {texts.bottom}
      </p>
    </>
  )

  const titleClassName = `
    ${fontTitle.className}
    text-4xl sm:text-4xl lg:text-6xl
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
          mt-8
        `}
      />
    </div>

  )
}