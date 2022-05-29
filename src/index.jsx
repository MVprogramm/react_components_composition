import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment.jsx";
import "./styles.scss";

const userInfo = {
  name: "Michael",
  avatarUrl: "https://github.com/MVprogramm.png",
}

const rootElem = document.querySelector("#root");

ReactDOM.render(
  <Comment 
    author={userInfo}
    text="Good job!"
    data={new Date()} 
  />, 
  rootElem
);