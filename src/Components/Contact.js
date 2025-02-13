'use client'
import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API)
    alert('Form Submitted');
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
          {/* Contact Form Section */}
          <div className="md:w-1/2 bg-white p-8 rounded-lg shadow-md mb-8 md:mb-0 flex-1">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Contact US</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-lg text-gray-600 mb-2">YOUR NAME</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="email" className="text-lg text-gray-600 mb-2">PHONE NUMBER</label>
                <input
                  type="NUMBER"
                  id="NUMBER"
                  name="NUMBER"
                  value={formData.number}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="123-456-789"
                  required
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-lg text-gray-600 mb-2">YOUR MESSAGE</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="px-4 py-2 border rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
                  placeholder="Write your message here..."
                  required
                />
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Google Map Section */}
          <div className="md:w-1/2 relative flex-1">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.096656292789!2d-122.08217698485344!3d37.42205787981786!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbc7b4be10725%3A0xf59d178a87b32f52!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1610035984427!5m2!1sen!2sus"
              frameBorder="0"
              style={{ border: '0' }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}
