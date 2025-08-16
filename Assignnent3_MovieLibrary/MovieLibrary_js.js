const movieLibrary = [
  { title: "3 Idiots", genre: ["Comedy", "Drama"], rating: 8.4, year: 2009 },
  { title: "Dangal", genre: ["Biography", "Drama", "Sport"], rating: 8.3, year: 2016 },
  { title: "Gully Boy", genre: ["Drama", "Music"], rating: 7.9, year: 2019 },
  { title: "Baahubali: The Beginning", genre: ["Action", "Drama"], rating: 8.0, year: 2015 },
  { title: "KGF Chapter 1", genre: ["Action", "Drama"], rating: 8.2, year: 2018 },
  { title: "Rang De Basanti", genre: ["Drama", "History"], rating: 8.1, year: 2006 },
  { title: "Chak De! India", genre: ["Drama", "Sport"], rating: 8.2, year: 2007 },
  { title: "RRR", genre: ["Action", "Drama"], rating: 7.9, year: 2022 }
];
function filterByRating(minRating) {
  return movieLibrary.filter(movie => movie.rating >= minRating);
}

function filterByYear(year) {
  return movieLibrary.filter(movie => movie.year === year);
}

function filterByGenre(genre) {
  return movieLibrary.filter(movie => movie.genre.includes(genre));
}
function displayMovies(movies) {
  if (movies.length === 0) {
    console.log("No movies found.");
    return;
  }
  movies.forEach(movie => {
    console.log(`${movie.title} (${movie.year}) - ${movie.rating}/10 [${movie.genre.join(", ")}]`);
  });
}
console.log(" Movies with rating >= 8.2:");
displayMovies(filterByRating(8.2));

console.log(" Movies released in 2019:");
displayMovies(filterByYear(2019));

console.log(" Movies in the 'Drama' genre:");
displayMovies(filterByGenre("Drama"));


