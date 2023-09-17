import React from "react";
import useToggle from "./App_customHook1-2";

function App() {
  const { isOn, toggle } = { ...useToggle(true) };
  return (
    <div className="App">
      <div>{isOn ? "true" : "false"}</div>
      <button onClick={toggle}>버튼</button>
    </div>
  );
}

export default App;
