// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arr) {
  return arr.map((movie) => movie.director);
}
// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let spielbergMovies = arr.filter(
    (steve) =>
      steve.director === 'Steven Spielberg' && steve.genre.includes('Drama')
  );
  return spielbergMovies.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(arr) {
  function scoreSum(acc, el) {
    if (el.length === 0) {
      return 0;
    } else if (el.score === undefined) {
      return acc;
    }
    return (acc += el.score);
  }
  let avScore = arr.reduce(scoreSum, 0) / arr.length;

  return parseFloat(avScore.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let dramaMovies = arr.filter((movie) => movie.genre.includes('Drama'));
  if (dramaMovies.length === 0) return 0;
  function sumScores(acc, elem) {
    if (elem.score) acc += elem.score;
    return acc;
  }
  let sumScoresDramaMovies = dramaMovies.reduce(sumScores, 0);
  let averageScoreDramaMovies = sumScoresDramaMovies / dramaMovies.length;
  return parseFloat(averageScoreDramaMovies.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(arr) {
  function ascending(firstEl, secEl) {
    return firstEl.year - secEl.year;
  }
  let orderByYearArray = arr.sort(ascending);
  return orderByYearArray;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(arr) {
  let arrOrder = [];
  Array.forEach((element) => arrOrder.push(element.name));
  arrayOrder.sort();

  if (arrOrder.length > 20) {
    arrOrder = arrOrder.slice(0, 20);
  }
  return arrOrder;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg
  };
}

console.log('hello');
