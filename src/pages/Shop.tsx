
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingMangoes from '@/components/FloatingMangoes';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Search, Filter, Grid, List } from 'lucide-react';

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'All Products', count: 24 },
    { id: 'premium', name: 'Premium Mangoes', count: 8 },
    { id: 'regular', name: 'Regular Mangoes', count: 6 },
    { id: 'products', name: 'Mango Products', count: 6 },
    { id: 'gifts', name: 'Gift Boxes', count: 4 }
  ];

  const products = [
    // Premium Mangoes
    {
      id: 1,
      name: "Royal Himsagar Mango",
      variety: "Himsagar",
      price: 650,
      originalPrice: 750,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 234,
      description: "The crown jewel of Bangladeshi mangoes. Exceptionally sweet with a rich, creamy texture and divine aroma.",
      inStock: true,
      category: "premium",
      origin: "Rajshahi",
      season: "May-June"
    },
    {
      id: 2,
      name: "Premium Langra Mango",
      variety: "Langra",
      price: 520,
      originalPrice: 580,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 187,
      description: "Perfect balance of sweet and tangy flavors with a smooth, fiberless texture. A traditional favorite.",
      inStock: true,
      category: "premium",
      origin: "Chapai Nawabganj",
      season: "June-July"
    },
    {
      id: 3,
      name: "Exclusive Gopalbhog Mango",
      variety: "Gopalbhog",
      price: 720,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      rating: 4.9,
      reviews: 156,
      description: "Rare and exquisite variety with unmatched sweetness. Limited availability makes it truly special.",
      inStock: false,
      category: "premium",
      origin: "Dinajpur",
      season: "June-July"
    },
    {
      id: 4,
      name: "Golden Khirsapat Mango",
      variety: "Khirsapat",
      price: 580,
      originalPrice: 650,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      rating: 4.7,
      reviews: 143,
      description: "Medium-sized with exceptional sweetness and minimal fiber. Perfect for desserts and direct consumption.",
      inStock: true,
      category: "premium",
      origin: "Satkhira",
      season: "May-June"
    },

    // Regular Mangoes
    {
      id: 5,
      name: "Fresh Fazli Mango",
      variety: "Fazli",
      price: 380,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 298,
      description: "Large, juicy mangoes perfect for families. Great value with excellent taste and texture.",
      inStock: true,
      category: "regular",
      origin: "Rajshahi",
      season: "July-August"
    },
    {
      id: 6,
      name: "Sweet Ashwina Mango",
      variety: "Ashwina",
      price: 420,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      rating: 4.4,
      reviews: 167,
      description: "Late season variety with rich sweetness. Perfect for extending the mango season enjoyment.",
      inStock: true,
      category: "regular",
      origin: "Chapai Nawabganj",
      season: "August-September"
    },
    {
      id: 7,
      name: "Traditional Amrapali Mango",
      variety: "Amrapali",
      price: 350,
      image: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?w=400&h=400&fit=crop",
      rating: 4.3,
      reviews: 134,
      description: "Hybrid variety with consistent quality. Good balance of sweetness and tanginess.",
      inStock: true,
      category: "regular",
      origin: "Dinajpur",
      season: "June-July"
    },

    // Mango Products
    {
      id: 8,
      name: "Homemade Mango Pickle",
      variety: "Pickle",
      price: 280,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 89,
      description: "Traditional Bengali-style mango pickle made with organic raw mangoes and authentic spices.",
      inStock: true,
      category: "products",
      weight: "500g"
    },
    {
      id: 9,
      name: "Pure Mango Juice",
      variety: "Juice",
      price: 180,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
      rating: 4.5,
      reviews: 156,
      description: "100% natural mango juice with no added sugar or preservatives. Fresh and healthy.",
      inStock: true,
      category: "products",
      volume: "1L"
    },
    {
      id: 10,
      name: "Dried Mango Slices",
      variety: "Dried",
      price: 320,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
      rating: 4.4,
      reviews: 78,
      description: "Premium quality dried mango slices. Perfect healthy snack with concentrated mango flavor.",
      inStock: true,
      category: "products",
      weight: "250g"
    },
    {
      id: 11,
      name: "Mango Jam",
      variety: "Jam",
      price: 220,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=400&fit=crop",
      rating: 4.3,
      reviews: 92,
      description: "Artisanal mango jam made with premium mangoes. Perfect for breakfast and desserts.",
      inStock: true,
      category: "products",
      weight: "300g"
    },

    // Gift Boxes
    {
      id: 12,
      name: "Premium Gift Box",
      variety: "Gift Box",
      price: 1250,
      originalPrice: 1400,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      rating: 4.8,
      reviews: 67,
      description: "Curated selection of 3 premium mango varieties (2kg each) in beautiful packaging.",
      inStock: true,
      category: "gifts",
      contents: "Himsagar, Langra, Khirsapat"
    },
    {
      id: 13,
      name: "Family Combo Box",
      variety: "Combo",
      price: 980,
      image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400&h=400&fit=crop",
      rating: 4.6,
      reviews: 124,
      description: "Perfect for families - 5kg mixed varieties with mango products included.",
      inStock: true,
      category: "gifts",
      contents: "Mixed mangoes + Products"
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.variety.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <FloatingMangoes />
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Our Premium <span className="animate-pulse">🥭</span> Collection
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover the finest selection of Bangladeshi mangoes and mango products, 
            sourced directly from premium orchards across the country.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white/80 backdrop-blur-sm sticky top-20 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search mangoes and products..."
                className="w-full pl-10 pr-4 py-3 rounded-full border border-gray-200 focus:border-yellow-400 focus:outline-none"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* View Mode */}
            <div className="flex items-center space-x-2">
              <Button
                variant={viewMode === 'grid' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('grid')}
              >
                <Grid size={16} />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'outline'}
                size="sm"
                onClick={() => setViewMode('list')}
              >
                <List size={16} />
              </Button>
            </div>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 mt-6 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-yellow-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-yellow-100'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              {categories.find(cat => cat.id === selectedCategory)?.name || 'All Products'}
            </h2>
            <p className="text-gray-600">
              Showing {filteredProducts.length} products
              {searchTerm && ` for "${searchTerm}"`}
            </p>
          </div>

          <div className={`grid gap-8 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
              : 'grid-cols-1 max-w-4xl mx-auto'
          }`}>
            {filteredProducts.map((product) => (
              <div key={product.id} className={viewMode === 'list' ? 'transform scale-95' : ''}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🥭</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">No products found</h3>
              <p className="text-gray-600">
                Try adjusting your search or filter criteria
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Why Choose AmroBilas?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">🚚</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Fresh Delivery</h3>
              <p className="text-gray-600">Direct from orchard to your doorstep within 24 hours</p>
            </div>
            
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Organic Quality</h3>
              <p className="text-gray-600">Naturally grown without harmful chemicals or pesticides</p>
            </div>
            
            <div className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Best Price</h3>
              <p className="text-gray-600">Competitive pricing with seasonal discounts and offers</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Shop;
