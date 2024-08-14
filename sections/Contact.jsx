
import Title from '@/components/Title'
import Subtitle from '@/components/Subtitle'
import Social from '@/components/Social'

import { socialsData } from '@/data/socials'


export default function Contact() {
  return (
    <section
      id="contact"
      className={`
        contact
        grid
        grid-cols-1 md:grid-cols-2 lg:grid-cols-3
        gap-6
        text-white
      `}
    >
      <div className={`
          socials-wrapper
          bg-[url('/images/contact.webp')]
          bg-brown
          bg-cover
          py-16 md:py-32
          px-6
          flex
          flex-col
          justify-center 
          items-center md:items-end

        `}
      >
        <Subtitle
          className={`
            text-white
            text-center md:text-left
            w-full
            max-w-xl
          `}
        >
          Sígueme en mis redes sociales
        </Subtitle>

        <div
          className={`
            socials
            w-full
            max-w-xl
          `}
        >

          {
            socialsData.map((social, index) => (
              <Social 
                key={index}
                title={social.title}
                link={social.link}
              />
            ))
          }
        </div>

      </div>
      <div className={`
          form-wrapper
          lg:col-span-2
          debug
          my-12
          container
        `}
      >
        <Title>
          Envíame un mensaje
        </Title>

        <form
          action="#"
          method="post"
        >

          <input
            type="text"
            placeholder="Nombre"
            name="name"
            id="name"
            required
          />

        </form>

      </div>
    </section>
  )
}