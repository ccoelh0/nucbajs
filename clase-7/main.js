// LENGTH

// const hello = 'Hola, como estas?';

// console.log(hello);
// console.log("hello lenght ->",  hello.length);


// TOUPPERCASE / TOLOWERCASE

// console.log('toUppercase ->', hello.toUpperCase());
// console.log('toLowerCase ->', hello.toLowerCase());

// REPLACE

// const helloFran = hello.replace('Dario', 'Fran');
// console.log('hello v1 ->', hello)
// console.log('hhelo v2 ->', helloFran);

// const helloV3 = hello.replaceAll('Hola', 'Hello');
// console.log('hello v3 -> ', helloV3);

// const helloV4 = hello.replace('hola', 'hello');  // case-sensitive

// console.log({ helloV4 });

///////////////////////////////////////////////////////////////////////

// INDEX OF 

const text = 'Hola mundo!'; 
// console.log('Index of de mundo ->', text.indexOf('mundo', 5));


// TRIM()
// const textV2 = '  Holasss!  ';

// console.log(textV2);
// console.log(textV2.trim());

// SPLIT()
const splitResult = text.split('a');
// console.log('splitResult ->', splitResult); // ['Hol', ' mundo']
// console.log(splitResult[0], '|', splitResult[1]);

// TYPEOF

// console.log(typeof text) // string
// console.log(typeof function () {}) // function
// console.log(typeof 1); // number
// console.log(typeof {name: 'Fran'}) // object
// console.log(typeof false) // boolean 

const array = ['some value'];
// console.log(typeof array) // ??????? 
// console.log('is array? -> ', Array.isArray(array))

///////////////////////

// REPEAT

const someName = 'Martin';

// console.log('El nombre repetido n veces ->', someName.repeat(6));

// CHARTAT

// console.log('caracter segun index ->', someName.charAt(0));

// CONCAT

const helloV5 = 'Hola ';

// console.log(helloV5.concat(someName));

const array1 = [helloV5];
const array2 = [someName];

// console.log(array1.concat(array2))

// other example: 

// console.log(array1.concat(array2))
// console.log([...array1, ...array2]);



////////////////////////////

// startsWith() and endsWith
const someNameV2 = 'Lucia';

// console.log('startWith -> ', someNameV2.startsWith('L'));
// console.log('startWith -> ', someNameV2.startsWith('l'));
// console.log('startWith -> ', someNameV2.endsWith('A'));
// console.log('startWith -> ', someNameV2.endsWith('a'));

// includes()

// console.log(someNameV2.includes('a'));
// console.log(someNameV2.includes('p'));
const someArr = [someNameV2];

// console.log(someArr.includes('Lucia'))


const helloV6 = 'Hola Gian';
const foundName = helloV6.slice(5)
const foundNameV2 = helloV6.slice(5, 7);

console.log(foundName);
console.log(foundNameV2);
console.log(helloV6);