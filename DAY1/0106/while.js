//반복문
//while문
/*
while문
for와 달리 조건을 변경하는 구문이 기본적으로 포함x 무한 루프 가능
무조건 1번은 반복이 됨
탈출 조건을 달아줘야 함
*/

/**
 * while(조건문){
 * 반복할 코드
 * }
 * 주의사항:조건문에 탈출 조건이 있어야 하거나
 * 혹은 조건문에 탈출 조건이 없으면 break를 넣어줘야 함
 * 탈출 조건을 항상 생각해야함
 */

/*
//step1. 1부터 5까지 1씩 증가
let step1 = 1;
while (step1 <= 5) {
    console.log(step1);
    step1++;
}
//위 코드는 조건식에 탈출 조건이 있음
*/

/*
//step2. 9부터 4까지 1씩 감소
let step2 = 9;
while (step2 >= 4) {
    console.log(step2);
    step2--;
}
*/

/*
//step3. 1부터 10까지 홀수 출력
let step3 = 1;
while (step3 <= 10) {
    if (step3 % 2 == 1) {
        console.log(step3);
    }
    step3++;
}
*/

/*
//step4.break 사용
let step4 = 0;
while (true) {
    console.log(step4);
    step4++;
    if (step4 === 10) {
        break;
    }
}
//구구단 만들어보기
*/
