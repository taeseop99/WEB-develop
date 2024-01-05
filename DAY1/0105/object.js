// object-(객체)는 여러가지 데이터가 하나로 묶여있는 형태
// let cat = {
//      // key: value형태
//      name: "고양이",
//      age: 2,
//      iscute: true,
//      mew: finction() {
//          return "야옹!"
//      }
//  };
//  console.log(cat.name);
//  console.log(cat.age);
//  console.log(cat.iscute);
//  console.log(cat.mew);
// 출력시키는 법:console.log()
/*
let people = {
  name: "김태섭",
  gender: "남자",
  address: "서울시 중랑구",
  phone: "010-9183-9818",
};
console.log(people.name);
console.log(people.gender);
console.log(people.address);
console.log(people.phone);
*/

// typeof: 데이터가 어떤 타입인지 알려주는 키워드
/* console.log(typeof "hello");
console.log(typeof true);
const types = 20;
console.log(typeof types); */

// 형변환: 데이터의 타입을 변환시켜주는 것
// prompt():사용자에 데이터를 입력 받게 하는 것

/*
let mathscore = prompt("수학 점수를 입력하세요");
let engscore = prompt("영어 점수를 입력하세요");
let avg = (Number(mathscore) + Number(engscore;))
console.log(avg);
// console.log("안녕"+"하세요")
// 문자형변환
let num = 123;
console.log(typeof num);

let a = String(num);
console.log(typeof a);

let b = num.toString(); //null과 undefined
console.log(typeof b);

console.log(Number("12345678"));
console.log(Number("asdsadsa23213"));
*/

/*
// 연산자
console.log(1 + 1);
console.log(1 - 1);
console.log(6 * 5);
console.log(4 / 2);
console.log(100 % 2);
console.log(99 % 2);
console.log(2 ** 4);
let num = 5;
num += 10; //num = num + 10과 동일
console.log(num);
let result1, result2;
let nums = 10,
  nums2 = 15;

result1 = nums++; //10
result1 = nums++; //11
console.log(result1);

result2 = ++nums2; //16
result2 = ++nums2; //17
console.log(result2);
*/

/*
//비교연산자
let a = 123;
let b = "123";

console.log(a == b); //t
console.log(a != b); //f
console.log(a === b); //f
console.log(a !== b); //t
*/

/*
//논리 연산자
|| (or) 조건이 둘 중에 하나만 맞으면 된다
&& (and) 조건이 둘 다 맞아야 한다
! (not) not연산자는 반대

let name = "뽀로로";
let age = 18;
let isadult = age > 19; //false

if (name === "뽀로로" && age > 19) {
  console.log("통과");
} else {
  console.log("돌아가");
}
if (!isadult) { //isadult가 false냐?
  console.log("돌아가");
} else {
  console.log("통과");
}
*/
