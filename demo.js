// mysql query
// SELECT MAX(salary) from Persons where salary NOT IN (SELECT MAX(salary) from Persons);

// SELECT salary from Persons p WHERE 3-1 = (SELECT COUNT(DISTINCT salary) from Persons p2 WHERE p2.salary > p.salary) ;

// SELECT salary FROM Persons  GROUP BY salary ORDER BY salary DESC LIMIT 3,1;

// Q.2 Print all columns in rows

// Output:
// A,D,D,G
// B,E,E,H
// C,F,F,I
// X,Y,Y,Z
// K,K,K
// J

// const data = [
//   ["A", "B", "C","X"],
//   ["D", "E", "F","Y", "k"],
//   ["D", "E", "F","Y", "k"],
//   ["G", "H", "I","Z", "k", "J"]
// ];

// const temp = []
// for (let i = 0; i< data.length; i++) {
//   const childArr = data[i]
//   for (let j = 0; j < childArr.length; j++) {
//     if(temp[j] == undefined ){
//       temp[j] = [childArr[j]]
//     }else{
//       temp[j].push(childArr[j])
//     }
//   }
// }
// console.log(temp.join("\n"))

// const num = 124
// let temp = num
// let palindromeNum = ''

// while(temp>0){
//   let paliNum = temp%10
//   palindromeNum += paliNum
//   temp = parseInt(temp/10)
//   i++
// }

// console.log("palindrome",parseInt(palindromeNum))

// const num = 121
// let temp = num
// let palindromeNum = 0

// while(temp>0){
//   let paliNum = temp%10
//   temp = parseInt(temp/10)
//   palindromeNum = palindromeNum * 10 + paliNum
// }
// if (num === palindromeNum) {
//   console.log("this is palindrome:",palindromeNum)
// }else{
//   console.log("this is not a palindrome:",num)
// }

// const num = 23
// let temp = parseInt(num/2)
// let flag = false

// for (let i = 2; i < temp; i++) {
//      if(num % i == 0){
//       flag = true
//       break;
//      }
// }
// if (flag) {
//   console.log("this is not a prime number:",num)
// }else{
//   console.log("this is a prime number:",num)
// }

// const num = 27
// for (let i = 3; i < num; i++) {
//   let flag = true
//   for (let j = 2; j < i; j++) {
//     if(i%j==0){
//       flag = false
//       break;
//     }
//   }
// if(flag){
//   console.log(i)
// }
// }

// const num = 152
// let temp = num
// let armstrongNum = 0

// while(temp > 0){
//    let arsNum = temp%10
//    temp = parseInt(temp/10)
//    armstrongNum += arsNum*arsNum*arsNum
// }
// if(num === armstrongNum){
//   console.log("this is armstrong number:",armstrongNum)
// }else{
//   console.log("this is not a armstrong number:",num)
// }

// function demo() {
//   x = 5;
//   console.log(x)
//   // var x
// }
// demo()
// console.log(x)

// const num = 13
// let a = 0, b = 1

// for (let i = 0; i < num; i++) {
//     console.log(a)
//     a = a + b;
//     b = a - b;
// }

// var a = 4;

// function greet() {
//     b = 'hello';
//     console.log(b);
//     var b;
// }

// greet()
// console.log(b)

// console.log(a);
// var a = 5;
//  a = 4

// const d = 1/0
// console.log(d)

// console.log(Math.sign(d))
// function demo(){
//     var a = b = 5
//     }
// demo()
// console.log(b)
// console.log(a)ar a

// (function(x) {
//     return (function(y) {
//         console.log(y);
//     })(2)
// })(1);

// const data = new Date()
// console.log(data.getDay())

// let temp = false
// const promise = new Promise((resolve,reject)=>{
//    if(temp){
//     resolve("promise is fulfilled")
//    }
//    reject("promise is rejected")
// })
// promise.then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error)
// })

