import React, { useState, useCallback } from "react";

function App() {
  const [foo, setFoo] = useState(0);
  const [bar, setBar] = useState(0);
  const calc = useCallback(() => {
    return foo + bar;
  }, [foo, bar]); // foo 또는 bar가 바뀔때 마다 메모이제이션이 된다.

  return (
    <div className="App">
      <input
        value={foo}
        onChange={(event) => {
          const num = event.target.value ? event.target.value : 0;
          setFoo(parseInt(num));
        }}
      ></input>
      <input
        value={bar}
        onChange={(event) => {
          const num = event.target.value ? event.target.value : 0;
          setBar(parseInt(num));
        }}
      ></input>
      {/* 함수가 메모이제이션 되기 때문에 calc()로 함수를 호출해준다. */}
      <div>{calc()}</div>
    </div>
  );
}

export default App;
