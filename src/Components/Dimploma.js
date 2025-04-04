"use client";

import Image from "next/image";

const cards = [
  { image: "/New/m.jpg", title: "B.Voc in Medical Lab Technology", description: "2 YEAR COURSES"},
  { image: "/New/o.jpg", title: "B.Voc in Operation Theatre Technology", description: "2 YEAR COURSES" },
  { image: "/New/helth.jpg", title: "B.Voc in Health Care Assistant", description: "2 YEAR COURSES" },
  { image: "/New/assnu.jpg", title: "B.Voc in Assistant Nursing Course", description: "2 YEAR COURSES" },
  { image: "/New/eccg.jpg", title: "B.Voc in ECG Basic Nursing First Aid", description: "2 YEAR COURSES" },
  { image: "/New/ho.jpg", title: "B.Voc in Health Administration", description: "2 YEAR COURSES" },
];

const Dimploma = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-6 pb-9">OUR DIPLOMA COURSES</h1>

      {/* Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-lg  overflow-hidden transform transition hover:scale-105 hover:shadow-xl"
          >
            <Image
              src={card.image}
              alt={card.title}
              width={300}
              height={200}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 text-center">
              <h2 className="text-xl font-semibold">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dimploma;
