import { useMemo, useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(1);
  const [isKorea, setIsKorea] = useState(true);

  // // 1번 location
  // const location = {
  //   country: isKorea ? "한국" : "일본"
  // };

  // 2번 location
  const location = useMemo(() => {
    return {
      country: isKorea ? "한국" : "일본",
    };
  }, [isKorea]);

  useEffect(() => {
    console.log("useEffect 호출!");
  }, [location]);

  return (
    <header className="App-header">
      <h2>하루에 몇 끼 먹어요?</h2>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <hr />

      <h2>내가 있는 나라는?</h2>
      <p>나라: {location.country}</p>
      <button onClick={() => setIsKorea(!isKorea)}>Update</button>
    </header>
  );
}

export default App;

// useCallback 설명
//let n1 = () => { a + b }; //함수 객체이기 때문에 리렌더링 될때 마다 새로 할당이 일어난다.
//let n1 = useCallback(() => {a + b;}, [a, b]); // 이렇게 useCallback을 쓰면 a,b에 변화가 발생했을 때만 해당 함수를 재 할당하게 된다.

// useMemo 설명
//let n2 = ExpensiveCalculation(a); // 리렌더링 때 마다, 함수가 다시 호출되어 할당된다.
//let n2 = useMemo(()=>ExpensiveCalculation(a), [a, b]); // 이렇게 useCallback을 쓰면 a,b에 변화가 발생했을 때만 해당 함수를 재 할당하게 된다.
