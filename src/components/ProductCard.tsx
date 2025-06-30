
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Star, ShoppingCart } from 'lucide-react';

interface ProductCardProps {
  id: number;
  name: string;
  variety: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  description: string;
  inStock: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  variety,
  price,
  originalPrice,
  image,
  rating,
  reviews,
  description,
  inStock
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsAdding(false);
    console.log(`Added ${name} to cart`);
  };

  return (
    <Card 
      className="group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-0 shadow-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="p-0 relative overflow-hidden">
        <div className="aspect-square bg-gradient-to-br from-yellow-100 to-orange-100 relative">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Discount Badge */}
          {originalPrice && (
            <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
            </div>
          )}
          
          {/* Stock Status */}
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold ${
            inStock ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
          }`}>
            {inStock ? 'In Stock' : 'Out of Stock'}
          </div>

          {/* Animated Overlay */}
          <div className={`absolute inset-0 bg-black/20 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="https://i.postimg.cc/Y9H9hPk1/himsagor.jpg" 
                alt="Himsagar Mango" 
                className="w-16 h-16 object-cover rounded-full animate-bounce shadow-lg"
              />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="mb-2">
          <span className="text-sm text-green-600 font-medium bg-green-50 px-2 py-1 rounded-full">
            {variety}
          </span>
        </div>
        
        <CardTitle className="text-xl font-bold text-gray-800 mb-2 group-hover:text-yellow-600 transition-colors">
          {name}
        </CardTitle>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Rating */}
        <div className="flex items-center mb-4">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${
                  i < Math.floor(rating) 
                    ? 'text-yellow-400 fill-current' 
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-600 ml-2">
            {rating} ({reviews} reviews)
          </span>
        </div>

        {/* Price */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-gray-800">
              ৳{price}
            </span>
            {originalPrice && (
              <span className="text-lg text-gray-500 line-through">
                ৳{originalPrice}
              </span>
            )}
          </div>
          <span className="text-sm text-gray-600">per kg</span>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          onClick={handleAddToCart}
          disabled={!inStock || isAdding}
          className={`w-full font-semibold py-3 rounded-full transition-all duration-300 ${
            inStock 
              ? 'bg-yellow-500 hover:bg-yellow-600 text-white hover:shadow-lg transform hover:scale-105' 
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
        >
          {isAdding ? (
            <div className="flex items-center justify-center space-x-2">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
              <span>Adding...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-2">
              <ShoppingCart size={18} />
              <span>{inStock ? 'Add to Cart' : 'Out of Stock'}</span>
            </div>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
