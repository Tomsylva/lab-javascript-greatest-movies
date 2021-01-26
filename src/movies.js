// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies){
  
    const directorsArray = movies.map(function (element){
        return element.director;
    });
    return directorsArray.filter(function(word, idx){
      return directorsArray.indexOf(word) === idx;
    })
}   

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?

function howManyMovies(array) {
  const spielbergsDramas = array.filter(function (element) {
    return (
      element.director === "Steven Spielberg" && element.genre.includes("Drama")
    );
  });
  return spielbergsDramas.length;
}

// Iteration 3: All rates average - Get the average of all rates with 2 decimals
// function ratesAverage(array){

  function ratesAverage(array){
    
    if (array.length === 0){
      return 0
    };
    
    let totalSum =  array.reduce(function(acc,val){
      if(!val.rate){
        return acc;
      } else {
        return acc + val.rate
      }
    }, 0);

    return +(totalSum/array.length).toFixed(2);
  }

// Iteration 4: Drama movies - Get the average of Drama Movies

function dramaMoviesRate(array){

  let totalRate = 0;
  const dramasArray = array.filter(function (movie) {
    return movie.genre.includes("Drama");
  });
    for (let element of dramasArray){
      totalRate += element.rate
  };
  if(dramasArray.length === 0){
    return 0;
  } else return +(totalRate/dramasArray.length).toFixed(2);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(array){
  let sortedByYear = [];
  for (movie of array){
    sortedByYear.push(movie);
  };

  return sortedByYear.sort(function(val1, val2){
    if(val1.year === val2.year){
      if(val1.title < val2.title){
        return -1;
      } else return 1;
    }
    return val1.year - val2.year
  })
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(array){
  let sortedTitles = []

  for(movie of array){
    sortedTitles.push(movie.title)
  }

  return sortedTitles.sort().slice(0,20);
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

function turnHoursToMinutes(array){
  let minutes = [];
  for(let movie of array){
    let hoursToMinutes = 0;
    let minutesToNumber = 0;
    let timeString = movie.duration;
    if(timeString.includes("h")){
      hoursToMinutes = Number(timeString[0]) * 60;
      //extract minutes and convert to number
    } else if (timeString.includes("mins")){
      minutesToNumber = Number(timeString.slice(0,1))
    }
    movie.duration = hoursToMinutes + minutesToNumber;
    return movie.duration
  }
  return minutes;
};

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
function bestYearAvg(array){
  if(array.length === 0){
    return null;
  }
  let year = String(year);
  let rate = String(rate);
  for(let movie of array){
    for(let i = 1900; i < 2022; i++){

//first filter for each year
//for each year, call rates average
//i++ on the year

    }
  }
  return `The best year was ${year} with an average rate of ${rate}`
}
