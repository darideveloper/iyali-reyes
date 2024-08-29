import Cta from "@/components/Cta"

import { formLink } from "@/data/contact"


/**
 * Cta to google form
 * 
 * @param {object} props
 * @param {boolean} props.dark - dark mode flag
 * @returns {JSX.Element}
 */
export default function CtaForm({ dark = true, className = "" }) {
  return (
    <div
      className={`
        cta-container
        w-full
        flex
        justify-center
        items-center
        ${className}
      `}
    >
      <Cta
        link={formLink}
        text="Agenda una cita"
        dark={dark}
        className={`
          scale-1190
          my-6
        `}
        target="_blank"
      />
    </div>
  )

}