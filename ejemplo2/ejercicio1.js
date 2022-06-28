const fs = require("fs");

// const data = fs.readFileSync("text.txt");

// console.log(data.toString());
// console.log("Programa terminado");

fs.readFile("text.txt", function name(error, data) {
  if (error) return console.log(error);

  console.log(data.toString());
});

console.log("Programa terminado  ");
 
/* El callback permite recibir dos  parámetros, en uno de ellos se va a manejar el error  y en el otro se va a manejar lo que nosotros esperamos.
Si ocurre algun error en la funcion, el error se va a cargar.
 */