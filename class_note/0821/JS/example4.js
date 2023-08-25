/* 배열 */  

/* 1. 예제 */
const arr = ['apple', 'banana', 'orange'];

/* 2. 예제 */
const arr2 = [1, 2, 3];
console.log(arr2.length); // 3

/* 3. 예제 */
const arr3 = new Array(10);

console.log(arr3); // [empty × 10]
console.log(arr3.length); // 10

/* 4. 예제 */
const arr4 = [1, 2];

// 인덱스가 0인 요소를 참조
console.log(arr4[0]); // 1
// 인덱스가 1인 요소를 참조
console.log(arr4[1]); // 2

/* 5. 예제 */
const arr5 = [0];

// 배열 요소의 추가
arr5[1] = 1;

console.log(arr5); // [0, 1]
console.log(arr5.length); // 2

// 요소값의 갱신
arr5[1] = 10;

console.log(arr5); // [0, 10]

/* 6. 예제 */
const arr6 = [1, 2, 3];

// 배열 요소의 삭제
delete arr6[1];
console.log(arr6); // [1, empty, 3]

// length 프로퍼티에 영향을 주지 않는다. 즉, 희소 배열이 된다.
console.log(arr6.length); // 3


let str = "Hello World"
document.querySelector("#answer").textContent = str.substring(0,5);


let arrr = [1,2,3,4];
// includes
console.log(arrr.includes(1));
// map
console.log(arrr.map((i)=>i*2))