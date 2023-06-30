function sumOfNumbers(arr) {
  let numbers = [];
  let total = 0;
  console.log(`Origninal array:${arr}`);
  arr.map((item) => {
    if (typeof item === "number") {
      //   console.log(`Number ${item}`);
      numbers.push(item);
    }
  });

  numbers.map((item) => {
    total = total + item;
  });
  console.log(`Sum all numbers of the said array:${total}`);
}
sumOfNumbers([2, 3, 0, 5, 7, 8, true, false]);
