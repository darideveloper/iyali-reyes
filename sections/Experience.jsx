import Title from '@/components/Title'
import Quote from '@/components/Quote'
import CtaForm from '@/components/CtaForm'


export default function Experience() {

  const quotesData = [
    {
      "text": "Me siento extraordinaria, y es gracias a que pude conectar conmigo a través del estilo y se lo debo a mi coach Iya Reyes, gracias a su coaching pude conectar con la persona en mi interior que quiere expresar quien es con su estilo.",
      "author": "Karina Hernández"
    },
    {
      "text": "Iya fue mi invdersión en mi, me ayudo a descubrir mi estilo, me hizo sentir muy cómoda y que yo lo podía todo, ya no tengo los mismos habitos al vestir, ahora pienso que hare, como me quiero sentir y en qué quiero proyectar antes de vestirme.",
      "author": "Mariana Tomasini"
    },
    {
      "text": "Tengo mayor experiencia en que comprar, que es lo que me queda, Iya me fue llevando de la mano y ya identifico mi estilo, qué telas, ahora si ya no me dan miedo las tiendas, llevaba toda la vida sin entrar.",
      "author": "Pam Villa"
    },
  ]

  return (
    <section
      id="experience"
      className={`
        experience
        mt-24
        w-full
        relative
        py-20 md:py-48
        bg-[url('/images/experience.webp')]
        paralax
      `}
    >

      <div
        className={`
          container
        `}
      >

        <Title
          className={`
            text-white
          `}
        >
          Experiencias de mis coachees
        </Title>

        <div
          className={`
            quotes
            grid
            grid-cols-1 md:grid-cols-3
            gap-16 md:gap-24
            w-1/2 md:w-full
            mx-auto
          `}
        >
          {
            quotesData.map((quote, index) => (
              <Quote
                key={index}
                text={quote.text}
                author={quote.author}
              />
            ))
          }

        </div>

      <CtaForm 
        dark={false}
        className={`
          mt-12
          -mb-12
        `}
      />

      </div>

    </section>
  )
}