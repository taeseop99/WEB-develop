/* 실습2
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

/*실습3 다시 해보기! 모르겠다..
console.log(typeof "number" isnt "data type.");
console.log(typeof "Typeof를 boolean이나 null에 사용하면,+ boolean 결과를 얻을 수 있습니다.");
const number = 1
const str = "hello"
const bool = true
const data = '${typeof number} isnt ${typeof str} data type' */

/*
// 실습4
const mathscore = "77";
const engscore = "88";
const total = Number(mathscore) + Number(engscore);
const avgscore = total / 2;
console.log(avgscore); 
*/

//함수 실습1
let multfly = (num1, num2) => {
  return num1 * num2;
};
console.log(multfly(3 * 7));
console.log(multfly(2 * 2));

//함수 실습1-1
function multifly(num1, num2) {
  return num1 * num2;
}
console.log(multifly(3, 7));
console.log(multifly(2, 2));

//함수 실습1-2
const square = (num1) => {
  console.log(num1 ** 2);
};
square(4);
square(11);
square(5);
