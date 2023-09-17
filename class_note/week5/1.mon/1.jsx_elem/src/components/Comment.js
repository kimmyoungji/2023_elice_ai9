import React from "../../../../4.fri/node_modules/@types/react";
import "../index.css";

function Comment({ text }) {
  return (
    <div className="comment">
      <h2> 코멘트 </h2>
      <div>위 사용자의 커멘트: {text}</div>
    </div>
  );
}

export default Comment;
