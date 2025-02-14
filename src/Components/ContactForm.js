import React from "react";

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
          <p>
            <strong>📍 Address:</strong> Main Bazar, Darbar Building,  
            Thalil Temple Road, Nileshwaram, Kerala, India
          </p>
          <p>
            <strong>🕒 Office Time:</strong> 9:00 AM to 5:00 PM
          </p>
          <p>
            <strong>📞 Phone:</strong> 08304964708
          </p>
          <p>
            <strong>💬 WhatsApp:</strong> 08304964708
          </p>
          <p>
            <strong>📧 Email:</strong>  
            <a href="mailto:b2433720@gmail.com" className="text-blue-600 underline">
              b2433720@gmail.com
            </a>
          </p>
          <p>
            <strong>👤 Contact Person:</strong> M. Prakashan
          </p>
        </div>
      </div>

      {/* Right Section - Contact Form (Formspree Integration) */}
      <div className="md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-md font-bold">
        <form 
          action="https://formspree.io/f/mdkalrgg" // Replace {your_form_id} with your actual Formspree ID
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

          <button type="submit" className="w-full bg-blue-900 text-white py-2 rounded hover:bg-blue-800 transition">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
