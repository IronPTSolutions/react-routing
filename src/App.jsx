import "./App.css";
import { Routes, Route, Navigate, Link, useNavigate } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import AboutUs from "./pages/about-us";
import Product from "./pages/product";
import Countries from "./pages/countries";

function App() {
  const navigate = useNavigate();
  return (
    <div>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about-us">About Us</Link>
        </li>
        <li>
          <Link to="/products/1">Product 1</Link>
        </li>
        <li>
          <Link to="/products/2">Product 2</Link>
        </li>

        <li>
          <Link to="/countries">Countries</Link>
        </li>
      </ul>

      <button
        onClick={() => {
          const where = prompt("A dónde quires navegar?");
          navigate(`/${where}`);
        }}
      >
        Navegar
      </button>

      <Routes>
        <Route path="/products/:id" element={<Product />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </div>
  );
}

export default App;
