// HTTP 통신

/******************************************
// 예제 1. fetch API 사용

fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log('data: ', data)
    return data.filter(obj => obj.id > 3)
  })
  .then(result => {
    console.log('result: ', result)
  })
  .catch(err => {
    console.log('err: ', err)
  })
  .finally(() => {
    console.log('### finally ###')
  })

// 예제 2. fetch API 메서드 중 json 사용

const inputElem = document.querySelector('#inputColor')
const buttonElem = document.querySelector('#buttonSubmit')
const hexaCodeElem = document.querySelector('#hexaCode')

buttonElem.addEventListener("click", e => {
  // 새로고침 방지
  e.preventDefault()
  
  const userInputColor = inputElem.value;
  
  fetch('../data.json')
    .then(response => response.json())
    .then(datas => {
      // 배열의 요소 중, color 가, 사용자가 입력한 색과 일치하는 요소를 찾음. 
      const foundData = datas.find(data => data.color === userInputColor)
      
      // 찾은 요소는 객체인데, 그 value값이 헥사코드임.
      hexaCodeElem.innerHTML = foundData.value
      hexaCodeElem.style.color = foundData.value
    })
});

***********************************************************/

const inputElem = document.querySelector("#inputColor");
const buttonElem = document.querySelector("#buttonSubmit");
const hexaCodeElem = document.querySelector("#hexaCode");

buttonElem.addEventListener("click", (e) => {
  // 새로고침 방지
  e.preventDefault();

  const userInputColor = inputElem.value;

  fetch("../data.json") //fetch의 인자로 로컬 경로를 넣으면 에러.
    .then((response) => response.json())
    .then((datas) => {
      // 배열의 요소 중, color 가, 사용자가 입력한 색과 일치하는 요소를 찾음.
      const foundData = datas.find((data) => data.color === userInputColor);

      // 찾은 요소는 객체인데, 그 value값이 헥사코드임.
      hexaCodeElem.innerHTML = foundData.value;
      hexaCodeElem.style.color = foundData.value;
    });
});
