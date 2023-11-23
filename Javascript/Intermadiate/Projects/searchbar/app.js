let programmingTechnologies = [
  "Html", //html.includes
  "Css",
  "Javascript",
  "React",
  "Mongo db",
  "C#",
  "Sql server",
];

let inputOfSearch = document.getElementById("search");
let listGroupForList = document.querySelector(
  "#autocompleteContainer .list-group"
);

const searchProgrammingDataForAutoComplete = function () {
  debugger;
  let inputData = inputOfSearch.value;
  listGroupForList.innerHTML = "";
  if (inputData == "") {
    listGroupForList.innerHTML = "";
  } else {
    for (let index = 0; index < programmingTechnologies.length; index++) {
      const element = programmingTechnologies[index];

      if (element.toLowerCase().includes(inputData.toLowerCase())) {
        listGroupForList.innerHTML += `<li class="list-group-item">${element}</li>`;
      }
    }
  }
};

inputOfSearch.addEventListener("keyup", searchProgrammingDataForAutoComplete);
