var myUl = document.querySelector("ul");

//1. for loop을 사용해서 index.html의 <ul></ul> 내에 li 태그 문장 20개를 createTextNode()와 appendChild()를 사용해서 추가합니다.

for (let i = 0; i <= 20; i++) {
    // // 1번
    // document.write(`<li> ${i}번째 문장 </li>`);
    // 2번
    // const addTag = document.createElement("li");
    // // addTag.innerText = `${i}번째 문장`;
    // // addTag.innerHTML = `${i}번째 문장`;
    // addTag.textContent = `${i}번째 문장`;
    // myUl.appendChild(addTag);
    // 3번
    const addTag2 = document.createElement("li");
    const text = document.createTextNode(`${i}번째 문장`);
    addTag2.appendChild(text);
    myUl.appendChild(addTag2);
}
