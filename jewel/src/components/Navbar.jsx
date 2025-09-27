import React, { useState, useEffect, useContext } from "react";
import { ShoppingCart } from "lucide-react";
import { useNavigate } from "react-router-dom";
import CartContext from "../context/CartContext";

function Navbar() {
  const [currentSection, setCurrentSection] = useState(0);
  const [number, setNumber] = useState(0);
  const sections = ["hero", "products", "faq", "contact"];
  const { change } = useContext(CartContext);
  const navigate = useNavigate();

  // Scroll to section
  const scrollToSection = (sectionIndex) => {
    const sectionId = sections[sectionIndex];
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setCurrentSection(sectionIndex);
    }
  };

  // Update cart count whenever `change` updates
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setNumber(cart.length);
  }, [change]);

  // Navigate to cart
  const handleClick = () => {
    const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    if (cart.length === 0) {
      alert("Cart is empty");
      return;
    }
    navigate("/cart"); // ✅ absolute route
  };

  // Intersection Observer for highlighting active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = sections.indexOf(entry.target.id);
            if (sectionIndex !== -1) {
              setCurrentSection(sectionIndex);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sections]);

  return (
    <div
      id="hero"
      className="relative w-full h-screen min-h-[600px] bg-gradient-to-br from-[#C1B7AC] to-[#B5A894] text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white rounded-full"></div>
      </div>

      {/* Top Navigation */}
      <nav className="relative z-20 w-full flex justify-between items-center px-6 lg:px-12 pt-6">
        <div className="text-xl font-bold opacity-0">LOGO</div>
        <div className="flex font-mono gap-6 lg:gap-8 text-sm md:text-base lg:text-lg">
          <button
            onClick={() => scrollToSection(1)}
            className="relative hover:text-gray-200 transition-colors cursor-pointer group"
          >
            Products
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection(2)}
            className="relative hover:text-gray-200 transition-colors cursor-pointer group"
          >
            FAQ
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={() => scrollToSection(3)}
            className="relative hover:text-gray-200 transition-colors cursor-pointer group"
          >
            Contact
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
          </button>
          <button
            onClick={handleClick}
            className="relative hover:text-gray-200 transition-colors cursor-pointer group"
          >
            <ShoppingCart />
            <span className="text-sm absolute -top-2 -right-2 font-semibold">
              {number}
            </span>
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-300"></span>
          </button>
        </div>
      </nav>

      {/* Main Content Container */}
      <div className="relative z-10 h-full flex flex-col">
        {/* Hero Section - Centered Brand */}
        <div className="flex-1 flex items-center justify-center px-4">
          <div className="text-center max-w-4xl">
            <div className="mb-6">
              <hr className="w-20 md:w-32 mx-auto border-white border-t-2" />
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light tracking-[0.2em] mb-2 font-serif">
              PEHLI PASAND
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium tracking-wide opacity-90">
              BY AABHUSHAN
            </p>

            <div className="mt-6">
              <hr className="w-20 md:w-32 mx-auto border-white border-t-2" />
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative h-auto pb-8">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:items-end min-h-[400px]">
              {/* Left Column - Call to Action */}
              <div className="flex flex-col items-center lg:items-start space-y-4">
                <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base font-medium">
                  Get Started
                </button>
                <p className="text-sm md:text-base opacity-75 text-center lg:text-left max-w-md">
                  Discover premium quality jewelry crafted with passion and
                  precision.
                </p>
              </div>

              {/* Right Column - Hand Image */}
              <div className="relative flex justify-center lg:justify-end h-full">
                <div className="relative w-full max-w-md lg:max-w-lg xl:max-w-xl">
                  <img
                    src="Screenshot_2025-09-18_at_5.00.50_PM-removebg-preview.png"
                    alt="Elegant hand wearing jewelry"
                    className="w-full h-auto object-contain transform hover:scale-105 transition-transform duration-300"
                    style={{
                      filter:
                        "drop-shadow(0 20px 40px rgba(0,0,0,0.4)) drop-shadow(0 0 20px rgba(255,255,255,0.1))",
                      maxHeight: "50vh",
                      minHeight: "300px",
                    }}
                  />

                  {/* 3D Effect Shadows */}
                  <div
                    className="absolute inset-0 opacity-30 transform translate-x-2 translate-y-2 -z-10"
                    style={{
                      background:
                        "linear-gradient(135deg, transparent 30%, rgba(0,0,0,0.2) 100%)",
                      filter: "blur(8px)",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Action Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {sections.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToSection(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              currentSection === idx
                ? "bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default Navbar;
