//* Fibonaci sirasini qaytaran array //[0, 1, 1, 2, 3, 5, 8, 12] -->

const fibonacci = function (n) {
  let fibonaciSequences = [0, 1]; // 0 , 1 , n = 5

  for (let fibNumber = 2; fibNumber < n; fibNumber++) {
    //  f[2]                                            / f[1]
    fibonaciSequences[fibNumber] =
      fibonaciSequences[fibNumber - 1] + fibonaciSequences[fibNumber - 2];
  }

  return fibonaciSequences;
};

console.log(fibonacci(10));
//* Ededin reqemlerini sayini tapan

//? 2344 --> reqemlerini sayini

const calcCountDigitsOfNumber = function (num) {
  let number = num; // 2344 / 10 = 234 ;  234 / 10 =  23 , 23 / 10 = 2;  2 / 10 = 0
  let countOfNumber = 0;
  while (number > 0) {
    number = Math.floor(number / 10);
    countOfNumber++;
  }
  return { number: num, count: countOfNumber };
};

const calcNumDig = calcCountDigitsOfNumber(2344);
const calcNumDig2 = calcCountDigitsOfNumber(123456);

console.log(
  `${calcNumDig.number}  ədədinin rəqəmlərinin sayı =  ${calcNumDig.count}`
);

console.log(
  `${calcNumDig2.number}  ədədinin rəqəmlərinin sayı =  ${calcNumDig2.count}`
);

//* ededin reqemlerinin cemini tapan
//? 2344 --> reqemlerini cemini --> 2344 % 10 =  4 // 234 % 10 = 4 // 23 % 10 = 3 // 2 % 10 = 2

const calcSumOfDigitNumbers = function (num) {
  let number = num;
  let sum = 0;
  while (number > 0) {
    sum += number % 10; // 4, 8 ,
    number = Math.floor(number / 10);
  }
  return { number: num, sumOfNumber: sum };
};
const calcSumNumDigit = calcSumOfDigitNumbers(232432341231);

console.log(
  `${calcSumNumDigit.number} ədədinin rəqəmlərinin cəmi =  ${calcSumNumDigit.sumOfNumber} `
);

//* Arr en boyuk elementini tapan

const findMaxNumberFromArray = function (arr) {
  //! [-5, 23, 10, 100, 99, -1000, 6]
  let maxNumber = arr[0]; //!  mN = -5 ❌,  mN = 23, mn = 100
  for (let index = 1; index < arr.length; index++) {
    //! arr[1]=23 -> 23 >  -5
    //!  arr[3]=100 -> 100 > 23
    if (arr[index] > maxNumber) {
      maxNumber = arr[index];
      //! mN =  23
      //! mN = 100
    }
  }
  return maxNumber;
};

console.log(findMaxNumberFromArray([-5, 23, 10, 100, 99, 1000, 666666]));
//* sum of matrix
const matrix1 = [
  [1, 2],
  [3, 4],
];
const matrix2 = [
  [5, 6],
  [7, 8],
];

const sumMatrices = function (m1, m2) {
  const sum = [];
  for (let i = 0; i < matrix1.length; i++) {
    const row = [];

    for (let j = 0; j < matrix1.length; j++) {
      row.push(m1[i][j] + m2[i][j]);
    }

    sum.push(row);
  }

  return sum;
};

console.log(sumMatrices(matrix1, matrix2));
