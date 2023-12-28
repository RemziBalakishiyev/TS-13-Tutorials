const actors = [
  {
    img: "bruce.jpg",
    fullName: "Bruce Wayne",
    job: "Software Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sunt labore et, voluptate commodi sint optio cumque. Amet ipsum obcaecati molestias unde velit asperiores dicta ea nam ullam. Enim, sequi.",
    color: "#0a9396",
    quoteColor: "#57cfd1",
  },
  {
    img: "john.jpg",
    fullName: "John Wick",
    job: "Backend Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sunt labore et, voluptate commodi sint optio cumque. Amet ipsum obcaecati molestias unde velit asperiores dicta ea nam ullam. Enim, sequi.",
    color: "#ee9b00",
    quoteColor: "#ecb755",
  },
  {
    img: "walter.jpg",
    fullName: "Walter White",
    job: "Front-end Developer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sunt labore et, voluptate commodi sint optio cumque. Amet ipsum obcaecati molestias unde velit asperiores dicta ea nam ullam. Enim, sequi.",
    color: "#001219",
    quoteColor: "#041a22",
  },
];

let cardImg = document.getElementById("empImg");
let cardJob = document.getElementById("job");
let cardFullName = document.getElementById("fullName");
let cardSkill = document.getElementById("skill");
let showButton = document.getElementById("btnShow");
let [nextButton] = document.getElementsByClassName("fa-angle-right");
let [previousButton] = document.getElementsByClassName("fa-angle-left");
let [backImg] = document.getElementsByClassName("bg-img");
let [quoete] = document.getElementsByClassName("fa-quote-left");
let slideButtons = document.querySelectorAll(".card-slider i");

const changeSlide = function ({
  img,
  fullName,
  job,
  description,
  color,
  quoteColor,
}) {
  cardImg.setAttribute("src", `../img/${img}`); // src="../img/bruce.jpg"
  cardFullName.innerHTML = fullName;
  cardJob.innerHTML = job;
  cardSkill.innerHTML = description;
  backImg.style.backgroundColor = color;
  showButton.style.backgroundColor = color;
  quoete.style.backgroundColor = quoteColor;
};

const operations = function () {
  let currentIndex = 0;
  nextButton.onclick = function () {
    currentIndex++;
    changeSlide(actors[currentIndex]);
    changeSlide(actors[currentIndex - 1]);
  };
  previousButton.onfullscreenchange = () => {
    currentIndex++;
    changeSlide(actors[currentIndex]);
    if (currentIndex > 2) {
      changeSlide(actors[2]);
      currentIndex--;
      hello;
      wor;
    }
  };
};
operations();
