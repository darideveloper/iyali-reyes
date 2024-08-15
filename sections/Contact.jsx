
'use client'

import Title from '@/components/Title'
import Subtitle from '@/components/Subtitle'
import Social from '@/components/Social'
import Input from '@/components/Input'
import TextArea from '@/components/TextArea'
import Select from '@/components/Select'
import Image from 'next/image'

import { socialsData } from '@/data/socials'
import { servicesData } from '@/data/services'
import { useState, useEffect } from 'react'


export default function Contact() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [service, setService] = useState('')
  const [isReady, setIsReady] = useState(false)

  const servicesNames = servicesData.map(service => service.title)

  const inputsData = [
    {
      "label": "Escribe tu nombre",
      "name": "name",
      "type": "text",
      "required": true,
      "value": name,
      "setValue": setName,
      "placeholder": "María Pérez",
      "options": [],
      "fullWidth": false,
    },
    {
      "label": "Escribe tu correo electrónico",
      "name": "email",
      "type": "email",
      "required": true,
      "value": email,
      "setValue": setEmail,
      "placeholder": "sample@email.com",
      "options": [],
      "fullWidth": false,
    },
    {
      "label": "Escribe tu número de teléfono",
      "name": "phone",
      "type": "tel",
      "required": false,
      "value": phone,
      "setValue": setPhone,
      "placeholder": "555-555-5555",
      "options": [],
      "fullWidth": false,
    },
    {
      "label": "¿Qué servicio te interesa?",
      "name": "service",
      "type": "select",
      "required": true,
      "value": service,
      "setValue": setService,
      "placeholder": "",
      "options": servicesNames,
      "fullWidth": false,
    },
    {
      "label": "Escribe tu mensaje",
      "name": "message",
      "type": "textarea",
      "required": true,
      "value": message,
      "setValue": setMessage,
      "placeholder": "Hola, me gustaría saber más acerca de tus servicios",
      "options": [],
      "fullWidth": true,
    },
  ]

  useEffect(() => {
    // Activate submit button when all required fields are filled
    const requiredInputs = inputsData.filter(input => input.required)
    const isReady = requiredInputs.every(input => input.value !== '')
    if (isReady) {
      setIsReady(true)
    } else {
      setIsReady(false)
    }
  }, [name, email, phone, message, service])


  return (
    <section
      id="contact"
      className={`
        contact
        grid
        grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5
        gap-6
        text-white
        my-20
      `}
    >
      <div className={`
          socials-wrapper
          bg-cover
          py-16 md:py-32
          px-6
          flex
          flex-col
          justify-center 
          items-center md:items-end
          xl:col-span-2
          relative

        `}
      >
        <Image 
          src='/images/contact.webp'
          alt='Forma parte de mi comunidad'
          width={600}
          height={1200}
          className={`
            absolute
            top-0
            right-0
            -z-10
            w-full
            h-full
            object-cover            
          `}
        />

        <Subtitle
          className={`
            text-white
            text-center md:text-left
            w-full
            max-w-md
          `}
        >
          Sígueme en mis redes sociales
        </Subtitle>

        <div
          className={`
            socials
            w-full
            max-w-md
          `}
        >

          {
            socialsData.map((social, index) => (
              <Social
                key={index}
                name={social.title}
                title={social.title}
                link={social.link}
                className={`
                  py-3
                `}
              />
            ))
          }
        </div>

      </div>
      
      <div className={`
          form-wrapper
          lg:col-span-2 xl:col-span-3
          my-8 md:my-28
          container
        `}
      >
        <Title>
          Envíame un mensaje
        </Title>

        <form
          action="#"
          method="post"
          className={`
            w-full
            max-w-4xl
          `}
        >

          {/* Regular inputs */}
          <div
            className={`
              inputs
              grid
              grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2
              gap-6
            `}
          >
            {
              inputsData.map((input, index) => {

                {/* Get input type */}
                let InputComponent = Input
                if (input.type === 'textarea') {
                  InputComponent = TextArea
                } else if (input.type === 'select') {
                  InputComponent = Select
                }

                {/* render input */}
                return (
                  <InputComponent
                    key={index}
                    label={input.label}
                    name={input.name}
                    type={input.type}
                    required={input.required}
                    value={input.value}
                    setValue={input.setValue}
                    placeholder={input.placeholder}
                    className={`
                      ${input.fullWidth ? 'col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2' : ''}
                    `}
                    options={input.options}
                  />
                )
              })
            }
          </div>

          <input 
            type='submit'
            value='Enviar'
            disabled={!isReady}
            className={`
              w-full
              max-w-xs
              p-4
              bg-brown
              text-white
              rounded-md
              cursor-pointer
              transition-all
              duration-300
              hover:bg-white
              hover:text-brown
              border-2
              border-brown
              text-xl
              mt-6
              ${!isReady && 'opacity-50 cursor-not-allowed pointer-events-none'}
            `}
          />

        </form>

      </div>
    </section>
  )
}