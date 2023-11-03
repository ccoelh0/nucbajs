// var nombre = 'Mauro';
// console.log(nombre);

// const x = 15; 
// console.log('Este es el valor de X >', x);

// function saludar() {
//   let nombre = 'Ivan';
//   console.log('nombre a saludar >', nombre);
// };

// saludar();

// console.log('Nombre a saludar dentro de la variable `saludar`', nombre);

// const a = 'Global';

// function varB () {
//   const b = 'Local';
// }

// const total = 1;

// function sumarTotal() {
//   let total = 0;
//   let numero1 = 1;
//   let numero2 = 2
//   total = numero1 + numero2;

// }

// console.log(total, sumarTotal());



// Operadores de asignacion
// let number = 5;
// console.log(number);

// number += 1;
// console.log(number);

// number -= 1;
// console.log(number);

// number *= 2;
// console.log(number);

// number /= 2;
// console.log(number);

// number %=2;
// console.log(number);

// Operadores aritmeticos

// let number;
// number = 5;
// console.log(number);

// number = number + 1;
// console.log(number);

// number = number - 1;
// console.log(number);

// number = number * 2;
// console.log(number);

// number = number / 2;
// console.log(number);

// number = number % 2;
// console.log(number);

// number++;
// console.log(number);

// number--;
// console.log(number);

// Operadores comparativos

// console.log('escenario a', 18 == '18'); // compara valor sin importar el tipo de dato
// console.log('escenario b', 18 === '18'); // compara valor y tipo de dato

// console.log('escenario c', 18 != '18'); // es distinto sin importar el tipo de dato
// console.log('escenario d', 18 !== '18'); // es distinto estrictamente

// console.log('escenario e', 9 < 10);
// console.log('escenario f',  10 >= 10);

// console.log('escenario g', 9 < 10 && 1 > 2);
// console.log('escenario h', 9 > 10 || 1 > 2);
// console.log(!true);

// IF 

// const alumnoASaludar = 'Lautaro'; 
// const estaElAlumno = true;  

// if (estaElAlumno) {
//   console.log('Hola ', alumnoASaludar, '!!!!!');
// }

// let costoDeEnvio;
// let productos = 1;
// const cantidadDeProds = 5;

// // Si vos tenes 5 productos, el costo de envio es 0; 

// productos *= 2;

// console.log('Cantidad de productos: ', productos);

// if (productos >= cantidadDeProds) {
//   console.log('entre al if');
//   costoDeEnvio = 0;
// } else {
//   console.log('entre al else');
//   costoDeEnvio = 100;
// }

// console.log('Tu costo de envio es: ', costoDeEnvio);

// const user = 'Franco';

// if (user) { 
  // console.log('Muestro el user', user);
// }

// let movie = prompt('Ingresa una peli'); 

// if (movie === 'Openhaimer') {
//   console.log('De suspenso')
// } else if (movie === '5 noches con freddy') { 
//   console.log('Es de miedo'); 
// } else {
//   console.log('No conozco esa peli loko');
// }

// let movie = prompt('Ingresa una peli y te digo el genero'); 

// switch(movie) {
//   case 'Openhaimer': 
//     console.log('De suspenso');
//     break;
//   case 'Madagascar':
//     console.log('Comedia');
//     break;
//   case '5 noches con freddy': 
//     console.log('Miedo');
//     break;
//   default: 
//     console.log('No conozco esa peli');
//     break;
// }


// Operador tenario

let age = prompt('Ingresa tu edad');

// age > 18 // condicion 
  // ? console.log('podes pasar') // condicion si es true
  // : console.log('sos menor, no podes pasar al boliche'); // else

age > 18 // condicion 
  ? console.log('podes pasar') // condicion si es true
  : age < 18
  ? console.log('sos menor')
  : console.log('Tenes justo 18');

// Comparacion 

// const user = foundUser ? foundUser : newUser; 

// let user; 

// if (foundUser) {
//   user = foundUser; 
// } else {
//   user = newUser; 
// }