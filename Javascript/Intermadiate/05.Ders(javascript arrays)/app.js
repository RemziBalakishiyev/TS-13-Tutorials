const movies = {
  name: "Silence of The sheep",
  genre: ["Dram", "Dedective", "Grammy"],
  languages: ["Azerbaijan", "Russian", "English", "Turk"],
  subTitles: ["Azerbaijan", "Turk", "Arabic"],

  seasons: {
    firstSeason: {
      episodeOne: "Episode - 1 ",
      episodeTwo: "Episode - 2 ",
      episodeThree: "Episode - 3",
    },
    secondSeason: {
      episodeOne: "Episode - 1 ",
      episodeTwo: "Episode - 2 ",
      episodeThree: "Episode - 3",
    },
    lastSeason: {
      episodeOne: "Episode - 1 ",
      episodeTwo: "Episode - 2 ",
      episodeThree: "Episode - 3",
    },
  },

  playWithLanguage(langIndex, subIndex) {
    return [this.languages[langIndex], this.subTitles[subIndex], this.genre];
  },

  additionalInformation({ imdbPoint, realesDate }) {
    if (imdbPoint > 6) {
      this.imdb = {
        evaulution: "Best",
        releaseDate: realesDate,
        point: imdbPoint,
      };
    } else {
      this.imdb = {
        evaulution: "Bad",
        releaseDate: realesDate,
        point: imdbPoint,
      };
    }
  },

  addNewLanguage(langNames) {
    this.languages = [...this.languages, ...langNames];
  },

  addNewSeason(seasons) {
    return {
      ...this.seasons,
      forthSeason: seasons,
    };
  },
};

const bookLibrary = {
  books: [
    "1984",
    "Crime and Punishment",
    "Red dragon",
    "u geni",
    "Romeo and Juliet",
    "Ferhad Shirin",
    "Her ve sulh",
  ],
  prices: [12, 15, 12, 25, 28, 21],
  genre: ["Dedective", "Romantic", "Classical"],
};

const simpleNumberArr = [1, 2, 3, 4, 5];
//* Array destructing
// // const numberOne = simpleNumberArr[0];
// // const numberTwo = simpleNumberArr[1];
// // const numberThree = simpleNumberArr[2];

// const [numberOne, numberTwo, numberThree] = simpleNumberArr;

// const [georgOrwelBook, , tomHarrisBook] = bookLibrary.books;

// console.log(numberOne, numberTwo, numberThree);

// console.log(`George Orwel's book ${georgOrwelBook}`);
// console.log(`Tom Harris's book ${tomHarrisBook}`);

// console.log(movies.playWithLanguage(0, 1));

// const [
//   lang,
//   subTitle,
//   [firstGenre, secondGenre, thirdGenre],
// ] = movies.playWithLanguage(0, 1);

// console.log(lang);
// console.log(subTitle);
// console.log(thirdGenre);
console.clear();
//* Object Destructing
// const person = { name: "Ali", age: 27 };

// const { age } = person;

// console.log(age);

// const {
//   seasons: { secondSeason, firstSeason, lastSeason },
//   genre: [, , Grammy],
// } = movies;

// console.log(firstSeason);

// const movies1Info = {
//   imdbPoint: 7.5,
//   realesDate: 2018,
// };
// const movies3Info = {
//   imdbPoint: 8.5,
//   realesDate: 2016,
// };
// const movies2Info = {
//   imdbPoint: 5.5,
//   realesDate: 2022,
// };

// movies.additionalInformation(movies2Info);

// console.log(movies.imdb);

const positiveNumbers = [1, 2, 3];
const negativeNumbers = [-1, -2, -3];

console.log(...positiveNumbers);

const allNumbers = [
  ...positiveNumbers,
  ...negativeNumbers,
  0,
  12,
  ...[10, 90, 100],
];

console.log(allNumbers);

const newLangs = [
  "Spain",
  "German",
  "French",
  "Azerbaijan",
  "Russian",
  "Arabic",
  "German",
];

movies.addNewLanguage(newLangs);

console.log(movies.languages);
let person = { name: "Ali", age: 27 };

person = {
  ...person,
  surname: "Aliyev",
};
console.log(person);

console.log(
  movies.addNewSeason({
    episodeOne: "Episode - 1 ",
    episodeTwo: "Episode - 2 ",
    episodeThree: "Episode - 3",
  })
);
