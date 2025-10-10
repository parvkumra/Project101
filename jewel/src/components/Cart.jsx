// Cart.jsx
import React, { useContext, useEffect, useState } from "react";
import CartContext from "../context/CartContext";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51P1zH2SFRmRanvxhr7Yi2LTr2ugxx76mY6rLICS01SnVFxJVOnorEDULh5vbnufPFalQyuYE2x9X4ARmT1gVBa1J00Dp4QSMnt"
);

function Cart() {
  const { change,setChange } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const navigate = useNavigate();

  // Update cart items and total
  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("cartItems") || "[]");
    setCartItems(items);

    if (items.length !== 0) {
      let sum = 0;
      for (let i = 0; i < items.length; i++) {
        sum += Number(items[i].price);
      }
      setTotal(sum);
    } else {
      setTotal(0);
    }
  }, [change]);

  // Stripe Checkout handler
  const handleCheckout = async () => {
    if (cartItems.length === 0) {
      alert("Cart is empty!");
      return;
    }

    if (total <= 0) {
      alert("Invalid cart total!");
      return;
    }

    // Show customer form first if not already shown
    if (!showCustomerForm) {
      setShowCustomerForm(true);
      return;
    }

    // Validate customer info
    if (!customerInfo.name || !customerInfo.email) {
      alert("Please fill in required customer details (Name and Email)");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(customerInfo.email)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      console.log("Starting checkout with total:", total);
      
      const stripe = await stripePromise;
      if (!stripe) {
        throw new Error("Stripe failed to load");
      }

      // Call backend to create Checkout session
      const response = await fetch("http://localhost:3000/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          totalAmount: total,
          cartItems: cartItems,
          customerInfo: customerInfo
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const { id: sessionId } = await response.json();
      console.log("Received session ID:", sessionId);

      if (!sessionId) {
        throw new Error("No session ID received from server");
      }

      // Redirect to Stripe Checkout
      const { error } = await stripe.redirectToCheckout({ sessionId });
      
      if (error) {
        console.error("Stripe redirect error:", error);
        alert("Payment redirect failed. Please try again.");
      }

    
    } catch (err) {
      console.error("Checkout error:", err);
      alert(`Checkout failed: ${err.message}`);
    }
  };

  const handleCustomerInfoChange = (field, value) => {
    setCustomerInfo(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const resetCustomerForm = () => {
    setShowCustomerForm(false);
    setCustomerInfo({
      name: '',
      email: '',
      phone: ''
    });
  };

  return (
    <div className="bg-[#efeee8] min-h-screen w-full px-6 lg:px-12 py-12">
      <div className="container mx-auto">
        <div className="w-full text-center mb-16">
          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-light tracking-[0.2em] text-[#cbc5b9] font-serif">
            YOUR CART
          </h2>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg mb-6">Your cart is empty.</p>
            <button 
              onClick={() => navigate('/')}
              className="bg-[#cbc5b9] hover:bg-[#b5a894] text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {cartItems.map((product) => (
                <Card key={product.id} product={product} />
              ))}
            </div>

            {/* Customer Information Form */}
            {showCustomerForm && (
              <div className="mb-8 p-6 bg-white rounded-lg shadow-lg border-2 border-[#cbc5b9]">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-light text-gray-800 font-serif">Customer Details</h3>
                  <button 
                    onClick={resetCustomerForm}
                    className="text-gray-500 hover:text-gray-700 text-xl"
                  >
                    ×
                  </button>
                </div>
                <p className="text-gray-600 mb-6 text-sm">Required for Indian payment regulations</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      value={customerInfo.name}
                      onChange={(e) => handleCustomerInfoChange('name', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#cbc5b9] focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={customerInfo.email}
                      onChange={(e) => handleCustomerInfoChange('email', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#cbc5b9] focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      value={customerInfo.phone}
                      onChange={(e) => handleCustomerInfoChange('phone', e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#cbc5b9] focus:border-transparent"
                    />
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 mt-4">
                  * Required fields. Your billing address will be collected on the next page.
                </p>
              </div>
            )}

            {/* Total & Checkout */}
            <div className="flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-light font-serif text-gray-800 mb-4 md:mb-0">
                Total: <span className="text-[#cbc5b9] font-medium">₹{total.toLocaleString()}</span>
              </div>
              
              <div className="flex gap-4">
                {showCustomerForm && (
                  <button
                    onClick={resetCustomerForm}
                    className="px-6 py-3 border-2 border-[#cbc5b9] text-[#cbc5b9] rounded-lg font-medium hover:bg-[#cbc5b9] hover:text-white transition-colors duration-300"
                  >
                    Back
                  </button>
                )}
                
                <button
                  onClick={handleCheckout}
                  className="bg-[#cbc5b9] hover:bg-[#b5a894] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  {showCustomerForm ? 'Proceed to Payment' : 'Checkout'}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;