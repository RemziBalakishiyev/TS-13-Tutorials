//* Nodes nedir?
console.log(document.body.childNodes);
//? child nodes -  HTMl Tag-nin icerisinde olan butun elementleri bize gostermis olur

//* Dom traversing
console.log(document.querySelector(".container").childNodes);

//? children -  HTMl Tag-nin icerisinde olan  butun tag elementleri bize gostermis olur

let elementsOfContainer = document.querySelector(".container").children;
elementsOfContainer[0].style.color = "yellow";

// elementsOfContainer[1].style.backgroundColor = "red";
elementsOfContainer[1].children[2].innerHTML = "Dom traversing";
console.log();
//* forof , foreach

const simpleArr = [1, 2, 4, 5];

for (const number of simpleArr) {
  console.log(number);
}

simpleArr.forEach((arr) => {
  console.log(arr);
});

const cardContainer = Array.from(elementsOfContainer)[2];

for (const cardContChilds of cardContainer.children) {
  if (cardContChilds.classList.contains("card")) {
    console.log();

    const button = document.createElement("a");
    button.setAttribute(
      "href",
      "https://en.wikipedia.org/wiki/Syntactic_sugar#:~:text=In%20computer%20science%2C%20syntactic%20sugar,style%20that%20some%20may%20prefer."
    );

    button.classList.add("button-5");

    button.innerHTML = "Create Button in dom";
    console.log(button);
    cardContChilds.parentElement.appendChild(button);

    Array.from(cardContChilds.firstElementChild.children).forEach(
      (cardBodyChild) => {
        if (cardBodyChild.nodeName == "SPAN") {
          cardBodyChild.innerText = " Traversed!";
          cardBodyChild.style.color = "red";
        }
      }
    );
  }
}

const content = document.createElement("p");
const horizantaLine = document.createElement("div");

content.innerHTML = `Lorem , sit amet consectetur adipisicing elit. Numquam, necessitatibus. Iste vero
inventore aperiam aut cum totam, nulla omnis aliquid ullam ab quod distinctio quidem tenetur odio! Impedit maxime corporis rerum, accusamus magni libero facere cumque voluptas quidem quam quis
maiores consectetur quos, culpa totam iure. At ipsam sunt illum! Debitis qui temporibus blanditiis
molestias nisi molestiae alias animi unde soluta, harum expedita repellat vero possimus corrupti?
Inventore eligendi sint aliquid voluptatum delectus ipsum voluptas, quasi illum totam nam, excepturi
accusamus doloribus laudantium obcaecati quod. Harum suscipit beatae blanditiis corporis,
consectetur corrupti! Perspiciatis quibusdam illum quo! Tempora quos ab tenetur.`;

content.classList.add("content-1");
horizantaLine.classList.add("horizontal-line");

Array.from(document.querySelector(".container").children).forEach(
  (containerChidren) => {
    if (containerChidren.classList.contains("text-content")) {
      console.log(containerChidren);

      containerChidren.append(horizantaLine);
      //   containerChidren.append(content);

      containerChidren.innerHTML += `
      <p class='content-1'>
                Lorem , sit amet consectetur adipisicing elit. Numquam, necessitatibus. Iste vero
            inventore aperiam aut cum totam, nulla omnis aliquid ullam ab quod distinctio quidem tenetur odio! Impedit maxime corporis rerum, accusamus magni libero facere cumque voluptas quidem quam quis
            maiores consectetur quos, culpa totam iure. At ipsam sunt illum! Debitis qui temporibus blanditiis
            molestias nisi molestiae alias animi unde soluta, harum expedita repellat vero possimus corrupti?
            Inventore eligendi sint aliquid voluptatum delectus ipsum voluptas, quasi illum totam nam, excepturi
            accusamus doloribus laudantium obcaecati quod. Harum suscipit beatae blanditiis corporis,
            consectetur corrupti! Perspiciatis quibusdam illum quo! Tempora quos ab tenetur.
      </p>`;
    }
  }
);

//* Create Element
