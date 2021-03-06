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
    },
    add:(req,res)=> {
        res.render("moviesAdd")
    },
    create:(req,res)=>{
       
        db.Movie.create({
            title:req.body.title,
            rating:req.body.rating,
            awards:req.body.awards,
            release_date:req.body.release_date,
            length:req.body.length,
        });
        res.redirect("/movies")
    },
    edit: (req,res)=>{
        db.Movie.findByPk(req.params.id)
        .then(function(Movie){
            res.render("moviesEdit", {Movie})
        })
    },
    update: (req,res)=>{
        db.Movie.update({
            title:req.body.title,
            rating:req.body.rating,
            awards:req.body.awards,
            release_date:req.body.release_date,
            length:req.body.length,
        }, {
            where: {
                id:req.params.id
            }
        })

        res.redirect("/movies")
    },
    delete:(req,res)=>{
        db.Movie.findByPk(req.params.id)
        .then(function(Movie){
            res.render("moviesDelete", {Movie})
        })
    },
    destroy: (req,res)=>{
        db.Movie.destroy({
            where:{
                id:req.params.id
            }
        })
        res.redirect("/movies");
    }
}

module.exports = moviesController;