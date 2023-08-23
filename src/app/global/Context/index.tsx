"use client";
import { FC, ReactNode, createContext } from "react";

export const cartContext = createContext<any>(null);

const ContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const name = "RAFI";
  return <cartContext.Provider value={name}>{children}</cartContext.Provider>;
};

export default ContextWrapper;
