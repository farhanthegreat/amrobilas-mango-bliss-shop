
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingMangoes from '@/components/FloatingMangoes';
import { Clock, MapPin, Thermometer, Calendar } from 'lucide-react';

const Varieties = () => {
  const varieties = [
    {
      id: 1,
      name: "Himsagar",
      title: "The King of Mangoes",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop",
      origin: "Rajshahi & Chapai Nawabganj",
      season: "May - June",
      characteristics: {
        taste: "Exceptionally sweet with mild aroma",
        texture: "Soft, juicy, fiberless",
        color: "Golden yellow when ripe",
        size: "Medium to large (200-300g)"
      },
      description: "Known as the 'King of Mangoes' in Bangladesh, Himsagar is the most sought-after variety. Its name means 'ocean of snow', referring to its incredibly sweet and creamy texture.",
      tips: "Best consumed fresh. Store at room temperature until soft, then refrigerate for 2-3 days.",
      nutrition: "Rich in Vitamin C, Vitamin A, and dietary fiber"
    },
    {
      id: 2,
      name: "Langra",
      title: "The Traditional Favorite",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop",
      origin: "Chapai Nawabganj & Rajshahi",
      season: "June - July",
      characteristics: {
        taste: "Perfect balance of sweet and tangy",
        texture: "Smooth, minimal fiber",
        color: "Green-yellow skin, orange flesh",
        size: "Medium (150-250g)"
      },
      description: "A traditional variety beloved for its unique sweet-tangy flavor profile. Despite its greenish appearance when ripe, it offers exceptional taste.",
      tips: "Don't judge by color - softness indicates ripeness. Great for making mango juice.",
      nutrition: "High in antioxidants and natural enzymes"
    },
    {
      id: 3,
      name: "Fazli",
      title: "The Family Size",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop",
      origin: "Rajshahi & Dinajpur",
      season: "July - August",
      characteristics: {
        taste: "Mildly sweet with pleasant aroma",
        texture: "Firm, slightly fibrous",
        color: "Green to yellow-green",
        size: "Large (300-500g)"
      },
      description: "The largest mango variety in Bangladesh, perfect for families. One Fazli mango can satisfy multiple people.",
      tips: "Excellent for making mango pickles when raw. Allow to ripen naturally for best flavor.",
      nutrition: "Good source of potassium and vitamins"
    },
    {
      id: 4,
      name: "Gopalbhog",
      title: "The Premium Delicacy",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop",
      origin: "Dinajpur & Rangpur",
      season: "June - July",
      characteristics: {
        taste: "Intensely sweet, aromatic",
        texture: "Creamy, melts in mouth",
        color: "Bright yellow with red blush",
        size: "Small to medium (100-200g)"
      },
      description: "A rare and premium variety with unmatched sweetness. Limited availability makes it highly prized among mango connoisseurs.",
      tips: "Best eaten immediately when soft. Handle with care due to delicate skin.",
      nutrition: "Concentrated nutrients due to smaller size"
    },
    {
      id: 5,
      name: "Khirsapat",
      title: "The Sweet Surprise",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop",
      origin: "Satkhira & Jessore",
      season: "May - June",
      characteristics: {
        taste: "Very sweet with unique flavor",
        texture: "Soft, juicy, minimal fiber",
        color: "Golden yellow",
        size: "Medium (150-250g)"
      },
      description: "Known for its exceptional sweetness and unique flavor profile. The name translates to 'milk-like', referring to its creamy texture.",
      tips: "Perfect for desserts and direct consumption. Store carefully as it bruises easily.",
      nutrition: "High natural sugar content and vitamins"
    },
    {
      id: 6,
      name: "Ashwina",
      title: "The Late Season Gem",
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=600&h=400&fit=crop",
      origin: "Chapai Nawabganj",
      season: "August - September",
      characteristics: {
        taste: "Sweet with mild tanginess",
        texture: "Firm, good fiber content",
        color: "Yellow-green to yellow",
        size: "Medium to large (200-350g)"
      },
      description: "The late-season variety that extends the mango season into late summer. Perfect for those who want to enjoy mangoes longer.",
      tips: "Great for making mango drinks and preserves. Stores well compared to other varieties.",
      nutrition: "Good balance of natural sugars and fiber"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <FloatingMangoes />
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Mango Varieties <span className="animate-pulse">🥭</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Discover the rich diversity of Bangladeshi mangoes. Each variety tells a story of tradition, 
            taste, and the perfect balance of nature's sweetness.
          </p>
        </div>
      </section>

      {/* Varieties Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {varieties.map((variety, index) => (
              <div key={variety.id} className={`flex flex-col lg:flex-row gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Image */}
                <div className="lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={variety.image} 
                      alt={variety.name}
                      className="w-full h-64 lg:h-80 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h2 className="text-4xl font-bold text-gray-800 mb-2">{variety.name}</h2>
                    <p className="text-xl text-orange-600 font-semibold">{variety.title}</p>
                  </div>

                  <p className="text-gray-700 text-lg leading-relaxed">{variety.description}</p>

                  {/* Quick Info */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <MapPin className="text-green-600" size={20} />
                      <span className="text-sm text-gray-600">{variety.origin}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="text-blue-600" size={20} />
                      <span className="text-sm text-gray-600">{variety.season}</span>
                    </div>
                  </div>

                  {/* Characteristics */}
                  <div className="bg-yellow-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-gray-800 mb-4">Characteristics</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div><strong>Taste:</strong> {variety.characteristics.taste}</div>
                      <div><strong>Texture:</strong> {variety.characteristics.texture}</div>
                      <div><strong>Color:</strong> {variety.characteristics.color}</div>
                      <div><strong>Size:</strong> {variety.characteristics.size}</div>
                    </div>
                  </div>

                  {/* Tips & Nutrition */}
                  <div className="space-y-3">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-green-800 mb-2">Storage Tips</h5>
                      <p className="text-green-700 text-sm">{variety.tips}</p>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-orange-800 mb-2">Nutrition</h5>
                      <p className="text-orange-700 text-sm">{variety.nutrition}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Season Calendar */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Mango Season Calendar</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
              {['May', 'June', 'July', 'August', 'September', 'October'].map((month) => (
                <div key={month} className="bg-white p-4 rounded-lg shadow-md text-center">
                  <h4 className="font-bold text-gray-800 mb-2">{month}</h4>
                  <div className="space-y-1 text-sm">
                    {month === 'May' && <span className="text-yellow-600">Himsagar, Khirsapat</span>}
                    {month === 'June' && <span className="text-orange-600">Langra, Gopalbhog</span>}
                    {month === 'July' && <span className="text-green-600">Fazli</span>}
                    {month === 'August' && <span className="text-blue-600">Ashwina</span>}
                    {(month === 'September' || month === 'October') && <span className="text-gray-400">Off Season</span>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Varieties;
