import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";
import "./styles.scss";

const userInfo = {
  author: "Michael",
  avatarUrl: "https://avatars1.githubusercontent.com",
}

const rootElem = document.querySelector("#root");

ReactDOM(
  <Comment 
    user={userInfo}
    text="Good job!"
    data={new Date()} 
  />, 
  rootElem
);