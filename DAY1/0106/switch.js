//조건문
//switch문
//값=: , break=;
/*
switch(x) {
    case 값1: x와 값1이 같을때 실행 //x === 값1
        break;
    case 값2: x와 값2이 같을때 실행 //x ===값2
        break;
    default:
        break;
}
break: 조건문,반복문에서 빠져나갈때 사용하는 키워드 중괄호({}) 안에 써야함
브레이크 없으면 값 다 나옴 사고;;
*/
let a = 5 * 2; //let이랑 일치한 case 값이 실행되는거임!!
switch (a) {
  case 3:
    console.log("현재 값은 3입니다");
    break;
  case 4:
    console.log("현재 값은 4입니다");
    break;
  case 5:
    console.log("현재 값은 5입니다");
    break;
  default:
    console.log("알 수 없는 값입니다");
  //디폴트는 끝이라 break 안써도 됨
}

let grade = "A";
switch (grade) {
  case "A":
    console.log("학점 A");
    break;
  case "b":
    console.log("학점 b");
    break;
  case "c":
    console.log("학점 c");
    break;
  case "d":
    console.log("학점 d");
    break;
  case "f":
    console.log("학점 f");
    break;
  default:
    console.log("공습 경보");
}

// switch (변수) {
//     case 값1: 변수와 값1이 일치하면 실행
//     break;
//     case 값1: 변수와 값1이 일치하면 실행
//     break;
//     default: 변수와 값1이 일치하면 실행
//     break;
// }
// 브레이크라고 쓰면 끝남
// 값에 브레이크가 없으면 그 다음 값 까지 실행됨
// 그렇게 되면 말도 안되는 조건문이 나옴
// 항상 브레이크를 걸어줘야 됨
// if문이랑 다름
// 스위치를 쓰는 경우는 비중이 떨어짐
// 안쓰진 않지만 비중은 떨어짐
