import Image from 'next/image'
import Title from '@/components/Title'
import Flower from '@/components/ornaments/Flower'


export default function Workshops() {
  return (
    <section
      id="workshops"
      className={`
        workshops
        relative
        mt-24
        overflow-hidden
      `}
    >

      <div 
        className={`
          container
          grid
          grid-cols-4 md:grid-cols-8
          gap-8
        `}
      >
        <div 
          className={`
            title-wrapper
            [writing-mode:vertical-lr]
          `}
        >
          <Title
            className={`
              uppercase
            `}
          >
            Next Workshops
          </Title>
        </div>

        <div
          className={`
            image-wrapper-rectangle
            col-span-3
          `}
        >
          <Image
            src="/images/workshops-1.webp"
            alt="foto de Iyali Reyes en ventanal"
            width={1000}
            height={1000}
            className={`
              w-full
            `}
          />
          <p
            className={`
              my-6
            `}
          >
            An intriguing caption that describes the room goes here. Use a flattering photo, then describe away!
          </p>
        </div>

        <div
          className={`
            image-wrapper-rounded
            col-span-4
          `}
        >
          <Image
            src="/images/workshops-2.webp"
            alt="foto de Iyali Reyes escogiendo ropa"
            width={400}
            height={1000}
            className={`
              w-full
            `}
          />

          <p
            className={`
              my-6
            `}
          >
            An intriguing caption that describes the room goes here. Use a flattering photo, then describe away!
          </p>
        </div>

      </div>

      <Flower 
        className={`
          absolute
          top-0
          right-0
          rotate-180
          scale-150
          -z-10
        `}
      />

    </section>
  )
}