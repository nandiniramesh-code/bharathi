import Image from "next/image"

export default function AboutUs() {
  return (
    <div>
       <div className="bg-white">
       {/* About Us Heading */}
       <div className="w-full text-center mb-8 bg-white pt-11">
        <h1 className="text-4xl font-bold text-black uppercase">
          About Us
        </h1>
      </div>

    
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 py-12 bg-white">
      
     
      {/* Left Side - Text Content */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-blue-900 uppercase">
          THE BEST EDUCATION IS THE GREATEST FOUNDATION
        </h2>
        <p className="text-gray-700 mt-4">
          Our institution is committed to fostering a holistic educational experience that integrates 
          critical thinking, practical skills, and a well-rounded understanding of the world. 
          We emphasize an approach that not only equips students with academic knowledge but also 
          prepares them to tackle real-world challenges with confidence and adaptability.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6">
          Balanced Education
        </h3>
        <p className="text-gray-700">
          We believe in an education system that fosters intellectual curiosity, analytical thinking, 
          and problem-solving abilities. Our curriculum is designed to provide students with not only 
          theoretical knowledge but also practical applications, allowing them to make meaningful contributions 
          to their chosen fields.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6">
          Activities Beyond the Classroom
        </h3>
        <p className="text-gray-700">
          Education extends beyond textbooks and lecture halls. Our university provides students with 
          opportunities for experiential learning, personal development, and active community engagement.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6">
          Connectivity with Industry Leaders
        </h3>
        <p className="text-gray-700">
          We maintain strong connections with various industries to facilitate real-world engagement 
          and ensure that students receive hands-on experience in their respective fields.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6">
          Career Support & Professional Development
        </h3>
        <p className="text-gray-700">
          To help students achieve a smooth transition from education to employment, we offer personalized 
          career guidance, mentorship programs, and networking opportunities.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6">
          Short-Term Skill Development Courses
        </h3>
        <p className="text-gray-700">
          For those looking to enhance their expertise in a shorter time frame, we offer fast-paced, 
          focused short courses that accelerate personal and professional development.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6">
          Learning with Experts & Mentors
        </h3>
        <p className="text-gray-700">
          Students benefit from direct interaction with experienced faculty and industry experts. 
          Our programs offer opportunities to gain insights and mastery in specialized fields 
          through guest lectures, workshops, and mentorship sessions.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6">
          Why Choose Our Institution?
        </h3>
        <p className="text-gray-700">
          We are dedicated to providing a high-quality educational experience supported by a team 
          of experienced faculty members, modern learning facilities, and an industry-aligned curriculum.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6">Our Mission</h3>
        <p className="text-gray-700">
          Our mission is to empower the next generation by providing them with the right resources, 
          opportunities, and support to succeed. We focus on cultivating environments that encourage 
          creativity, innovation, critical thinking, and emotional intelligence.
        </p>

        <h3 className="text-xl font-semibold text-blue-800 mt-6">Our Vision</h3>
        <p className="text-gray-700">
          In today's rapidly evolving world, continuous learning and professional development 
          are essential for long-term success. Our vision is to develop individuals who are:
        </p>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Adaptable and agile in an ever-changing professional landscape</li>
          <li>Equipped with cutting-edge knowledge in their respective fields</li>
          <li>Capable of leveraging technological advancements to drive innovation</li>
          <li>Resilient and future-ready, prepared to overcome industry challenges</li>
        </ul>
      </div>

      {/* Right Side - Images */}
      <div className="md:w-1/2 mt-8 md:mt-0 flex flex-col items-center">
        {/* Top Image */}
        <Image
          src="/l.jpg" // Replace with actual image path
          alt="Top Image"
          width={1000}
          height={1000}
          className=""
        />
        
        {/* Bottom Image */}
        <Image
          src="/ll.png" // Replace with actual image path
          alt="Bottom Image"
          width={1000}
          height={1000}
          className="rounded-lg"
        />
      </div>
    </section>
    </div>
  </div>
  )
}
