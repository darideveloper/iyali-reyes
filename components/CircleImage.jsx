import Image from 'next/image'


/**
 * CircleImage component.
 * Rounded imahe who shows an icon on hover.
 * 
 * @param {object} props - component props
 * @param {string} props.imageSrc - image source
 * @param {string} props.imageAlt - image alt text
 * @param {string} props.svgPath - svg path
 * @param {string} props.className - extra classes
 * @returns {JSX.Element}
 */
export default function CircleImage({ imageSrc, imageAlt, svgPath, className }) {
  return (
    <div
      className={`
        image-wrapper
        bg-brown
        rounded-full
        flex
        items-center
        justify-center
        p-1
        relative
        w-full
        duration-300
        group-hover:scale-90
        mx-auto
        ${className}
      `}
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={350}
        height={350}
        className={`
          w-full
          duration-300
          rounded-full
          group-hover:opacity-30
        `}
      />

      <svg
        viewBox="0 0 24 24"
        className={`
          fill-white
          w-16
          h-16
          absolute
          top-1/2
          left-1/2
          transform
          -translate-x-1/2
          -translate-y-1/2
          rotate-0 group-hover:-rotate-45
          duration-300
          delay-100
          opacity-0 group-hover:opacity-100
        `}
      >
        <path
          d={svgPath}
        />
      </svg>

    </div>
  )
}