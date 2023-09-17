import { useState } from "react";

const User = () => {
  const [nickname, setNickname] = useState("");

  const updateNickname = (event) => {
    // nickname 변수에 event를 이용해 사용자가 입력한 값을 삽입하세요.
    const nickname = event.target.value;

    // setNickname의 매개변수로 nickname을 넘겨주세요.
    setNickname(nickname);
  };

  return (
    <div>
      <label>{nickname}</label>
      <br />
      <input value={nickname} onChange={updateNickname} />
    </div>
  );
};

const App = () => {
  return <User />;
};

export default App;
