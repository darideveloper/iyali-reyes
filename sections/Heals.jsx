import Title from "@/components/Title"
import Image from "next/image"
import Particle from "@/components/ornaments/Particle"
import Flower from "@/components/ornaments/Flower"
import Cta from "@/components/Cta"


export default function Heals() {
  return (
    <section
      id="coach"
      className={`
        container
        pt-24
        flex
        flex-col md:flex-row-reverse
        items-center
        justify-between
        gap-8
      `}
    >
      <div
        className={`
          content
          flex
          flex-col
          items-start
          justify-center
          gap-2
          text-center md:text-left
          w-full md:w-1/2 lg:w-5/12
          relative
        `}
      >
        <Title>
          Sana a través de tu imagen
          <span
            className={`
              inline-block
              text-lg
              leading-relaxed
            `}
          >
            Coaching Imagen Personal Consciente 1:1
          </span>
        </Title>
        <p>
          Conecta con tu identidad, recuerda tu brillo y la confianza en quién eres, para que expreses tu ser auténtico a través de la ropa.
        </p>

        <Cta 
          link="/files/brochure-coaching.pdf"
          text="Get it Now"
          dark={true}
          className={`
            mt-6
          `}
          target="_blank"
        />

        <Flower 
          className={`
            absolute
            top-1/2
            left-1/2
            transform
            -translate-x-1/2
            -translate-y-1/2
            -z-10
          `}
        />
      </div>

      <div 
        className={`
          img-wrapper
          relative
          w-full md:w-1/2 lg:w-7/12
        `}
      >
        <Image
          src="/images/heals.webp"
          alt="Sana a través de tu imagen"
          width={700}
          height={400}
          className={`
            w-full
          `}
        />

        <Particle 
          className={`
            absolute
            top-10
            left-10
          `}
        />

      </div>
    </section>
  )
}