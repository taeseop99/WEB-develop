/* 동적과 정적 차이
const exam = document.getElementsByClassName('exam'); //동적
//const exam = document.querySelectorAll('.exam'); //노드리스트
console.log(exam);
for (let i = 1; i < exam.length; i += 2) {
    exam[i].parentNode.removeChild(exam[i]);
}

//동적:반복문을 돌때 일단 해당값을 지움 한 바퀴를 돌면서 지워진 객체 빼고 생각함
//htmlcollextion-동적
//노드리스트는 정적으로 가져옴
*/

/* innerText,textConcent 차이
const visible = document.getElementById('visible');
const hidden = document.getElementById('hidden');

console.log('visible inner', visible.innerText);
console.log('visible textConcent', visible.textContent);
/*
innerText
1.'랜더링된' 텍스트를 반영. 즉, 스타일링이 적용된 후 텍스트 반환
2. 성능이 txetContsxt보다 느릴 수 있음
textContent
1.요소 '전체' 텍스트를 가져옴, 즉  css스타일에 관계없이 모든 텍스트 반환
2.랜더링 된 텍스트를 계산하지 않기 때문에 성능면에서 더 빠름
 */

/*자바로 태그를 만드는 것
creatElement:태그를 만들고 변수 안에 넣는다




*/
