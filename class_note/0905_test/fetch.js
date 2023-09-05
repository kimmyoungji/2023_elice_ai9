// 자유롭게 코드를 작성하여, 예시 화면이 구현되도록 해 보세요.

function showHexaCode(e) {
  e.preventDefault();

  const userInputColor = inputElem.value;

  fetch("data.json")
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((datas) => {
      //   console.log(JSON.stringify(datas));
      const foundData = datas.find((data) => data.color === userInputColor);

      hexaCodeElem.innerHTML = foundData.value;
      hexaCodeElem.style.color = foundData.value;
      hexaCodeElem.style.color = foundData.value;
    });
}

const inputElem = document.querySelector("#inputColor");
const buttonElem = document.querySelector("#buttonSubmit");
const hexaCodeElem = document.querySelector("#hexaCode");

buttonElem.addEventListener("click", showHexaCode);
