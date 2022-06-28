console.log("Inicia el programa");

setTimeout(() => {
    console.log("Se invoca setTimeout")
}, 5000);

/*

setTimeout(() => {
    
}, interval);

*/

// setTimeout es un callback al que le damos un tiempo determinado para que inicie a ejecutarse.
//Al ser un callback siempre va a ejecutarse al final

/*El Event Loop detecta que es una función asíncrona y por lo tanto lo envía al CallStack, donde se resuelve esta función y queda 
disponible para ejecutarse luego de que el event loop termine de ejecutar todo el código síncrono. */

console.log("Finaliza el programa")

