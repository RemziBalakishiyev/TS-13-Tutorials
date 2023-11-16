//========! Convert data !===========

// let anyValue = 10;
// console.log(typeof anyValue);

// anyValue = "10";
// console.log(typeof anyValue);

// let numberOne = "10";
// let numberTwo = 20;
// // QEYD: Tereflerden hec olmasa biri string olarsa + işarəsi toplama yox birləşdirmə edir

// // Convert Number way 1
// let convertedNumber1 = Number(numberOne);
// console.log(typeof convertedNumber1, convertedNumber1);

// // Convert Number way 2
// let convertedNumber2 = parseInt(numberOne);
// console.log(typeof convertedNumber2, convertedNumber2);

// //QEYD:  parseFloat natamam ededleri natamam şəkildə saxlayır , parseInt dəyəri isə həmin dəyəri tam ədəd kimi göstərir.

// let numberThree = 3.4;
// console.log(parseInt(numberThree));

// //Convert Way 3

// let convertedNumber3 = +numberOne;
// console.log(typeof convertedNumber3, convertedNumber3);

// console.log(+numberOne + +numberTwo);

// let converToString1 = String(numberTwo);
// console.log(typeof converToString1, converToString1);

// let converToString2 = numberTwo.toString();
// console.log(typeof converToString2, converToString2);
console.clear();
//========! HEADER Get data from prompt !===========
// let firstName = prompt("Type your first name"); // Remzi
// let lastName = prompt("Type your Last name"); // Balakishiyev
// console.log(firstName + " " + lastName);
// ========! NOTE Promptan alinan istenilen deyer string tipindedir !===========
// let numberOne = parseInt(prompt("Pls, Give any number between 1-100"));
// let numberOne = +prompt("Pls, Give any number between 1-100");
// let numberTwo = +prompt("Pls, Give any number between 1-100");
// console.log(typeof numberOne, typeof numberTwo);
// console.log(numberOne + numberTwo);
console.clear();
//========! Template literal and combine string type coerccion !===========

// let numberOne = "50";
// let numberTwo = 10;
// //Operand      //Operand
// let sum = numberOne + numberTwo; // Burdan tip string olur
// console.log(typeof sum, sum);

// let substract = numberOne - numberTwo; // Cixma olarsa eger bu zaman tip dönüşünü number keçid
// console.log(typeof substract, substract);

// let fullName = prompt("Give Your Full Name");

// let birthOfYear = +prompt("Give your Birth year");

// let age = 2023 - birthOfYear;

// // My full Name is .... and I am ... year old.
// const templateText = `My full name is ${fullName} and I'm ${age} year-old`;
// console.log(templateText);
console.clear();

//========! Falsy values !===========

// let isProgrammer = false;
// console.log(isProgrammer);

// let nullFalsyValues = Boolean(null);
// console.log(nullFalsyValues);

// let undefinedFalsyValues = Boolean(undefined);
// console.log(nullFalsyValues);

// let emptyStringFalsyValues = Boolean("");
// console.log(emptyStringFalsyValues);

// let zeroFalsyValues = Boolean(0);
// console.log(zeroFalsyValues);

// let nanFalsyValues = Boolean(NaN);
// console.log(nanFalsyValues);

// //NaN == Not a Number
// let convertNumber = Number("a");

// console.log(Boolean(convertNumber));

// let numberTruthyValues = Boolean(-12312321);
// console.log(numberTruthyValues);

// let stringTruthy = Boolean("asdasdasd");
// console.log(stringTruthy);
console.clear();

//========! Logical AND and OR !========

// console.log(1 > 3);
// console.log(20 >= 3);
// console.log(20 == 20);
// console.log(!false);
// console.log(!true);
// console.log(!(10 > 3));
// console.log(!!(10 == 10));

// let textForBoolData = !!""; // Normal olaraq cevirme etse false deyeri vermelidir

// //NOTE Boolean cevrilmelerde !!
// console.log(typeof textForBoolData, textForBoolData);

// // AND --> &&  tereflerden biri false olarsa geriye false verecekdir. AND operatorunun həm sağ həmdə sol tərəfi true olmalıdır

// console.log(true && false);
// console.log(10 > 3 && 20 < 100);
// // AND operatorunun həm sağ həmdə sol tərəfinin boolean  çevrilməsi true olarsa sağ tərəfdə dayanan dəyəri götürür. Tərəflərdən birinin boolean  çevrilməsi false (yəni tərəflərdən biri falsy value  olarsa) o zaman həmin falsy dəyəri götürür
// console.log("Something" && "Anything"); //Anything
// console.log(true && 20); // 20
// console.log("Text" && 100);// 100

// console.log("" && 100);// ""
// console.log("Dummy" && 0); //0
// console.log(0 && true); // 0
// console.log(0 && false); // false
// // OR --> ||  tereflerden ən azı biri true olarsa bu ifadə geriyə true

// console.log(false || false); // False
// console.log(false || true); // true
// console.log(10 > 100 || 9 > 3); // true

// console.log("Something" || "Anything"); //Something
// console.log(true || 20); //true
// console.log("Text" || 100); //Text

// // OR operatorunun həm sağ həmdə sol tərəfinin boolean  çevrilməsi true olarsa ilk true olan deyer hansıdırsa onu götürür. Tərəflərdən birinin boolean  çevrilməsi false (yəni tərəflərdən biri falsy value  olarsa) o zaman həmin falsy dəyəri götürür
// console.log("" || 100); // 100
// console.log("Dummy" || 0); // Dummy
// console.log(0 || true); // true
// console.log(null || "Text"); // text

//========! Falsy values !===========

// let isProgrammer = false;
// console.log(isProgrammer);

// let nullFalsyValues = Boolean(null);
// console.log(nullFalsyValues);

// let undefinedFalsyValues = Boolean(undefined);
// console.log(nullFalsyValues);

// let emptyStringFalsyValues = Boolean("");
// console.log(emptyStringFalsyValues);

// let zeroFalsyValues = Boolean(0);
// console.log(zeroFalsyValues);

// let nanFalsyValues = Boolean(NaN);
// console.log(nanFalsyValues);

// //NaN == Not a Number
// let convertNumber = Number("a");

// console.log(Boolean(convertNumber));

// let numberTruthyValues = Boolean(-12312321);
// console.log(numberTruthyValues);

// let stringTruthy = Boolean("asdasdasd");
// console.log(stringTruthy);
console.clear();
