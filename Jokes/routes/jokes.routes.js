const JokeController = require("../controllers/jokes.controllers");

module.exports = app => {
  app.get("/api/jokes/", JokeController.getAllJokes);
  app.get("/api/jokes/random", JokeController.getRandomJoke);
  app.get("/api/jokes/:joke_id", JokeController.getOneJoke);
  app.post("/api/jokes/new", JokeController.createJoke);
  app.put("/api/jokes/update/:joke_id", JokeController.updateJoke);
  app.delete("/api/jokes/delete/:joke_id", JokeController.deleteJoke);
};