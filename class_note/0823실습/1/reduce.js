const arr = [1, 2, 3, 4, 5];

console.log("\n초기값 있음");
arr.reduce((total, now, nowIdx, arr) => {
    console.log("total :", total);
    console.log("now :", now);
    console.log("nowIdx :", nowIdx);
    console.log("arr :", arr);
    console.log("\n");
    return total + now;
}, 10);

console.log("초기값 없음");
arr.reduce((total, now, nowIdx, arr) => {
    console.log("total :", total);
    console.log("now :", now);
    console.log("nowIdx :", nowIdx);
    console.log("arr :", arr);
    console.log("\n");
    return total + now;
});
