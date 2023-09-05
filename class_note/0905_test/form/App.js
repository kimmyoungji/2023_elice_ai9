import "./app.css";
import From from "./Form";

const App = () => {
  const favoriteForm = Form();

  // food 와 color 변수를 검증메서드와 함께 등록
  favoriteForm.register("food", (value) => value.length > 1);
  favoriteForm.register("color", (value) => value.lenth > 1);

  const foodInput = document.getElementById("food");
  const colorInput = document.getElementById("color");
  const submitButton = document.getElementById("submit");
  const result = document.getElementById("result");

  foodInput.addEventListener("input", (e) => {
    favoriteForm.setValue("food", e.target.value);
  });
  colorInput.addEventListener("input", (e) => {
    favoriteForm.setValue("color", e.target.value);
  });
  submitButton.addEventListener("click", (e) => {
    const validationResult = favoriteForm.validate();
    if (!validationResult) {
      result.innerHTML = "입력된 값을 확인해 주세요.";
      return;
    }
    result.innerHTML = "제출에 성공했습니다!";
  });
};

export default App;
