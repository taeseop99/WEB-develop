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
//classList:
//toggle:
//preventDefault(); //이벤트의 기본 행동이 발생하지 않도록 막는 역활
//localstorage:데이터 정보를 저장하는

const loginform = document.querySelector('#login-form');
const logininput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

const hidden_classname = 'hidden';
const USERNAME_KEY = 'username';

function onlogin(event) {
    event.preventDefault(); //이벤트의 기본 행동이 발생하지 않도록 막는 역활
    loginform.classList.add(hidden_classname);
    const username = logininput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(tomato) {
    greeting.innerText = `hello ${tomato}`;
    greeting.classList.remove(hidden_classname);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginform.classList.remove(hidden_classname);
    loginform.addEventListener('submit', onlogin); //지금 막 일어난 일에 대한 정보
} else {
    paintGreetings(savedUsername);
}
