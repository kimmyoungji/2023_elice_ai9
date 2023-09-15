// 원시 값과 객체의 비교

// 1. 예제
var person1 = {
  name: "Lee",
};

var person2 = {
  name: "Lee",
};

console.log(person1 === person2); // ①
console.log(person1.name === person2.name); // ②

// 특별 문제 1. 예제 1번의 각각 출력값은 뭘까요?? 생각해봅시다.
