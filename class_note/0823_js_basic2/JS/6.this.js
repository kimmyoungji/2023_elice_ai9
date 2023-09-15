// this

const circle = {
  radius: 5,
  getDiameter() {
    // this는 메서드를 호출한 객체를 가리킨다.
    return 2 * this.radius;
  }
};

console.log(circle.getDiameter()); // 10

// this 바인딩은 함수 호출 방식에 따라 동적으로 결정된다.
const foo = function () {
  console.dir(this);
};

// 동일한 함수도 다양한 방식으로 호출할 수 있다.

// 1. 일반 함수 호출
// foo 함수를 일반적인 방식으로 호출
// foo 함수 내부의 this는 전역 객체 window를 가리킨다.
foo(); // window

// 2. 메서드 호출
// foo 함수를 프로퍼티 값으로 할당하여 호출
// foo 함수 내부의 this는 메서드를 호출한 객체 obj를 가리킨다.
const obj = { foo };
obj.foo(); // obj

// 3. 생성자 함수 호출
// foo 함수를 new 연산자와 함께 생성자 함수로 호출
// foo 함수 내부의 this는 생성자 함수가 생성한 인스턴스를 가리킨다.
new foo(); // foo {}

// 4. Function.prototype.apply/call/bind 메서드에 의한 간접 호출
// foo 함수 내부의 this는 인수에 의해 결정된다.
const bar = { name: 'bar' };

foo.call(bar);   // bar
foo.apply(bar);  // bar
foo.bind(bar)(); // bar

class Person {
  constructor(name) {
    // 인스턴스 프로퍼티
    this.name = name;
  }
}

const me = new Person('Lee');
console.log(me); // Person {name: "Lee"}

const testCar = {
  name: "car",
  getName() {
    console.log("getName", this.name);
    const innerFunc = function () {
      console.log("innerFunc", this.name);
    }
    innerFunc();
  }
}

//화살표 함수는 상위 스코프의 this를 참조한다.
//일반함수에서 this 를 호출하면 ? 

testCar.getName(); 


const tmp = {
  test: "Name",
  fn(){
    console.log("얍" , this);
  }
}

console.log(tmp.fn());




// 실습 문제1
Object.keys() //키만 따로 배열로 반환하기
Object.values() //값만 따로 배열로 변환하기
reduce()
find()


// 실습6 
배열은 유사배열이기 때문에, 배열의 메소드를 사용할 수 없다.
함수선언문 == 함수리터럴 (두개는엄밀히 다르다.)
함수표현식
객체 리터럴 {}, 블록코드 {} 