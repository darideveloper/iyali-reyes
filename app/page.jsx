'use client'

import { useEffect } from "react"

import Hero from "@/sections/Hero"
import Coach from "@/sections/Coach"
import Heals from "@/sections/Heals"
import Video from "@/sections/Video"
import Services from "@/sections/Services"
import Contact from "@/sections/Contact"
import Workshops from "@/sections/Workshops"
import Experience from "@/sections/Experience"
import Podcast from "@/sections/Podcast"
import Episodes from "@/sections/Episodes"

import AOS from "aos"

import "aos/dist/aos.css"


export default function Home() {

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: window.innerWidth < 768 ? 0 : 100,

    })
  }, [])

  return (
    <>
      <Hero />
      <Coach />
      <Heals />
      <Video />
      <Services />
      <Contact />
      <Workshops />
      <Experience />
      <Podcast />
      <Episodes />
    </>
  )
}
