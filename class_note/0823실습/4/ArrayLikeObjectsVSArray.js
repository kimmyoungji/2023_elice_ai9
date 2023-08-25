// 문자열(유사배열)
const tmp = "string";
console.log(tmp[1]);
tmp[1] = "H";
console.log(tmp);
tmp.map((v) => console.log(v));

// 배열

const tmp2 = tmp.split("");
console.log(tmp2);
tmp2[1] = "H";
console.log(tmp2);
tmp2.map((v) => console.log(v));
