/*
!!중요!! 자바는 함수형 기반 언어
함수:function!
특정 동작(기능)을 수행하는 일부 코드의 집합(부분)
함수 선언문,함수 표현식

function --(){
    console.log('--');
} -함수 선언문:어디서든 호출 가능=호이스팅

변수
let -- = function(){
    console.log('--')
} -함수 표현식:--가 있어야 생성 사용 가능,코드에 도달하면 생성

화살표 함수

let add = function(){
    4개의 변수 입력 가능 =>
}
*/

/*
//함수
//함수 선언문(기본적인 형태)
function sayhello() {
  console.log("지역 hello");
}
console.log("전역 hello");
sayhello();
*/

/*함수 선언문
//덧셈기능이 있는 참수를 선언
sumfunc(40, 10); //호이스팅
const num1 = 10; //전역변수
function sumfunc(num2, num3) {
  //num2,num3는 매개변수. ()안에 변수들은 매개 변수
  const num1 = 11;
  const sum = num1 + num2 + num3;
  //console.log("지역", num1);
  console.log("결과", sum);
  //return 함수제일마지막에 사용. 값을 다시 전달
  return sum;
}
console.log("전역", num1);
sumfunc(20, 10); //()안에 값은 인자
//num2 = 60
//num3 = 10
let result = sumfunc(30, 20);
//let result = 61
console.log(result);
//return:전달된 값을 다시 받는다
*/

/*
//함수 표현식
sayhello(); =오류,호이스팅 불가
 let sayhello = function (num) {
   console.log(num);
   console.log("hello");
 };
 */

/*/ 화살표 함수
let sayhello = (num) => {
  console.log(num);
  console.log("hello");
  return num + 10;
};
sayhello(20);
let result = sayhello(30);
console.log(result);
*/

//onclick:각각의 html 요소에 속성 값으로 js 함수를 연결
