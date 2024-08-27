import Image from 'next/image'
import Flower from '@/components/ornaments/Flower'
import Subtitle from '@/components/Subtitle'

import { fontTitle } from '@/data/fonts'
import { marked } from 'marked'


/**
 * Workshop base section
 * @param {object} props - component props
 * @param {string} props.image - workshop image
 * @param {string} props.title - workshop title
 * @param {string} props.text - workshop
 * @param {string} props.id - workshop html id
 * @returns {JSX.Element} Workshop component
 */
export default function Workshop({ image, title, text, id }) {

  const textHtml = marked(text)

  return (
    <article
      className={`
        container
        grid
        grid-cols-5 lg:grid-cols-9
        gap-8
        my-20
      `}
      id={id}
    >
      <div
        className={`
          title-wrapper
          [writing-mode:vertical-rl;]
          flex
          items-center
          justify-center
        `}
      >
        <p
          className={`
            uppercase
            text-2xl sm:text-3xl md:text-4xl
            ${fontTitle.className}
            text-brown
            font-bold
          `}
        >
          Next Workshops
        </p>
      </div>

      <div
        className={`
          image-wrapper-rectangle
          col-span-4
          relative
        `}
      >
        <Image
          src={`/images/workshops/${image}`}
          alt="foto de Iyali Reyes en ventanal"
          width={1000}
          height={1000}
          className={`
            w-full
          `}
        />

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
      </div>

      <div
        className={`
          image-wrapper-rounded
          col-span-5 lg:col-span-4
        `}
      >
        <Subtitle
          className={`
            md:text-left
          `}
        >
          {title}
        </Subtitle>

        <div
          dangerouslySetInnerHTML={{ __html: textHtml }}
          className={`
            service-data
            markdown
            no-dots
          `}
        />
      </div>

    </article>

  )
}