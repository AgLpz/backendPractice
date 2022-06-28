/* Nodejs tiene un sistema de modulos incorporado. Un archivo Node.js puede
 importar una funcionalidad expuesta por otros archivos. Con require y module.exports.

Utilizo el require para importar una función desde otro archivo a mi app.js */


// Al utilzar destructuring puedo acceder al archivo utils.js y requerir solo la funcion que necesito, que en este caso es carrito.


const {carrito} = require("./utils")




carrito.forEach((carrito) => {
    console.log(carrito);
});


// Método sin destructuring, debo acceder como a un objeto a cada funcion requerida, utils.carrito o utils.suma en este caso. 

const utils = require("./utils")

utils.carrito.forEach((carrito) => {
    console.log(carrito);
});

console.log(utils.suma(4,7))


