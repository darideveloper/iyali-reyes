import Image from 'next/image'

/**
 * Particle ornament component
 * @param {Object} props - Component props
 * @param {string} props.className - Component class name
 * @returns {JSX.Element} Particle component
 */
export default function Particle({ className }) {
  return (

    <Image 
      src="/images/particle.svg"
      alt="Particle"
      width={20}
      height={20}
      className={`
        fill-brown
        w-10
        h-auto
        ${className}
      `}
    />
  )

}