/**
 * Quote component
 * Text with author and decorative quote icon
 * 
 * @param {object} props
 * @param {string} props.text
 * @param {string} props.author
 */
export default function Quote({ text, author, dataAosDelay = 0 }) {
  return (
    <article
      className={`
        quote
        text-white
        flex
        flex-col
        items-start
        justify-center
        gap-8
      `}
      data-aos="zoom-in"
      data-aos-delay={dataAosDelay}
    >

      <svg
        viewBox="0 0 24 24"
        className={`
          w-8
          h-8
          fill-white
        `}
      >
        <path
          d="m21.301 4c.411 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.738 4.129-4.308 4.129-3.24 0-4.83-2.547-4.83-5.307 0-5.98 6.834-10.693 8.468-10.693zm-10.833 0c.41 0 .699.313.699.663 0 .248-.145.515-.497.702-1.788.948-3.858 4.226-3.858 6.248 3.016-.092 4.326 2.582 4.326 4.258 0 2.007-1.739 4.129-4.308 4.129-3.241 0-4.83-2.547-4.83-5.307 0-5.98 6.833-10.693 8.468-10.693z"
        />
      </svg>

      <p>
        {text}
      </p>

      <p>
        —
        <br />
        {author}
      </p>

    </article>
  )
}