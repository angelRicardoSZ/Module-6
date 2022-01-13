/*
	show all the actors and actresses (unique)
    who have worked on any movie in the Star Wars saga
*/

SELECT DISTINCT actors.first_name, actors.last_name
FROM actors
INNER JOIN actor_movie ON actors.id = actor_movie.actor_id
INNER JOIN movies ON actor_movie.movie_id = movies.id
WHERE movies.title LIKE 'la guerra%'
;
