import Title from '@/components/Title'
import Workshop from '@/components/Workshop'

import { fontTitle } from '@/data/fonts'
import { workshopsData } from '@/data/workshops'


export default function Workshops() {
  return (
    <section
      id="workshops"
      className={`
        workshops-wrapper
        relative
        mt-24
        overflow-hidden
      `}
    >

    <Title
      className={`
        md:text-center
        text-white
        select-none
      `}
    >
      My Workshops
    </Title>

      <div 
        className={`
          workshops-wrapper
        `}
      >
        {
          workshopsData.map((workshop, index) => (
            <Workshop
              key={index}
              image={workshop.image}
              title={workshop.title}
              text={workshop.text}
            />
          ))
        }
      </div>

    </section>
  )
}