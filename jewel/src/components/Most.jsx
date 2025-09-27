import React from 'react'
import Card from './Card';

function Most() {
  // Dummy Products Array
  const mostLovedProducts = [
    {
      id: 1,
      name: "Diamond Eternity Ring",
      description: "Elegant diamond ring with classic design, perfect for engagements and special occasions.",
      price: "2599",
      category: "Rings",
      rating: "4.9",
      image: "istockphoto-1389474559-612x612.jpg"
    },
    {
      id: 2,
      name: "Pearl Drop Earrings",
      description: "Beautiful freshwater pearl earrings with gold accents for a timeless look.",
      price: "899",
      category: "Earrings",
      rating: "4.8",
        image: "stunning-diamond-engagement-ring-displayed-clean-white-surface-close-up-studio-shot-dazzling-pristine-background-399101034.webp"
    },
    {
      id: 3,
      name: "Gold Chain Necklace",
      description: "18k gold chain necklace with delicate pendant, perfect for everyday wear.",
      price: "1599",
      category: "Necklaces",
      rating: "4.7",
        image: "stunning-diamond-engagement-ring-displayed-clean-white-surface-close-up-studio-shot-dazzling-pristine-background-399101034.webp"
    },
    {
      id: 4,
      name: "Silver Charm Bracelet",
      description: "Sterling silver bracelet with customizable charms for personal expression.",
      price: "6799",
      category: "Bracelets",
      rating: "4.9",
       image: "istockphoto-1389474559-612x612.jpg"
    },
    {
      id: 5,
      name: "Ruby Stud Earrings",
      description: "Premium ruby studs set in white gold for elegant sophistication.",
      price: "1999",
      category: "Earrings",
      rating: "4.8",
      image: "stunning-diamond-engagement-ring-displayed-clean-white-surface-close-up-studio-shot-dazzling-pristine-background-399101034.webp"
    },
    {
      id: 6,
      name: "Emerald Tennis Bracelet",
      description: "Stunning emerald tennis bracelet with brilliant cut stones.",
      price: "3299",
      category: "Bracelets",
      rating: "4.9",
       image: "istockphoto-1389474559-612x612.jpg"
    }
  ];

  return (
    <div id="products" className='w-screen bg-[#efeee8] py-16 lg:py-24'>
      
      {/* Heading */}
      <div className="w-full text-center mb-16">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-light tracking-[0.2em] text-[#cbc5b9] font-serif">
          OUR MOST LOVED PRODUCTS
        </h2>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {mostLovedProducts.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
          <a 
            href="https://www.instagram.com/pehlipasand_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
            target="_blank" 
            rel="noopener noreferrer">
                <button className="bg-[#cbc5b9] text-white px-8 py-3 rounded-full hover:bg-[#b5a894] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-medium">
          View All Products
        </button>
            </a>
        
      </div>
    </div>
  );
}

export default Most;