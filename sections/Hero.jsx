import Cta from "@/components/Cta"

import { fontTitle } from "@/data/fonts"


export default function Hero() {
  return (
    <section 
      id="hero"
      className={`
        hero
        w-full
        relative
        py-40
        bg-[url('/images/hero.webp')]
        paralax
      `}
    >

      <div
        className={`
          container
          text-white
          text-center
          max-w-4xl
        `}
      >
        <p
          className={`
            uppercase
            text-lg
          `}
        >
          Bienvenida a tu nueva piel
        </p>
        <h1
          className={`
            ${fontTitle.className}
            text-4xl sm:text-4xl lg:text-6xl
            flex
            flex-col
            items-center
            justify-center
            gap-3 sm:gap-6 lg:gap-10
            my-6
            leading-loose
          `}
        >
          <span>
            Imagen Personal
          </span>
          <span>
            Consciente
          </span>
          <p
            className={`
              text-lg sm:text-xl lg:text-2xl
              mt-0 lg:-mt-4
            `}
          >
            Iyali Reyes 
          </p>
        </h1>

        <Cta 
          link="/#services"
          text="Saber más"
          className={`
            my-8
          `}
        />
      </div>

    </section>
  )
}