import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function Header() {
  return (
    <header>
      <h1>
        <a href="/">WEB</a>
      </h1>
    </header>
  );
}

function Article(props) {
  console.log(props);
  var content = props.content + "수정";
  return (
    <article>
      <h2>Welcome</h2>
      <h3>{content}</h3>
    </article>
  );
}

function Nav(props) {
  const topics = [
    {
      id: 1,
      content: "html",
    },
    {
      id: 2,
      content: "css",
    },
    {
      id: 3,
      content: "js",
    },
  ];

  return (
    <nav>
      <ol>
        {topics.map((el) => (
          <li key={el.id}>
            <a
              id={el.id}
              href={`/read/${el.id}`}
              onClick={(e) => {
                e.preventDefault();
                console.log("okay?");
                props.onChangeMode(el.content);
              }}
            >
              {el.content}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function App() {
  let [mode, setMode] = useState("html");
  let [count, setCount] = useState([]);
  let [count2, setCount2] = useState({ a: 1, b: 2, c: 3 });
  let contents = null;
  let [text, setText] = useState("GoGo");

  const onChangeMode = (content) => {
    setMode(content);
  };

  if (mode === "html") {
    contents = (
      <Article content={`Hello html`} onChangeMode={onChangeMode}></Article>
    );
  } else if (mode === "css") {
    contents = (
      <Article content={`Hello css`} onChangeMode={onChangeMode}></Article>
    );
  } else {
    contents = (
      <Article content={`Hello js`} onChangeMode={onChangeMode}></Article>
    );
  }

  return (
    <div>
      <Header />
      <Nav onChangeMode={onChangeMode} />
      {contents}
      <p>{count}</p>
      <button
        onClick={() => {
          // 출력이 1이된다. 왜냐하면, 화면 변경이 1번 일어나기때문.
          // 리엑트가 + 1 변화를 여러개 여서 하나로 퉁치고 화면을 변경하기 때문
          // batch를 사용하여 이 작을 해준다.
          //   setCount(count + 1);
          //   setCount(count + 1);
          //   setCount(count + 1);
          //   setMode("html");
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
        값 변경
      </button>
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
      <button
        onClick={() => {
          //   전개 문법은 꼭 앞에 써주어야 한다.
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
