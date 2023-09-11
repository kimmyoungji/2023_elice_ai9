import { findUserByUsername, findAddressByUserId } from "./api.js";

const UserInput = () => {
  let value = "";
  let error = "";

  function getValue() {
    return value;
  }

  function getError() {
    return error;
  }

  function setValue(inputValue) {
    value = inputValue;
  }

  // 지시사항을 참고하여 searchAddress() 함수를 구현하세요.
  function searchAddress() {
    error = "";
    return findUserByUsername(value)
      .then((user) => findAddressByUserId(user.id))
      .catch((e) => {
        error = e.message;
      });
  }

  return { getError, getValue, setValue, searchAddress };
};

export default UserInput;
