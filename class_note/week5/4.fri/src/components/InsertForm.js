import React, { useState } from "react";

const InsertForm = ({ onInsert }) => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (event) => {
    console.log("hello");
    event.preventDefault();
    if (typeof onInsert === "function") {
      console.log("helllo");
      onInsert(inputValue);
    }
    setInputValue("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      />
      {/* 버튼은 onSubmit을 제공하지 않는다.*/}
      <button type="submit">등록</button>
    </form>
  );
};

export default InsertForm;
