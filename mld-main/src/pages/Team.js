import React from 'react';
import NavBar from '../components/Navbar';
import backgroundPattern from '../components/assets/pattern-bg.png';
import man from './man.png';
import ad from './ad.png';
import mru from './mru.png';
import guavus from './guavus.png';
import byteprophecy from './byte.png';
import accenture from './accenture.png';

const FounderCard = ({ name, image, items }) => (
  <div className="max-w-xl rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300">
    <img 
      src={image} 
      alt={name}
      className="w-full h-100 object-cover object-center"
    />
    <div className="px-8 py-6">
      <h2 className="text-3xl font-bold mb-6 text-blue-900">{name}</h2>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="text-gray-700 text-base flex items-start">
            <span className="mr-3 text-blue-900">•</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const FoundersSection = () => {
  const founders = [
    {
      name: "Adityavijay Rathore",
      image: ad,
      items: [
        "Entrepreneur with 20 years of global experience across Products & Consulting in Data & AI",
        "Love building products, teams and culture",
        "Advisor in Zero to One journey for startups",
        "Occasional Investor in early-stage startups"
      ]
    },
    {
      name: "Manish Patil",
      image: man,
      items: [
        "Entrepreneur with 20+ years of global experience across Core Data & AI across industries",
        "Loves solving interesting data problems",
        "Advisor in Zero to One journey for startups",
        "Occasional Investor in early-stage startups"
      ]
    },
    {
      name: "Mrugank Parikh",
      image: mru,
      items: [
        "Entrepreneur with 20+ years of global experience across Consulting and Client servicing in Data & AI",
        "Loves solving for whitespaces",
        "Advisor in Zero to One journey for startups",
        "Occasional Investor in early-stage startups"
      ]
    }
  ];

  return (
    <>
      {/* Navbar and Header Container with Background */}
      <div className="relative w-full">
        <NavBar />
        <div className="relative w-full h-60 flex items-center justify-center">
          <h1 className="text-2xl font-bold text-black text-center">The Team</h1>
        </div>
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40" style={{ backgroundImage: `url(${backgroundPattern})` }}></div>
      </div>

      {/* Main Content */}
      <div className="min-h-screen px-6 py-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {founders.map((founder) => (
              <FounderCard
                key={founder.name}
                name={founder.name}
                image={founder.image}
                items={founder.items}
              />
            ))}
          </div>

          {/* Logos Section */}
          <div className="mt-12 flex flex-wrap justify-center items-center gap-12">
            <img src={guavus} alt="Guavus" className="h-24 md:h-18 lg:h-18 object-contain" />
            <img src={byteprophecy} alt="Byte Prophecy" className="h-24 md:h-18 lg:h-32 object-contain" />
            <img src={accenture} alt="Accenture" className="h-24 md:h-28 lg:h-32 object-contain" />
          </div>
        </div>
      </div>
    </>
  );
};

export default FoundersSection;