
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingMangoes from '@/components/FloatingMangoes';
import { Calendar, User, Clock, ArrowRight } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to Storing Mangoes at Home",
      excerpt: "Learn the best techniques to keep your mangoes fresh and perfectly ripe for longer periods.",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=600&h=400&fit=crop",
      author: "Dr. Rashida Ahmed",
      date: "June 15, 2024",
      readTime: "5 min read",
      category: "Tips & Care",
      content: `
        <p>Storing mangoes properly is crucial for maintaining their flavor, texture, and nutritional value. Here's everything you need to know about keeping your mangoes in perfect condition.</p>
        
        <h3>For Unripe Mangoes:</h3>
        <ul>
          <li>Store at room temperature (20-25°C) away from direct sunlight</li>
          <li>Place in a paper bag with a banana to speed up ripening</li>
          <li>Check daily for softness - this indicates ripeness</li>
          <li>Avoid plastic bags as they trap moisture and cause rotting</li>
        </ul>

        <h3>For Ripe Mangoes:</h3>
        <ul>
          <li>Refrigerate immediately to slow down over-ripening</li>
          <li>Store in the crisper drawer for optimal humidity</li>
          <li>Use within 3-5 days for best quality</li>
          <li>Keep away from vegetables that produce ethylene gas</li>
        </ul>

        <p>Remember: A properly stored mango retains up to 90% of its vitamin C content and maintains its natural sweetness.</p>
      `
    },
    {
      id: 2,
      title: "Health Benefits of Bangladeshi Mangoes: A Nutritionist's Perspective",
      excerpt: "Discover the incredible health benefits packed in every bite of our premium Bangladeshi mangoes.",
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=400&fit=crop",
      author: "Nutritionist Fatima Khan",
      date: "June 10, 2024",
      readTime: "7 min read",
      category: "Health & Nutrition",
      content: `
        <p>Bangladeshi mangoes are not just delicious - they're nutritional powerhouses packed with essential vitamins, minerals, and antioxidants.</p>
        
        <h3>Key Nutritional Benefits:</h3>
        <ul>
          <li><strong>Vitamin C:</strong> One medium mango provides 60% of daily requirement</li>
          <li><strong>Vitamin A:</strong> Essential for eye health and immune system</li>
          <li><strong>Folate:</strong> Important for cell division and DNA synthesis</li>
          <li><strong>Potassium:</strong> Helps regulate blood pressure</li>
          <li><strong>Antioxidants:</strong> Protect against cellular damage</li>
        </ul>

        <h3>Specific Health Benefits:</h3>
        <p><strong>Digestive Health:</strong> Mangoes contain digestive enzymes that help break down proteins and aid digestion.</p>
        <p><strong>Heart Health:</strong> The fiber, potassium, and antioxidants support cardiovascular health.</p>
        <p><strong>Skin Health:</strong> Vitamin C promotes collagen production for healthy, glowing skin.</p>
        <p><strong>Eye Health:</strong> Beta-carotene converts to vitamin A, essential for good vision.</p>
      `
    },
    {
      id: 3,
      title: "Traditional Mango Recipes from Rural Bangladesh",
      excerpt: "Explore authentic recipes passed down through generations in Bangladeshi mango-growing regions.",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop",
      author: "Chef Aminul Islam",
      date: "June 5, 2024",
      readTime: "10 min read",
      category: "Recipes & Culture",
      content: `
        <p>Traditional mango recipes from Bangladesh represent centuries of culinary wisdom, passed down through generations of mango farmers and home cooks.</p>
        
        <h3>Aam Ras (Traditional Mango Pulp):</h3>
        <p>The simplest and most beloved preparation:</p>
        <ul>
          <li>2 ripe Himsagar mangoes</li>
          <li>1 tablespoon sugar (optional)</li>
          <li>Pinch of cardamom powder</li>
          <li>Few drops of rose water</li>
        </ul>
        <p>Blend until smooth and serve chilled. This traditional recipe highlights the natural sweetness of premium mangoes.</p>

        <h3>Aam Vorta (Mango Mash):</h3>
        <p>A rustic preparation popular in villages:</p>
        <ul>
          <li>1 ripe Langra mango</li>
          <li>2 green chilies</li>
          <li>1 tablespoon mustard oil</li>
          <li>Salt to taste</li>
          <li>Fresh coriander</li>
        </ul>
        <p>Mash all ingredients together and serve with rice. This preparation balances the mango's sweetness with savory elements.</p>
      `
    },
    {
      id: 4,
      title: "Mango Season 2024: What to Expect This Year",
      excerpt: "Weather patterns, crop predictions, and variety availability for the upcoming mango season.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
      author: "Agricultural Expert Karim Hassan",
      date: "May 30, 2024",
      readTime: "6 min read",
      category: "Season Updates",
      content: `
        <p>The 2024 mango season shows promising signs for an excellent harvest across major mango-producing regions of Bangladesh.</p>
        
        <h3>Weather Analysis:</h3>
        <p>This year's weather patterns have been particularly favorable:</p>
        <ul>
          <li>Adequate winter rainfall supported healthy tree growth</li>
          <li>Optimal temperature ranges during flowering season</li>
          <li>Minimal storm damage during early fruit development</li>
        </ul>

        <h3>Variety-wise Predictions:</h3>
        <p><strong>Himsagar:</strong> Expected to be 15% above average yield with exceptional quality</p>
        <p><strong>Langra:</strong> Standard yield expected with consistent quality</p>
        <p><strong>Fazli:</strong> Large fruit size anticipated due to favorable growing conditions</p>
        <p><strong>Gopalbhog:</strong> Limited quantity as usual, but premium quality assured</p>

        <h3>Pricing Outlook:</h3>
        <p>With good harvest predictions, we expect stable pricing throughout the season, making premium mangoes more accessible to families across Bangladesh.</p>
      `
    },
    {
      id: 5,
      title: "From Flower to Fruit: The Mango Growing Process",
      excerpt: "A detailed look at how mangoes develop from tiny flowers to the delicious fruits we love.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&h=400&fit=crop",
      author: "Botanist Dr. Nasir Ahmed",
      date: "May 25, 2024",
      readTime: "8 min read",
      category: "Agriculture",
      content: `
        <p>Understanding the mango growing process helps us appreciate the complexity and time involved in producing the perfect mango.</p>
        
        <h3>Stage 1: Flowering (December-February):</h3>
        <p>Mango trees produce large clusters of small flowers. Only 1-2% of these flowers will eventually develop into mature fruits. The process requires:</p>
        <ul>
          <li>Cool nights and warm days</li>
          <li>Low humidity to prevent fungal infections</li>
          <li>Adequate pollination by insects</li>
        </ul>

        <h3>Stage 2: Fruit Set (February-March):</h3>
        <p>Successful flowers develop into small green fruits. Many naturally fall off during this stage - a process called "fruit drop" that ensures only the strongest fruits continue to develop.</p>

        <h3>Stage 3: Fruit Development (March-May):</h3>
        <p>Fruits grow rapidly, developing their characteristic shape and size. During this stage:</p>
        <ul>
          <li>Fruits accumulate sugars and develop flavor compounds</li>
          <li>Natural oils and aromatic compounds form</li>
          <li>Skin develops its protective waxy coating</li>
        </ul>

        <h3>Stage 4: Ripening (May-August):</h3>
        <p>The final transformation where starch converts to sugars, creating the sweet, aromatic fruit we love.</p>
      `
    },
    {
      id: 6,
      title: "Sustainable Mango Farming: Our Commitment to the Environment",
      excerpt: "How AmroBilas promotes eco-friendly farming practices among our partner farmers.",
      image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop",
      author: "Environmental Specialist Sara Rahman",
      date: "May 20, 2024",
      readTime: "9 min read",
      category: "Sustainability",
      content: `
        <p>At AmroBilas, we believe that producing excellent mangoes and protecting the environment go hand in hand. Our sustainability initiatives ensure that future generations can enjoy the same quality mangoes we offer today.</p>
        
        <h3>Organic Farming Practices:</h3>
        <ul>
          <li>Reduced use of chemical pesticides and fertilizers</li>
          <li>Introduction of beneficial insects for natural pest control</li>
          <li>Composting organic waste to enrich soil naturally</li>
          <li>Crop rotation techniques to maintain soil health</li>
        </ul>

        <h3>Water Conservation:</h3>
        <p>Our partner farmers employ water-efficient techniques:</p>
        <ul>
          <li>Drip irrigation systems to minimize water waste</li>
          <li>Rainwater harvesting during monsoon season</li>
          <li>Mulching to retain soil moisture</li>
          <li>Strategic planting to optimize natural rainfall usage</li>
        </ul>

        <h3>Biodiversity Protection:</h3>
        <p>We encourage practices that protect local ecosystems:</p>
        <ul>
          <li>Maintaining native tree species alongside mango orchards</li>
          <li>Creating habitats for beneficial insects and birds</li>
          <li>Avoiding monoculture by diversifying crop varieties</li>
        </ul>

        <p>These practices not only protect the environment but also improve mango quality by creating healthier, more resilient growing conditions.</p>
      `
    }
  ];

  const [selectedPost, setSelectedPost] = React.useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-white">
      <FloatingMangoes />
      <Header />
      
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Mango Blog <span className="animate-pulse">📝</span>
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Everything you need to know about mangoes - from growing tips to recipes, 
            health benefits to seasonal updates.
          </p>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="py-8 bg-white/80 backdrop-blur-sm sticky top-20 z-40 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {['All Posts', 'Tips & Care', 'Health & Nutrition', 'Recipes & Culture', 'Season Updates', 'Agriculture', 'Sustainability'].map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full font-medium transition-all duration-300 bg-gray-100 text-gray-700 hover:bg-yellow-100 hover:text-yellow-800"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-3">
                    <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-800 mb-3 line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-sm text-gray-500">
                      <User size={16} />
                      <span>{post.author}</span>
                      <Calendar size={16} />
                      <span>{post.date}</span>
                    </div>
                    
                    <button 
                      onClick={() => setSelectedPost(post)}
                      className="flex items-center space-x-1 text-yellow-600 hover:text-yellow-700 font-medium"
                    >
                      <span>Read More</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tips Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Quick Mango Tips</h2>
            <p className="text-xl text-gray-600">Essential knowledge for mango lovers</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🌡️</div>
              <h3 className="font-bold text-gray-800 mb-2">Storage</h3>
              <p className="text-sm text-gray-600">Room temperature for ripening, refrigerate when soft</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">✋</div>
              <h3 className="font-bold text-gray-800 mb-2">Ripeness Test</h3>
              <p className="text-sm text-gray-600">Gently squeeze - ripe mangoes yield slightly to pressure</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="font-bold text-gray-800 mb-2">Best Time</h3>
              <p className="text-sm text-gray-600">Morning or evening consumption aids digestion</p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl text-center">
              <div className="text-4xl mb-4">🔥</div>
              <h3 className="font-bold text-gray-800 mb-2">Avoid Heat</h3>
              <p className="text-sm text-gray-600">Don't consume with very hot foods or drinks</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Post Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedPost.category}
                  </span>
                  <h1 className="text-3xl font-bold text-gray-800 mt-4 mb-4">{selectedPost.title}</h1>
                  <div className="flex items-center space-x-4 text-gray-500">
                    <span>{selectedPost.author}</span>
                    <span>•</span>
                    <span>{selectedPost.date}</span>
                    <span>•</span>
                    <span>{selectedPost.readTime}</span>
                  </div>
                </div>
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="text-gray-400 hover:text-gray-600 text-2xl"
                >
                  ×
                </button>
              </div>
              
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title}
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              
              <div 
                className="prose prose-lg max-w-none"
                dangerouslySetInnerHTML={{ __html: selectedPost.content }}
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Blog;
