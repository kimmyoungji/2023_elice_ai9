const arr = ["월요일", "화요일", "수요일", "목요일", "금요일"];

// map
const map1 = arr.map((_, idx) => idx % 2 !== 0);

console.log(map1);
/* [ false, true, false, true, false ] */
console.log(map1.length);
// 5

// filter
const filter = arr.filter((_, idx) => idx % 2 !== 0);
console.log(filter);
/* [ '화요일', '목요일' ] */
console.log(filter.length);
// 2

const map2 = arr.map((item) => "출근하는 " + item);
console.log(map2);
/* [ '월요일', '화요일', '수요일', '목요일', '금요일' ] */
