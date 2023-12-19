// create praymid
// const fun = ()=>{

//     let temp = ""

//     for (let i = 0; i<= 7; i++) {

//         for(let j = 0; j<= 7-i; j++ ){
//             temp +=" "
//         }
//         for (let k = 0; k <= i*2; k++) {
//             temp += "*"
//         }
//       temp += "\n"
//     }
//     return temp
// }
// create reverse prayamid
// const fun1 = ()=>{

//     let temp= ""

//     for (let i = 0; i<= 7; i++) {
//         for (let k = 0; k <= i; k++) {
//             temp += " "
//         }
//         for(let j = 0; j<= 7*2-i*2; j++ ){
//             temp += "*"
//         }
//       temp += "\n"
//     }

//     return temp
// }
// console.log(fun())
// console.log(fun1())

//find second largest number into an array
// const arr = [12, 3, 4, 11, 10, 3, 6, 56, 65, 77, 9];
// let temp = 0;
// let secondLargest = 0;

// for (let i = 0; i < arr.length; i++) {
//   if (temp < arr[i]) {
//     temp = arr[i];
//   }
// }
// for (let j = 0; j < arr.length; j++) {
//   if (temp > arr[j] && secondLargest < arr[j]) {
//     secondLargest = arr[j];
//   }
// }
// console.log("Largest Number:", temp);
// console.log("secondLargest:", secondLargest);

//perform sorting into an array
// const arr = [12,7,3,4,11,10,6,56,65,77,9,]
// temp = 0

// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if(arr[i] < arr[j]){
//           temp = arr[j]
//           arr[j] = arr[i]
//           arr[i] = temp
//         }
//     }
// }
// console.log("sorting :",arr)

// const num = [2, 4, 5, 8];
// const target = 9;
// const result = [];

// for (let i = 0; i < num.length; i++) {
//   for (let j = 0; j < num.length; j++) {
//     if (num[i] + num[j] == target) {
//       result.push(i, j);
//     }
//   }
//   if (result.length > 0) {
//     break;
//   }
// }
// console.log("result :", result);

// add two array by their index
// const l1 = [10, 2, 10, 4];
// const l2 = [5, 6, 77, 36];

// const addTwoarray = (l1,l2)=>{
//   const result = [];
//   let borrow = 0;

//   for (let i = 0; i < l1.length; i++) {
//     let num = 0;
//     if (borrow) {
//       num = l1[i] + l2[i] + borrow;
//       borrow = 0
//     } else {
//       num = l1[i] + l2[i];
//     }
//     num = num.toString().split("");
//     if (num.length > 1) {
//       num[0] = parseInt(num[0]);
//       num[1] = parseInt(num[1]);
//       result.push(num[1]);
//       borrow = num[0];
//       if (l1.length - 1 == i) {
//         result.push(borrow);
//       }
//     } else {
//       result.push(parseInt(num[0]));
//     }
//   }
//   console.log("result :", result);
// }
// addTwoarray(l1,l2)

// find largest string without repeat any charactor
// const string = "abcabcbdk";
// let subString = [];
// let temp = []

// for (let i = 0; i < string.length; i++) {
//   if (subString.length == 0) {
//     subString.push(string[i]);
//   } else{
//     if(subString.includes(string[i]) === true){
//      temp.push(subString.join(""))
//      subString.length = 0
//      subString.push(string[i]);
//     }else{
//       subString.push(string[i]);
//     }
//   }
//   if(string.length-1 == i ){
//     temp.push(subString.join(""))
//   }
// }
// let emp = ""
// for (let j = 0; j < temp.length; j++) {
//    if(emp.length < temp[j].length){
//     emp = temp[j]
//    }
// }
// console.log("Answer is :",emp);

// Given two sorted arrays nums1 and nums2 of size m and n respectively,
// return the median of the two sorted arrays.

// let num1 = [1,3,7] ,num2 = [2,4,6]
// let median = 0

// for (let i = 0; i < num2.length; i++) {
//     num1.push(num2[i])
// }
// for (let j = 0; j < num1.length; j++) {
//   for (let k = 0; k < num1.length; k++) {
//     if(num1[j] < num1[k]){
//       let temp = num1[k]
//       num1[k] = num1[j]
//       num1[j] = temp
//     }
//   }
// }
// if(num1.length%2 == 0){
//   let emp = num1.length/2
//   median = (num1[emp] + num1[emp-1])/2
// }else{
//   let emp = num1.length/2
//   emp = Math.floor(emp)
//   median = num1[emp]
// }
// console.log("median is :",median,num1)

