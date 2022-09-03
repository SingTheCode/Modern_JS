// 일반함수의 this는 일반적으로 전역객체(window)를 바인딩한다.
function generalFunc() {
  console.log(this);
}
generalFunc();

// 객체 안의 메서드 내부의 중첩함수나 콜백함수의 this도 전역객체를 바인딩한다.
const obj1 = {
  test() {
    function test1() {
      console.log(this);
    }
    test1();
  },
};
obj1.test();

// 객체 안의 메서드 내부에서 헬퍼함수로서 중첩함수나 콜백함수를 사용할 경우, bind or arrow function을 사용한다.
const obj2 = {
  arr: [1, 2, 3, 4],
  test2() {
    const newArr1 = this.arr.forEach((value) => console.log(this.arr));
  },
};
