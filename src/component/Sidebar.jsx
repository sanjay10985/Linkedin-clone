import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import "../style/Sidebar.css";

const Sidebar = () => {

  const user = useSelector(selectUser);

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80"
          alt=""
        />
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viwed you</p>
          <p className="sidebar__statNumber">2,543</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber"> 2,448</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        <RecentItem topic='reactjs'/>
        <RecentItem topic='programming'/>
        <RecentItem topic='softwareengineering'/>
        <RecentItem topic='design'/>
        <RecentItem topic='developer'/>
      </div>
    </div>
  );
};

const RecentItem = ({topic}) => {
    return(
    <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
    </div>
    );
};

export default Sidebar;
