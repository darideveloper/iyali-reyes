import Link from 'next/link'
import Image from 'next/image'

/**
 * Social icon component
 * @param {object} props - component props
 * @param {string} props.title - social icon title
 * @param {string} props.name - social icon name (for image file)
 * @param {string} props.link - social icon link
 * @param {bool} props.small - social icon size
 * @param {string} props.className - social icon class name
 * @returns {JSX.Element}
 */
export default function Social ({ title, name, link, small, className }) {
  return (
    <Link
      href={link}
      className={`
        social
        flex flex-col sm:flex-row
        items-center
        justify-center sm:justify-start
        gap-2 hover:gap-6
        duration-200
        group
        ml-0 hover:ml-2
        opacity-100 hover:opacity-80
        ${!small && "sm:text-2xl"}
        ${className}
      `}
      target="_blank"
    >
      <Image 
        width={30}
        height={30}
        src={`/images/icons/${name}.svg`}
        alt={`Icono de ${title}`}
        className={`
          icon
          duration-300
          group-hover:scale-110
          w-8 ${!small && "sm:w-12"}
          h-8 ${!small && "sm:h-12"}
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