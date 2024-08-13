import Title from '@/components/Title'
import Image from 'next/image'
import Quote from '@/components/Quote'


export default function Experience () {

  const quotesData = [
    {
      "text": "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
      "author": "Santa Solana Post"
    },
    {
      "text": "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
      "author": "Mariana's Luxe Travels"
    },
    {
      "text": "Boost your product and service's credibility by adding testimonials from your clients. People love recommendations so feedback from others who've tried it is invaluable.",
      "author": "Fairhill Journal"
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

        {/* <Image 
          src="/images/experience.webp"
          alt="Foto de Iyali Reyes en un bancon con vegetación"
          width={1500}
          height={1000}
          className={`
            w-full
            h-full
            absolute
            top-0
            left-0
            -z-10
            object-cover
          `}
        /> */}

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

        </div>
    
    </section>
  )
}