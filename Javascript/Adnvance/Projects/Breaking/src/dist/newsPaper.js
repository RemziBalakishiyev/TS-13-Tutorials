const API_KEY_1 = "a562f4736dd74c8aa54e7662f664678e";
const BASE_URL = "https://newsapi.org/v2/";
const newsCardBody = document.getElementById("dailyCard");
const viewMore = document.getElementById("viewMore");
const trendinNews = document.getElementById("trendingNews");

let currentContent = "it";
let currenPageSize = 2;

const displayTrendingNews = function ({
  urlToImage,
  title,
  description,
  author,
  publishedAt,
}) {
  let trendHtml = ` <img src="${urlToImage}" alt="">

                        <div class="header--content">
                            <div class="trending--icons">
                                <span>Trending</span>
                            </div>
                            <h3 class="title">
                                ${title}
                            </h3>
                            <p class="description">
                                ${description}
                            </p>
                            <div class="author">
                               ${author} | ${publishedAt}
                            </div>
                    </div>`;
  trendinNews.innerHTML = trendHtml;
};

const displayNews = function (...articles) {
  console.log(articles);
  newsCardBody.innerHTML = "";
  articles.forEach((article) => {
    let { urlToImage, title, description, author, publishedAt } = article;

    let newsHtml = `<div class="news--card">
                        <div class="card--head">
                            <img src="${urlToImage}" alt="">
                        </div>
                        <div class="card--body" id="cardBody">
                            <h4>
                                ${title}
                            </h4>
                            <p>
                                ${description}
                            </p>
                            </div>
                        <div class="card--author">
                            ${author} | ${publishedAt}
                        </div>
                    </div>`;
    newsCardBody.insertAdjacentHTML("beforeend", newsHtml);
  });
};

const getAllNews = async function (query = "it", page, pageSize) {
  try {
    // All News
    const response = await fetch(
      `${BASE_URL}everything?q=${query}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY_1}`
    );
    const { articles } = await response.json();

    displayNews(...articles);

    //Trend News
    const responseTrend = await fetch(
      `${BASE_URL}top-headlines?q=${query}&page=${page}&pageSize=${pageSize}&apiKey=${API_KEY_1}`
    );

    const {
      articles: [trend],
    } = await responseTrend.json();

    displayTrendingNews(trend);
  } catch (error) {}
};
getAllNews(currentContent, 1, currenPageSize);
viewMore.addEventListener("click", function () {
  if (currenPageSize !== 100) {
    currenPageSize += 2;
    getAllNews(currentContent, 1, currenPageSize);
  }
});

document.querySelector(".menu--list").addEventListener("click", function (e) {
  if (e.target.classList.contains("menu-item")) {
    console.log(e.target);

    currentContent = e.target.innerHTML;
    getAllNews(currentContent.toLowerCase(), 1, currenPageSize);
  }
});

document
  .querySelector(".news--daily--header")
  .addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target.classList.contains("daily-item")) {
      currentContent = e.target.innerHTML;
      getAllNews(currentContent.toLowerCase(), 1, currenPageSize);

      let [ul] = e.currentTarget.children;

      Array.from(ul.children).forEach((li) => {
        if (li.classList.contains("active")) {
          li.classList.remove("active");
        }
      });

      e.target.parentElement.classList.add("active");
    }
  });
