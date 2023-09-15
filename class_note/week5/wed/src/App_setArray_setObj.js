import "./App.css";
import { useState } from "react";

function App() {
  let [count, setCount] = useState([]);
  let [count2, setCount2] = useState({ a: 1, b: 2, c: 3 });

  return (
    <div>
      <p>{count}</p>
      {/* 배열 setStatus */}
      <button
        onClick={(e) => {
          e.preventDefault();
          setCount([...count, 1]);
        }}
      >
        배열 값 변경
      </button>
      {/* 객체 값 변경하기 */}
      <p>{count2}</p>
      <button
        onClick={() => {
          //   전개 문법은 꼭 앞에 써주어야 한다.  전개 문법을 이용하여 새로운 배열과 객체를 만들어 할당해주어야,
          //   값의 변화를 useState가 인지하여 화면의 리렌더링이 발생할 수 있다.
          // 객체 요소에 동적으로 접근하기 위해 []를 써야한다. 변수 사용 가능
          setCount2((prev) => ({ ...prev, ["a"]: 2 }));
          console.log(count2);
        }}
      >
        객체 값 변경
      </button>
    </div>
  );
}

export default App;

