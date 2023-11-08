// Bucle for 

// for(desde, hasta, actualizacion)
// for(let i = 0; i <= 10; i++) {
//   console.log(`Valor de i: ${i}`);
// }

// For with Break
// for(let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     break;
//   }

//   console.log(`Valor de i: ${i}`);
// }

// For with continue 
// for(let i = 0; i <= 10; i++) {
//   if (i === 5 || i === 6) {
//     continue;
//   }

//   console.log(`Valor de i: ${i}`);
// }

// Save a value from for
// let myValue; // We need to find the id 5;

// console.log('My value -> ', myValue);

// for(let i = 0; i <= 10; i++) {
//   if (i === 5) {
//     console.log('Found the specific id')
//     myValue = i;
//     break;
//   }

//   console.log(`Valor de i: ${i}`);
// }

// console.log('My value -> ', myValue);

// TODO: Hacer un blucle que imprima solamente los numeros pares

// for(let i = 0; i <= 20; i++) {
//   if (i % 2 !== 0) {
//     continue;
//   }

//   console.log(`Este numero es par: ${i}`);
// }

// While

// let i = 0;

// while (i < 10) {
//   console.log(`Vamos por el numero: ${i}`);

//   i++; // Sumamos uno a i;
// }

// let flag = true;
// let contador = 0;

// do {
//   contador++;

//   if (contador === 3) continue;

//   console.log('Contador:', contador);

//   if (contador === 5) flag = false;
// } while (flag);

// Arrays

// let someVar = 1;

// const cart = [
//   'remera talle m',
//   'pantalon talle l',
// ];

// console.log('Imprimimos el array entero ->', cart);
// console.log(`Longitud del array ->`, cart.length);
// console.log('Imprimimos el primer valor el array ->', cart[0]);

// console.log(`Comparacion: cart is array: ${Array.isArray(cart)} | someVar is array: ${Array.isArray(someVar)}`);

// const cart = [
//   'remera',
//   'pantalon',
//   'zapatillas',
//   5,
//   'gorra',
//   'campera'
// ];

// for(const item of cart) {
//   if (typeof item === 'number') {
//     continue;
//   }

//   console.log('Productos en el carrito ->', item);
// }

/**
 * Somos una tienda de zapas
 * Tenemos que hacer dos cosas: 
 * 
 * 1. Sumar el total que le sale al usuario la compra (cada uno vale 100)
 * 2. Si uno de los items es una zapatilla, no le cobramos el envio
 */

let total = 0;
let shippingCost = 100;

const shirt = 'remera';

const cart = [
  shirt,
  'pantalon',
  'gorra',
  'campera',
  'zapatillas',
];

// console.log('Iniciando analisis');

// for(const item of cart) {
//   if (item === 'zapatillas') {
//     shippingCost = 0;
//   }

//   total = total + 100;
// }

// console.log(`Lo que tenes que pagar es ${total} con un envio que sale ${shippingCost}`);

for (let i = 0; i < cart.length; i++) {
  // Como imprimimos cada item del cart?
  console.log(`Producto: ${cart[i]}`);
}
