"use client";

import Image from "next/image";

const CareerPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50 py-16 px-4 md:px-6">
      {/* Heading Section */}
      <div className="w-full max-w-4xl text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-900 mb-4 tracking-wide">
          CAREER OPPORTUNITIES
        </h1>
        <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      {/* First Image Section */}
      <div className="w-full max-w-3xl mb-12">
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="/W.jpg"
            alt="Career Opportunities at Bharathi Academy"
            width={800}
            height={600}
            className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
            priority
          />
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="w-full max-w-3xl mb-12 px-4">
        <div className="bg-gradient-to-r from-blue-800 to-blue-900 rounded-xl p-8 shadow-lg">
          <p className="text-2xl md:text-3xl font-bold text-white text-center leading-relaxed">
            Ready to take the next step in your career? Apply today and start your journey with
            Bharathi Academy to make a difference in the world of healthcare!
          </p>
        </div>
      </div>

      {/* Second Image Section */}
      <div className="w-full max-w-3xl mb-12">
        <div className="relative rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="/ww.jpg"
            alt="Join Bharathi Academy"
            width={800}
            height={600}
            className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-3xl px-4">
        <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-100">
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
            At <span className="font-semibold text-blue-900">Bharathi Academy</span>, we ensure that every student
            receives the best education and career guidance. Our specialized programs are designed
            to provide industry-relevant skills, practical experience, and job placement assistance.
          </p>
          <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mt-4">
            With our strong network of healthcare institutions, we offer guaranteed internships and
            job opportunities, empowering students to build a secure and rewarding career in the
            medical field.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CareerPage;
