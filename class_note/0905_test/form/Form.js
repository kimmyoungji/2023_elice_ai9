const Form = () => {
  const formState = {};

  function register(name, vlidator = (value) => true) {
    formState[name] = {
      value: "",
      validator,
    };
  }

  // 등록된 모든 변수 값을 검증함수로 검증한 결과를 reduce로 and연산하여 검증
  function validate() {
    return Object.values(formState).reduce(
      (flag, { value, validator }) => validator(value) && flag,
      true
    );
  }

  function getFormData() {
    // state의 각 필드에 있는 value를 모아 하나의 객체로 리턴합니다.
    // { name : 'Kim', age: 30 } 의 형식으로 리턴해야 합니다.
    return Object.entries(formState).reduce((fromData, item) => {
      const [key, { value, validator }] = item;
      fromData[key] = value;
      return formData;
    }, {});
  }

  function setValue(name, value) {
    // name으로 찾은 필드의 value를 설정합니다.
    // name에 해당하는 상태는 반드시 있다고 가정합니다.
    formState[name] = {
      ...formState[name],
      value,
    };
  }

  return {
    register,
    validate,
    getFormData,
    setValue,
  };
};
