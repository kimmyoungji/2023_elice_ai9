const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let isInput = false;
let a, b, c, d;

rl.on('line', function (x) {
  while (!isInput) {
    if(x.indexOf('e')> -1){
        break;
    }
    // 트림해주기
    console.log('before trim',x);
    x.trim();
    console.log('after trim',x);
    // 띄어쓰기에 따라 배열에 넣어주기
    input = x.split(' ');
    console.log('after split',input);
    // 입력 길이 확인
    // 길이 4 일 때
    if (input.length === 4) {
      // 문자가 있는지 확인하기
      var checkNum = input.map((e)=>{return typeof(e)}).includes(NaN);
      console.log("checkNum",checkNum);
      if(checkNum){
        console.log('enter only number please');
      }else{
        isInput = true;
        solution(input);
      }
      // 길이 4 아닐때
    } else console.log('enter four numbers please.');
  }
  rl.close;
});

// 지시사항을 참고하여 solution 함수 안에 코드를 작성하세요.
function solution(input) {
  var answer;
  // 숫자배열로 만들기
  var [a, b, c, d] = input;

  // 암호 규칙 확인
  if ((a <= b && a == d && b > c && c < 6) || (a == b && a == c && a == d)) {
    answer = true;
  } else {
    answer = false;
  }
  return answer;
}