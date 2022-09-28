const promise = new Promise(function(resolve, reject){
    resolve('Todo OK')
})

const cows = 15;

const countCows = new Promise(function(resolve, reject){
    if(cows>10){
        resolve(`We have ${cows} cows on the farm`)
    } else {
        reject("We don't have enought cows")
    }
})

countCows.then((result) => {
    console.log(result)
}).catch((error)=>{
    console.log(error)
}).finally(()=>
console.log("Finally"))

//Ejercicio Clase 12

/*
En este desafío debes crear una función la cual produzca una espera en un tiempo específico y debe funcionar como una promesa.

La función deberá recibir dos parámetros:

time = el tiempo de espera
message = el mensaje que debe imprimir despues del tiempo de espera
Nota: Debes usar la función setTimeout con el namespace window para poder monitorear su uso en la ejecución de pruebas, ejemplo:

La solución debería tener un input y output como los siguientes:

Input

delay(2000, "Hello after 2s")
.then((message) => console.log(message))

Output

# after 2s
"Hello after 2s"
*/
function delay(time, message) {
    return new Promise((resolve) => {
      window.setTimeout(() => {
        resolve(message);
      }, time)
    })
}
delay(2000, "Hello after 2s")