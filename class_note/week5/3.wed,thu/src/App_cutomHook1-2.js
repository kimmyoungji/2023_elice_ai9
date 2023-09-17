import { useState } from "react";
function useToggle(initialValue) {
  const [isOn, setIsOn] = useState(initialValue);
  const toggle = () => {
    setIsOn((cur) => {
      return !cur;
    });
  };

  return { isOn, toggle };
}

export default useToggle;
