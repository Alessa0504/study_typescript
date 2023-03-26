import {hi} from './m1';   //引入hi

console.log("哈哈");
console.log(hi);

//测试浏览器低版本编译后的bundle.js(ie 11没有const)
const person = {name:"jillian", age:30}
person.age = 18
console.log(person);
console.log(Promise);  //ie不支持Promise