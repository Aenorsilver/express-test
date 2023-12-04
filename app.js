const express = require('express');
const app = express();
const movies = [
  {title: "Starwars", id: 1},
  {title: "The Godfather", id: 2},
  {title: "Not found", id: 3},
]

app.get("/",(req, res) => {
  res.send("Welcome to my favourite movie list");
});

app.get("/movies",(req, res) => {
  res.status(200).json(movies);
});

app.get("/movies/:id", (req, res) => {
  const {id} = req.params;
  const movie = movies.find((movie) => movie.id == id)
  if (movie) {
    res.status(200).json(movie);
  }
  else {
    res.status(404).json();
  }
});


module.exports = app;