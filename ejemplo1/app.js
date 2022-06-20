/* Nodejs tiene un sistema de modulos incorporado. Un archivo Node.js puede
 importar una funcionalidad expuesta por otros archivos. Con require y module.exports.

Utilizo el require para importar una función desde otro archivo a mi app.js */

const carrito = require("./carrito")

carrito.forEach((fruta) => {
    console.log(fruta);
});


