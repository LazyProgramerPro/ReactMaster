import React from "react";
import "./HeaderOption.css";
import { Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { selectUser } from "./features/user/userSlice";

function HeaderOption(props) {
  const { title, Icon, avatar, onClick } = props;
  const user = useSelector(selectUser);
  return (
    <div className="headerOption" onClick={onClick}>
      {Icon && <Icon className="headerOption__icon"></Icon>}
      {avatar && <Avatar className="headerOption__icon" src={user?.photoURL} >{user?.email[0]}</Avatar>}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
