//Utilizo el require para importar una función desde otro archivo a mi app.js 

const carrito = require("./carrito")

carrito.forEach((fruta) => {
    console.log(fruta);
});

