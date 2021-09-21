# APICartShopping
API de compras la cual permite listar, agregar, acuatlizar y eliminar productos
Documentacion en /api-docs

La carpeta 'api' contiene lo que va a ser el servicio de la API donde vamos a estar extrayendo todos los servicios que vayamos necesitando.Dentro de esta carpeta vamos a construir todo el servidor y lo que necesitemos. 
El index.js de la carpeta api es quien va a llevar la configuración del servidor.

En network.js llevará toda la configuración para la red.

Tenemos aislada la DB para evitar mezclarlo con la lógica del negocio, conforme vayamos teniendo diferentes DB, vamos a ir guardando aqui la configuración para tener todo de forma más accesible, para ello la carpeta store cuenta la codnfuracion para DB local y otra en remotemysql.com 

La carpetar network maneja los responses devueltos por la API




