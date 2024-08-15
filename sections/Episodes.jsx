import Title from '@/components/Title'
import Particle from '@/components/ornaments/Particle'
import Episode from '@/components/Episode'

import { episodesData } from '@/data/episodes'

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
          <Title
            className={`
              mx-auto
            `}
          >
            Episodios destacados
          </Title>
        </div>

        <section
          className={`
            episodes-wrapper
            grid
            grid-cols-1 md:grid-cols-3
            gap-12
          `}>

          {
            episodesData.map((episode, index) => {
              return (
                <Episode
                  key={index}
                  title={episode.title}
                  imageSrc={`/images/episodes/${index + 1}.webp`}
                  imageAlt={`Miniatura de episodio destacado: ${episode.title}`}
                  link={episode.link}
                  description={episode.description}
                />
              )

            })
          }


        </section>
      </div>

    </section>
  )
}