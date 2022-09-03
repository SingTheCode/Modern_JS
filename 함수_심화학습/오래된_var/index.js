// 함수 스코프라 변수 선언부 밖에서 접근이 불가능
// 함수 안에서는 블록 안에서 선언해도 블록 밖에서 호출이 가능
const test = () => {
  var text = "hello";
  if (true) {
    var test1 = "test1";
  }
  console.log(test1);
};
test();
console.log(text);

// var는 선언하기 전 호출이 가능하다.
const test2 = () => {
  test2 = "test2";
  console.log(test2);
  var test2;
};
test2();

// let은 선언하기 전 호출이 불가능하다.
console.log(test3);
let test3 = "test3";

// function은 선언하기 전 호출이 가능하다.
test4();
function test4() {
  console.log("test4");
}

// arrow function은 선언하기 전 호출이 불가능하다.
test5();
const test5 = () => {
  console.log("test5");
};
