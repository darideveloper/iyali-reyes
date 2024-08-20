import Image from 'next/image'
import Subtitle from '@/components/Subtitle'
import Link from 'next/link'
import CircleImage from '@/components/CircleImage'

/**
 * Episode card component
 * Podcast episode card with link, image, title and description
 * 
 * @param {object} props - component props
 * @param {string} props.title - episode title
 * @param {string} props.imageSrc - episode image source
 * @param {string} props.imageAlt - episode image alt text
 * @param {string} props.link - episode relative link
 * @returns {JSX.Element}
 */
export default function Episode({ title, imageSrc, imageAlt, link, description }) {
  return (
    <article
      className={`
        episode
      `}
    >
      <Link
        href={link}
        className={`
          group
          hover:bg-brown-light
          duration-300
          delay-150
          inline-block
          p-4
          rounded-lg
        `}
        target="_blank"
      >

        <CircleImage 
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          svgPath="M22 13c-.027-5.497-4.497-10-10-10s-9.973 4.503-10 10h2.5c.828 0 1.5.672 1.5 1.5v7c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-8.5c.027-6.601 5.394-12 12-12s11.973 5.399 12 12v8.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-7c0-.828.672-1.5 1.5-1.5h2.5z"
          className={`
            w-7/12 sm:w-6/12 md:w-10/12 lg:w-8/12
          `}
        />        

        <Subtitle
          className={`
            text-center
            mt-6
            duration-300
            group-hover:-translate-y-3
          `}
        >
          {title}
        </Subtitle>

        <p
          className={`
            duration-300
            group-hover:py-4
          `}
        >
          {description}
        </p>
      </Link>

    </article>
  )
} 