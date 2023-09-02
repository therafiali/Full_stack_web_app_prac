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
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useRouter } from "next/navigation";

export const cartContext = createContext<any>(null);

interface indexForError {
  [key: string]: string;
}

const ContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const router = useRouter();
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
  console.log(user, "user data:", userData);

  useEffect(() => {
    onAuthStateChanged(auth, (user: any) => {
      if (user) {
        setUserData({
          displayName: user.displayName,
          email: user.email,
          uuid: user.uid,
          photoUrl: user.photoURL,
        });
      } else {
        setUserData(null);
      }
    });
    console.log(user);
  }, []);
  // console.log(userData);
  let provider = new GoogleAuthProvider();

  function signUpVaGoogle() {
    setLoading(true);
    return signInWithPopup(auth, provider).then((userData: any) => {
      console.log("user via google", userData.user);

      if (userData) {
        setUserData({
          displayName: userData.user.displayName,
          email: userData.user.email,
          uuid: userData.user.uid,
          photoUrl: userData.user.photoURl,
          emailVerified: userData.user.emailVerified,
        });
        router.push("/");
      }
      setLoading(false);
    });
  }

  function signUpUser(email: string, password: string) {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
      .then((res: any) => {
        setLoading(false);
        router.push("/");
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
        console.log("res:", res);
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
    location.reload();
  }

  function sendEmailVerificationCode() {
    setLoading(true);
    if (user) {
      sendEmailVerification(user).then((res: any) => console.log("sended"));
      window.location.href = "/";
    }
    setLoading(false);
  }
  function upadateUserNamePhoto(UserName: string, photoUrl: string) {
    setLoading(true);
    if (user) {
      updateProfile(user, {
        displayName: UserName,
        photoURL:
          "https://www.pngitem.com/pimgs/m/517-5177724_vector-transparent-stock-icon-svg-profile-user-profile.png",
      })
        .then(() => {
          setLoading(false);
        })
        .catch((error: any) => {
          setLoading(false);
          console.log(error);
        });
    }
  }

  return (
    <cartContext.Provider
      value={{
        state,
        dispatch,
        signUpUser,
        signUpVaGoogle,
        signInUser,
        loading,
        LogOut,
        userData,
        sendEmailVerificationCode,
        upadateUserNamePhoto,
      }}
    >
      {children}
    </cartContext.Provider>
  );
};

export default ContextWrapper;
