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
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { log } from "console";

export const cartContext = createContext<any>(null);

interface indexForError {
  [key: string]: string;
}

const ContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const [userData, setUserData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [ErrorViaUserCredential, setErrorViaUserCredential] = useState<
    indexForError | ""
  >("");
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
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setUserData({
          displayName: user.displayName,
          email: user.email,
          uuid: user.uid,
        });
      } else {
        setUserData(null);
      }
    });
  }, []);
  // console.log(userData);
  let provider = new GoogleAuthProvider();

  function signUpViaGoogle() {
    setLoading(true);
    return signInWithPopup(auth, provider).then((userData: any) => {
      console.log("user via google", userData.user);

      if (userData) {
        setUserData({
          displayName: userData.user.displayName,
          email: userData.user.email,
          uuid: userData.user.uid,
        });
      }
      setLoading(false)
    });
  }

  function signUpUser(email: string, password: string) {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((res: any) => {
        setLoading(false);
      })
      .catch((res: any) => {
        setErrorViaUserCredential({
          signUpError: "Error occured via signup with Email or Password",
        });
      });
    setLoading(false);
    // console.log("user", data);
  }

  function signInUser(email: string, password: string) {
    return signInWithEmailAndPassword(auth, email, password)
      .then((res: any) => {
        setLoading(false);
      })
      .catch((res: any) => {
        setErrorViaUserCredential({
          signInError: "Error occured via signin with Email or Password",
        });
      });
    setLoading(false);
    // console.log("user", data);
  }

  function LogOut() {
    setLoading(true);
    signOut(auth);
    setLoading(false);
  }

  return (
    <cartContext.Provider value={{ state, dispatch, signUpUser }}>
      {children}
    </cartContext.Provider>
  );
};

export default ContextWrapper;
