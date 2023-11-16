// console.log(document.body);

// const headOfContainer = document.getElementById("head-container");
// headOfContainer.style.color = "black";
// headOfContainer.style.backgroundColor = "white";
// headOfContainer.style.padding = "10px 20px";

// // const textOne = document.querySelector(".container .text-content .content-1");

// // textOne.style.backgroundColor = "#dda15e";
// // textOne.style.padding = "20px";
// // textOne.style.fontSize = "16px";

// // const contentTexts = document.getElementsByClassName("content-1");
// const contentTexts = document.querySelectorAll(
//   ".container .text-content .content-1"
// );

// console.log(contentTexts);

// for (let index = 0; index < contentTexts.length; index++) {
//   const element = contentTexts[index];
//   element.style.backgroundColor = "#dda15e";
//   element.style.padding = "20px";
//   element.style.fontSize = "24px";
// }

// const spans = document.getElementsByTagName("span");

// for (let index = 0; index < spans.length; index++) {
//   const element = spans[index];
//   element.style.backgroundColor = "#8ecae6";
//   element.style.padding = "20px";
//   element.style.fontSize = "24px";
//   element.style.color = "red";
// }

//? Practice

const headOfContainer = document.querySelector("#head-container");
// Element içində yazını dəyişir
headOfContainer.textContent = "Dom Manipulation Lesson ";
headOfContainer.style.color = "#000";

const firstContent = document.querySelectorAll(".content-1")[0];
const secondContent = document.querySelectorAll(".content-1")[1];

firstContent.textContent =
  "Pizza (English:  PEET-sə, Italian: [ˈpittsa], Neapolitan: ) is a dish of Italian origin consisting of a usually round, flat base of leavened wheat-based dough topped with tomatoes, cheese, and often various other ingredients (such as various types of sausage, anchovies, mushrooms, onions, olives, vegetables, meat, ham, etc.), which is then baked at a high temperature, traditionally in a wood-fired oven.";

// secondContent.textContent = "<h3>Etymology</h3>";

secondContent.innerHTML = "<h3 style='color:red'>Etymology</h3>";
console.log(secondContent.innerHTML);
secondContent.innerHTML =
  secondContent.innerHTML +
  "<p>he oldest recorded usage of the word <b>'pizza'</b> is from a Latin text from the town of Gaeta, then still part of the Byzantine Empire, in 997 AD;</p>";

console.log(secondContent.className);

// secondContent.className = secondContent.className + " " + "flexBoxing";
console.log(secondContent.classList);

console.log(secondContent.classList.contains("flexBoxing"));
// secondContent.classList.add("flexBoxing");
// if (secondContent.classList.contains("flexBoxing")) {
//   secondContent.classList.remove("flexBoxing");
// }

secondContent.classList.add("flexBoxing");
secondContent.classList.toggle("flexBoxing");

const btn = document.querySelector(".button-5");

console.log(btn.getAttribute("class"));

btn.setAttribute("disable", "disable");
btn.setAttribute("href", "https://en.wikipedia.org/wiki/Pizza");
btn.setAttribute("target", "_blank");

const checkBoxFive = document.getElementById("check-5");

// checkBoxFive.toggleAttribute("checked");
checkBoxFive.toggleAttribute("checked");
