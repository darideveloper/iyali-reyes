import { fontTitle } from "@/data/fonts"

/**
 * Title component
 * h2 title with font title style
 * 
 * @param {object} props
 * @param {string} props.children
 * @returns {JSX.Element}
 */
export default function Title ({ children, className }) {
  return (
    <h2
      className={`
        ${fontTitle.className}
        text-3xl 
        text-brown
        font-bold
        mb-6
        text-center md:text-left
        leading-loose
        ${className}
      `}
    >
      {children}
    </h2>
  )
}