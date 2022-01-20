module.exports = (sequelize, dataTypes) => {
    let alias = "Pelicula";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING
        },
        rating: {
            type: dataTypes.DOUBLE
        },
        length: {
            type: dataTypes.INTEGER
        },
        awards: {
            type: dataTypes.INTEGER
        }, 
        release_date:{
            type: dataTypes.DATE
        },
        genre_id:{
            type: dataTypes.INTEGER
        }
    };
    let config = {
        tableName : "movies",
        timestamps : false
    }
    
    const Pelicula = sequelize.define(alias, cols, config)

    Pelicula.associate = function(models){
        Pelicula.belongsTo(models.Genero,{
            as:"genero",
            foreignKey:"genre_id"
        });

        Pelicula.belongsToMany(models.Actor, {
            as:"actores",
            through:"actor_movie",
            foreignKey:"movie_id",
            otherKey:"actor_id",
            timestamps: false
        });
    }




    return Pelicula;
}