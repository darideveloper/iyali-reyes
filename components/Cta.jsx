import Link from 'next/link'

/**
 * CTA (Call to Action) button component.
 * 
 * @param {object} props - component props
 * @param {string} props.link - link to navigate to
 * @param {string} props.text - button text
 * @param {boolean} props.dark - dark mode
 * @param {string} props.target - link target
 * @param {string} props.className - button extra classes
 * @returns {JSX.Element}
 */
export default function Cta({ link, text, dark, target, className }) {
  return (
    <Link
      href={link}
      target={target}
      className={`
        cta
        border-2
        ${dark ? 'border-brown' : 'border-white'}
        ${dark ? 'bg-brown' : 'bg-white'}
        hover:bg-transparent
        ${dark ? 'text-white' : 'text-brown'}
        ${dark ? 'hover:text-brown' : 'hover:text-white'}
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