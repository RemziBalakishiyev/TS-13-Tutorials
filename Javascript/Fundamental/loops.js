//While
// let index = 0;
// while (index < 5) {
//   console.log(`index -- ${index}`);
//   console.log("While Loop is working 🏢");
//   index = index + 1; //i = 0 + 1 -> i=1 + 1 ->i=2 ...  i =  4 +1 -> i=5
// }

// let count = 1;
// while (count <= 10) {
//   count++; // = count = count + 1

//   if (count == 2) {
//     console.log("Bu ədəd ikidir 🥈");
//   }
// }

// let userIsReady = false;

// let confirmLimit = 3;

// while (!userIsReady && confirmLimit != 0) {
//   let userConfirm = prompt("Do you confirm? (yes/no)");

//   if (userConfirm == "yes") {
//     userIsReady = true;
//   } else {
//     confirmLimit--;
//   }
// }

// if (confirmLimit == 0) {
//   alert("User isn`t authenticated! ❎");
// } else {
//   alert("User is authenticated! 🔐");
// }

console.clear();

//do while

let count = -1;

// while (count > 0) {
//   console.log("Bu eded müsbətdir");
// }

// do {
//   console.log("Bu eded müsbətdir");
// } while (count > 0);

// let numberFromUser;

// do {
//   numberFromUser = prompt("Please enter a number greater than 10: ");
// } while (+numberFromUser <= 10);

// let userIsReady = false;

// let confirmLimit = 3;

// while (!userIsReady && confirmLimit != 0) {
//   let userConfirm = prompt("Do you confirm? (yes/no)");

//   if (userConfirm == "yes") {
//     userIsReady = true;
//   } else {
//     confirmLimit--;no
//   }
// }
// let userConfirm;
// do {
//   userConfirm = prompt("Do you confirm? (yes/no)");
// } while (userConfirm != "yes");

// console.log(`${numberFromUser} greater than 10 `);
//break continue

// let index = 0;
// while (index < 10) {
//   console.log("While is working 💪 ", index);

//   if (index == 3) {
//     continue;
//   }

// }

// console.log("While loop stopped ! 🛑");
console.clear();
//for
//
// for (let index = 0; index < 10; index++) {
//   console.log(`Index -- ${index}`);
// }

// for (let index = 0; index < 100; index += 12) {
//   console.log(`Index -- ${index}`);
// }

for (let index = 1; index < 7; index++) {
  switch (index) {
    case 1:
    case 3:
      practiceSomething = "Go to Gym ⛹️‍♀️";
      break;
    case 2:
    case 4:
      practiceSomething = "Read a book 📖";
      break;
    case 5:
    case 6:
      practiceSomething = "You must learn coding 👩‍💻";
      break;
    default:
      practiceSomething = "You can go to watch movie 🎥";
      break;
  }

  console.log(practiceSomething);
}

// 1 - den 10-a qeder ededlerin cemi
let sum = 0;
for (let number = 1; number <= 10; number++) {
  sum = sum + number; // s=3
}

console.log(sum);

// 1- dən 100-ə qədər cüt  ədədlərin cemini tapın

let sumOfEvenNumbers = 0;

for (let number = 1; number <= 100; number++) {
  if (number % 2 == 0) {
    console.log(number);
    sumOfEvenNumbers += number;
  }
}

console.log(`Sum of even numbers 1-100 ${sumOfEvenNumbers}`);
