import AboutUs from '@/Components/AboutUs'
import Hero from '@/Components/Hero'
import Univercity from '@/Components/Univercity'
import React from 'react'
import ImageGrid from '@/Components/ImageGride'
import Dimploma from '@/Components/Dimploma'
import CareerPage from '@/Components/CareerPage'
import Contact from '@/Components/ContactForm'
import ContactForm from '@/Components/ContactForm'

export default function page() {
  return (
    <div>

      <Hero/>
      <ImageGrid />
      <Dimploma />
      <AboutUs />
      <Univercity />      
      <CareerPage />
      <ContactForm/>
    </div>
  )
}
