const str = "엘리스 AItrack 9기 과정 레이서분들 안녕하세요";
// 1
console.log(str); // 엘리스 AItrack 9기 과정 레이서분들 안녕하세요

// 2
console.log(str.split()); // [ '엘리스 AItrack 9기 과정 레이서분들 안녕하세요' ]

// 3
console.log(str.split(" ")); // [ '엘리스', 'AItrack', '9기', '과정', '레이서분들', '안녕하세요' ]

// 4
console.log(str.split("SW")); // [ '엘리스 AItrack 9기 과정 레이서분들 안녕하세요' ]

// 5
console.log(str.split(" ", 2)); // [ '엘리스', 'AItrack' ]

// 6
console.log(str.split(""));
/*
[
  '엘', '리', '스', ' ',  'A',  'I',
  't',  'r',  'a',  'c',  'k',  ' ',
  '9',  '기', ' ',  '과', '정', ' ',
  '레', '이', '서', '분', '들', ' ',
  '안', '녕', '하', '세', '요'
] 
*/
