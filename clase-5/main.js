// CLASE 1 //
// Variables 
// var - let - const

var exampleVar = '';

let exampleLet = 'Mauro';
const exampleConst = 'Mauro';

exampleLet = 'Agustin';

// console.log(exampleLet)

////////////////////

// CLASE 2 //

let example = 5; 

// Operadores de asignacion

// example +=1;
// console.log(example);

// example -=1;
// console.log(example);

// example *=2;
// console.log(example);

// example %=2;
// console.log(example);

// example /=2;
// console.log(example);

// Operadores arimeticos

// example = example + 5;
// example = example * 5;
// example = example - 5;
// example = example / 5;

// example--;
// example++;

// console.log(example);

// Operadores comparativos

// console.log('a' === 'b'); // false
// console.log('a' !== 'b'); // true
// console.log(9 < 10); // true
// console.log(9 > 10); // false
// console.log(10 <= 11)

// and = && 
// or = || 

const conditionOne = 'a' === 'a'; // true
const conditionTwo = 'b' !== 'c'; // true
const conditionThree = 'a' === 'd'; // false

// console.log(conditionOne && conditionTwo)
// console.log(conditionOne || conditionTwo)
// console.log(conditionOne && conditionThree)
// console.log(conditionOne || conditionThree)

// let message;

// if (conditionThree || conditionOne) {
//   message = 'la condicion es verdadera';
// } else {
//   message = 'todas las condiciones son falsas';
// }

// const messageV2 = (conditionOne || conditionThree || conditionTwo)
//   ? 'la condicion es verdadera' 
//   : conditionThree 
//   ? 'la condicion es verdadera'
//   : 'la condicion es falsa';

// if (!conditionOne) console.log('es verdadero!');
// !conditionThree && console.log('es verdadero')  


/////////////////

// Clase 3

// for(let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for(let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     continue;
//   }

//   if (i === 9) {
//     break;
//   }
  
//   console.log(i);
// }


// let i = 10;

// while(i === 0) {
//   console.log(i);
//   i--; // sumando 1 
// } 

// do {
  // console.log(i);
  // i++;
// } while(i < 10)

const myArray = [1, 2, 3];

// for(const value of myArray) {
//   console.log(value);

//   if (value === 1) break;
// }

// for(let i = 0; i < myArray.length; i++) {
//   if (i === 1) {
//     console.log(myArray[i]);
//     break;
//   }
// }


/////////////////

// Clase 4

// Funciones y parametros
// function sum(a, b) {
//   console.log('a', a);
//   console.log('b', b);

//   console.log(a + b);
// }

// sum(15, 25);

// Return
// function sum(a, b) {
//   const total = a + b;
//   return total;
// }

// const value = sum(15, 25);
// console.log(value);

// Arrow functions
// const sum = (a, b) => {
  // const total = a + b
  // return total;
// };

// const value = sum(10, 15);
// console.log(value);


// Recursividad

// const cuentaParaAtras = (numero) => {
//   if (numero <= 0) {
//     console.log('El numero es igual o menor a cero');
//     return numero;
//   }

//   console.log('El numero todavia no es cero', numero);

//   return cuentaParaAtras(numero - 1);
// }


// cuentaParaAtras(10);

// Callbacks

// const greeting = (name) => console.log(`Bienvenido ${name}!!`);
// const goodbye = (name) => console.log(`Hasta luego, ${name}`);

// const saludo = (name, callback) => {
//   console.log('name: ', name);
//   console.log('callback: ', callback);

//   callback(name);
// }

// saludo('Dario', goodbye);



// Ejercicio callback: 

// Primera parte: 

// Escribe tres funciones: suma, resta y multiplicacion 
// Cada funcion va a tomar dos parámetros
// y va a devolver el resultado de la operación correspondiente.

// Segunda parte: 

// Escribir una operacion que se llame `realizarOperacion`
// y que tome dos numeros y una funcion de callback para 
// realizar la operacion matematica
