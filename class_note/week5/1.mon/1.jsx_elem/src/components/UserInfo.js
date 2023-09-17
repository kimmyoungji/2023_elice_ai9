import React from "../../../../4.fri/node_modules/@types/react";
import "../index.css";

function UserInfo(props) {
  return (
    <div className="user-info">
      <h2> 사용자 정보 </h2>
      <div>사용자의 이름은 {props.user.name}입니다.</div>
      <div>사용자의 나이는 {props.user.age}입니다.</div>
      <br />
    </div>
  );
}

export default UserInfo;
