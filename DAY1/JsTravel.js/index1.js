//경고창을 여는것 alert('hi');
// string:처음부터 끝까지 글자로 이루어져 있는

// 작은따옴표('')든 큰 따옴표("")든 상관 없다,대신 시작한 걸로 맞추기
// variable:값을 저장하거나 유지하는 역활
//단어는 대문자로-카멜케이스
// const:(상수)=바뀌지 않는 값(업데이트 할 수 없음)
//let:바꿀 수 있는 값(업데이트를 할때)
//var:오류가 나와도 말해주지 않음

//데이터 타입: 숫자(number), string
//Boolean:true or false-무언갈 확인할때
//null:값이 존재하지 않음
//undefined:메모리는 존재하지만 값이 존재하지 않음
//true:켜져있음
//false:꺼져있음

/**Arrays:항목을 나열하는 시작과 끝은 대괄호[] 괄호 안은 쉼표로 분리
 * []:는 많은것을 할 수 있다
 * 1.[]안에서 항목을 받아오기
 * 2.[]안에 추가하기
 * array의 목적:하나의 요소안에 데이터의 list를 가지는 것
 */

/*object:{안에서는 :를 사용함}
//xx.xx는 어떻게 쓰는 것인지
const player = {
    //이거 자체로 하나의 오브젝트가 생성됨
    name: '태섭',
    points: 10,
    fat: true,
};
console.log(player);
player.lastname = 'potato'; //오브젝트 안에서 수정할 때 원하는 값을 만들 수 있음
player.points = player.points + 15;
console.log(player.points);
*/

/*
//function:코드 실행을 여러 번 할수 있게 해줌
//function은 ()열고 {} 열고
//argument:function을 실행하는 동안 정보를 function에게 보낼 수 있는 방법

function sayhello(nameOfPerson, age) {
    console.log('안녕 내 이름은 ' + nameOfPerson + ' 그리고 나는' + age + '살이야');
}

sayhello('taesub', 10); //function만 없어지고 정의 내린다고 보면 됨
sayhello('winter', 20);
sayhello('dal', 30);
*/

/*
//이름을 정해주는
function plus(firsynumber, secondnumber) {
    //()안에 이름이 뭐가 오든 상관 없음
    console.log(firsynumber + secondnumber); //정한 이름을 어떻게 나타낼지
}
function divide(a, b) {
    console.log(a / b);
}
plus(8, 60); //!!꼭 ()를 넣어줘야 함,순서를 생각하면 쉬움,이름의 어떤 값을 넣을지
divide(100, 5);

//오브젝트 안에 넣는 방식
const player = {
    name: 'taesub',
    sayhello: function (otherPersonName) {
        console.log('hello! ' + otherPersonName + ' nice to meet you!');
    },
};
player.sayhello(' nico');
*/

//정리
//const=변하지 않음
//let=업데이트 가능
//null:비어 있음
//undefined:값이 없음
//[]=array,안에 무엇이든 넣을 수 있음
//push=[]끝에 추가 가능
/*
오브젝트(아래 코드)
const me = {
    name: '태섭',
    age: 25,
};
console.log(me);
me.name = '김태섭'; //업데이트
console.log(me);
me.sexy = 'yes';
console.log(me);
*/
/*
//function=코드를 반복 할 수 있게 해줌
function plus(a, b) {
    console.log(a * b); //밖에서 데이터를 넣는게 더 좋음
}
plus(5, 5);
*/

/*
const calculator = {
    plus: function (a, b) {
        return a + b;
    },
    minus: function (a, b) {
        return a - b;
    },
    time: function (a, b) {
        return a * b;
    },
    square: function (a, b) {
        return a / b;
    },
    power: function (a, b) {
        return a ** b;
    },
};

//const plusResult = calculator.plus(2, 3);

const plusResult = calculator.plus(10, 3); //13
const minusResult = calculator.minus(plusResult, 3); //10
const timeResult = calculator.time(10, minusResult); //100
const squareResult = calculator.square(timeResult, 3);
const powerResult = calculator.power(squareResult, 3);
//return:값을 반환 하는 것
*/

//prompt:사용자에게 창을 띄울 수 있도록 도와줌
//typeof:데이터의 종류를 알 수 있음
//parseInt:스트링을 넘버로 변경해줌
//isNaN:진실인지 아닌지 확인하는
const age = parseInt(prompt('how old are you?'));

/*
||: 두개의 조건 중 하나만 진실이 되는
||: '이거나' 대입해보기
true || true ===true 를 반환
false || true ===true
true || false === true
false || false ===false

&&:두개의 조건이 진실이다 를 알려주는
&&: '이며' 대입해보기
true && true === true
false && true === fasle
true && false === false
false && false === false
*/

/*
if (isNaN(age) || age < 0) {
    console.log('마이너스 안됨 나이를 입력해주세요');
} else if (age < 18) {
    //나이가 18보다 어릴경우
    console.log('어린놈의 시키');
} else if (age >= 18 && age <= 50) {
    //나이가 18보다 크고 50보다 작거나 같을 경우
    console.log('yo can dirnk');
} else if (age > 50 && age <= 80) {
    //나이가 50보다 크고 80이랑 같거나 넘을 경우
    console.log('술을 조심히 먹으시오');
} else if (age === 100) {
    console.log('와우 백세인생 이군요');
} else if (age > 80) {
    console.log('you can do whatever you want.');
}
//if가 거짓일때 하나의 조건 . 더추가
// ===: 값이 조건과 같다면
// !==: 값이 그게 아니라면?
*/