// console.log(demo)
// var demo = ()=>{
//     a = 7
//     console.log(a)
// }

// demo()

// const arr = [3,4,8]
// let first = 0
// for (let i = 0; i < arr.length; i++) {
//     if(i === 0){
//         first = arr[i]
//     }

// }
// console.log(first)

// function demo() {
//   let a = b = 0;
//   a++;
//   // console.log(a,b)
//   return a;
// }

// demo();

// console.log( typeof a)
// console.log( typeof b)

// let temp = ''
// for (let i = 0; i < 7; i++) {
//    for (let j = 0; j < 7; j++) {
//     temp += "\xa0"
//    }
//    temp +='\n'

// }

// console.log(temp)

// const promise1 = new Promise((resolve, reject) => {
//   resolve(1);
// });
// // console.log(promise1);
// const promise2 = new Promise((resolve, reject) => {
//   resolve(promise1);
// });
// // console.log(promise2);
// const promise3 = new Promise((resolve, reject) => {
//   reject(promise2);
// });

// Promise.all([promise1, promise2, promise3])
//   .then((value) => console.log("=====>", value))
//   .catch((e) => console.log("eeeeee", e));
// promise3.then((data)=> console.log(data))

// const promise1 = new Promise((resolve, reject) => {
//   resolve("l");
//   return new Promise((resolve, reject) => {
//     resolve("s");
//     return new Promise((resolve, reject) => {
//       resolve("f");
//     });
//   }).then((data)=>console.log(data));
// })

// const data = [[2018,"sourabh"],[2019,"vineet"]]

// const arr = data.map((item)=> {
//     return {[item[0]] : item[1]}
// })

// console.log(arr)

// const data = [20, 30, 40, 20, 30, 40];
// const arr = []
// const ind = []
// let count = 0

// for (let i = 0; i < data.length; i++) {
//     for (let j = 0; j < data.length; j++) {
//         if(data.includes(data[i]),i+1){
//             arr.push(data[i])
//             count++
//         }
//     }
// }

// console.log("===>",arr)

// for (const key in data) {
//     if(data.includes(data[key],key+1)){
//        let index = ind.indexOf(data[key],key+1)
//        if(index > -1){
//          ind.push(index)
//          if(!ind.includes(key)){
//            arr.push(data[key]+data[key])
//          }
//        }else{
//         arr.push(data[key])
//        }
//     }else{
//         arr.push(data[key])
//     }
// }

// console.log(arr)

// const data = [1, 2, 11, 12, 13, 13, 13, 12, 4, 2, 6, 5, 11];
// const unique = [];
// const duplicate = [];
// for (let i = 0; i < data.length; i++) {
//   if (!data.includes(data[i], i + 1)) {
//     if (!duplicate.includes(data[i])) {
//       unique.push(data[i]);
//     }
//   } else {
//     if (!duplicate.includes(data[i])) {
//       duplicate.push(data[i]);
//     }
//   }
// }

// data.forEach((item)=>{
//     if(data.indexOf(item)===data.lastIndexOf(item)){
//         unique.push(item)
//     }
//     if(data.indexOf(item)!==data.lastIndexOf(item)){
//         duplicate.push(item)
//     }
// })

// data.forEach((item) => {
//   if (data.indexOf(item) === data.lastIndexOf(item)) {
//     unique.push(item);
//   } else {
//     if (!duplicate.includes(item)) {
//       duplicate.push(item);
//     }
//   }
// });
// console.log("unique", unique);
// console.log("duplicate", duplicate);

// const data = [20, 30, 40, 20, 30, 30, 40, 40, 40];
// let obj = {};

// data.forEach((item, index, arr) => {
//   let count = 1;
//   if (obj[item]) {
//     count = obj[item] / item;
//   }
//   if (arr.includes(item, index + 1)) {
//     obj = { ...obj, [item]: item * (count + 1) };
//   }
// });

