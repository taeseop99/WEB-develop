//배열 구조 분해
const lists = ['apple', 'grape'];
//기존 방식
// console.log(lists[0], lists[1]);

// 구조 분해 (순서가 매우 중요)
let [item1, item2, item3 = 'peach'] = lists; //item1=apple , item2=grape
console.log('item1:', item1, 'item2:', item2);
console.log('item3:', item3);
item1 = 'banana';
console.log('item1:', item1);

// 교환
let x = 1, // 1과 3을 교환 하는 방식
    y = 3;
[x, y] = [y, x];
console.log(x, y);

//객체에 접근하는 방법
const obj = {
    //key: value
    name: '김태섭',
    age: 24,
    gender: 'M',
    frineds: ['Alex', 'kevin'],
    hello: function () {
        console.log('hello world');
    },
    'kdt-11': 'kdt 11기',
};
/*
console.log(obj.name, obj.gender);
obj.age = 29;
console.log(obj.age);
obj.hello();
console.log(obj.frineds[0]);
console.log('name');
obj.city = '서울';
console.log(obj.city);
console.log(obj['kdt-11']);
console.log(obj);
*/
const { name, city = '서울', age } = obj;
const { frineds, hello, age: newAge } = obj;
console.log(name, city, age);
console.log(frineds, hello, newAge);
