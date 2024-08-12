import { fontTitle } from "@/data/fonts"

/**
 * Title component
 * @param {object} props
 * @param {string} props.children
 * @returns {JSX.Element}
 */
export default function H3 ({ children }) {
  return (
    <h3
      className={`
        ${fontTitle.className}
        text-3xl
        text-brown
        font-bold
        mb-6
        text-center md:text-left
        leading-relaxed
      `}
    >
      {children}
    </h3>
  )
}