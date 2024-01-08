/*
//DOM
html 문서 요소의 집합

document:html 요소에 접근하여 행동을 하고자 할때
돔은 선택을 해줘야 한다
어떤 돔을 가지고 선택할건지
아이디,클래스,태그,네임 속성값 등등 html에서 지정한 요소를 선택
. , # 등 지정한 요소를 선택하기
*/
const ids = document.getElementById('kdt11id'); //id 선택
const classes = document.getElementsByClassName('kdt11class'); //class 선택
const names = document.getElementsByName('kdt11name'); //name 선택
const tags = document.getElementsByTagName('html'); //해당 태그 선택

const queryIds = document.querySelector('#kdt11id');
const queryClass = document.querySelector('.box');
const queryAll = document.querySelector('.box');
console.log(ids);
console.log(queryIds);
console.log(classes);
console.log(queryClass);
console.log(queryAll);
console.log(names);
console.log(tags);

//연습만이 살길..!!
