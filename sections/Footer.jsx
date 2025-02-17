import Title from '@/components/Title'
import Link from 'next/link'
import SquereCard from '@/components/SquereCard'
import Social from '@/components/Social'

import { socialsData } from '@/data/socials'
import { contactData } from '@/data/contact'
import { workTimeData } from '@/data/workTime'

export default function Footer() {

  return (
    <footer
      className={`
        bg-brown
      `}
    >
      <div
        className={`
          container
          w-11/12 sm:w-8/12 md:w-9/12 lg:w-full
          py-12
        `}
      >
        <Title
          className={`
            text-white
          `}
        >
          Contáctame / Collabs
        </Title>

        <section
          className={`
            cards
            grid
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
          `}
        >
          <SquereCard
            title="Contacto"
            className={`
              sm:col-span-2 lg:col-span-1
            `}
          >
            {
              contactData.map((item, index) => (
                <Social
                  key={index}
                  name={item.name}
                  title={item.title}
                  link={item.link}
                  small={true}
                  className={`
                    py-1
                  `}
                />
              ))
            }

          </SquereCard>

          <SquereCard 
            title="Horario de atención"
            className={`
            `}
          >
            {
              workTimeData.map((workTime, index) => (
                <p
                  key={index}
                  className={`
                    text-white
                    text-center sm:text-left
                    flex
                    flex-col
                    justify-between
                    items-center sm:items-start
                    my-4
                  `}
                >
                  <span
                    className={`
                      font-bold
                    `}
                  >
                    {workTime.day}
                  </span>
                  <span>
                    {workTime.hour}
                  </span>
                </p>
              ))
            }

          </SquereCard>

          <SquereCard title="Redes sociales">
            {
              socialsData.map((item, index) => (
                <Social
                  key={index}
                  name={item.title}
                  title={item.title}
                  link={item.link}
                  small={true}
                  className={`
                    py-1
                  `}
                />
              ))
            }

          </SquereCard>
        </section>

      </div>

      <small
        className={`
          bg-brown-dark
          w-full
          inline-block
          py-1
          text-center
          text-white
          mt-2
        `}
      >
        Iyali Reyes &copy; 2024 - Todos los derechos reservados.
        &nbsp; &nbsp; 
        Powered by &nbsp;
          <Link 
            href="https://api.whatsapp.com/send?phone=5214493402622"
            target="_blank"
            className={`
              font-bold
            `}
          >
              Dari Developer
          </Link>
      </small>
    </footer>
  )
}