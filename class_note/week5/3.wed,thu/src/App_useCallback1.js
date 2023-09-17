import React, { useCallback, useState } from "react";
const App = () => {
  const [firstName, setFirstName] = useState("철수");
  const [lastName, setLastName] = useState("김");

  // 이름과 성이 바뀔 때마다
  // 풀네임을 return하는 함수를 메모이제이션
  const getFullName = useCallback(() => {
    // 둘가 바뀔 때 호출된다.
    return `${firstName} ${lastName}`;
  }, [firstName, lastName]);

  return <>{getFullName()}</>;
};
