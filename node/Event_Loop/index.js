function fun1() {
  // async part alway run last after run sync
  setTimeout(() => {
    console.log("I am Fun1");
  }, 0);
  process.nextTick(() => console.log("I am process"));
  setImmediate(() => console.log("I am setImediate"));
}
function fun2() {
  console.log("I am Fun2");
}
function fun3() {
  console.log("I am Fun3");
}

fun1();
fun2();
fun3();
