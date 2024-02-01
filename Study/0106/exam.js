/*
실습 4~5 집가서 다시 해봐야 된다..

//프롬포트를 받는거는 무조건 변수를 받아야 한다
let age = Number(prompt("나이를 입력하세요"));
let gender = prompt("성별을 입력하세요 남자/여자");

// //나이를 기준으로 했을 때
// if (age >= 20) {
//   console.log("성인");
//   if (gender === "남자") {
//     console.log("성인 남자");
//   } else {
//     console.log("성인 여자");
//   }

// } else if (age >= 17) {
//   console.log("고등학생");
// } else if (age >= 14) {
//   console.log("중학생");
// } else if (age >= 8) {
//   console.log("초등학생");
// } else if (age >= 0) {
//   console.log("유아");
// }

//성별를 기준으로 했을 때
if (gender === "남자") {
  agefunc(age, gender);
} else if (gender === "여자") {
  agefunc(age, gender);
}
// if (age >= 20) {
//   console.log("성인 ${gender}");
// } else if (age >= 17) {
//   console.log("고등학생 ${gender}");
// } else if (age >= 14) {
//   console.log("중학생 ${gender}");
// } else if (age >= 8) {
//   console.log("초등학생 ${gender}");
// } else if (age >= 0) {
//   console.log("유아 ${gender}");
// }

function agefunc(age, gender) {
  if (age >= 20) {
    console.log("성인 ${gender}");
  } else if (age >= 17) {
    console.log("고등학생 ${gender}");
  } else if (age >= 14) {
    console.log("중학생 ${gender}");
  } else if (age >= 8) {
    console.log("초등학생 ${gender}");
  } else if (age >= 0) {
    console.log("유아 ${gender}");
  }
}
*/

/*실습6 삼항연산자 

let now = new Date().getHours();
console.log(now);
now <= 12 ? console.log('오후') : console.log('오전');
now 조건에 맞는 참을 줄껀지 생각하면 됨
내가 뭘 쓰는지 모르겠으면 일단 콘솔을 입력해보기
*/

/*
// 실습7 모르겠다..하나도 하지 못하고 있다..
// 10000까지의 숫자 중
// 13의 배수이면서 홀수
const inputnum = Number(prompt('숫자 입력하세요'));
for (let i = 0; i <= inputnum; i++) {
    if (i % 13 == 0 && i % 2 == 1) {
        console.log(i);
    }
}
*/

/*
실습8
for (let dan = 2; dan <= 9; i++) {
    console.log('=======${dan}단=======');
    for (let i = 1; i < 10; i++) {
        console.log('${dan} x ${i} = ${dan * 1}');
    }
}
*/

/* 
실습9: 정수n이있을때2또는3의배수의총합을구하시
오.(단, n은0 < n < 100 )
let num = 50;
let sum = 0;
for (let i = 0; i < num; i++) {
    if (i % 2 !== 0 && i % 3 !== 0) {
        continue;
    }
    sum += i;
}
console.log(sum);
*/
