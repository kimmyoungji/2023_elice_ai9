// import logo from "./logo.svg";
import "./App.css";
// import { useState } from "react";

function Nav() {
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
        <a href={`/read/${elem.id}`}>{elem.content}</a>
      </li>
    );
  });

  return (
    <nav>
      <ol>{contents}</ol>
    </nav>
  );
}

function App() {
  // STATE - failed
  return (
    <div className="App">
      <Nav />
    </div>
  );
}

export default App;
