import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import About from './components/About';
import Footer from './components/Footer';
import Our from './components/Our';
import Faq from './components/Faq';
import Most from './components/Most';
import CartContext from './context/CartContext';
import Cart from './components/Cart'; // <-- Cart page
import Canceli from './components/Canceli';
import Success from './components/Success';

function App() {
  const [change, setChange] = useState(0);

  return (
    <CartContext.Provider value={{ change, setChange }}>
      <Router>
        
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
              <Navbar />
                <About />
                <Our />
                <Most />
                <Faq />
              </>
            }
          />

          {/* Cart page */}
          <Route path="/cart" element={<Cart />} />
          <Route path="/cancel" element={<Canceli />} />
          <Route path="/success/*" element={<Success />} />

        </Routes>
        <Footer />
      </Router>
    </CartContext.Provider>
  );
}

export default App;
