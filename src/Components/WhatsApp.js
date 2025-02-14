import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon

export default function WhatsApp() {
    const whatsappNumber = "+918304964708"; // Replace with your actual WhatsApp number
    const whatsappMessage = "Hello, I would like more information";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div>
         <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-4 right-4 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
              >
                <FaWhatsapp size={40} />
              </a>
    </div>
  )
}
