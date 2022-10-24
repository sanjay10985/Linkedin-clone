import React, { useState } from "react";
import { auth } from "../firebase";
import "../style/Login.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../features/userSlice";

const Login = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const loginToApp = (e) => {

    e.preventDefault();
   
       signInWithEmailAndPassword(auth, email, password)
       .then((userCredential) => {
          const user = userCredential.user;
          dispatch(
            login({
              email: user.email,
              uid: user.uid,
              displayName: user.displayName,
              profileUrl: user.photoURL,
            })
          );
       })
       .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    });
    
  };

  const register = async () => {
    if (!name) {
      return alert("please enter a full name!");
    }

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;

        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: profilePic,
        }).then(() => {
          dispatch(
            login({
              email: user.email,
              uid: user.uid,
              displayName: name,
              photoUrl: profilePic,
            })
          );
        });

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
  };

  return (
    <div className="login">
      <img
        src="https://brand.linkedin.com/content/dam/me/brand/en-us/brand-home/logos/01-dsk-e8-v2.png.original.png"
        alt="linkedin-logo"
      />
      <form>
        <input
          type="text"
          placeholder="Full name (required if registering)"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Profile pic URL"
          type="text"
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register Now
        </span>
      </p>
    </div>
  );
};

export default Login;
