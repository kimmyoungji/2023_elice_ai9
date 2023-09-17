import logo from "./logo.svg";
import "./App.css";
import { useState } from "../../4.fri/node_modules/@types/react";

function App() {
  let [count, setCount] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          // 출력이 1이된다. 왜냐하면, 화면 변경이 1번 일어나기때문.
          // 리엑트가 + 1 변화를 여러개 여서 하나로 퉁치고 화면을 변경하기 때문
          // batch를 사용하여 이 작을 해준다.
          //   setCount(count + 1);
          //   setCount(count + 1);
          //   setCount(count + 1);
          //   setCount(count + 1);
          //   setCount(count + 1);
          //   setCount(count + 1);
          // 다른 방법이 있다.
          // 바뀌는 이유: 임시 공간이 생기기 때문. 리렌더링 없이도 값을 변경할 수 있다.
          // 콜백 함수 형식으로 값을 바꾸는 것이 좋다.
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          setCount((prev) => prev + 1);
          console.log(count);
        }}
      >
        {count}
      </button>
    </div>
  );
}

export default App;
