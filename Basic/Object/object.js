const Movie = {
  Alien: 4.3, // Alein - key ....4.3 - value
  Black: 4.9,
  Arma: 5,
};
console.log(Movie);

console.log(Movie.Alien);

Movie["Alien"] = 4.98;
console.log(Movie);

Movie.Black = 5.1;
console.log(Movie);
