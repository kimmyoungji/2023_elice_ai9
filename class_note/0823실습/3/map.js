const arr = ["월요일", "화요일", "수요일", "목요일", "금요일"];

// map
const map = arr.map((item, idx) => {
    console.log("index : ", idx);
    // return "출근하는 " + item;
});
console.log(map);
/* 
"출근하는 월요일",
"출근하는 화요일",
"출근하는 수요일",
"출근하는 목요일",
"출근하는 금요일"
*/
