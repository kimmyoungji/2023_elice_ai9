// import logo from "./logo.svg";
// import "./App.css";

// function HelloWorld() {
//   return (
//     <div>
//       <h1>HelloWorld!!</h1>
//     </div>
//   );
// }

// function App() {
//   const result = "결과!";
//   return (
//     <div className="App" style={{ backgroundColor: "red" }}>
//       {result + "ㅎㅎ"}
//       <HelloWorld />
//       <HelloWorld />
//       <HelloWorld />
//       <HelloWorld />
//     </div>
//   );
// }

// export default App;

/////
import logo from './logo.svg'
import './App.css'
import { Component, useState } from 'react'

// 클래스형 컴포넌트
class ClassComponent extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>클래스형 컴포넌트</div>
  }
}

function Header(props) {
  console.log(props)
  return (
    <header>
      <h1>
        <a href="/">{}</a>
      </h1>
    </header>
  )
}

function Nav() {
  return (
    <nav>
      <ol>
        <li>
          <a href="/read/1">html</a>
        </li>
        <li>
          <a href="/read/2">css</a>
        </li>
        <li>
          <a href="/read/3">js</a>
        </li>
      </ol>
    </nav>
  )
}

function Article() {
  return (
    <article>
      <h2>Welcome</h2>
      Hello, WEB
    </article>
  )
}

function App() {
  console.log(useState('text!'))
  const [text2, setText] = useState('text!')
  const onChangeHandler = () => {
    setText('Changed Text!')
  }
  const text = 'hello elice!'
  return (
    <div>
      <Header title={text} />
      <Nav />
      <Article />
      <ClassComponent />
      <button onClick={onChangeHandler}>button</button>
      {text2}
    </div>
  )
}

export default App
