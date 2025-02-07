import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './components/Cart';
import About from './pages/About';
import Mainlayout from './components/Mainlayout';
import Transactions from './pages/Transactions';
import Productpage from './pages/Productpage';
import ProductDetail from './pages/ProductDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' exact element={<Mainlayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path='/about' element={<About />} />
            <Route path='/transactions' element={<Transactions />} />
            <Route path="/product" element={<Productpage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;