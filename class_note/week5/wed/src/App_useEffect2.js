import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function Header() {
  return (
    <header>
      <h1>
        <a href="/">WEB</a>
      </h1>
    </header>
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

  useEffect(() => {
    return () => {
      console.log("Nav 파괴!");
    };
  }, []);

  return (
    <nav>
      <ol>
        {topics.map((el) => (
          <li key={el.id}>
            <a id={el.id} href={`/read/${el.id}`}>
              {el.content}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

function App() {
  let [text, setText] = useState("GoGo");

  console.log("1빠");
  useEffect(() => {
    console.log("화면 렌더후 + 리렌더 후");
  });
  useEffect(() => {
    console.log("렌더후");
  }, []);
  useEffect(() => {
    console.log("렌더후 + 값변경후");
  }, [text]);

  //   let isShow = true;
  const [isShow, setIsShow] = useState(true);

  return (
    <div>
      <Header />
      <button
        onClick={() => {
          setText(text + "y");
        }}
      >
        useEffectTest
      </button>
      {isShow && <Nav />}
      <button
        onClick={() => {
          isShow ? setIsShow(false) : setIsShow(true);
        }}
      >
        mmm
      </button>
    </div>
  );
}

export default App;
