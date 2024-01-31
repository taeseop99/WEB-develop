//spread 연산자
const a = [1, 2, 3];
const b = [4, 5];
//함수 방식 concat : 배열 합치기
const concat = a.concat(b);
console.log('concat', concat);
//spread 방식
const spread = [...a, ...b]; //배열 풀어쓸 때 많이 씀 or 배열 합칠때 많이 씀
console.log('spread', spread);
const obj = {
    name: '김태섭',
    age: 24,
};
console.log({ ...obj });
const str = 'hello';
console.log([...str], ...str); //[]를 넣어서 배열로 출력
//rest
function get(a, b, c, ...rest) {
    //10,20,30 나머지
    console.log(a, b, c, rest);
}
const arr = [10, 20, 30, 40, 50];
get(...arr);
// spread로 풀어서 많이 씀, rest는 실무에서 많이 쓰이진 않음

//살습 예제
const word1 = 'abc';
const word2 = 'xyz';

const spread2 = [...word1, ...word2];
console.log(spread2);
