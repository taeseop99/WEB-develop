const target = document.getElementById('target');
console.log(target);

//target기준, 부모의 모든 자식 태그 선택
const children = target.parentNode.children; //타겟 기준으로 나의 형제들을 선택
console.log(children);

//target기준, 부모의[]안에 자식 태그 선택
const first = target.parentNode.children[0];
console.log(first);

//target기준, 부모 선택
const paren = target.parentNode;
console.log(paren);

//target기준, 이전 형제 선택
const prev = target.previousElementSibling;
console.log(prev);

//target기준, 다음 형제 선택
const next = target.nextElementSibling;
console.log(next);

/*
 createElement('html 요소')
 html의 특정 노드 생성
 html에 태그가 없어도 생성 가능하게 해주는
 */
