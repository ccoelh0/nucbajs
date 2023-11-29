// Length 
// const array = [1, 2, 3];
// console.log('Length ->', array.length);

// indexOf()
// const students = ['Dario', 'Franco', 'Sabrina'];
// const darioIndex = students.indexOf('Dario');

// console.log({ darioIndex });
// console.log('Student ->', students[darioIndex]);

// toString()
// const array = ['Hola', 'como estan?', 1, 2, 3];
// console.log('metodo to string()', array.toString());

// Concat
// const array = ['Hola', 'como estan?'];
// const moreWords = ['Yo', 'por suerte', 'todo bien :)'];
// const newArray = array.concat(moreWords);

// console.log({array});
// console.log({moreWords});
// console.log({newArray});

////////////////////////////////////////////

// push()
// const cart = ['remera', 'jean', 'buzo'];

// console.log(cart);

// function addProductToCart(product) {
  // cart.push(product)
// }

// addProductToCart('campera');
// console.log(cart);

// addProductToCart('gorra')
// console.log(cart);

// const cart = ['remera', 'jean', 'buzo'];
// const newArray = ['campera', 'medias', 'ropa interior']
// cart.push(...newArray);
// console.log({cart})

// unshift()
// const cart = ['remera', 'jean', 'buzo'];
// cart.unshift('campera');
// console.log({cart});

// pop()
// const cart = ['remera', 'jean', 'buzo'];
// const itemDelete = cart.pop();

// shift()
// const cart = ['remera', 'jean', 'buzo'];
// const firstValueDelete = cart.shift();

// console.log(cart);
// console.log(firstValueDelete);

// join()
// const cart = ['remera', 'jean', 'buzo'];
// const message = `Tu pedido es: ${cart.join(' - ')}`
// console.log('Message ->', message);

// reverse()
// const cart = ['remera', 'jean', 'buzo'];
// const value = cart.reverse()

// console.log(value);
// console.log(cart);

// slice()
// const cart = ['remera', 'jean', 'buzo', 'gorra'];

// console.log(cart.slice(1)); // [jean, buzo, gorra]  
// console.log(cart.slice(1, 2)); // [jean]  
// console.log(cart.slice(1, 3)); // [jean, buzo]
// console.log(cart.slice(-2)) // ["buzo","gorra"]

/////////////////////////

// forEach
// const cart = ['remera', 'gora', 'campera'];

// cart.forEach((value, index, array) => {
  // console.log('param value: ', value, index)
  // console.log('param index: ', index);
  // console.log('index + array; ', cart[index]);
  // console.log('param array: ', array)
  // console.log('original array: ', cart)

  // forEach no retorna nada!!
  // return []
// });

// map 
// array de objetos
// const cart = [
//   { name: 'remera', value: 100 }, 
//   { name: 'gorra', value: 50}
// ];

// // Promo que las remeras valen la mitad!!!
// const cartWithDiscount = cart.map((item) => {
//   const shirt = 'remera';

//   if (item.name === shirt) {
//     const discount = item.value / 2
//     return { ...item, value: discount }
//   } 
  
//   return item;
// })

// console.log('cart sin descuento: ', cart);
// console.log('cart con descuento: ', cartWithDiscount);

// filter
// const cart = [
//   { name: 'remera', value: 100 }, 
//   { name: 'gorra', value: 50}
// ];

// // no tenemos mas gorras
// // hay que borrar las gorras de los carritos
// const filter = cart.filter((item) => {
//   return item.name !== 'gorra';
// });

// console.log(filter);

// find
const cart = [
  { name: 'remera', value: 100 }, 
  { name: 'gorra', value: 50}
];

// const findRemera = cart.find((value) => {
//   return value.name === 'remera';
// })

// const foundShort = cart.find((value) => {
//   return value.name === 'short';
// })

// console.log('find:', foundShort);

// every
// const value = cart.every((product) => {
//   return product.value > 10;
// });

// console.log('result: ', value)

// some
// const value = cart.some((product) => {
//   return product.name === 'short';
// });

// console.log('Hay una gorra? ', value);


// sort
const numbers = [5, 7, 1, 8, 0, 2 ];
// console.log('menor a mayor', numbers.sort());

/**
 * La expresion a - b devuelve:
 *  * un numero negativo si a es menor que b 
 *  * un numero positivo si a es mayor que b
 *  * y cero si a y b son iguales
 */
// const value = numbers.sort((a, b) => {
//   return a - b;
// });
// console.log(value);

const suma = numbers.reduce((acumulado, valor) => {
  console.log('__________')
  console.log('acumulado: ',  acumulado);
  console.log('valor: ', valor)
  console.log(acumulado + valor)
  return acumulado + valor;
}, 0)

console.log('resultado de reduce: ',  suma)