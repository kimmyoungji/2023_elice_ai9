// 배열 고차 함수

// 누적합 구하기
const numbers = [1,2,3,4,5,6,7,8,9];

const result = numbers.reduce((acc, cur) => acc + cur);

console.log(result);

// 중복된 값 없애기
const fruits = ["딸기", "사과", "배", "수박", "참외", "딸기"];
const result2 = fruits.reduce((acc, cur) => {
    if(acc.includes(cur) === false) {
        acc.push(cur);
    }
    return acc;
}, []);

console.log(result2);


//수업
// 고차함수 ex) reduce: 4개의 매개변수(누적값, 현재값, 현재인덱스, 원본배열)를 가진다.
// 현업에서 엄청 많이 씀
const numbers2 = [1,2,3,4,5,6,7,8,9];
const result3 = numbers.reduce(function(acc,cur,idx,arr){
  console.log(acc,cur,idx,arr); // 각요소를 순회한다.
  return acc + cur; // 이 반환값은 다음 순회의 누적값으로 할당된다.
},0);

console.log(result);
