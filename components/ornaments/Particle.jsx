/**
 * Particle ornament component
 * @param {Object} props - Component props
 * @param {string} props.className - Component class name
 * @returns {JSX.Element} Particle component
 */
export default function Particle({ className }) {
  return (
    <svg
      viewBox="0 0 100 88" 
      className={`
        fill-brown
        w-10
        h-auto
        ${className}
      `}
    >
      <path d="m32.4 9.5c0.3 2.8 0.9 9.5 1.2 15 0.7 9.8 0.6 10.1-2.5 16-1.7 3.3-6.4 9.5-10.4 13.8-4.5 4.9-6.8 8.1-6.2 8.7 0.6 0.5 3.9 0.1 8-1.1 4.7-1.4 8.9-1.9 13-1.6 3.6 0.2 8.4 1.4 12 3.1 4.5 2 8.1 4.9 14.4 11.4l8.4 8.7c-1.1-8.5-1.6-15.3-2-20.5-0.5-8.9-0.4-9.8 2.1-14.8 1.4-2.8 6-8.7 10.1-12.9 4.1-4.3 7.4-8.4 7.5-9 0-0.7-0.8-1.3-1.7-1.3-1 0-5.4 0.7-9.8 1.6-5.1 1-10 1.4-13.5 1-3.5-0.4-6.9-1.5-9.5-3.2-2.2-1.5-8-6.6-12.9-11.3l-8.8-8.6z"/>
    </svg>
  )

}