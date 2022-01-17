const db = require("../database/models")

const moviesController = {
    list: function(req,res){
        db.Movie.findAll()
            .then(function(movies){
                res.render("moviesList", {movies})
            })
        console.log("list")
    },
    new:function(req,res){
        db.Movie.findAll({
            order: [
                ["release_date", "DESC"],
            ],
            limit: 3,
        })
        .then(movies =>{
            res.render("newestMovies", {movies})
        } )
    },
    recomended:function(req,res){
        db.Movie.findAll({
            where: {
                rating: {[db.Sequelize.Op.gte]: 8}
            },
            order: [
                ["rating", "DESC"]
            ],
            limit: 3,
        })
        .then(movies =>{
            res.render("recommendedMovies", {movies})
        } )
    },
    detail: function(req,res){
        let id = req.params.id;
        db.Movie.findByPk(id).then((movie) => {
            res.render("moviesDetail", {movie:movie})
        })
    }
}

module.exports = moviesController;