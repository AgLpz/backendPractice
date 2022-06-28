En este directorio "ejemplo1" puse a práctica al sistema de módulos de Node.js para importar una funcion en mi "app.js" desde el otro archivo "carrito.js utilizando require("ruta del archivo") que en este caso era 'const carrito = require("./carrito")'. y desde el archivo "carrito.js" exporté el array utilizando module.exports.



package.json:

Es el archivo que contiene la informacion de nuestro proyecto. 

Se crea a traves de NPM(Node Package Manager), que este es un manejador de paquetes de Node. 
Contiene todas las librerias que se instalan a traves de NPM, como por ejemplo Express.

NPM es el administrador de paquetes standar para Node.js

Se utiliza desde la terminal para instalar las dependencias de nuetro proyecto, tales como librerias externas que utilicemos y tambien para correr algunos scripts.

comandos:
 instalar un paquete -  npm install <nombreDelPaquete>
 ejemplo: npm install express

 Esto actualiza al package.json y agrega un nuevo objeto llamado dependencies y agrega la libreria que instalamos anteriormente.

 Para requerir una librería debemos hacerlo de la siguiente manera:

 const cowsay = require('cowsay');


Esto nos sirve para utilizar sus metodos que nos van a ayudar a trabajar de manera mas eficiente.

Nota: No solo hay que requerir la libreria, sino que antes tiene que ser instalada a través de NPM.




Servidor HTTP

Este es el protocolo de comunicación que permite las transferencias de información entre aplicaciones web.

Se utiliza para intercambiar información entre el cliente y el servidor.

El servidor queda a la espera de alguna solicitud HTTP(request) ejecutada por el cliente y le proporciona una respuesta (response)

Métodos de petición HTTP:

GET, POST, PUT, DELETE 

como requerir http: 

const http = require("http")