// console.log(obj);

// const data = [20, 30, 40, 20, 30, 40, 30];
// let obj = [];

// data.forEach((item, index, arr) => {
//   let count = 1;
//   if (obj[item]) {
//     count = obj[item] / item;
//   }
//   if (data.includes(item, index + 1)) {

//     obj = [...obj, [item, item * (count + 1)]];
//     obj.forEach((element,key)=>{
//       console.log("====>",element[0])
//     })
//   }
// });

// console.log(obj);

// const obj = [{
//   id:1, name:"sourabh"
// },
// {
//   id:2, name:"sourabh"
// },
// {
//   id:3, name:"sourabh"
// },
// {
//   id:1, name:"sourabh"
// },
// {
//   id:2, name:"sourabh"
// },]

// const arr = []
// for (const data of obj) {
//   if(!arr.find((item)=> item.id === data.id)){
//     arr.push(data)
//    }
// }
// console.log(arr)

// let a = 0;
// let b = 1;
// const temp = 13

// for (let i = 0; i < temp; i++) {
//   console.log(a)
//   a = a+b;
//   b = a-b
// }

// create bar-chart

// const arr = [5, 4, 6, 3,7,4, 1];
// let temp = "";
// let max = Math.max(...arr);

// for (let k = 0; k < arr.length; k++) {
//   for (const item of arr) {
//     let count = max - item;
//     if (k < count ) {
//         temp += "  ";
//     } else {
//       temp += "* ";
//     }
//   }
//   temp += "\n";
// }
// console.log(temp);

// const pattern = (num)=> {
// let temp =""
//   for (let i = 0; i < num; i++) {
//     for (let j = 0; j < num; j++) {
//       if(i === 0 || j=== 0 || j===num-1 || i === num-1){
//         temp += " *"
//       }else{
//         temp += "  "
//       }
//     }
//     temp += "\n"
//   }
//   return temp

// }
// console.log(pattern(6))

// const arr = [1,2]
// const arr1 = [...arr]

// console.log(arr === arr1)

// const arr = [
//   [1, 2, 3, 4, 5,15],
//   [4, 5, 6, 7, 8,10],
//   [7, 8, 25, 9, 10,9],
//   [7, 8, 25, 8, 9,15],
//   [7, 8, 25, 9, 12,14],
//   [7, 8, 25, 9, 12,13],
// ];

// let right = 0;
// let left = 0;

// for (let i = 0; i < arr.length; i++) {
//   let len = arr[i].length;
//   for (let j = 0; j < len; j++) {
//     if (i == j || j + i == len - 1) {
//       if (i == j) {
//         if (i == j && j + i == len - 1) {
//           left += arr[j][i];
//         }
//         right += arr[j][i];
//       } else {
//         left += arr[j][i];
//       }
//     }
//   }
// }

// console.log("left:", right, "right:", left);

// const num = 20;
// function printFizzBuzz(num) {
//   for (let i = 1; i <= num; i++) {
//     if (i % 5 == 0 && i % 3 == 0) {
//       console.log("fizz buzz");
//     } else if (i % 5 == 0) {
//       console.log("buzz ");
//     } else if (i % 3 == 0) {
//       console.log(" fizz");
//     } else {
//       console.log(i);
//     }
//   }
// }

// printFizzBuzz(num);

// const person = {
//   name: "John",
//   age: 30,
// };
// function printAge() {
//   console.log(`Age: ${this.age}`);
// }
// setTimeout(printAge.bind(person));

// const person = {
//   name: "John",
//   age: 30,
//   printAge: function () {
//     console.log(`Age: ${this.age}`);
//   },
// };
// setTimeout(() => person.printAge(), 1000);

// function infiniteCurry(fn, arity = fn.length) {
//     return function curried(...args) {
//         console.log("arity", arity)
//       if (args.length >= arity) {
//         return fn(...args);
//       } else {
//         return curried.bind(null, ...args);
//       }
//     };
// }

