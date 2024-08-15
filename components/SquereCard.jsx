import Subtitle from '@/components/Subtitle'


/**
 * SquereCard component (footer card)
 * 
 * @param {object} props - component props
 * @param {string} props.title - card title
 * @param {string} props.className - card class name
 * @param {ReactNode} props.children - card children
 * @returns {JSX.Element}
 */
export default function SquereCard({ children, title, className }) {
  return (
    <article 
      className={`
        squere
        text-white
        border-brown-light
        border-2
        m-2
        p-6
        ${className}
      `}
    >
      <Subtitle
        className={`
          text-white
        `}     
      >
        {title}
      </Subtitle>
      {children}
    </article>

  )
}