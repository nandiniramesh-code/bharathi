import Image from 'next/image'
import React from 'react'

export default function Univercity() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Our University
        </h1>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8">
        {/* First Image - University Logo */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-48 h-48">
            <Image
              src="/c.png"
              alt="University Logo"
              width={192}
              height={192}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
          {/* First Paragraph */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <p>
              The University was established in the year 2011 under the Private University Act, 2006. It is pertinent to mention here that this University is located in the hinterland of Haryana and provides quality education mostly to rural students. The University is dedicated to delivering value education with a skill component, with an objective to provide livelihood to each of the students who pass out from the University. The University is geared up to implement NEP 2020 with full vigor and further focuses on quality, equity, accessibility, and accountability to empower students with knowledge, skills of the 21st Century, and values to increase their employability. This is achieved by enhancing the accessibility of quality education, ensuring equity and inclusion, encouraging the highest standards in teaching and learning with accountability, and promoting best practices in research and innovation.
            </p>
          </div>

          {/* Quote Section */}
          <div className="bg-blue-50 p-8 rounded-xl shadow-lg border-l-4 border-blue-600">
            <p className="italic text-blue-900">
              "At NHLM University, you will discover a new experience in a dynamic and supportive environment. Your horizons will broaden, and you will discover the liberating power of new ideas and insights. You will be intricately woven into our core fabric of flexibility, creativity, and innovation and walk out with the confidence, energy, and ability that you need to realize your dreams and potential. Here you will explore a new world of opportunities. Come and see for yourself the vibrancy and innovation inherent in our courses and environment."
            </p>
          </div>

          {/* Second Paragraph */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <p>
              NHLM University is home to the talented and gifted, to those with a passion and a commitment, and to those who have the will to show you the path, help you overcome obstacles, and celebrate the moment when you reach the top. We also believe in making you understand the importance of carrying the torch and lending a helping hand in the same way as it was once extended to you. We prepare you to conquer the challenges of life and to compete successfully in the most adverse circumstances, and also realize that although survival belongs to the fittest, competition does not imply the success of only one. Albeit, the position at the pinnacle is precarious, it is large enough to accommodate one and all.
            </p>
          </div>

          {/* Second Image */}
          <div className="my-12">
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <Image
                src="/download.jpg"
                alt="University Campus Life"
                width={1000}
                height={600}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Final Paragraphs */}
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 space-y-6">
            <p>
              In our firm belief, value based learning has far greater relevance in a dynamic and every changing work environment. We ensure that our students share a very special relationship with the institution - easy accessibility to the faculty guidance, firm assurance of staff support and a very caring and nurturing environment, all lead to effective realization of our objectives is one of openness, mutual trust and faith where mission is to demonstrate an unconditional commitment to learning. Our academic programs are not only benchmarked against international norms & standards but are periodically streamlined according to the requirement of the industry.
            </p>
            <p>
              We provide individual attention to all our students, thus enhancing their ability to acquire and apply knowledge. Vibrant and skilled faculty base inducted both from academia and industry possesses in addition to impressive credentials, a missionary zeal for teaching and shaping careers at NIILM University. So come and experience the difference and become a part of the ever growing family.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
