/*
	FOR each series, the number of days from its premiere to its end
*/

SELECT title, release_date, end_date,DATEdiff( end_date,series.release_date) AS Duración
FROM series;