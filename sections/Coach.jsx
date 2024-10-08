import Title from "@/components/Title"
import Image from "next/image"
import Particle from "@/components/ornaments/Particle"
import CtaForm from "@/components/CtaForm"


export default function Coach() {

  const texts = [
    "Yo soy tu Coach de Imagen Personal Consciente y te ayudo a alinear tu imagen externa con tu esencia y tus metas personales.",
    "Mi pasión es sembrar semillas de cambio en los hábitos y pensamientos de mis clientes sobre su imagen actual. Juntos, trabajamos para desbloquear limitaciones y diseñar una imagen consciente que refleje tu verdadero ser al mundo exterior.",
    "He colaborado con diversas revistas, tanto impresas como digitales, en sesiones de fotografía de moda, y he tenido el honor de vestir a artistas para sus presentaciones como fashion stylist.",
    "Además, he sido docente de Imagen Personal y Estilismo de Moda en prestigiosos institutos como Atelier Make UP, iModae, y el Instituto de Lupita Jones, entre otros.",
    "Permíteme guiarte para que puedas expresar tu SER AUTÉNTICO a través de tu ropa."
  ]

  return (
    <section
      id="coach"
      className={`
        container
        pt-24
        flex
        flex-col md:flex-row
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
          items-center
          justify-center
          gap-2
          text-center md:text-left
          w-full md:w-1/2 lg:w-7/12
        `}
      >
        <Title>
          <span
            className={`
              inline
            `}
          >
            Yo soy tu Coach de Imagen Personal Consciente
          </span>
          <Particle
            className={`
              inline
              ml-4
            `}
          />
        </Title>
        {
          texts.map((text, index) => (
            <p 
              key={index}
              className={`
                w-full
              `}
            >
              {text}
            </p>
          ))
        }

        <CtaForm
          className={`
            md:justify-start
          `}
        />
      </div>

      <Image
        src="/images/coach.webp"
        alt="Coach de Imagen Personal Consciente"
        width={600}
        height={400}
        className={`
          w-full sm:w-8/12 md:w-1/2 lg:w-5/12       
        `}
        data-aos="fade-down"
        data-aos-delay="300"
      />
    </section>
  )
}