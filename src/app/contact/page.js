import ContactForm from "@/Components/ContactForm";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 ">
      <h1 className="text-3xl font-bold mb-6 text-center mt-14">CONTACT US</h1>

      {/* Centered Image */}
      <div className="w-full flex justify-center mb-6">
        <Image
          src="/bb.jpg" // Replace with your actual image path
          alt="Join Bharathi Academy"
          width={800}
          height={600}
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Contact Form */}
      <div className="w-full flex justify-center">
        <ContactForm />
      </div>
    </div>
  );
}
