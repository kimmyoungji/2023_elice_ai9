import React from "react";
import "../index.css";

// function UserInfo(props.user)과 같다. props는 프로퍼티들을 담은 객체라고 보면된다.
// props는 부모에서 자식으로 전달하고, 고치지 않는 것이 원칙이다. 그래서 변경되는 내용들을 state를 사용하는 것이 원칙이다.
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
