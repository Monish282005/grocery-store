import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ItemDetails from "./components/ItemDetails";
import Login from "./components/Login";
import "./App.css";
import Checkout from "./components/Checkout";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const updateCartItem = (id, quantity) => {
    setCart((prevCart) =>
      prevCart
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <div className="main">
      <BrowserRouter>
        <Header
          cartCount={cart.reduce((total, item) => total + item.quantity, 0)}
        />
        <Routes>
          <Route path="/" element={<Home addToCart={addToCart} />} />
          <Route
            path="/cart"
            element={<Cart cart={cart} updateCartItem={updateCartItem} />}
          />
          <Route
            path="/item/:id"
            element={<ItemDetails addToCart={addToCart} />}
          />
          <Route path="/login" element={<Login />} />
          <Route
            path="/Checkout"
            element={
              <Checkout
                cart={cart}
                totalPrice={cart.reduce(
                  (total, item) =>
                    total + item.quantity * parseFloat(item.price.slice(1)),
                  0
                )}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;