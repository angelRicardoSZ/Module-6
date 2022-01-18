let db = require("../database/models")

let genresController = {
    list: function(req,res){
        db.Genre.findAll()
            .then(function(peliculas){
                res.render("genresList", {peliculas:peliculas})
            })
        console.log("list")
    },
    detail: function(req,res){
        console.log("detail")
    }
}

module.exports = genresController;