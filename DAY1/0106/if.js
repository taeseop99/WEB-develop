/*!조건문!
//if문
js 조건문 특정한 조건 속에서 작업을 수행하고 싶을 때 사용
if(조건) {조건1이 참이라면 실행}
else{조건이 아니라면 실행}

else if 조건2가 맞다면 실행

마지막이 else다
조건은 무조건 괄호 안에
전체적인 틀은 이게 다다

if중첩-중첩에 중첩을 쓸 수 있음
if(조건1){ 
    if(조건2) {
        실행
    }
}

*/
/*
if문 코드 양식
if (조건) {
조건이 참일때 실행
}
else {
    조건이 거짓일때 실행
} 

/*
조건은 항상 true/false가 와야함.
else는 무조건 안써도 됨
if는 무조건 써야 함
else는 혼자 올 수 없다
거짓일 때 실행하고 싶으면 not */

/*
if (5 > 1) {
  console.log("큽니다");
} else {
  console.log("작습니다");
}
let isshow = true;
let checked = false;
//else는 선택!

if (isshow) {
  console.log("show!");
}
//if(조건) 일때 조건은 참일때 실행
//이 조건이 거짓일때 실행하고 싶으변 not 연산자사용=(!)
if (!checked) {
  console.log("checked!");
}  */

/*
//if /else if / else
//위에써 쪼로록 내려오다 틀린 거는 흘리면 맞는걸 내보냄
//전부 다 틀리면 맨 마지막에 있는 변사또를 내보냄
let name = "이몽룡";
if (name === "김태섭") {
  console.log("김태섭입니다");
} else if (name === "성춘향") {
  console.log("성춘향입니다");
} else if (name === "이몽룡") {
  console.log("이몽룡입니다");
} else {
  console.log("변사또입니다");
}
//if 중첩
const myid = "abc";
const mypw = "1234";
const inputid = prompt("아이디를 입력하세요");
const inputpw = prompt("비밀번호를 입력하세요");
console.log(inputid, inputpw);
if (myid === inputid) {
  if (mypw === inputpw) {
    console.log("로그인에 성공했습니다");
  } else {
    console.log("비밀번호가 틀립니다.");
  }
} else {
  console.log("아이디가 틀립니다");
}
//input id는 사용자 아이디
//myid는 데이터에 있는 아이디
//프로그래밍 하는데 중첩은 필수
//if문 안에 쓰는 걸 먼저 생각하기
*/

/*
//삼항 연산자 if문 만들고 그 if문을 3항 연산자로 정리or
let myid = '김태섭';
let mypw = '1234';
const inputid = prompt('아이디를 입력하세요.');
const inputpw = prompt('비밀번호를 입력하세요.');

myid === inputid
    ? mypw === inputpw
        ? console.log('로그인에 성공하였습니다')
        : console.log('비밀번호가 틀렸습니다')
    : console.log('아이디가 틀립니다');
  */

/*  3항 연산자-js 많이 씀
if문을 간단하게 표현 하는 방법
리액트는 다 3항 연산자 씀
조건식 ? 조건이 참인경우 : 조건이 거짓인 경우
한줄로 표현이 가능함 */

/*
let now = new Date().getHours();
console.log(now);
now <= 12 ? console.log('오후') : console.log('오전');
now 조건에 맞는 참을 줄껀지 생각하면 됨
내가 뭘 쓰는지 모르겠으면 일단 콘솔을 입력해보기
*/
