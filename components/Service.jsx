import Subtitle from '@/components/Subtitle'
import Link from 'next/link'
import CircleImage from './CircleImage'


/**
 * Service card component
 * Service card with link, image and title
 * 
 * @param {object} props - component props
 * @param {string} props.title - service title
 * @param {string} props.imageSrc - service image source
 * @param {string} props.imageAlt - service image alt text
 * @param {string} props.link - service relative link
 * @returns {JSX.Element}
 */
export default function Service({ title, imageSrc, imageAlt, link }) {
  return (
    <article
      className={`
        service
      `}
    >
      <Link
        href={link}
        className={`
          group
        `}
      >
        <CircleImage 
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          svgPath="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
        />
        
        <Subtitle
          className={`
            text-center
            mt-6
            duration-300
            group-hover:-translate-y-3
            group-hover:opacity-50
          `}
        >
          {title}
        </Subtitle>
      </Link>

    </article>
  )
} 