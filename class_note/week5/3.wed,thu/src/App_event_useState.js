import "./App.css";
import { useState } from "react";

function Header(props) {
  return (
    <article>
      <h2>{props.title}</h2>
    </article>
  );
}

function Nav(props) {
  const topics = [
    { id: 1, content: "html" },
    { id: 2, content: "css" },
    { id: 3, content: "js" },
  ];
  // KEY
  let contents = [];
  contents = topics.map((elem, indx) => {
    return (
      <li key={`${elem.id}_unique`}>
        <a
          href={`/read/${elem.id}`}
          onClick={(e) => {
            e.preventDefault();
            console.log(elem.content);
            props.onChangeMode(elem.content);
          }}
        >
          {elem.content}
        </a>
      </li>
    );
  });

  return (
    <nav>
      <ol>{contents}</ol>
    </nav>
  );
}

function Article(props) {
  return (
    <article>
      <h2>{props.content}</h2>
    </article>
  );
}

function App() {
  // STATE
  // let mode = "css";
  let [mode, setMode] = useState("css");

  let contentsForState = <Article content={`Hello js`}></Article>;
  if (mode === "html") {
    contentsForState = <Article content={`Hello html`}></Article>;
  } else if (mode === "css") {
    contentsForState = <Article content={`Hello css`}></Article>;
  } else {
    contentsForState = <Article content={`Hello js`}></Article>;
  }
  // event
  function onChangeMode(content) {
    mode = setMode(content);
    // mode = content;
  }

  return (
    <div className="App">
      <Header title="WEB" />
      <div>
        <Nav onChangeMode={onChangeMode} />
        {contentsForState}
      </div>
    </div>
  );
}

export default App;
