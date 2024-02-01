// alert("링크방식");
//alert(링크방식)

// var
/*
var name = "홍길동";
var name = "나비";
var age; //값이 할당되지 않을때는 undefined가 할당
age = 20; //값을 재할당 가능
age = 10;
console.log(age);
*/

/*
//let
let name = "홍길동";
//let name = "나비"; //중복 선언 불가
console.log(name); //값을 할당가능
name = "성춘향";
let age; //값이 할당되지 않을때 undefined 할당
console.log(age);
*/

/*
//const
const age = 20;
//age = 30; //값을 할당할 수 없음
const AGE = 20;
*/

/*
//데이터 타입
//string
let myName = "홍길동";
var email = "gildong@naver.com";
let city = "서울";
console.log(myName, email, city);
console.log("안녕하세요 " + myName, "입니다");
console.log(`안녕하세요 ${email}입니다`);
//number
let number = 0.9;
console.log(number);
//boolean
const checked = true;
const isShow = false;
console.log(checked, isShow);
//undefined:미할당 데이터
let noData;
console.log(noDate);
//null:의도적으로 비어있는 데이터
let empty = null;
console.log(empty);*/

//Array(배열)

// 실습1
let colors = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];
console.log(colors[2]);
console.log(colors.push("black"));
console.log(colors.indexOf("black"));
console.log(colors.reverse());

// colors = [ "orange, "green"]:const 사용시 사용불가,let(var)는 재할당 가능

// console.log(colors.length); //배열의 길이
// console.push("blue"); //배열추가 (맨뒤)
// console.unshift("navy"); //배열추가 (맨 앞)
// colors.pop(); //배열제거(맨 뒤)
// colors.shift(); //배열제거(맨 앞)
// console.log(colors.indexOf("blue")); //index 값 찾기,없을땐 -1
// console.log(colors.includes("navy")); //값 존재유무,존재시true 없을시 false
// console.log(colors.reverse()); //배열 값
// console.log(colors);
