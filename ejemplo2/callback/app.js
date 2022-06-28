function asyncOperation (a, b, c, callback){
    //Sentencia
    if ( "ocurre un error" ){
        return callback(new Error("ha sucedido un error"));
    }
    //mas trabajo..
    callback(null, d, e, f);
};

asyncOperation(params, function (err, returnValues){
    //Este codigo se ejecuta luego que la operación asincrónica termine
});

/* Esta es la típica estructura de las funciones asincrónicas, esto es siguiendo a la convención de "Error callback"

La función callback será el último parámetro que le vamos a dar a una función asincrónica
El primer parámetro que recibe el callback es el error(si es que ocurrió alguno)
Si no ocurrió ningún error, el callback será invocado con el primer parámetro en null(el error), y los resultados en los demás parámetros.
*/
