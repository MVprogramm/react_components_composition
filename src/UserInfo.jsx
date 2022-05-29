import React from "react";
import Avatar from "./Avatar";
import "./user-info.scss";

function UserInfo(props) {
  return (
    <div className="user-info">
        <Avatar name={props.user.author} avatarUrl={props.user.avatarUrl} />
        <div className="user-info__name">{props.user.author}</div>
      </div>
  );
};

export default UserInfo;