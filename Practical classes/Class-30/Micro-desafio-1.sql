/*a) 
	Get the titles and the gender name of all series in the database
 */

SELECT * 
FROM series
INNER JOIN genres ON series.genre_id = genres.id;

/* b) 
	Show the episode titles with the name and last name of the actors
*/
SELECT * FROM episodes
INNER JOIN actor_episode ON episodes.id = actor_episode.episode_id
INNER JOIN actors ON actor_episode.actor_id = actors.id;