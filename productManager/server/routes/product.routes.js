const ProductController = require('../controllers/product.controllers')

module.exports = app => {
    // create
    app.post("/api/products/new", ProductController.createProduct);
    // read all
    app.get("/api/products/", ProductController.getAllProducts);
    // read one
    app.get("/api/products/:product_id", ProductController.getOneProduct);
    // update
    app.put("/api/products/update/:product_id", ProductController.updateProduct);
    // delete
    app.delete("/api/products/delete/:product_id", ProductController.deleteProduct);
}