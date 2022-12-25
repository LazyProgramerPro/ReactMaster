import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "./features/user/userSlice";
import "./Sidebar.css";

function Sidebar() {

  const user = useSelector(selectUser);

  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw=w240-h480-rw"
          alt=""
        />
        <Avatar className="sidebar__avatar" src={user?.photoURL}> {user?.email[0]}</Avatar>
        <h2>{user?.displayName}</h2>

        <h4>{user?.email}</h4>
      </div>

      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,54343</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,54343</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Percent</p>
      
        {recentItem("reactjs")}
        {recentItem("nextjs")}
        {recentItem("blog")}
        {recentItem("trading")}
        {recentItem("vms")}
      </div>
    </div>
  );
}

export default Sidebar;
