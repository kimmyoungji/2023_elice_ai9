// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// 1. jsx_elelm
import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
import App from "./App.js";
import * as serviceWorker from "./serviceWorker.js";

//HTML을 JSX로 변환하여 element에 저장합니다.
const element = (
  <div>
    <h2>코더랜드에 오신것을 환영합니다:)</h2>
    <h2>즐거운 React! 함께 공부해봐요~</h2>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));

// 리엑트 네이티브와 연관이 있다.
// 웹 페이지를 pwa로 감사주면, 앱으로 사용할 수 있다.
// pwa의 핵심이 serviceWorker
// 어떤 기능?
// 서버가 응답 뿐만아니라, 서버 쪽에서 메세지를 날릴 수 있다.
// 3. 나중에 배우면 좋을 것: socket, web-socket을 사용하면 양방향 통신가능 = 실시간 통신
serviceWorker.unregister();
