import Image from 'next/image'

/**
 * Flower ornament component
 * @param {Object} props - Component props
 * @param {string} props.className - Component class name
 * @returns {JSX.Element} Flower component
 */
export default function Flower({ className }) {
  return (
    <Image
      src="/images/flower.svg"
      alt="Flower vector"
      width={400}
      height={400}
      className={`
        opacity-40
        ${className}
      `}
    />
  )
}