// Given a string s, return the longest palindromic substring in s.
// Input: s = "babad"
// Output: "bab"
// const string = "bebdadootoo";
// const array = string.split("");
// let subStringLength = 0;
// let longest_palindrome_substring = "";

// for (let i = 0; i < array.length; i++) {
//   if (i >= 2 && array.includes(array[i]) === true) {
//     const subString = array.slice(array.indexOf(array[i]), i + 1);
//     if (subString.length > 2) {
//       getSubString(subString);
//     } else {
//       if (array.indexOf(array[i], i) > -1) {
//         const subString = array.slice(array.indexOf(array[i], i), i + 1);
//         if (subString.length > 2) {
//           getSubString(subString);
//         }
//       }
//     }
//   }
// }

// function getSubString(subString) {
//   if (subString.join("") === subString.reverse().join("")) {
//     if (subStringLength < subString.length) {
//       longest_palindrome_substring = subString.reverse().join("");
//       subStringLength = subString.length;
//     }
//   }
// }
// console.log(
//   "Longest palindrome substring :",
//   longest_palindrome_substring
// );

// Please write a program to given string "PAYPALISHIRING" to convert into zigzag pattern

// const string = "PAYPALISHIRING"
// const row = 2

// let i = 0
// const n = string.length
// let temp = ''

// while(i < row){
//   for (let j = i; j < n; j++) {
//     if(j%2 == 0){
//       temp += string[j]
//     }else{
//       temp += " "
//     }
//   }
// temp += "\n"
// i++
// }
// console.log(temp)

//prime Number

// const num = 21;
// let flag = false;
// let len = Math.floor(num / 2);

// for (let i = 2; i < len; i++) {
//   if (num % i == 0) {
//     flag = true;
//     break;
//   }
// }
// if (flag) {
//   console.log("this is not prime no :", num);
// } else {
//   console.log("this is prime :", num);
// }

// find  prime number series

// const num = 88

// for (let i = 3; i <=num ; i++) {
//   let flag = true
//   let len = Math.floor(i/2)
//   for (let j = 2; j <= len; j++) {
//     if(i%j == 0){
//        flag = false
//        break;
//     }
//   }
//   if (flag) {
//     console.log(i)
//   }

// }

//Fibonacci Series

// let a = 0;
// let b = 1;
// const num = 8;
// let temp

// for (let i = 1; i <= num; i++) {
//   console.log("Fibonacci Series :",a);
//   temp = a + b
//   a = b;
//   b = temp;
// }

// const str = "abcdedcba";
// let temp = [];
// let arr = []
// for (let i = 0; i < str.length; i++) {
//   if (!temp.includes(str[i])) {
//     temp.push(str[i]);
//   } else {
//     temp.push(str[i]);
//     const num = temp.slice(temp.findIndex((value) => str[i]===value), i + 1);
//     arr.push(num)
//   }
// }
// console.log("%%>>>",arr.length,arr)

// for (let i = 0; i < str.length; i++) {
//  if(!temp.includes(str[i])){
//    temp.push(str[i])
//  }else{
//   temp.push(str[i])
//   let second = []
//    for (let j = i; j < temp.length; j++) {
//     second.push(temp[j])
//    }
//    arr.push(second)
//  }
// }
// console.log("%%>>>",arr.length,arr)

// let temp = "";

// for (let i = 0; i < 5; i++) {
//   for (let j = 1; j <= 5 - i; j++) {
//     temp += j;
//   }
//   temp += "\n";
// }
// console.log(temp);

// /abc/	       A sequence of characters
// /[^abc]/        Any character not in a set of characters
// /[0-9]/	       Any character in a range of characters
// /x+/	           One or more occurrences of the pattern x
// /[a-z,0-9]/i    search for case-insensitive 	


// const temp = 15 
// let arr = []

// for(i=1; i<=temp; i++){
//     if(i %3 == 0 && i%5 == 0){
//         arr.push("fizz")
//     }else if( i%5 ==0 ){
//         arr.push("bizz")
//     }else if(i %3 == 0){
//         arr.push("fizz,bizz")
//     }else{
//         arr.push(i)
//     }
// }

// console.log(arr)

