// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(movies){
    //  let directorsArray = movies.map(function (){
    //     return movies.director
    // })
    // return directorsArray;
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

  // let acc = 0
  // let totalRate = array.reduce(function(acc, val){
  //   if (array.length === 0) {
  //     return 0;
  //   }
  //   return acc + val["rate"];
  // }, 0)
  // return totalRate/array.length;

  function ratesAverage(array){
    
    if (array.length === 0){
      return 0
    };
    
    let totalSum =  array.reduce(function(acc,val){

      return acc + val.rate
    }, 0);
    return totalSum/array.length//.fixed(2)
  }

// }

// arrSum = function(array){
//   let totalSum =  array.reduce(function(acc,val){
//     return acc + val.rate
//   }, 0);
// }

// const shoppingCart = [
//   {name:"t-shirt", price: 9.99}, 
//   {name:"cheese", price: 2},
//   {name:"cocaine", price: 150}
// ];

// const totalPrice = shoppingCart.reduce(function (accumulator, currentValue){
//   return accumulator + currentValue.price;
// }, -150);




// Iteration 4: Drama movies - Get the average of Drama Movies

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average

