const { get } = require("express/lib/response")

module.exports = app => {
    app.route("/users")
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route("/users/:id")
        .put(app.api.user.save)
        .get(app.api.user.getById)

    app.route("/categories")
        .get(app.api.category.get)
        .post(app.api.category.save) 
        
    app.route("/categories/tree")
        .get(app.api.category.getTree)

    app.route("/categories/:id")
        .get(app.api.category.getById)
        .put(app.api.category.save)
        .delete(app.api.category.remove) 
        
    app.route("/articles")
        .get(app.api.article.get)
        .post(app.api.article.save)

    app.route("/articles/:id")
        .put(app.api.article.save)
        .get(app.api.article.getById)
        .delete(app.api.article.remove)

    app.route("/categories/:id/articles")
        .get(app.api.article.getByCategory)
}