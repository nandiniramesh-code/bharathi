
import Dimploma from '@/Components/Dimploma'
import ImageGrid from '@/Components/ImageGride'
import React from 'react'
import Image from 'next/image'
export default function page() {
  return (
<div>
    <div className="flex flex-col items-center justify-center min-h-screen p-4 ">
          <h1 className="text-5xl font-bold mb-6 text-center text-blue-600 mt-14">OUR COURSES</h1>
    
          {/* Centered Image */}
          <div className="w-full flex justify-center mb-6">
            <Image
              src="/ccc.jpg" // Replace with your actual image path
              alt="Join Bharathi Academy"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
    <div className='mt-8'>
        <ImageGrid />
        <Dimploma />


    </div>
    </div>
    </div>
  )
}
