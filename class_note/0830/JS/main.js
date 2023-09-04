import { sayHi } from "./sayHi.js";
// import {sayHi as hi, sayBye as bye} from './say.js';
import { User } from "./sayHi.js";

new User("John");

alert(sayHi); // 함수
sayHi("John"); // Hello, John!
