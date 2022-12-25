import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SendOutlinedIcon from "@mui/icons-material/SendOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import { Avatar } from "@mui/material";
import React, { forwardRef } from "react";
import InputOption from "./InputOption";
import "./Post.css";

const Post = forwardRef((props, ref) => {
  const { name, title, description, message, photoUrl } = props;

  return (
    <div className="post" ref={ref}>
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>

      <div className="post__buttons">
        <InputOption
          Icon={ThumbUpAltOutlinedIcon}
          title="Like"
          color="gray"
        ></InputOption>
        <InputOption
          Icon={ChatOutlinedIcon}
          title="Comment"
          color="gray"
        ></InputOption>
        <InputOption
          Icon={ShareOutlinedIcon}
          title="Share"
          color="gray"
        ></InputOption>
        <InputOption
          Icon={SendOutlinedIcon}
          title="Send"
          color="gray"
        ></InputOption>
      </div>
    </div>
  );
});

export default Post;
