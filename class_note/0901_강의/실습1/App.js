import twoDotDistance from "./twoDotDistance.js";

const App = () => {
  // input 가져오기
  // 버튼 가져오기
  // 글씨 부분 가져오기
  const x1 = document.getElementById("point1-x");
  const y1 = document.getElementById("point1-y");
  const x2 = document.getElementById("point2-x");
  const y2 = document.getElementById("point2-y");
  const btn = document.getElementById("calculate-button");
  const text = document.getElementById("result");

  // onclick 이벤트 함수 정의
  // 이 안에서 입력 값으로 거리 계산
  // 글씨 추가
  function onclick(e) {
    e.preventDefault();
    twoDotDistance.setPoints(x1.value, y1.value, x2.value, y2.value);
    text.innerHTML = twoDotDistance.calculateDistance();
  }

  btn.addEventListener("click", onclick);
};

export default App;
