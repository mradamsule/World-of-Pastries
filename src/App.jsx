import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Header";
import Home from "./component/Home";
import About from "./component/About";
import Services from "./component/Services";
import Menu from "./component/Menu";
import Cart from "./component/Cart";
import Contact from "./component/Contact";
import Checkout from "./component/Checkout";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([]);

  const count = cart.reduce((total, item) => total + item.qty, 0);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const exists = prevCart.find((x) => x.name === item.name);

      if (exists) {
        return prevCart.map((x) =>
          x.name === item.name ? { ...x, qty: x.qty + 1 } : x
        );
      }

      return [...prevCart, { ...item, qty: 1 }];
    });

    alert(`${item.name} added to cart`);
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
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

        <Route path="/checkout" element={<Checkout cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;
