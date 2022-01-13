SELECT  AVG(milisegundos)
FROM albumes
INNER JOIN canciones 
ON canciones.id_album = albumes.id
WHERE titulo LIKE "Let There Be Rock"
GROUP BY titulo