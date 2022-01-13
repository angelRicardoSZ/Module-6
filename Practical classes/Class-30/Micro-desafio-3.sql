/*
	list the titles of each film with their corresponding genre.
    In the case of that has no gender, we will show a legend that says
    "it has no gender"
*/

SELECT movies.title, genres.name, COALESCE(genres.name, "Sin genero")
FROM movies 
LEFT JOIN genres ON movies.genre_id = genres.id


