/*
a) List actors sorted alphabetically whose name is greater than 6 characters
b) Total number of episodes saved in the database
c) Get the title of all series and the total seasons for each serie
d) Show, for each genre, the total number of films it owns, as long as it is greater
or equal to 3.
*/


/*	a)	*/
SELECT *
FROM actors
WHERE length(first_name) > 6
ORDER BY first_name;

/*	b)	*/
SELECT COUNT(*)
FROM episodes;

/*	c)	*/
SELECT series.title AS serie,  max(seasons.number)
FROM series
INNER JOIN seasons ON series.id = seasons.serie_id
GROUP BY serie;

/*	d)	*/
SELECT genres.name, COUNT(*)
FROM movies
INNER JOIN genres ON movies.genre_id = genres.id
GROUP BY genres.name
