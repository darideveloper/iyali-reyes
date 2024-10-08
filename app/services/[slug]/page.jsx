import { servicesData } from "@/data/services"
import { fontTitle } from "@/data/fonts"
import { marked } from 'marked'

import Image from 'next/image'
import Title from "@/components/Subtitle"
import Cta from "@/components/Cta"

export const dynamicParams = true

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  return servicesData.map((post) => ({
    slug: post.slug,
  }))
}

// Multiple versions of this page will be statically generated
export default function Sevice({ params }) {

  const { slug } = params
  const service = servicesData.find((service) => service.slug === slug)

  if (!service) {
    // Handle the case where the service is not found
    return <p>Servicio no encontrado</p>
  }

  const { title, text, price, priceInitial, payLink } = service
  const textHtml = marked(text)

  return (
    <div
      className={`
        my-12
        max-w-4xl
        mx-auto
        px-6
      `}
    >
      <h1
        className={`
          ${fontTitle.className}
          text-4xl
          text-center
        `}
      >
        {title}
      </h1>

      <Image
        src={`/images/services/${slug}.webp`}
        width={500}
        height={500}
        alt={`Mi servicio ${title}`}
        className={`
          mx-auto
          my-6
        `}
      />
      <div
        dangerouslySetInnerHTML={{ __html: textHtml }}
        className={`
          service-data
          markdown
        `}
      />

      <div
        className={`
          price-wrapper
          flex
          flex-col
          items-center
          justify-center
        `}
      >

        <Title
          className={`
          `}
        >
          Hire now!
        </Title>
        <Cta
          link={payLink}
          text={`Reserva con ${priceInitial} MXN`}
          dark={true}
          target="_blank"
          className={`
            mx-auto
          `}
        />
        <p
          className={`
            text-center
            text-xs
            max-w-md
            mt-4
          `}
        >
          *Asegúrate de ingresar el monto correcto en paypal para evitar retrasos en la entrega de tu servicio.
        </p>

      </div>
    </div>
  )
}

