Asincronismo en Node.js

Node.js es una librería asíncrona por definición, está basado en los eventos de entrada y salida (E/S), por lo que usa constantemente los llamados callbacks.


Node se basa en el asincronismo. 

Asíncrono: 



//Callbacks: 

Son funciones que le damos a node para que ejecute al finalizar determinada operacion que dicha operacion puede demorar mucho o poco tiempo. 
Esto nos permite tener todas las operaciones de E/S que el sistema operativo soporte ocurriendo a la misma vez.

Por ejemplo, en un servidor web con cientos o miles de requests pendientes con múltiples consultas bloqueadas, nos permite seguir respondiendo a las nuevas requests, y a medida que se resuelvan las bloqueadas, responder esas también. 

Es una funcion que se deposita como parametro de otra funcion que se ejecuta en un tiempo determinado. 



//Event Loop:
Tambien conocido como bucle de eventos, es lo que nos permite que Node.js sea asíncrono y que no se bloquee con operaciones de Entrada/Salida.
El codigo Js corre en un hilo único(single thread), esto quiere decir que solo una sentencia se está ejecutando cada vez. 
Esta limitacion es en realidad muy util, ya que nos ahorramos los problemqas de concurrencia que ocurren cuando programamos en entornos "multi thread".
Todo el programa que hagamos en Js son solamente un proceso.
Con Node.js podemos lograr que nuestro programa se ejecute sin tener que esperar una respuesta de concurrencia del codigo. 
El Event Loop recibe constantemente peticiones.








