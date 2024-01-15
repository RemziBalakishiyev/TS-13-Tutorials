const API_URL = `https://restcountries.com/v3.1/name/`;

// const getDataWithPromise = new Promise(function (resolve, reject) {
//   const isSuccess = false;

//   if (isSuccess) {
//     resolve("Emeliyyat ugurla bas verdi");
//   } else {
//     reject("Her hansisa bir xeta bas verdi!");
//   }
// });

// getDataWithPromise
//   .then(function (data) {
//     console.log(data);
//   })
//   .catch((errData) => {
//     console.error(errData);
//   });

// const delayedPromise = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Timer is work");
//   }, 4000);
// });

// delayedPromise.then((result) => {
//   console.log(result);
// });

fetch(API_URL + "usa")
  .then((response) => {
    return response.json();
  })
  .then((responseJson) => {
    console.log(responseJson);
  })
  .catch((error) => {
    console.log(error);
  });

const tableBody = document.querySelector(".table > tbody");
const getCountry = function (countryName) {
  fetch(API_URL + countryName)
    .then((res) => res.json())
    .then((responseData) => {
      tableBody.innerHTML = "";
      const [country] = responseData;
      const html = `
              <tr>
                  <td>${country.name.official}</td>
                  <td>${country.capital}</td>
                  <td>${country.region}</td>
              </tr>`;
      tableBody.insertAdjacentHTML("beforeend", html);
    });
};
