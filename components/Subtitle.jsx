import { fontTitle } from "@/data/fonts"

/**
 * Title component
 * h3 title with font title style
 * 
 * @param {object} props
 * @param {string} props.children
 * @returns {JSX.Element}
 */
export default function Subtitle ({ children, className }) {
  return (
    <h3
      className={`
        ${fontTitle.className}
        text-xl 
        text-brown
        font-bold
        mb-6
        text-center
        leading-loose
        ${className}
      `}
    >
      {children}
    </h3>
  )
}