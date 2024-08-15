import Title from '@/components/Title'
import Particle from '@/components/ornaments/Particle'
import Episode from '@/components/Episode'

import { servicesData } from '@/data/services'


export default function Episodes() {
  return (
    <section
      id="episodes"
      className={`
        episodes
        mt-24
        overflow-hidden
        relative
        w-full
      `}
    >

      <div
        className={`
          container
        `}
      >
        <div
          className={`
            title-wrapper
            flex
            items-center
            justify-center
          `}
        >
          <Particle
            className={`
              mb-6
            `}
          />
          <Title
            className={`
              mx-4
            `}
          >
            De mi para ti
          </Title>
          <Particle
            className={`
              mb-6
            `}
          />
        </div>

        <section
          className={`
            services-wrapper
            grid
            grid-cols-1 md:grid-cols-3
            gap-12
          `}>

          {
            servicesData.map((service, index) => {
              const slug = service.title.toLowerCase().replace(' ', '-')
              return (
                <Episode
                  key={index}
                  title={service.title}
                  imageSrc={`/images/services/${slug}.webp`}
                  imageAlt={`Mi servicio ${service.title}`}
                  link={`/services/${slug}`}
                />
              )

            })
          }


        </section>
      </div>

    </section>
  )
}