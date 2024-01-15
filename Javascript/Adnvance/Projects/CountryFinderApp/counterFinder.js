const BASE_URL = "https://restcountries.com/v3.1/name/";
let searchBtn = document.querySelector("#search");
let countryInp = document.querySelector("#countryName");
let card = document.querySelector(".card-body");

const displayCountry = function ({
  name: { common },
  capital,
  languages,
  maps: { googleMaps },
  flags: { png, svg },
}) {
  console.log(languages);

  const langHtml = `
  <ul class='lang-group'>
    ${Object.values(languages)
      .map((lang) => `<li>${lang}</li>`)
      .join("")}
  </ul>
  `;

  console.log(langHtml);
  const countryHtml = `
            <div class='country--container'>
                    <img src='${svg}' class='flag-img'>
                    <h2 style="margin-left:40%;margin-top:10px">
                       ${common.toUpperCase()}
                    </h2>

                    <div class="country--detail mt-3">
                        <div class='capital--name'>
                            <h3>Capital:</h3><span>${capital}</span>
                        </div>
                        <h4>LANGUAGES</h4>
                        ${langHtml}
                        <a target='_blank' class='btn btn-danger w-50 mx-auto' href='${googleMaps}'>MAP</a>
                    </div>
                </div>
    `;
  card.innerHTML = countryHtml;
};

const findACountry = function (countryName) {
  fetch(`${BASE_URL}${countryName}`)
    .then((response) => response.json())
    .then((responseData) => {
      const [country] = responseData;
      displayCountry(country);
    })
    .catch((err) => {
      if (err.message) {
        alertify.alert(err.message);
      }
    });
};

searchBtn.onclick = function () {
  let countryName = countryInp.value;
  if (!countryName) {
    alertify.alert("Please enter a valid name!");
    return;
  }

  findACountry(countryName);
};
