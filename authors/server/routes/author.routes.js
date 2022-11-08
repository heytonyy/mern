const AuthorController = require('../controllers/author.controller')

module.exports = app => {
    // create
    app.post("/api/authors/new", AuthorController.createAuthor);
    // read all
    app.get("/api/authors/", AuthorController.getAllAuthors);
    // read one
    app.get("/api/authors/:author_id", AuthorController.getOneAuthor);
    // update
    app.put("/api/authors/update/:author_id", AuthorController.updateAuthor);
    // delete
    app.delete("/api/authors/delete/:author_id", AuthorController.deleteAuthor);
}