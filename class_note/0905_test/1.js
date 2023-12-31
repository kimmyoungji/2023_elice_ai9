// promise 객체 메서드의 기본 반환값이 this 임을 확인하고 싶다.

// 땡 질문 부터가 틀렸다. promise 객체 메서드이 기본 반환값은
// promise 객체 자신이다. 그럼 this인게 맞지 않냐고? 아니다. 
// 이상하게도.. Promise 내부의 this는 Promise 객체를 가리키지 않는다. 
// 대신 Window 전역 객체를 가리킨다.

// 고로, 다시 질문 하자면
// Promise 객체 메서드의 기본 반환값이 Promise객체 자신인가?
// 라고 묻는다면 맞다.

// 그렇다면 이 Promise 객체가 외부로 전달하고자 하는 값은 자동으로
// 반환되는 Promise 객체 안에 담기는가?

// 아니다. 기본적으로 대부분의 Promise 객체의 메서드는 Promise 객체
// 자신을 반환하지만, 외부로 전달하고자 하는 값은 Promise 객체 메서드의
// 매개변수를 통해 지정해주어야한다.

// 나는 지금 프로미스를 잘 못 인식하고 있다. 프로미스는 단순히 비동기
// 처리를 하고 싶은 코드를 감싸는 객체일 뿐이다. 그리고 그 코드의 진행 
// 상태를 저장하는 객체일뿐이다. 너무 어렵게 생각하고 있다.
// 핵심에 집중해보자. 프로미스의 정의는
// 비동기 처리의 최종 완료 또는 실패를 나타내는 객체
// 비동기 처리의 최종 완료 또는 실패를 나타내는 객체
// 비동기 처리의 최종 완료 또는 실패를 나타내는 객체
// 비동기 처리의 최종 완료 또는 실패를 나타내는 객체

// 이 안에는 비동기 처리되야 하는 함수 뿐만이 아니라, 
// 동기처리 되는 코드도 들어올 수 있다.
// 그 동기처리 되는 코드들이 비동기적으로 처리될 뿐. 

// 프로미스는 비동기 처리의 최종 완료 또는 실패는 나타내는 객체
// 프로미스는 비동기 코드의 처리 상태를 나타내는 객체
// 프로미스는 비동기 코느듸 처리 상태를 

let myPromise = new Promise((resolve, reject)=>{
    resolve('hello');
    setTimeout(()=>{
       co
    },2000);
});
console.log(myPromise);

// 프로미스는 어떻게 사용하는 거지?
// 바로 프로미스 객체를 생성하거나, 프로미스 생성문을 함수에 담아놨다가 
// 그 함수를 호출하는 방법이 있다.

// 프로미스 객체는, 언제 생성해주는 거지?
// 비동기 함수를 호출 하고 싶을 때, 프로미스 객체를 생성하거나,
// 프로미스 객체 생성문이 들어있는 함수를 호출한다.

// 프로미스를 활용한 비동기 함수에서 반환값을 얻어오는 방법은 일반적인 동기함수에서
// 반환값을 받아오는 방법과 사뭇다르다.
// 일반 동기함수는 그저 아래와 같이 변수와 할당연산자의 뒤에 함수호출문을 넣어주면 되지만,
// 프로미스를 활용한 비동기 함수는 then 과 catch 메소드를 호출하여 내부의
// 프로미스의 결과값을 원하는 변수에 할당해야 한다. 어렵다.. 헣

// 프로미스객체의 then, catch, finally 메소드들은 프로미스를 반환한다
// 프로미스 객체로 생성된 비동기 함수의 반환값은 프로미스 객체의 정적메소드의
// 매개변수로 전달된다.
// 그러므로 프로미스를 이용한 비동기 함수의 반환값을 얻고 싶으면 프로미스의 
// 정적메소드 안에서 할당문을 실행해야한다. 

// 이런 형태의 코드를 부르는 이름이 있을까?
// 이거 클로져를 활용한 객체 생성 방법인가?
// ```js
// const myObj = ()=>{
//     let n = 0;
//     function getN(){
//         //...
//     }
//     function setN(){
//         //...
//     }
//     function searchN(){
//         //...
//     }
//     return {getN, setN, searchN}
// }
// // ```


// 이렇게 활용 방법에 대해 정리를 해보는게 도움이 많이 될듯하다.

