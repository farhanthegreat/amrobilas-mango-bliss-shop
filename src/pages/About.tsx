
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingMangoes from '@/components/FloatingMangoes';
import { Users, Award, Truck, Heart } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Passion for Quality",
      description: "Every mango is handpicked with love and care, ensuring only the finest fruits reach your table."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: "Supporting Farmers",
      description: "We work directly with local farmers, ensuring fair prices and sustainable farming practices."
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: "Premium Standards",
      description: "Our rigorous quality checks guarantee that every mango meets our high standards for taste and freshness."
    },
    {
      icon: <Truck className="w-8 h-8 text-green-500" />,
      title: "Fresh Delivery",
      description: "From orchard to your doorstep within 24 hours, maintaining the natural freshness and flavor."
    }
  ];

  const team = [
    {
      name: "Rahman Ahmed",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=300&h=300&fit=crop&crop=face",
      bio: "A passionate advocate for Bangladeshi mangoes with 15 years of experience in agriculture and food distribution."
    },
    {
      name: "Fatima Khatun",
      role: "Quality Control Manager",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=300&h=300&fit=crop&crop=face",
      bio: "Ensures every mango meets our premium standards with her expert knowledge of fruit quality assessment."
    },
    {
      name: "Karim Hassan",
      role: "Farmer Relations",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=300&h=300&fit=crop&crop=face",
      bio: "Builds strong relationships with our network of premium mango farmers across Bangladesh."
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
            About AmroBilas
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Bringing the luxury of premium Bangladeshi mangoes from our hearts to your homes, 
            one sweet bite at a time.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=400&fit=crop" 
                alt="Mango orchard with sunlight" 
                className="rounded-2xl shadow-2xl w-full h-80 object-cover"
              />
            </div>
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">Our Story</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                AmroBilas began as a dream in the heart of Rajshahi, where the finest mangoes in Bangladesh grow under the golden sun. 
                Our founder, Rahman Ahmed, grew up in a family of mango farmers and witnessed the incredible quality of local mangoes 
                that deserved to reach every corner of the country.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, we work with over 150 premium mango farmers across Rajshahi, Chapai Nawabganj, Dinajpur, and Satkhira, 
                ensuring that the authentic taste of Bangladeshi mangoes reaches urban families who value quality and tradition.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                "AmroBilas" means "our luxury" - because we believe that enjoying the finest mangoes should be a luxury 
                accessible to everyone who appreciates quality and authentic taste.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at AmroBilas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">From Orchard to Your Home</h2>
            <p className="text-xl text-gray-600">Our careful process ensures maximum freshness and quality</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌳</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Careful Selection</h3>
              <p className="text-gray-600">Our experts visit orchards daily, selecting only perfectly ripe mangoes using traditional knowledge passed down through generations.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📦</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Premium Packaging</h3>
              <p className="text-gray-600">Each mango is individually wrapped and packed in specially designed boxes that protect them during transport while allowing natural ripening.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">Swift Delivery</h3>
              <p className="text-gray-600">Temperature-controlled vehicles ensure your mangoes arrive fresh within 24 hours, maintaining their natural taste and nutritional value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind AmroBilas</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-orange-600 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl font-bold mb-2">150+</div>
              <div className="text-white/90">Partner Farmers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50,000+</div>
              <div className="text-white/90">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">6</div>
              <div className="text-white/90">Premium Varieties</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">24hr</div>
              <div className="text-white/90">Fresh Delivery</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
