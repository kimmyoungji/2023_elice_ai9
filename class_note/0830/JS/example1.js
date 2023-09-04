// this

/******************************************

// 예제 1. this 가 필요한 이유
// 객체 리터럴을 만들고 객체 리터럴에서 사용한 this가 뭐가 나오는지 확인해보자
const foo = {
  name: 'foo',
  sayHello() {
    console.log(this);
  }
}

foo.sayHello();

// 예제 1-1. this 가 필요한 이유
class Person {
  constructor(name) {
    // 인스턴스 프로퍼티
    this.name = name;
  }
}

const me = new Person('Lee');
console.log(me); // Person {name: "Lee"}

// 예제 2. 상황별 this
// 전역에서 this
// 전역 객체 window를 가리킨다.
console.log(this); // window

// 일반함수로서 호출했을 때 this
function square(number) {
  // 일반 함수 내부에서 this는 전역 객체 window를 가리킨다.
  console.log(this); // window
  return number * number;
}
square(2);

// 메서드에서 호출했을 때 this
const person = {
  name: 'Lee',
  getName() {
    // 메서드 내부에서 this는 메서드를 호출한 객체를 가리킨다.
    console.log(this); // {name: "Lee", getName: ƒ}
    return this.name;
  }
};
console.log(person.getName()); // Lee

// 생성자 함수에서 호출했을 때 this
class Person {
  constructor(name) {
    // 인스턴스 프로퍼티
    this.name = name;
  }
}

const me = new Person('Lee');
console.log(me); // Person {name: "Lee"}

// 예제 3. 화살표 함수 적용 전 this
const elice = {
  name: 'elice',
  outerFn() {
    console.log("outerFn", this);
    const innerFn = function() {
      console.log("innerFn", this);
    }
    innerFn();
  }
}

elice.outerFn();

// 예제 3-1. 화살표 함수 적용 후 this
const elice = {
  name: 'elice',
  outerFn() {
    console.log("outerFn", this);
    const innerFn = () => {
      console.log("innerFn", this);
    }
    innerFn();
  }
}

elice.outerFn();

// 예제 3-2. 화살표 함수를 사용한 문제 해결
const ageCheck = {
  unit: '대',
  ageList: [10, 20, 30],
  getAgeList () {
    // 밑에 함수를 어떻게 바꾸면 될까?
    const result = this.ageList.map(function(el) {
      console.log(this);
      return el + this.unit;
    });

    console.log(result);
  }
}

// 예제 3-3. 객체의 메서드를 화살표 함수로 선언하면?
const obj = {
  a: "park",
  sayHi: () => console.log(this, "sayHi"), // window
  sayHello() {
    console.log(this, "sayHello"); // obj
    var bar = () => {
      console.log(this, 'bar');
      let zoo = () => console.log(this, 'zoo');
      zoo();
    }
    bar();
  },
};

obj.sayHello();

ageCheck.getAgeList();

// 예제 4. call, apply, bind
// call, apply, bind 적용전
const dog = {
  age: 12
}

function printDogAge() {
  // 무슨 값이 나오는가?
  console.log(this.age)
}

// call, apply, bind 적용 후
// call
const dog = {
  age: 12 
}
function printDogAge() {
  console.log(this.age)
}
printDogAge.call(dog)

// call 에 추가 매개변수 전달할 경우
const dog = {
  age: 12 
}
function printDogAge(name, location) {
  console.log(this.age, name, location)
}
printDogAge.call(dog, 'mike', 'seoul')

// apply
const dog = {
  age: 12 
}
function printDogAge(name, location) {
  console.log(this.age, name, location)
}
printDogAge.apply(dog, ['mike', 'seoul']) 

// apply를 써야되는 상황
// Math.max 함수를 통해 최대값을 구할 수 있다
// Math.max(1,2,3);

// 그렇다면 배열의 최대값을 어떻게 구할 수 있을까??
let arr = [1,2,3];
// 이 경우 this를 무엇을 지정해주든 상관이 없다
Math.max.apply(null, arr);
// 이렇게도 사용할 수도 있다
Math.max(...arr);

// bind
const dog = {
  age: 12 
}
function printDogAge(name, location) {
  console.log(this.age, name, location)
}
const print = printDogAge.bind(dog);

print('lala', 'USA')

// bind2
const person = {
  name: "Park",
  foo(callback) {
    console.log(this);
    callback.bind(this)();
  }
}

person.foo(function() {
  console.log(this);
  console.log(`Hi, my name is ${this.name}`);
})


***********************************************************/
// 실습 1. 객체 리터럴과 생성자 함수를 선언한 뒤 this를 찍어봅시다.

// 실습 2. 생성자 함수를 선언한 뒤 this로 값을 가리키지 않는 경우 어떤 값이 선언이 되는지 확인해봅시다.

// 실습 3. 객체 리터럴로 값을 선언한 뒤, 메서드를 선언하고, 메서드 안에서 화살표 함수를 선언한 뒤 this 값을 콘솔에 찍어봅시다

// 1단계 함수르 선언합시다.

// const tmp = {
//   name: 'Park',
//   fn(callback){
//     callback();
//     console.log(this); //elice
//   }
// }

// tmp.fn(function(){
//   console.log(this); // window
// })

// const tmp = {
//   name: "Park",
//   fn(callback) {
//     callback.bind(this)();
//     console.log(this); //elice
//   },
// };

// tmp.fn(function () {
//   console.log(this); // window
// });

const tmp = {
  name: "Park",
  fn(callback) {
    callback();
    console.log(this); //elice
  },
};

const arrowFn = () => {
  console.log(this); // 상위스코프의 this
};

tmp.fn(arrowFn);
