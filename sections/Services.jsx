import Title from '@/components/Title'
import Particle from '@/components/ornaments/Particle'
import Flower from '@/components/ornaments/Flower'
import Service from '@/components/Service'

import { servicesData } from '@/data/services'


export default function Services() {
  return (
    <section
      id="services"
      className={`
        services
        mt-24
        overflow-hidden
        relative
        w-full
      `}
    >

      <Flower
        className={`
          absolute
          top-0
          left-0
          transform
          scale-x-150
          -z-10
          max-w-xs
        `}
      />

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
                <Service
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

      <Flower
        className={`
          absolute
          right-0
          bottom-0
          transform
          scale-x-150
          -z-10
          max-w-xs
        `}
      />

    </section>
  )
}