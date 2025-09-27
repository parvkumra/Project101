

      import React from 'react';

function Our() {
  return (
   <div id="products" className='w-screen bg-[#efeee8] py-16 lg:py-24'>
      
      {/* Full Width Heading */}
      <div className="w-full text-center mb-16">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-light tracking-[0.2em] text-[#cbc5b9] font-serif">
          OUR PRODUCTS
        </h2>
      </div>

           <div className="w-screen">
        <div className="flex flex-col md:flex-row md:flex-wrap w-full">
          
          {/* Rings */}
          <div className="group cursor-pointer w-full md:w-1/2 h-[300px] md:h-[400px]">
            <div className="relative  opacity-100 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 w-full h-full shadow-lg hover:shadow-2xl transition-all duration-300">
              
              {/* Title on Image */}
              <div className="absolute top-6 left-6 z-10">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide text-white font-serif backdrop-blur-sm px-4 py-2 rounded-lg">
                  RINGS
                </h3>
                <hr className='text-white'/>
              </div>
              
              {/* Image */}
              <img 
                src="stunning-diamond-engagement-ring-displayed-clean-white-surface-close-up-studio-shot-dazzling-pristine-background-399101034.webp"
                alt="Rings Collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Earrings */}
          <div className="group cursor-pointer w-full md:w-1/2 h-[300px] md:h-[400px]">
            <div className="relative  opacity-100 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 w-full h-full shadow-lg hover:shadow-2xl transition-all duration-300">
              
              {/* Title on Image */}
              <div className="absolute top-6 left-6 z-10">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide text-white font-serif  backdrop-blur-sm px-4 py-2 rounded-lg">
                  EARRINGS
                </h3>
                    <hr className='text-white'/>
              </div>
              
              {/* Image */}
              <img 
                src="istockphoto-1358781050-612x612.jpg"
                alt="Earrings Collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20  group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Necklaces */}
          <div className="group cursor-pointer w-full md:w-1/2 h-[300px] md:h-[400px]">
            <div className="relative opacity-100 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 w-full h-full shadow-lg hover:shadow-2xl transition-all duration-300">
              
              {/* Title on Image */}
              <div className="absolute top-6 left-6 z-10">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide text-white font-serif backdrop-blur-sm px-4 py-2 rounded-lg">
                  NECKLACES
                </h3>
                    <hr className='text-white'/>
              </div>
              
              {/* Image */}
              <img 
                src="istockphoto-1389474559-612x612.jpg"
                alt="Necklaces Collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Bracelets */}
          <div className="group   cursor-pointer w-full md:w-1/2 h-[300px] md:h-[400px]">
            <div className="relative overflow-hidden  opacity-100 bg-gradient-to-br from-gray-100 to-gray-200 w-full h-full shadow-lg hover:shadow-2xl transition-all duration-300">
              
              {/* Title on Image */}
              <div className="absolute top-6 left-6 z-10">
                <h3 className="text-2xl md:text-3xl font-light tracking-wide text-white font-serif  backdrop-blur-sm px-4 py-2 rounded-lg">
                  BRACELETS
                </h3>
                    <hr className='text-white'/>
              </div>
              
              {/* Image */}
              <img 
                src="download.jpeg"
                alt="Bracelets Collection"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/20  group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Decorative Element */}
      <div className="text-center mt-16">
        <div className="w-2 h-2 bg-gray-400 rounded-full mx-auto"></div>
      </div>
    </div>
  );
}

export default Our;