/*
반복문
똑같은 명령을 일정 횟수만큼 반복해 수행하도록 하는 실행문
for while for/in do/while
for (초기화식; 조건식; 증감식) {
    실행문장;
}
초기화:어디서부터 할거야?
조건식:어디까지 할거야? (부등호식이 많이 들어감)
증감식:몇개씩 늘어날건지 줄어들건지
초기화를 만나서 조건식을 확인하고 한번 실행하고
조건이 만나는 순간 종료
참이 10이면 10을 만나는 순간 거짓이 되면서 종료
초기값-조건문-명령문-증감문-종료
*/

/*
반복문
for문
for(초기값; 조건식; 증감식) {
    반복코드
}
*/

//step1. 0부터 5까지 1씩 증가
/*  for (let i = 0; i < 6; i++) {
    console.log(i);
}
*/

/*
step2. 5부터 0까지 1씩 감소
  for (let i = 5; i >= 0; i--) {
    console.log(i);
}
*/

/*
step3. 1부터 10중에서 짝수 출력
sol1. 반복문과 조건문 활용
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}
*/

/*
//sol2.증감값 변경
for (let i = 2; i <= 10; i = i + 2) {
    console.log(i);
}

//step4.배열과 함께
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'navy', 'purple'];
for (let i = 0; i < colors.length; i++) {
    console.log('무지개 ${i + 1}번째 색상은 ${colors[i]}입니다');
}
*/

//이중for문:for 안에 또 for를 쓰는거
/**
 * for() {
 *     for() {
 * }
 * }
 */
