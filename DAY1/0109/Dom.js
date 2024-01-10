// document-요소 다루기
/*
// HTML 요소 내용 읽고 쓰기
const text = document.getElementById('text');
console.log(text);
text.textContent = 'hi'; //요즘 많이 쓰는 것 하지만 두개 다 틀린 건 아님
text.innerText = '안녕하세요';
text.innerHTML = '여기는 <b>첫번째<b> 태그입니다.'; //태그랑 같이 넣을때=innerHTML
*/

/**
 * textContent: 요소안에 텍스트 가져오거나 수정
 * innerText:요소안에 텍스트를 가져오거나 수정
 * textContent vs innerText
 * - textContent: 공백 문자 그래도 반환, IE9 이전 버전 사용 불가
 * - innerText: 남는 공백 문자 제거, table, tbody, tr 등 테이블 요소 수정 불가
 * innerHTML: 입력된 문자열을 HTML형식으로!
 */

/*
//classList
text.classList.add('title'); //classList.add: 요소를 가져온 상태에서 클래스를 추가해주는
text.classList.remove('title'); //classList.reomove: css요소 지워주는
text.classList.toggle('title-big');
console.log(text.classList.contains('title-big'));
*/

/**
 * add: 클래스 추가
 * remove: 클래스 제거
 * toggle: 클래스가 있으면 제거, 없으면 추가
 * contains: 해당 클래스가 있는지 boolean 값 반환
 */

/*
// setAttribute: html요소 속성 추가
const link = document.getElementById('link');
console.log(link);
link.setAttribute('href', 'https://www.naver.com'); //js로 a태그 사용법
const img = document.getElementById('image');
img.setAttribute('src'); //이미지 요소 속성 추가
img.setAttribute('width', '200');
const input = document.getElementById('input'); //input 요소 속성 추가
input.setAttribute('placeholder', '이름을 입력하세요');
//다른 노드에 접근하기
*/
