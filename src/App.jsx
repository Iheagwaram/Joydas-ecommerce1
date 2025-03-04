import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Mainlayout from "./components/Mainlayout";
import Transactions from "./pages/Transactions";
import Productpage from "./pages/Productpage";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Redirect root to home */}
          <Route path="/" element={<Navigate to="/signin" />} />

          {/* Login and Signup outside Mainlayout */}
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Signup/>}/>

          {/* Main Layout for other pages */}
          <Route path="/" element={<Mainlayout />}>
            <Route index element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="about" element={<About />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="product" element={<Productpage />} />
            <Route path="product/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
