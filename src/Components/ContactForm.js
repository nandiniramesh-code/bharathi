import React from "react";
import { FaMapMarkerAlt, FaClock, FaPhone, FaWhatsapp, FaEnvelope, FaUser, FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4 md:px-8 flex flex-col md:flex-row gap-10">
      {/* Left Section - Contact Info */}
      <div className="md:w-1/2 font-semibold">
        <h2 className="text-3xl font-bold text-blue-900">Get in Touch</h2>
        <p className="text-gray-600 mt-2">
          Contact us today to learn more about our services or discuss your specific requirements.
        </p>
        <div className="mt-6 space-y-4 text-gray-700">
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-blue-600 text-xl flex-shrink-0" />
            <span><strong>Address:</strong> Main Bazar, Darbar Building,  
            Thalil Temple Road, Nileshwaram, Kerala, India</span>
          </p>
          <p className="flex items-center gap-2">
            <FaClock className="text-blue-600 text-xl flex-shrink-0" />
            <span><strong>Office Time:</strong> 10:00 AM to 4:00 PM</span>
          </p>
          <p className="flex items-center gap-2">
            <FaPhone className="text-blue-600 text-xl flex-shrink-0 rotate-90" />
            <span><strong>Phone:</strong> 0467 2283667</span>
          </p>
          <p className="flex items-center gap-2">
            <FaPhone className="text-blue-600 text-xl flex-shrink-0 rotate-90" />
            <span><strong>Phone:</strong> 08304964708</span>
          </p>
          <p className="flex items-center gap-2">
            <FaWhatsapp className="text-blue-600 text-xl flex-shrink-0" />
            <span><strong>WhatsApp:</strong> 08304964708</span>
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-blue-600 text-xl flex-shrink-0" />
            <span>
              <strong>Email:</strong>{" "}
              <a href="mailto:bharathiacademy4@gmail.com" className="text-blue-600 hover:underline">
              bharathiacademy4@gmail.com
              </a>
            </span>
          </p>
          <p className="flex items-center gap-2">
            <FaUser className="text-blue-600 text-xl flex-shrink-0" />
            <span><strong>Contact Person:</strong> M. Prakashan</span>
          </p>
        </div>
      </div>

      {/* Right Section - Contact Form (Formspree Integration) */}
      <div className="md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md font-bold">
        <form 
          action="https://formspree.io/f/mdkalrgg"
          method="POST"
          className="space-y-4"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-gray-700">Name*</label>
              <input
                type="text"
                name="name"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="Your name"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-gray-700">Email*</label>
              <input
                type="email"
                name="email"
                className="w-full p-2 border border-gray-300 rounded mt-1"
                placeholder="your@email.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700">Phone</label>
            <input
              type="tel"
              name="phone"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="Your phone number"
            />
          </div>

          <div>
            <label className="block text-gray-700">Message*</label>
            <textarea
              name="message"
              className="w-full p-2 border border-gray-300 rounded mt-1"
              placeholder="How can we help you?"
              rows={4}
              required
            ></textarea>
          </div>

          <button type="submit" className="w-full bg-blue-900 text-white py-2 px-4 rounded hover:bg-blue-800 transition flex items-center justify-center gap-2">
            <span>Send Message</span>
            <FaPaperPlane className="text-sm" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
