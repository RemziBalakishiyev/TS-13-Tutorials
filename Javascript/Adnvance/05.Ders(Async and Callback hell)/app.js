// setTimeout(() => {
//   console.log("1 second passed");
//   setTimeout(() => {
//     console.log("2 second passed");
//     setTimeout(() => {
//       console.log("3 second passed");
//       setTimeout(() => {
//         console.log("4 second passed");
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000); //* Diger prosesleri asinxron formada gozleyerken ic-ice callback-lar istifade edirik ve buda bizi callback hell arqumentine cixarir

// const simplePromise = new Promise((resolve, reject) => {
//   if (Math.random() >= 0.6) {
//     resolve("Random number is greater than 0.6");
//   } else {
//     reject("Random number is less than 0.6");
//   }
// });

// simplePromise
//   .then((msg) => console.log(msg))
//   .catch((errMsg) => console.error(errMsg));

// const waiting = function (milliSeconds) {
//   return new Promise((resolve) => {
//     setTimeout(resolve, milliSeconds);
//   });
// };

// waiting(1000)
//   .then(() => {
//     console.log("Waited for 1 seconds");
//     return waiting(1000);
//   })
//   .then(() => {
//     console.log("Waited for 2 seconds");
//     return waiting(1000);
//   })
//   .then(() => {
//     console.log("Waited for 3 seconds");
//   });
const tableBody = document.querySelector(".table > tbody");

const API_URL = `https://restcountries.com/v3.1/name/`;
const displayCountry = function (responseData) {
  tableBody.innerHTML = "";
  const [country] = responseData;
  const html = `
        <tr>
            <td>${country.name.official}</td>
            <td>${country.capital}</td>
            <td>${country.region}</td>
        </tr>`;
  tableBody.insertAdjacentHTML("beforeend", html);
};
const getCountry = async function (countryName) {
  try {
    const response = await fetch(API_URL + countryName); //Syntactic sugar
    const resData = await response.json();
    displayCountry(resData);
  } catch (err) {
    console.error("Error message  : " + err);
  }

  return `Your Country is ${countryName}`;
};

getCountry("usa").then((msg) => {
  console.log(msg);
});
