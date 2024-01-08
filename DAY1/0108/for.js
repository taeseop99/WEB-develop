let numbers = [1, 2, 3, 4, 5, 6];
let colors = ['red', 'orange', '노', '초', '파', '남', '보'];

/*
//기본 for문
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
for (let i = o; i < colors.length; i++) {
    console.log(colors[i]);
}
//for of문
//for ({}안에서 사용할 변수 of 배열)
for (let number of munbers) {
    console.log(number);
}
for (let color of colors) {
    console.log(color);
    //배열의 값이 온다
}
*/

/*
//forEach()문
//변수명.forEach( {}안에서 사용할 변수, 인덱스, 배열) {}
//numbers.forEach(function() {})노란색 괄호 안에 함수를 써야 한다
//함수에 있는 매개변수 이름은 정해서 해도 된다
numbers.forEach((number, idx, arr) => {
    console.log(number, idx, arr);
});
colors.forEach((color, index) => {
    console.log(color, index);
});
*/

/*
let arr;
let arr2;
//filter() 조건에 부합하는 배열 요소만 반환
/*arr = numbers.filter(function({}안에서 사용할 변수) {
filter() {}안에는 조건식이 나오는게 일반적
});

arr = numbers.filter((number) => {
    return number > 3;
});
//화살표 함수의 특징 중 하나는 { return } 생략 가능-중괄호를 없애면 됨
arr2 = colors.filter((color) => color.length > 2);
console.log(arr);
console.log(arr2);
*/
/*
//배열 안에 있는 값을 더할 때 그 값의 합의 변수는 전역변수
let sum1 = 0;
for (let number of numbers) {
    sum1 += number;
}
console.log(sum1);
*/

//let colors2 = [{ color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
/*for in문-보통 객체(index-값)에 주로 사용.
//for ( {}안에 사용할 index of 배열) {}
for (let index in colors2) {
}
배열의 합
반복문 안에다 계산해야되는 거는 전역변수로 쓰기
*/

let sumFor = 0;
for (let i = 0; i < array.length; i++) {
    sumFor += array[i];
}
let sumForOf = 0;
for (let value of array) {
    sumForOf += value;
}
let sumForEach = 0;
array.forEach((value) => {
    sumForEach += value;
});
