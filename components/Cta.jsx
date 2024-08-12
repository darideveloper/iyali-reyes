import Link from 'next/link'

/**
 * CTA (Call to Action) button component.
 * 
 * @param {object} props - component props
 * @param {string} props.link - link to navigate to
 * @param {string} props.text - button text
 * @param {string} props.className - button extra classes
 * @returns {JSX.Element} - rendered CTA button
 */
export default function Cta({ link, text, className }) {
  return (
    <Link
      href={link}
      className={`
        cta
        border-2
        border-white
        bg-white hover:bg-transparent
        text-brown hover:text-white
        rounded-full
        font-bold
        uppercase
        px-12
        py-2
        duration-300
        shadow-lg
        hover:-translate-y-2
        inline-block
        ${className}
      `}
    >
      {text}
    </Link>
  )
}