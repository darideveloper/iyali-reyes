import Link from 'next/link'
import Image from 'next/image'

/**
 * Social icon component
 * @param {object} props - component props
 * @param {string} props.title - social icon title
 * @param {string} props.link - social icon link
 * @param {string} props.className - social icon class name
 * @returns {JSX.Element}
 */
export default function Social ({ title, link, className }) {
  return (
    <Link
      href={link}
      className={`
        social
        flex
        items-center
        justify-center md:justify-start
        gap-2 hover:gap-6
        py-3
        duration-200
        group
        ml-0 hover:ml-2
        opacity-100 hover:opacity-80
        ${className}
        md:text-2xl
      `}
      target="_blank"
    >
      <Image 
        width={30}
        height={30}
        src={`/images/socials/${title}.svg`}
        alt={`Icono de ${title}`}
        className={`
          icon
          duration-300
          group-hover:scale-110
          w-8 sm:w-12
          h-8 sm:h-12
        `}
      />
      
      <span
        className={`
          title
        `}
      >
        {title}
      </span>

    </Link>

  )
}