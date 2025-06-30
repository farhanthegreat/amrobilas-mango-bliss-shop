
import React from 'react';
import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Premium Himsagar Mango",
      variety: "Himsagar",
      price: 450,
      originalPrice: 550,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 127,
      description: "The king of mangoes with unmatched sweetness and aroma. Sourced from the finest orchards of Rajshahi.",
      inStock: true
    },
    {
      id: 2,
      name: "Golden Langra Mango",
      variety: "Langra",
      price: 380,
      originalPrice: 420,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 89,
      description: "Rich, creamy texture with a perfect balance of sweet and tangy flavors. A traditional favorite.",
      inStock: true
    },
    {
      id: 3,
      name: "Organic Fazli Mango",
      variety: "Fazli",
      price: 320,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 156,
      description: "Large, juicy mangoes with a delightful sweet flavor. Perfect for families and sharing.",
      inStock: true
    },
    {
      id: 4,
      name: "Exotic Gopalbhog Mango",
      variety: "Gopalbhog",
      price: 520,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 73,
      description: "Rare and exquisite variety known for its exceptional taste and limited availability.",
      inStock: false
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-yellow-500">Featured</span> Mangoes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of the finest Bangladeshi mangoes, 
            each variety offering a unique taste of tradition and quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
