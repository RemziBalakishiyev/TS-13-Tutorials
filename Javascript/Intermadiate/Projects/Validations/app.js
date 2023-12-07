const qSel = function (selector) {
  return document.querySelector(selector);
};

const qSelAll = function (selector) {
  return document.querySelectorAll(selector);
};
const byClass = function (selector) {
  return document.getElementsByClassName(selector);
};

const byId = function (selector) {
  return document.getElementById(selector);
};

const validationMessages = [
  {
    id: 1,
    message: "Şifrə ən az 5 simvoldan ibarət olmalıdır",
  },
  {
    id: 2,
    message: "Şifrə daxilində ən az bir rəqəm olmalıdır",
  },
  {
    id: 3,
    message: "Şifrə daxilində ən az bir böyük hərf olmalıdır",
  },
];

let btn = byId("checkBtn");
let inp = byId("checkInp");
let lbl = byId("resulLabel");
let valLength = byId("valLength");
let valNmb = byId("valDigit");
let valUpp = byId("valUpperWords");
let frm = byId("content_sect");

const checkLength = (text) => text.length >= 5;

const checkHasNumber = function (text) {
  let symbolOfText;

  for (let textIndex = 0; textIndex < text.length; textIndex++) {
    symbolOfText = text.charAt(textIndex);
    if (isFinite(symbolOfText)) {
      return true;
    }
  }
  return false;
};

// a == A -> false

const checkHasUpperWord = function (text) {
  let symbolOfText;
  for (let textIndex = 0; textIndex < text.length; textIndex++) {
    // 1
    symbolOfText = text.charAt(textIndex);

    const upperSymbol = symbolOfText.toUpperCase(); // 1
    //D  ==  D
    if (symbolOfText == upperSymbol && isNaN(symbolOfTextr)) {
      return true;
    }
  }
  return false;
};

const createdSpan = function (validationText) {
  let span = document.createElement("span");
  span.classList.add("text-danger", "mt-3");
  span.style.display = "inline-block";
  span.innerHTML = validationText;
  return span;
};

const removeSpan = () => {
  const formChildren = frm.children;
  Array.from(formChildren).forEach((formChild) => {
    if (
      formChild.classList.contains("text-danger") &&
      formChild.tagName == "SPAN"
    ) {
      formChild.remove();
    }
  });
};

btn.onclick = function () {
  removeSpan();
  const value = inp.value;
  if (!checkLength(value)) {
    frm.appendChild(createdSpan(validationMessages[0].message));
  }

  if (!checkHasNumber(value)) {
    frm.appendChild(createdSpan(validationMessages[1].message));
  }

  if (!checkHasUpperWord(value)) {
    frm.appendChild(createdSpan(validationMessages[2].message));
  }
};
