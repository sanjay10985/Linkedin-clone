import React, { useEffect } from "react";
import "./App.css";
import Header from "./component/Header";
import Sidebar from "./component/Sidebar";
import Feed from "./component/Feed";
import Widgets from "./component/Widgets";
import Login from "./component/Login.jsx";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // user is Logged in
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,  
          })
        );
      } else {
        // user is Signed out
        dispatch(logout());
      }
    });
  },[]);

  return (
    <div className="app">
      <Header />

      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Sidebar />
          <Feed />
          <Widgets/>
        </div>
      )}
    </div>
  );
}

export default App;
