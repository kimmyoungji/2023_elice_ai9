// 3. 볼드체인 텍스트를 모두 파란색으로 변경하세요.
function highlight() {
    let words = document.getElementsByTagName("strong");
    console.log("getElementsByTagName: ", words);

    // const mapTest = map((item) => (item.style.color = "blue"));
    // console.log("mapTest", mapTest);

    /* 유사배열 => 배열*/
    // 1. Array.from
    let test1 = Array.from(words);
    console.log("test1 ", test1);
    test1.map((item) => (item.style.color = "blue"));

    // 2. Array.prototype.slice.call
    let test2 = [].slice.call(words);
    console.log("test2", test2);
    test2.map((item) => (item.style.color = "blue"));

    // 3. Array.prototype.map.call
    let test3 = [].map.call(words, (item) => (item.style.color = "blue"));
    console.log("test", test3);

    // 4. 구조분해할당 : [...유사배열]
    let test4 = [...words];
    console.log("test4", test4);
    test4.map((item) => (item.style.color = "blue"));
}

// 4. 볼드체인 텍스트를 모두 검은색으로 변경하세요.
function returnNormal() {
    let words = document.querySelectorAll("strong");
    console.log("querySelectorAll: ", words);

    for (let i = 0; i < words.length; i++) {
        words[i].style.color = "black";
    }
}
