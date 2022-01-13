SELECT  generos.nombre AS GENNOM, COUNT(*)
FROM musimundos.canciones
INNER JOIN generos 
ON canciones.id_genero = generos.id
GROUP BY GENNOM