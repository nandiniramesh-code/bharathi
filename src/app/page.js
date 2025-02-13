import AboutUs from '@/Components/AboutUs'
import Hero from '@/Components/Hero'
import Univercity from '@/Components/Univercity'
import React from 'react'
import ImageGrid from '@/Components/ImageGride'
import Dimploma from '@/Components/Dimploma'
import CareerPage from '@/Components/CareerPage'
import Contact from '@/Components/Contact'

export default function page() {
  return (
    <div>

      <Hero/>
      <AboutUs />
      <Univercity />
      <ImageGrid />
      <Dimploma />
      <CareerPage />
      <Contact />
    </div>
  )
}
