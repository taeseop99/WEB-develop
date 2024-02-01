/*
 createElement('html 요소')
 html의 특정 노드 생성
 html에 태그가 없어도 생성 가능하게 해주는
 */
/*
//노드 생성
const root = document.getElementById('root');
const p = document.createElement('p');
// <p> </p>=이게 만들어진 상태
p.textContent = '내 이름은 김태섭';
// <p>안녕하세요</p> = 넣은 상태
p.classList.add('append-p');
//<p class='append-p'>안녕하세요</p> = 상태
p.style.fontWeight = 'bold';
//<p class='append-p' style='font-weight:bold'>안녕하세요</p> = 스타일 들어간 상태
console.log(p);
*/

//노드 추가
/**
 * append(): 노드 객체 또는 텍스트 추가,
 *          -한번에 여러개의 자식 요소 추가 가능
 *          -반환값 없음
 * appendchild(): -노드 객체만 추가 가능
 *                -한번에 하나씩 추가 가능
 *                -반환 값
 * prepend(): 첫번째 자식으로 추가
 */ /*
const target = document.getElementById('target');
//root.append(p); //마지막으로 내림
//root.prepend(p); //맨 위로 올림
//target.before(p); =target기준, 이전 형제로 추가
target.after(p); //= target기준, 다음 형제로 추가
*/

/*
//노드 삭제
/**
 * remove(): 선택 요소 삭제
 * removechild(자식노드): 선택 요소 자식 삭제
//target.remove(); //html에 노드를 아예 삭제 시킴
root.removeChild(p);
*/
