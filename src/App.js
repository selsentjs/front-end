import "./App.css";
import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
//import Products from './components/Products';

import Product from "./components/Product";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
const LazyProduct = React.lazy(() => import("./components/Products"));

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route
          path="/products"
          element={
            <React.Suspense fallback="Loading...">
              <LazyProduct />
            </React.Suspense>
          }
        />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
