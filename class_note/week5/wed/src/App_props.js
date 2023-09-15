import logo from "./logo.svg";
import "./App.css";

function Article(props) {
  // PROPS
  // 1) props는 사용자 정의 태그의 속성이다.
  // 2) props 는 읽기 전용 속성이다.
  // props.content = props.content + "수정";  //props 수정 안됨
  const contentTmp = props.content + "수정";
  return (
    <article>
      <h2>Welcome</h2>
      <h3>{props.content}</h3>
      <h3>{contentTmp}</h3>
    </article>
  );
}

function App() {
  return (
    <div className="App">
      <Article content="hello world" />
    </div>
  );
}

export default App;
