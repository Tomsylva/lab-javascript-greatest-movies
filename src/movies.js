// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies){
  
    const directorsArray = movies.map(function (element){
        return element.director;
    })
    return directorsArray
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
      if(val.rate === "" || val.rate == undefined){
        return acc;
      } else {
        return acc + val.rate
      }
    }, 0);

    return +(totalSum/array.length).toFixed(2);
  }


// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

