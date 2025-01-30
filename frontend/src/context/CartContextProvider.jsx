import React, { useState } from "react";
import CartContext from "./CartContext";

const CartContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const findProduct = cartItems.find((item) => item.id === product.id);
    if (findProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    const findProduct = cartItems.find((item) => item.id === product.id);
    if (findProduct.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== findProduct.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
      );
    }
  };

  const deleteFromCart = (productId) => {
    const findProduct = cartItems.find((item) => item.id === productId);
    if (findProduct) {
      setCartItems(cartItems.filter((item) => item.id !== productId));
    } else {
      alert("Product is not there");
    }
  };
  const clearCart = () => {
    setCartItems([]);
  };

  const calculateTotalAmount = () => {
    let totalAmount = cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
    return totalAmount;
  };
  return (
    <CartContext.Provider
      value={{
        addToCart,
        removeFromCart,
        clearCart,
        calculateTotalAmount,
        deleteFromCart,
        cartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
