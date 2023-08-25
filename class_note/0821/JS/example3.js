/* 객체 리터럴, 함수 */
 
/* 1. 예제 */
var person = {
  name: 'Park',
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}.`);
  }
};

console.log(typeof person); // object
console.log(person); // {name: "Park", sayHello: ƒ}


/* 2. 예제 */
var person = {
  name: 'Park'
};

// 마침표 표기법에 의한 프로퍼티 접근
console.log(person.name); // Park

// 대괄호 표기법에 의한 프로퍼티 접근
console.log(person['name']); // Park

/* 3. 예제 */
var person = {
  name: 'Park'
};

// person 객체에는 age 프로퍼티가 존재하지 않는다.
// 따라서 person 객체에 age 프로퍼티가 동적으로 생성되고 값이 할당된다.
// person 객체에 name 프로퍼티가 존재하므로 name 프로퍼티의 값이 갱신된다.
person.age = 20;
person.name = "Kim";

console.log(person); // {name: "Kim", age: 20}

/* 4. 예제 */
var person = {
  name: 'Park'
};

// 프로퍼티 동적 생성
person.age = 20;

// person 객체에 age 프로퍼티가 존재한다.
// 따라서 delete 연산자로 age 프로퍼티를 삭제할 수 있다.
delete person.age;

// person 객체에 address 프로퍼티가 존재하지 않는다.
// 따라서 delete 연산자로 address 프로퍼티를 삭제할 수 없다. 이때 에러가 발생하지 않는다.
delete person.address;

console.log(person); // {name: "Park"}

/* 5. 예제 */
// ES5
var x = 1, y = 2;

var obj = {
  x: x,
  y: y
};

console.log(obj); // {x: 1, y: 2}

// ES6
let x = 1, y = 2;

// 프로퍼티 축약 표현
const obj = { x, y };

console.log(obj); // {x: 1, y: 2}

// ES5
var obj = {
  name: 'Park',
  sayHi: function() {
    console.log('Hi! ' + this.name);
  }
};

obj.sayHi(); // Hi! Park

// ES6
const obj = {
  name: 'Park',
  // 메서드 축약 표현
  sayHi() {
    console.log('Hi! ' + this.name);
  }
};

obj.sayHi(); // Hi! Park

/* 6. 예제 */
// f(x, y) = x + y
function add(x, y) {
  return x + y;
}

/* 7. 예제 */
var x = 0;
var y = 0;
var result = 0;

x = 1;
y = 2;
result = x + y; // 3

x = 3;
y = 4;
result = x + y; // 7

x = 5;
y = 6;
result = x + y; // 11

function add(x, y) {
    return x + y;
}

var result = 0;

result = add(1, 2); // 3
result = add(3, 4); // 7
result = add(5, 6); // 11

/* 8. 예제 */
// 변수에 함수 리터럴을 할당
var f = function add(x, y) {
  return x + y;
};

/* 9. 예제 */
function foo() { console.log('foo'); }
foo(); // foo

/* 10. 예제 */
// 함수 참조
console.dir(add); // ƒ add(x, y)
console.dir(sub); // undefined

// 함수 호출
console.log(add(2, 5)); // 7
console.log(sub(2, 5)); // TypeError: sub is not a function

// 함수 선언문
function add(x, y) {
  return x + y;
}

// 함수 표현식
var sub = function (x, y) {
  return x - y;
};

/* 11. 예제 */
// 함수 선언문
function add(x, y) {
  return x + y;
}

// 함수 호출
// 인수 1과 2는 매개변수 x와 y에 순서대로 할당되고 함수 몸체의 문들이 실행된다.
var result = add(1, 2);


// class 선언
class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  // 메서드
  calcArea() {
    console.log(this.height * this.width);
  }
}

const square = new Rectangle(10, 10);

square.calcArea(); // 100


// 클래스 표현식
// unnamed
let Rectangle = class {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// 출력: "Rectangle"

// named
let Rectangle = class Rectangle2 {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }
};
console.log(Rectangle.name);
// 출력: "Rectangle2"

// 상속
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a noise.`);
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // super class 생성자를 호출하여 name 매개변수 전달
  }

  speak() {
    console.log(`${this.name} barks.`);
  }
}

let d = new Dog("Mitzie");
d.speak(); // Mitzie barks.


function add(x,y){
  return x + y;
}

let add2 = function (x,y){
  return x + y;
}

let add3 = new Function('x','y',`return x + y`);

let add4 = (x,y)=> x+y;

let person = {
  name: "park",
  age() {
    console.log('1');
  }
}

person.name = "kim myoungji";
person.track= "ai9";
delete person.track;

document.querySelector("#answer").textContent = person.track;

