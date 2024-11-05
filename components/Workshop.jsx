import Image from 'next/image'
import Flower from '@/components/ornaments/Flower'
import Subtitle from '@/components/Subtitle'
import Cta from '@/components/Cta'

import { fontTitle } from '@/data/fonts'
import { marked } from 'marked'


/**
 * Workshop base section
 * @param {object} props - component props
 * @param {string} props.image - workshop image
 * @param {string} props.title - workshop title
 * @param {string} props.text - workshop
 * @param {string} props.id - workshop html id
 * @param {obj} props.cta - workshop call to action
 * @param {string} props.cta.text - call to action text
 * @param {string} props.cta.link - call to action link
 * @returns {JSX.Element} Workshop component
 */
export default function Workshop({ image, title, text, id, cta }) {

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
          [writing-mode:vertical-lr;]
          flex
          items-center
          justify-center
          transform
          rotate-180
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
          data-aos="fade-up"
          data-aos-delay="200"
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
          `}
        />

        {
          cta.text && cta.link &&
          <div  
            className={`
              cta-wrapper
              w-full
              text-center
              mt-8
            `}
          >
            <Cta
              link={cta.link}
              text={cta.text.toUpperCase()}
              dark={true}
            />
          </div>
        }

      </div>

    </article>

  )
}