// Example usage
// function add(a, b, c) {
//   return a + b + c;
// }

//const curriedAdd = infiniteCurry(add);

//  console.log(curriedAdd(1)(2)(3));         // Output: 6
//console.log(curriedAdd(1, 2)(3));        // Output: 6
//console.log(curriedAdd(1)(2, 3));        // Output: 6
//console.log(curriedAdd(1, 2, 3));        // Output: 6
//console.log(curriedAdd(1)(2)(3)(4));     // Output: 10

// find initial odd number
// let num = 3
// const array = []
//   for (let i = 0; i < num; i++) {
//     if(array.length<20){
//      if((num%2)!== 0){
//         array.push(num)
//      }
//       num++;
//     }
//   }
// console.log("array:", array, "array.length:", array.length)

// this a groupBy method of object

// const inventory = [
//   { name: "asparagus", type: "vegetables", quantity: 5 },
//   { name: "bananas", type: "fruit", quantity: 0 },
//   { name: "goat", type: "meat", quantity: 23 },
//   { name: "cherries", type: "fruit", quantity: 5 },
//   { name: "fish", type: "meat", quantity: 22 },
// ];

// const result = groupBy(inventory, ({ type }) => type);

// const array = [
//   { id: 'a', name: 'Alice' },
//   { id: 'b', name: 'Bob' },
//   { id: 'a', name: 'Alice' }, // Duplicate
// ];
// const uniqueArray = [...new Set(array.map(JSON.stringify))].map(JSON.parse);
// console.log(uniqueArray);
// const unique =  inventory.filter((obj, index, self)=> index === self.findIndex(item => item.key === obj.key))

// function groupBy(arrayOfObject, key){
//   let unique = []
//   arrayOfObject.forEach(element => {
//     if(!unique.includes(element[key])){
//       unique.push(element[key])
//     }
//   });
//  let groups = []
//  for (const element of unique) {
//    const data =  arrayOfObject.filter(item => item.type === element)
//    groups =  [...groups, {[element]: data}] ;
//  }
//  return groups
// }

// const value = groupBy(inventory,"type")
// console.log(JSON.stringify(value))

// this a groupBy method of object
// const inventory = [
//   { name: "asparagus", type: "vegetables", quantity: 5 },
//   { name: "bananas", type: "fruit", quantity: 0 },
//   { name: "goat", type: "meat", quantity: 23 },
//   { name: "cherries", type: "fruit", quantity: 5 },
//   { name: "fish", type: "meat", quantity: 22 },
// ];

// const groupBy = (arrayOfObjects, key) => {
//   return arrayOfObjects.reduce((groups, element) => {
//     if (!groups[element[key]]) {
//       groups[element[key]] = [];
//     }
//     groups[element[key]].push(element);
//     return groups;
//   }, {});
// };
// const value = groupBy(inventory, "type");
// console.log(value);

// Array.prototype.groupBy = (arrayOfObjects, key)=>{
//   return arrayOfObjects.reduce((groups, element)=>{
//     if (!groups[element[key]]){
//       groups[element[key]]=[]
//     }
//     groups[element[key]].push(element)
//     return groups;
//   },{})
// }

// const data = inventory.groupBy(inventory,"type")
// console.log(data)

// function updateOrAddOwnership(ownership, keys, index, value) {
//   const updatedOwnership = { ...ownership };
//   if (!updatedOwnership[keys]) {
//     updatedOwnership[keys] = [];
//   }
//   const indexToUpdate = updatedOwnership[keys].findIndex(
//     (item) => item.id === index
//   );
//   if (indexToUpdate !== -1) {
//     updatedOwnership[keys][indexToUpdate].sliderValue = value;
//   } else {
//     updatedOwnership[keys].push({
//       id: index,
//       type: keys[0],
//       sliderValue: value,
//     });
//   }
//   const sum = updatedOwnership[keys].reduce(
//     (total, item) => total + item.sliderValue,
//     0
//   );
//   updatedOwnership[`${keys}_sum`] = sum;
//   return updatedOwnership;
// }
// const ownership = {};
// const updatedOwnership = updateOrAddOwnership(ownership, "example", 1, 42);
// console.log(updatedOwnership);

