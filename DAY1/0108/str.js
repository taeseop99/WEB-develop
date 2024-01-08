//문자 열 관련된 메소드
//let str = 'happy day~!    ';
/*
console.log(str.length); //빈 문자 포함한 문자 열 길이
console.log(str.toUpperCase()); //대문자로 변환
console.log(str.toLowerCase()); //소문자로 변환
//toUpperCase()나 toLowerCase() 는 보통 회원 가입시
//아이디 중복을 막기 위해 자주 사용
console.log(str.indexOf('y')); //몇번째 인덱스인지 확인(단, 첫번째 문자만 검색
console.log(str.slice(2)); //글자 자르기
console.log(str.slice(2, -7)); //음수일때는 뒤에서 부터

console.log(str.replace('a', 'f')); //문자 변경(단, 첫번째 문자만 변경)
console.log(str.replaceAll('y', 'i')); //전체 문자 변경
console.log(str.repeat(5));
console.log(str.trim());
console.log(str.split('y')); //문자 열 자르기제일 많이 씀 외워야 함
//속해 있는 것은 메소드

//메소드 체이닝
console.log(str.trim().toLowerCase().split('p'));

let hello = 'hello~';
let hellosplit = hello.split('');
console.log(hellosplit);

let reversehello = hellosplit.reverse();
console.log(reversehello);

let hellojoin = reversehello.join('');
console.log(hellojoin);

console.log(hello.split('').reverse().join(''));

//배열 관련 메소드
//push(): 배열 끝에 추가
//pop(): 배열 끝 요소 제거
//unshift:배열 앞에 추가
//shift:배열 앞에 제거
//includes:포함되어 있는거 찾는거
const days = ['월', '화', '수'];
days.push('목', '금', '토', '일');
console.log(days.join()); //join: join값에 들어간 값으로 문자에 적용됨
//메소드 체이닝

for보다 for of를 더 많이 쓸 수 있음
for of:for쓰고 변수 
[].forEach:함수
*/
