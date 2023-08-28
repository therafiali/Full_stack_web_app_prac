"use client";
import { FC, ReactNode, createContext, useEffect, useReducer } from "react";
import { cartReducer } from "../Reducer";

export const cartContext = createContext<any>(null);

const ContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const intialValue = {
    cart: [
      {
        productId: "",  
        quantity: 2,
      },
    ],
  };
  const [state, dispatch] = useReducer(cartReducer, intialValue);
  useEffect(() => {
    let cart = localStorage.getItem("cart") as string;
    if (cart === null) {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    } 
    else {
      intialValue.cart = JSON.parse(cart);
    }
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);
  return (
    <cartContext.Provider value={{ state, dispatch }}>
      {children}
    </cartContext.Provider>
  );
};

export default ContextWrapper;