// Q.-: Pendulum Arrangement
// const arr = [11, 10, 12, 14, 13, 15, 16];

// const sortArr = arr.sort((a, b) => a - b);
// const newArr = [];
// let index = Math.floor(arr.length / 2);
// newArr[index] = sortArr[0];
// for (let i = 0; i < sortArr.length; i++) {
//   if (sortArr[i] % 2 == 0 && sortArr[i] !== 10) {
//     index += i;
//     newArr[index] = sortArr[i];
//   } else if (sortArr[i] !== 10) {
//     index -= i;
//     newArr[index] = sortArr[i];
//   }
// }
// console.log("Pendulum Arrangement :", newArr);

//-------------------------OR------------------------------------------

// const PendulumArrangement = (array) => {
//   const sortArr = array.sort((a, b) => a - b);
//   const pendulum = [];
//   let index = Math.floor(sortArr.length / 2);
//   for (let i = 0; i < sortArr.length; i++) {
//     if (sortArr[i] !== 10) {
//       index += sortArr[i] % 2 == 0 ? i : -i;
//     }
//     pendulum[index] = sortArr[i];
//   }
//   return pendulum;
// };
// const arr = [11, 10, 12, 18, 17, 14, 13, 15, 16, 19, 20];
// const pendulum = PendulumArrangement(arr);
// console.log("Pendulum Arrangement:", pendulum);

// Constructor Functions:
//  Constructor functions are used to create objects based on a template.

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const person1 = new Person("John", 30);
// console.log(person1);

// --------------------------- find unique value from array of object------------------

// const a = [
//   { id: 1, name: "sourabh" },
//   { id: 3, name: "sourabh" },
//   { id: 1, name: "sourabh" },
//   { id: 3, name: "sourabh" },
//   { id: 2, name: "sourabh" },
// ];

// let b = []
// for(let item of a){
//     const checkValue = b.find((ele)=> item.id == ele.id)
//     if(!checkValue){
//         b.push(item)
//     }
// }
// const sortData = b.sort((a,b)=> a.id-b.id)
// console.log("bbb", sortData)

// --------------------------- find unique value from array of object "second way"------------------

// const uniqueIds = new Set();
// const b = [];
// console.log(uniqueIds, "uniqueIds");
// for (let item of a) {
//   console.log(uniqueIds.has(item.id), "uniqueIds.has(item.id)");
//   if (!uniqueIds.has(item.id)) {
//     uniqueIds.add(item.id);
//     b.push(item);
//   }
// }
// console.log(uniqueIds, "uniqueIds");
// const sortData = b.sort((a, b) => a.id - b.id);
// console.log("bbb", sortData);

// // find unique number in the array
// const array = [1, 2, 3, 1, 2, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4];
// const unique = [];

// for (const iterator of array) {
//   if (unique.indexOf(iterator) === -1) {
//     unique.push(iterator);
//   }
// }

// for (const iterator of array) {
//   if (!unique.includes(iterator)) {
//     unique.push(iterator);
//   }
// }
// console.log("unique", unique);

// find duplicate number in the array
// const array = [0, 1, 2, 3, 2, 3, 4, 4, 4];
// const duplicate = [];

// for (const iterator of array) {
//   if (array.indexOf(iterator) !== array.lastIndexOf(iterator)) {
//     if (!duplicate.includes(iterator)) {
//       duplicate.push(iterator);
//     }
//   }
// }
// console.log("duplicate", duplicate);

