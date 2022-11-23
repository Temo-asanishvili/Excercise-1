//1.
function compare(a, b) {
  if (a === b) {
    return "It is equal";
  } else {
    return "It is not equal.";
  }
}
console.log(compare(5, 5)); // true.
console.log(compare(5, 10)); // false.

//2.
function celsius(fahrenheit) {
  if (typeof fahrenheit !== "number") {
    return false;
  } else {
    return (fahrenheit - 32) / 2;
  }
}
console.log(celsius(60)); // 14

//3.
function param(a, b, operation) {
  if (typeof a != "number" && typeof b != "number") {
    return false;
  }
  if (operation === "+") {
    return a + b;
  } else if (operation === "-") {
    return a - b;
  } else if (operation === "*") {
    return a * b;
  } else if (operation === "/") {
    return a / b;
  }
}
console.log(param(3, 5, "*")); // 15
console.log(param(4, 5, "+")); // 9
console.log(param(10, 5, "-")); // 5
console.log(param(20, 5, "/")); // 4
console.log(param("5", "5", "+")); // false
