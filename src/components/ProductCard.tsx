
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
      className="group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white/90 backdrop-blur-sm border-0 shadow-lg hover:shadow-green-200/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="p-0 relative overflow-hidden">
        <div className="aspect-square bg-gradient-to-br from-green-100 via-yellow-100 to-orange-100 relative">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          
          {/* Discount Badge */}
          {originalPrice && (
            <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
              {Math.round(((originalPrice - price) / originalPrice) * 100)}% OFF
            </div>
          )}
          
          {/* Stock Status */}
          <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-semibold shadow-lg ${
            inStock 
              ? 'bg-gradient-to-r from-green-500 to-green-600 text-white' 
              : 'bg-gradient-to-r from-red-500 to-red-600 text-white'
          }`}>
            {inStock ? 'In Stock' : 'Out of Stock'}
          </div>

          {/* Animated Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-orange-500/20 transition-opacity duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="https://i.postimg.cc/Y9H9hPk1/himsagor.jpg" 
                alt="Himsagar Mango" 
                className="w-16 h-16 object-cover rounded-full animate-bounce shadow-lg border-2 border-white"
              />
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="mb-2">
          <span className="text-sm text-green-700 font-medium bg-gradient-to-r from-green-100 to-green-200 px-3 py-1 rounded-full border border-green-300">
            {variety}
          </span>
        </div>
        
        <CardTitle className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
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
                    ? 'text-orange-400 fill-current' 
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
            <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-orange-600 bg-clip-text text-transparent">
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
          className={`w-full font-semibold py-3 rounded-full transition-all duration-300 border-0 ${
            inStock 
              ? 'bg-gradient-to-r from-green-500 to-orange-500 hover:from-green-600 hover:to-orange-600 text-white hover:shadow-lg hover:shadow-green-200/50 transform hover:scale-105' 
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
