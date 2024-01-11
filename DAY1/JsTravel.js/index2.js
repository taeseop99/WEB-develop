//document:html코드를 js관점으로 보는것
// js는 이미 html에 연결되어 있다
// document=website
//html에 아이디가 무엇인지 중요하지 않다 js에서 바꿀 수 있음
//html과 상호작용이 가능함
//querySelector:속성을 css방식으로 검색,첫번째 속성만 가져옴
//querySelectorAll:모든 속성을 가져옴
//event:클릭하면 이벤트
//addEventListener:event를 listen 하는 것
//reomoveEventListenner:제거 가능
//resize:화면 창을 줄였다 뗏다할때 나타나는 이벤트
//copy: 복사할려고 할때
//on,offline: 인터넷 연결이 되어 있는지

const h1 = document.querySelector('.hello h1');
h1.innerText = '눌러보세요!';

function handleTitleClick() {
    h1.style.color = 'blue';
}

function mouse() {
    h1.innerText = '븅신';
}
function leave() {
    h1.innerText = '븅신 ㅗ ㅋ';
}
function wr() {
    document.body.style.backgroundColor = 'tomato';
}
function wc() {
    alert('copier!');
}
function off() {
    alert('no wifi');
}
function on() {
    alert('good wifi');
}

h1.addEventListener('click', handleTitleClick);
h1.addEventListener('mouseenter', mouse);
h1.addEventListener('mouseleave', leave);

window.addEventListener('resize', wr);
window.addEventListener('copy', wc);
window.addEventListener('offline', off);
window.addEventListener('online', on);
