import React, { useContext, useState, useEffect } from 'react';
import CartContext from '../context/CartContext';

function Card({ product }) {
  const { change, setChange } = useContext(CartContext);
  const [inCart, setInCart] = useState(false);

  // Check if this product is already in cart
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const exists = cart.some(item => item.id === product.id); // assuming product has unique id
    setInCart(exists);
  }, [change, product.id]);

  // Add product to cart
  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    cart.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cart));
    setChange(change + 1);
  };

  // Remove product from cart
  const removeFromCart = () => {
    let cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
    cart = cart.filter(item => item.id !== product.id); // remove this product
    localStorage.setItem("cartItems", JSON.stringify(cart));
    setChange(change + 1);
  };

  return (
    <div className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden">
      
      {/* Image Container */}
      <div className="relative h-64 bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {/* Favorite Badge */}
        <div className="absolute top-4 right-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
          ♥ {product.rating}
        </div>
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        <h3 className="text-xl font-light text-gray-800 font-serif mb-2 tracking-wide">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-3 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-light text-[#cbc5b9] font-serif">
            ₹{product.price}
          </span>
          <span className="bg-[#efeee8] text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
            {product.category}
          </span>
        </div>

        {/* Toggle Add/Remove Button */}
        {!inCart ? (
          <button 
            onClick={addToCart} 
            className="w-full bg-[#cbc5b9] text-white py-2 rounded-lg hover:bg-[#b5a894] transition-colors duration-300 font-medium text-sm"
          >
            Add to Cart
          </button>
        ) : (
          <button 
            onClick={removeFromCart} 
            className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium text-sm"
          >
            Remove from Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
