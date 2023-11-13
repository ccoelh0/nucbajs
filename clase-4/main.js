//////// Funciones

function hello() {
  // nuestro codigo
  const message = 'hello'
  console.log(message);
}

// hello();

function sum() {
  let num1 = 7;
  let num2 = 1;

  const result = num1 + num2;

  console.log('result ->', result);
}

// sum();

/////// Parametros

function greeting(x) {
  console.log(`Hola ${x}`);
}

// const userName = prompt('Ingresa un nombre');
// greeting(userName);



function greetingV2(userName, age = 18) {
  console.log(`Soy ${userName} y tengo ${age} años`);
}

// greetingV2('Agustin', 25);


////// Return

function sumV3(num1, num2) {
  // console.log(num1 + num2)
  return num1 + num2;
}

// const result = sumV3(1, 2);

// console.log('Result =>', result);

function checkNumber(num) {
  const check = 10;

  if (num > check) {
    return;
  }

  console.log(`El numero es menor a ${check}`);
  return true;
}

// const val = prompt('Ingresa num')

// console.log(checkNumber(val))


function multiplicarV3(num1, num2) {
  return num1 * num2;
}

function sumarV3(num1, num2) {
  return num1 + num2;
}

// const valMultiplicacion = multiplicarV3(2, 3); 
// const valSuma = sumarV3(valMultiplicacion, 6)

// console.log('Suma resultado -> ', valSuma);


//////// Funciones flecha

const arrowFunc = () => {
  // todo nuestro codigo
  console.log('Hola, soy una funcion flecha');
}

// arrowFunc();

const arrowFuncV2 = () => 'Hola, soy una funcion flecha v2';

// console.log(arrowFuncV2());

const sumV4 = (a, b) => a + b;

// const value = sumV4(4, 8);

// console.log('return implicito', value)


//////// Recursividad


const cuentaParaAtras = (numero) => {
  if (numero <= 0) {
    console.log('El numero es igual o menor a cero');
    return numero;
  }

  console.log('El numero todavia no es cero', numero);

  return cuentaParaAtras(numero - 1);
}

// const value = cuentaParaAtras(10);

// console.log('Resultado final >', value);


// Callbacks

// const alertHola = (nombre) => {
  // return alert(`Hola ${nombre}`);
// };

// const consoleHola = (nombre) => {
//   console.log(`Hola ${nombre}`)
//   return false;
// };

// // consoleHola('Agus')

// const procesarEntrada = (callback) => {
//   console.log('Esto es lo que le paso entre parentesis ->', callback);

//   const nombre = prompt('Por favor ingresa tu nombre');

//   callback(nombre);
// };

// procesarEntrada(
//   consoleHola
// )

const sumaV5 = (a, b) => a + b;
const multiplicarV4 = (a,b) => a * b;

const main = (callback) => {
  let valor1 = prompt('Ingrese un numero');
  let valor2 = prompt('Ingrese valor 2');

  valor1 = Number(valor1);
  valor2 = Number(valor2);

  const result = callback(valor1, valor2);

  console.log("result", result);
}

main(multiplicarV4);
