"use client";
import {
  FC,
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { cartReducer } from "../Reducer";
import { auth } from "@/app/lib/firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { log } from "console";

export const cartContext = createContext<any>(null);

const ContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<any>();
  const intialValue = {
    cart: [],
  };
  const [state, dispatch] = useReducer(cartReducer, intialValue);
  useEffect(() => {
    let cart = localStorage.getItem("cart") as string;
    if (cart === null) {
      localStorage.setItem("cart", JSON.stringify(state.cart));
    } else {
      intialValue.cart = JSON.parse(cart);
    }
  });
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  let user = auth.currentUser;

  useEffect(() => {
    onAuthStateChanged(auth,(user:any)=>{
      if (user) {
        setUserData({
          displayName:user.displayName,
          email:user.email,
          uuid:user.uid,
        })
      }else{
setUserData(null)
      }
    })
  }, [])
  console.log(userData)


  function signUpUser(email: string, password: string) {
    return createUserWithEmailAndPassword(auth, email, password);
    // console.log("user", data);
  }

  function signInUser(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function LogOut() {
    signOut(auth);
  }

  return (
    <cartContext.Provider value={{ state, dispatch, signUpUser }}>
      {children}
    </cartContext.Provider>
  );
};

export default ContextWrapper;
