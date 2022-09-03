// 렉시컬 스코프(정적 스코프)는 함수를 어디서 정의했는지에 따라 상위 스코프를 결정한다.
let x = 1;

function foo() {
  let x = 10;
  bar();
}

function bar() {
  console.log(x);
}

foo();
bar();
