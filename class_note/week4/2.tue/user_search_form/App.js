// import "./app.css";
import UserInput from "./UserInput.js";

const App = () => {
  const usernameInput = document.getElementById("username");
  const usernameForm = document.getElementById("username-form");
  const submitButton = document.getElementById("submit");
  const result = document.getElementById("result");
  const component = UserInput();

  usernameForm.addEventListener("submit", (e) => {
    e.preventDefault();
    debugger;
    component.searchAddress().then((res) => {
      debugger;
      console.log(component.getError());
      console.log(res.address);
      if (component.getError()) {
        result.innerHTML = component.getError();
        return;
      }
      debugger;
      result.innerHTML = res.address;
    });
  });

  usernameInput.addEventListener("input", (e) => {
    component.setValue(e.target.value);
    console.log(e.target.value);
  });
};

export default App;
