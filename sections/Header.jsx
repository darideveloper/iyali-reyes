"use client"

import Link from 'next/link'
import Image from 'next/image'

import { navItems } from '@/data/nav'
import { fontTitle } from '@/data/fonts'
import { useState } from 'react'


export default function Header() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <header
      className={`
        header
        bg-transparent
        w-full
        container
        mx-auto
        flex
        items-center
        justify-between
      `}
    >

      <Link 
        href="/"
        className={`
          
        `}
      >
        <Image 
          src="/images/logo.webp"
          alt="Logo"
          width={150}
          height={150}
          className={`
            cursor-pointer
            w-16
            h-auto
          `}
        />
      </Link>
        

      <button
        className={`
          menu-btn
          p-3
          rounded-xl
          sm:hidden
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg 
          viewBox="0 0 24 24"
          className={`
            fill-brown
            w-5
            h-5
          `}
        >
          <path 
            d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z"
            className={`
              
            `}
          />  
        </svg>
      </button>

      <nav
        className={`
          fixed sm:static
          top-0
          ${isOpen ? 'left-0' : '-left-96'}
          w-72 sm:w-auto
          h-screen sm:h-auto
          bg-brown sm:bg-transparent
          z-10
          flex
          items-start
          justify-center
          duration-700
        `}
      >
        <ul
          className={`
            ${fontTitle.className}
            mt-16 sm:mt-0
            flex
            flex-col sm:flex-row
          `}
        >
          {
            navItems.map((item, index) => (
              <li 
                key={index}
              >
                <Link
                  href={item.link}
                  className={`
                    capitalize
                    text-center
                    block
                    py-6
                    px-2
                    sm:mx-2
                    text-white sm:text-black
                    duration-300
                    hover:opacity-50
                    sm:hover:text-orange
                  `}
                  target={item.target}
                  onClick={() => setIsOpen(false)}
                >
                  {item.text}
                </Link>
              </li>
            ))
          }
        </ul>
      </nav>

    </header>
  )
}