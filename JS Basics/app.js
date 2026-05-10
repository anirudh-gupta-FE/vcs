let shoppingList = [
  "Milk",
  "Eggs",
  "Bread",
  ["Apples", "Bananas", "Oranges"],
  ["Potatoes", "Tomatoes", "Onions"],
];

//Answer1
console.log(shoppingList[0]);
//Answer2
shoppingList.push("carrots");
console.log(shoppingList);
//Answer3
shoppingList.pop();
console.log(shoppingList);
//Answer4
shoppingList[4].splice(1, 2, "Cucumbers", "Bell Peppers");
console.log(shoppingList);

let student = {
  name: "Amit",
  age: 20,
  grade: "A",
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: "India",
  },
};

//Answer5
console.log(student.name);

//Answer6
student.phone = "123-456-7890";
console.log(student);

//Answer7
delete student.grade;
console.log(student);

//Answer8
student.age = 21;
console.log(student);

//Answer 9
function valueType(a) {
  if (a > 0) {
    console.log("Positive");
  } else if (a < 0) {
    console.log("Negative");
  } else {
    console.log("Zero");
  }
}

valueType(10);
valueType(-10);
valueType(0);

//Answer10
function grades(a) {
  if (a >= 90 && a <= 100) {
    console.log("A");
  } else if (a >= 80 && a < 90) {
    console.log("B");
  } else if (a >= 70 && a < 80) {
    console.log("C");
  } else if (a >= 60 && a < 70) {
    console.log("D");
  } else {
    console.log("F");
  }
}

grades(100);
grades(80);
grades(50);

//Answer11
function truthyCheck(a) {
  if (a) {
    console.log("Truthy " + a);
  } else {
    console.log("Falsy " + a);
  }
}
truthyCheck();
truthyCheck(Number("All"));
truthyCheck(0);
truthyCheck(false);
truthyCheck(1);
truthyCheck(true);
