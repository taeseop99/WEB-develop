/*
//반복문제어
//break:코드를 만나면 멈추고 빠져나옴(반복문을 멈추고 밖으로 빠져 나감)
for (let i = 0; i < 100; i++) {
    if (i == 11) {
        console.log('끝!');
        break;
    }
    console.log(i);
}
continue:멈추고 다음(한번만 멈추고 다음으로 진행)//* c

let sum = 0;

for (let i = 0; i < 100; i++) {
    if (i % 2 == 1) {
        continue;
    }
    sum += i;
}
console.log(sum);
*/

/* 
실습9: 정수n이있을때2또는3의배수의총합을구하시
오.(단, n은0 < n < 100 )
let num = 50;
let sum = 0;
for (let i = 0; i < num; i++) {
    if (i % 2 !== 0 && i % 3 !== 0) {
        continue;
    }
    sum += i;
}
console.log(sum);
*/
