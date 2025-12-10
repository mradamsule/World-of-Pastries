import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Menu from "./component/Menu";
import Cart from "./component/Cart";
import Contact from "./component/Contact";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const count = cart.length

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
    setCount(count + 1);
    alert("Item succefully added");
  };

  return (
    <>
      <Navbar count={count} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/menu" element={<Menu addToCart={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} setCart={setCart} />}
        />
      </Routes>
    </>
  );
}

export default App;
