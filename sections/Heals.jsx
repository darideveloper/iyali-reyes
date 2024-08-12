import Title from "@/components/Title"
import Image from "next/image"
import Particle from "@/components/ornaments/Particle"

export default function Heals() {
  return (
    <section
      id="coach"
      className={`
        container
        max-w-7xl
        py-16
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
        `}
      >
        <Title>
          Sana a través de tu imagen
          <span
            className={`
              inline-block
              text-lg
            `}
          >
            Coaching Imagen Personal Consciente
          </span>
        </Title>
        <p>
          Conecta con tu identidad, recuerda tu brillo y la confianza en quién eres, para que expreses tu ser auténtico a través de la ropa.
        </p>
      </div>

      <Image
        src="/images/heals.webp"
        width={700}
        height={400}
        className={`
          w-full md:w-1/2 lg:w-7/12
        `}
      />
    </section>
  )
}