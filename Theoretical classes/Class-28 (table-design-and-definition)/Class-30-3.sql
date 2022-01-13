SELECT clientes.id, MAX(facturas.total) 
FROM musimundos.facturas
INNER JOIN clientes ON clientes.id = facturas.id_cliente 
group by clientes.id
having clientes.id = 48