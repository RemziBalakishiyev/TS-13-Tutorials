//* Sinxron
// const header = document.querySelector("h1");
// header.style.color = "blue";

// alert("Message");
// header.style.color = "crimson";

//* Asinxron
// const header = document.querySelector("h1");
// setTimeout(function () {
//   header.style.color = "blue";
// }, 3000);
// header.style.color = "crimson";

const tableBody = document.querySelector(".table > tbody");

const getCountry = function (countryName) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${countryName}`);
  request.send();

  request.addEventListener("load", function () {
    tableBody.innerHTML = "";
    const [country] = JSON.parse(this.responseText);
    const html = `
            <tr>
                <td>${country.name.official}</td>
                <td>${country.capital}</td>
                <td>${country.region}</td>
            </tr>`;

    tableBody.insertAdjacentHTML("beforeend", html);
  });
};
