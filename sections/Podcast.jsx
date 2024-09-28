import Image from 'next/image'
import Title from '@/components/Title'
import { Spotify } from 'react-spotify-embed'


export default function Podcast () {
  return (
    <section 
      id="podcast"
      className={`
        podcast
        w-full
        relative
        py-32
      `}
    >
      <Image 
        width={1500}
        height={800}
        src='/images/podcast.webp'
        alt='Podcast banner'
        className={`
          bg-image
          w-full
          h-full
          object-cover
          absolute
          top-0
          left-0
          -z-10
        `}
      />

      <div 
        className={`
          container
          text-white
          flex
          flex-col md:flex-row
          items-center
          justify-center
          gap-12
        `}
      >
        <div 
          className={`
            text-wrapper
          `}
        >

          <Title
            className={`
              text-white
              w-full
              max-w-md 
              uppercase
              z-10
              relative
            `}
          >
            Imagen consciente podcast
          </Title>

          <p
            className={`
              text-center md:text-left
            `}
          >
            Escucha nuestro podcast en Spotify
          </p>
        </div>

        <Spotify 
          link="https://open.spotify.com/show/0e71cbg1lPhT4e5I5ii25O?si=jaLI8-svSKydjBjqkEkebw&nd=1&dlsi=a92f8195f97a4fb5"
          className={`
            w-full
            h-44 md:h-64
            m-0
          `}
          data-aos="fade-down"
          data-aos-delay="400"

        />


      </div>


    </section>
  )
}