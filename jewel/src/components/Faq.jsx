import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What materials are used in your jewelry?",
      answer: "We use premium quality materials including 925 sterling silver, 14k and 18k gold, natural gemstones, and high-grade crystals. All our pieces are hypoallergenic and nickel-free for sensitive skin."
    },
    {
      question: "Do you provide customization services?",
      answer: "Yes, we offer customization services for most of our jewelry pieces. You can choose different metals, gemstones, and engravings. Contact us with your requirements and we'll create a personalized piece just for you."
    },
    {
      question: "What is your return and exchange policy?",
      answer: "We offer a 30-day return and exchange policy. Items must be in original condition with tags attached. Custom jewelry cannot be returned unless there's a manufacturing defect. Return shipping is free for defective items."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 3-7 business days within India. Express shipping is available for 1-2 business days. International shipping takes 7-14 business days depending on the destination."
    },
    
  ];

  return (
   <div id="faq" className='w-screen bg-white py-12 lg:py-18 border-[#efeee8] border-solid border-x-14'>
      
      {/* Heading */}
      <div className="w-full text-center mb-16">
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.2em] text-gray-300 font-serif">
          FAQ
        </h2>
        <p className="text-lg text-gray-400 mt-4 font-mono">
          Frequently Asked Questions
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="container mx-auto px-4 lg:px-10 max-w-4xl">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="group border border-gray-100 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {/* Question */}
              <button
                onClick={() => toggleAccordion(index)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex justify-between items-center group"
              >
                <h3 className="text-lg md:text-xl font-medium text-gray-400 font-serif pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600 transition-transform duration-200" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600 transition-transform duration-200" />
                  )}
                </div>
              </button>

              {/* Answer */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-4 bg-white border-t border-gray-100">
                  <p className="text-gray-700 leading-relaxed  text-sm md:text-base">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="text-center mt-12 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-xl font-light text-gray-400 font-serif mb-2">
            Still have questions?
          </h3>
          <p className="text-gray-500 font-mono text-sm mb-4">
            We're here to help you find the perfect piece
          </p>
          <button className="bg-gray-100 text-black px-6 py-2 rounded-full shadow-xl hover:bg-gray-200 transition-colors duration-300  text-sm">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default Faq;