const btn = document.getElementById('btn');
const def = document.getElementById('default');
const inp = document.getElementById('input');

btn.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event); //클릭 누르면 이벤트 콘솔 뜸
    console.log(event.target.value);
});
btn.addEventListener('mouseover', function () {
    console.log('mouseover');
});
inp.addEventListener('focus', function () {
    console.log('foucs');
});
inp.addEventListener('blur', function () {
    console.log('blur');
});
inp.addEventListener('keydown', function () {
    //길이 제한 할때 많이 씀
    console.log('keydown');
});
inp.addEventListener('keyup', function () {
    console.log('keyup');
});

//preventDefault:form 전송을 막는 메소드
def.addEventListener('click', function (e) {
    e.preventDefault();
    console.log(this);
    this.textContent = '클릭함';
});
/**
 * this
 * 그 함수가 속해 있던 객체 참조,
 * 뭔가를 클릭할때 불러 오는 함수(콜백함수)에서 this는 그 뭔가를 의미함
 * 화살표 함수를 하면 부모요소한테 적용됨
 */
