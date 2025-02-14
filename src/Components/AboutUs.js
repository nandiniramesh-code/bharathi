import Image from "next/image"

export default function AboutUs() {
  return (
    <div className="bg-gradient-to-b from-white to-gray-50 py-16">
      {/* About Us Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">
          About Us
        </h1>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <section className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main Content Container */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-12">
          {/* Left Side - Text Content */}
          <div className="lg:w-2/3 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-blue-900 mb-6 uppercase">
                THE BEST EDUCATION IS THE GREATEST FOUNDATION
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Our institution is committed to fostering a holistic educational experience that integrates 
                critical thinking, practical skills, and a well-rounded understanding of the world. 
                We emphasize an approach that not only equips students with academic knowledge but also 
                prepares them to tackle real-world challenges with confidence and adaptability.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Balanced Education
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We believe in an education system that fosters intellectual curiosity, analytical thinking, 
                  and problem-solving abilities. Our curriculum is designed to provide students with not only 
                  theoretical knowledge but also practical applications, allowing them to make meaningful contributions 
                  to their chosen fields.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Activities Beyond the Classroom
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Education extends beyond textbooks and lecture halls. Our university provides students with 
                  opportunities for experiential learning, personal development, and active community engagement.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Connectivity with Industry Leaders
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We maintain strong connections with various industries to facilitate real-world engagement 
                  and ensure that students receive hands-on experience in their respective fields.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Career Support & Professional Development
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  To help students achieve a smooth transition from education to employment, we offer personalized 
                  career guidance, mentorship programs, and networking opportunities.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Short-Term Skill Development Courses
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  For those looking to enhance their expertise in a shorter time frame, we offer fast-paced, 
                  focused short courses that accelerate personal and professional development.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Learning with Experts & Mentors
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Students benefit from direct interaction with experienced faculty and industry experts. 
                  Our programs offer opportunities to gain insights and mastery in specialized fields 
                  through guest lectures, workshops, and mentorship sessions.
                </p>
              </div>
            </div>

            <div className="space-y-6 bg-white p-8 rounded-xl shadow-lg border border-gray-100 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">
                  Why Choose Our Institution?
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We are dedicated to providing a high-quality educational experience supported by a team 
                  of experienced faculty members, modern learning facilities, and an industry-aligned curriculum.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Our Mission</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Our mission is to empower the next generation by providing them with the right resources, 
                  opportunities, and support to succeed. We focus on cultivating environments that encourage 
                  creativity, innovation, critical thinking, and emotional intelligence.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-blue-800 mb-3">Our Vision</h3>
                <p className="text-gray-700 text-lg leading-relaxed">
                  In today's rapidly evolving world, continuous learning and professional development 
                  are essential for long-term success. Our vision is to develop individuals who are:
                </p>
                <ul className="list-disc pl-6 text-gray-700 text-lg leading-relaxed mt-3 space-y-2">
                  <li>Equipped with industry-relevant skills</li>
                  <li>Capable of adapting to changing technologies</li>
                  <li>Prepared for global opportunities</li>
                  <li>Committed to lifelong learning</li>
                  <li>Ready to make meaningful contributions to society</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Image or Additional Content */}
          <div className="lg:w-1/3 sticky top-24">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Key Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Industry-Aligned Curriculum</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Experienced Faculty</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Modern Facilities</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Practical Training</span>
                </li>
                <li className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                  <span className="text-gray-700">Career Support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
