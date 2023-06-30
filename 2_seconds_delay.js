function afterTwoSeconds(callback) {
  setTimeout(callback, 2000);
}
function message() {
  console.log("Hello");
}
afterTwoSeconds(message);
