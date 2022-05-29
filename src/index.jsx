import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";
import "./styles.scss";

const userInfo = {
  name: "Michael",
  avatarUrl: "https://avatars1.githubusercontent.com",
  text: "Good job!",
  data: new Date()
}

const rootElem = document.querySelector("#root");

ReactDOM(
  <Comment 
    author={userInfo}
  />, 
  rootElem
);