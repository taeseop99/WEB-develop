/*
//실습1
let number = [];
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

//1~100배열 구하기
for (let i = 0; i < 100; i++) {
    number.push(i + 1);
}
console.log(number);

//배열의 합-for문 구하기
for (let i = 0; i < number.length; i++) {
    console.log(number[i]);
    sum1 = sum1 + number[i];
}

//배열의 합-of문 구하기
for (let num of number) {
    sum2 = sum2 + num;
}

//배열의 합-forEach문 구하기
number.forEach((num) => {
    sum3 = sum3 + num;
});
console.log(sum1, sum2, sum3);
*/

//실습2
let fruits1 = ['사과', '딸기', '파인애플', '수박', '참외', '오렌지', '자두', '망고'];
let fruits2 = ['사과', '파인애플', '수박', '참외', '오렌지', '망고'];

//두 배열에서 동일한 요소만을 가지는 배열 same 만들기
let same = fruits1.filter((fruits) => fruits2.includes(fruits));

//두 배열에서 서로 다른 요소만을 가지는 배열 diff 만들기
let dif = fruits1.filter((fruits) => !fruits2.includes(fruits));

console.log(same);
console.log(dif);
