function sum(num1, num2){
    return num1 + num2;
}

function calc(num1, num2, callback){
    return callback(num1, num2)
}

console.log(calc(2, 2, sum))

//Set timeout

setTimeout(function(){
    console.log('Hola Javascript');
}, 2000)

function greettin(name){
    console.log(`Hola ${name}`)
}

setTimeout(greettin, 3000, 'Camilo')