// find occurrence in the array
// const array = [1, 2, 3, 2, 3, 4, 4, 4, 8, 8, 9, 9, 9, 4];
// let occurrence = [];
// const set = new Set();

// for (const iterator of array) {
//   if (array.indexOf(iterator) !== array.lastIndexOf(iterator)) {
//     if (!set.has(iterator)) {
//       set.add(iterator);
//       occurrence.push({ [iterator]: 1 });
//     } else {
//       occurrence = occurrence.map((value) => {
//         if (iterator == Object.keys(value)[0]) {
//           value[iterator]++;
//         }
//         return value;
//       });
//     }
//   }
// }

// console.log("occurrence", occurrence);

// const array = [1, 2, 3, 2, 3, 4, 4, 4, 8, 8, 9, 9, 9, 4];
// const occurrenceWithNewMap = new Map();

// for (const value of array) {
//   occurrenceWithNewMap.set(value, (occurrenceWithNewMap.get(value) || 0) + 1);
// }
// console.log("occurrenceWithNewMap", occurrenceWithNewMap);
// console.log([...occurrenceWithNewMap]);

// const array = [1, 2, 3, 2, 3, 4, 4, 4, 8, 8, 9, 9, 9, 4];
// let occurrence = {};
// for (const value of array) {
//   occurrence = { ...occurrence, [value]: (occurrence[value] || 0) + 1 };
// }
// console.log("occurrence", occurrence);

// const array = [1, 2, 3, 2, 3, 4, 4, 4, 8, 8, 9, 9, 9, 4];
// const occurrenceWithReduce = array.reduce((obj, value) => {
//   return (obj = { ...obj, [value]: (obj[value] || 0) + 1 });
// }, {});
// console.log("occurrenceWithReduce", occurrenceWithReduce);

// create any type pattern for singal line
// function transformToPattern(input, transformation) {
//   let result = "";
//   let inputIndex = 0;
//   for (let i = 0; i < transformation.length; i++) {
//     if (transformation[i] === "x") {
//       result += input[inputIndex] || "x";
//       inputIndex++;
//     } else {
//       result += transformation[i];
//     }
//   }
//   return result;
// }
// const input = "ghjuiopluyt";
// const customPattern = "xxx-xxxx-xxx";
// const output = transformToPattern(input, customPattern);
// console.log(output);

// const obj = {
//   a: {
//     b: {
//       c: {
//         // name: "sourabh",
//         // run: () => {
//         //   console.log("this", this);
//         //   return this; //output {} with arrow function
//         // },
//         name: "sourabh",
//         run: function () {
//           console.log("this", this);
//           return this; //output { name: 'sourabh', run: [Function: run] } with normal function
//         },
//       },
//     },
//   },
// };

// console.log(obj.a.b.c.run());
// fun = obj.a.b.c.run();
// console.log("fun", fun);
// fun = obj.a.b.c.run;
// console.log(fun());

const arr = [
  { id: 1, name: "sourabh" },
  { id: 3, name: "sourabh" },
  { id: 1, name: "sourabh" },
  { id: 3, name: "sourabh" },
  { id: 2, name: "sourabh" },
];

// const myMap = new Set();
// const array = [];
// for (const item of arr) {
//   if (!myMap.has(item.id)) {
//     myMap.add(item.id);
//     array.push(item);
//   }
// }
// console.log(array);

// const mySet = new Set();
// const reduce = arr.reduce((arrr, obj) => {
//   if (!mySet.has(obj.id)) {
//     mySet.add(obj.id);
//     arrr.push(obj);
//   }
//   return arrr;
// }, []);

// console.log("reduce", reduce);

const opRreduce = arr.reduce((uniqueArr, obj) => {
  return uniqueArr.has(obj.id)
    ? uniqueArr
    : (uniqueArr.add(obj.id), uniqueArr.add(obj));
}, new Set());

const uniqueArray = [...opRreduce];

console.log("opRreduce", uniqueArray);
