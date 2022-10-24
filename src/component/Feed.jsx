import React, { useState, useEffect } from "react";
import "../style/Feed.css";
import CreateIcon from "@mui/icons-material/Create";
import InputOptions from "./InputOptions";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import Post from "./Post";
import {
  query,
  collection,
  onSnapshot,
  querySnapshot,
  doc,
  addDoc,
  orderBy,
} from "firebase/firestore";
import { db } from "../firebase";
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";

const Feed = () => {
  const user = useSelector(selectUser)
  const [input, setInput] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "posts"),orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let postsArr = [];
      querySnapshot.forEach((doc) => {
        postsArr.push({ ...doc.data(), id: doc.id });
      });
      setPosts(postsArr);
    });
    return () => unsubscribe();
  }, []);

  // useEffect(() =>{
  //   db.collection("posts").onSnapshot((snapshot) =>
  //   setPosts(
  //     snapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       data: doc.data(),
  //     }))
  //   ))
  // })

  const sendPost = (e) =>{
    e.preventDefault();

    addDoc(collection(db,'posts'), {
      name: user.displayName,
      discription: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timestamp: firebase.firestore.Timestamp.now(),
    })
    setInput('')
    // setPosts(...)
  }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" value={input} onChange={e => setInput(e.target.value)}/>
            <button type="submit" onClick={sendPost}>Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOptions Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOptions
            Icon={SubscriptionsIcon}
            title="Video"
            color="#E7A33E"
          />
          <InputOptions Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOptions
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </div>
      </div>
      {posts.map((post,id) => (
        <Post
          name={post.name}
          discription={post.discription}
          message={post.message}
          key={id}
          photoUrl = {post.photoUrl}
        />
        ))}
    </div>
  );
};

export default Feed;
