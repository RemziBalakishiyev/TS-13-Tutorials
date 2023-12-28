const navLinks = document.querySelectorAll(".nav-link");
const navItem = document.querySelector(".nav-item");
const navCollapse = document.querySelector(".navbar-collapse");

// const getRndColor = function () {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// };
// //* Target deyeri hansi element üzərində event edirikse onu göstərir
// //* currentTarget hansi elementə event vermişiksə onu gösterir (addEventListenere yazdığımız element)
// navLink.addEventListener("click", function (event) {
//   event.preventDefault();

//   console.log("NAV LINK (a) is WORK!");
//   this.style.backgroundColor = getRndColor();
// });

// navItem.addEventListener("click", function (e) {
//   console.log(e.currentTarget);
//   console.log("NAV ITEM (li) is WORK!");
//   this.style.backgroundColor = getRndColor();
// });

// navCollapse.addEventListener("click", function (e) {
//   console.log("NAV COLLAPSE (div) is WORK!");
//   this.style.backgroundColor = getRndColor();
// });

// navLinks.forEach((LINK) => {
//   LINK.addEventListener("click", function (event) {
//     event.currentTarget.classList.add("active");

//     event.target
//   });
// });

navCollapse.addEventListener("click", function (e) {
  if (e.target.classList.contains("nav-link")) {
    Array.from(e.currentTarget.children[0].children).forEach((li) => {
      const [navItem] = li.children;
      if (navItem.classList.contains("active")) {
        navItem.classList.remove("active");
      }
    });
    e.target.classList.add("active");
  }
});
