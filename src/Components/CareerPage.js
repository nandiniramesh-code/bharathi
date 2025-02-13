"use client";

import Image from "next/image";

const CareerPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold text-gray-800 mb-6">CAREER OPPORTUNITIES</h1>

      {/* Image */}
      <div className="w-full max-w-3xl mb-6">
        <Image
          src="/W.jpg"
          alt="Career Opportunities at Bharathi Academy"
          width={800}
          height={600}
          className=""
        />
      </div>

      {/* Bottom Content After Image (Centered) */}
      <div className="w-full max-w-3xl mb-6 text-justify">
        <p className="text-4xl font-bold text-blue-800">
          Ready to take the next step in your career? Apply today and start your journey with
          Bharathi Academy to make a difference in the world of healthcare!
        </p>
      </div>

      {/* Additional Image in the Bottom Section */}
      <div className="w-full max-w-3xl mb-6">
        <Image
          src="/ww.jpg"  // Replace with your second image path
          alt="Join Bharathi Academy"
          width={800}
          height={600}
          className=""
        />
      </div>

      {/* Content Section */}
      <p className="text-2xl font-medium text-gray-700 max-w-2xl text-justify">
        At <span className="font-semibold">Bharathi Academy</span>, we ensure that every student
        receives the best education and career guidance. Our specialized programs are designed
        to provide industry-relevant skills, practical experience, and job placement assistance.
        With our strong network of healthcare institutions, we offer guaranteed internships and
        job opportunities, empowering students to build a secure and rewarding career in the
        medical field.
      </p>
    </div>
  );
};

export default CareerPage;
