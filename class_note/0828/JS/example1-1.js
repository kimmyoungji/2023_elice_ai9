// // DOM 2

// // 예제 1. text값이 Orange인 li 노드 생성 후 ul 태그에 추가하기
// let li = document.createElement("li");
// let ul = document.querySelector("ul");
// li.textContent = "Kiwi";
// ul.appendChild(li);

// // 예제 2. ul 태그의 맨 처음 위치에 텍스트 값이 Kiwi인 li 노드 삽입하기
// // 요소 노드 생성
// const ul = document.querySelector("ul");
// const li = document.createElement("li");
// // 텍스트 노드를 li 요소 노드의 마지막 자식 노드로 추가
// li.appendChild(document.createTextNode("Kiwi"));
// // li 요소 노드를 #fruits 요소 노드의 마지막 자식 노드로 추가
// ul.insertBefore(li, apple);

// // 예제 3. textContent, nodeValue 차이
// const li = document.querySelector(".apple");
// const ul = document.querySelector("ul");
// console.log(li.nodeValue);
// console.log(li.firstChild.nodeValue);
// console.log(li.textContent);
// li.firstChild.nodeValue = "Changed";

// console.log(ul.textContent);
// console.log("hey", ul.firstChild.nodeValue);

// // 예제 4. HTML 어트리뷰트 조작
// const input = document.getElementById("user");

// // value 어트리뷰트 값을 취득
// const inputValue = input.getAttribute("value");
// console.log(inputValue); // Park

// // value 어트리뷰트 값을 변경
// input.setAttribute("value", "foo");
// console.log(input.getAttribute("value")); // foo

// // 예제 5. 스타일 조작
// const box = document.querySelector(".box");

// // .box 요소의 class 어트리뷰트 값을 취득
// console.log(box.className); // 'box blue'

// // .box 요소의 class 어트리뷰트 값 중에서 'blue'만 'green'로 변경
// // box.className = box.className.replace("blue", "green");
// console.log(box.classList);
// box.classList.remove("blue");
// console.log(box.classList);
// box.classList.add("red");
// box.classList.toggle("blue");

// 수업

// // 돔 스타일 조작 방법 3가지
// // 1. 인라인 스타일 조작
// // 2. 클래스 조작
// // className
// // classList : add remove toggle 등 쉽게 클래스 내용을 조작할 수 있다.

// // 3. css 스타일 참조

// const $elem = document.createElement("li");
// $elem.textContent = "orange";
// $elem.style.color = "orange";

// const $ul = document.querySelector("ul");
// $ul.appendChild($elem);
