import React, { useRef } from "../../4.fri/node_modules/@types/react";
const App = () => {
  const inputRef = useRef(null);
  const onButtonClick = () => {
    inputRef.current.focus();
  };
  return (
    <div>
      <input ref="{inputRef}" type="text" />
      <button onClick="{onButtonClick}">input으로 포커스</button>
    </div>
  );
};
