//////////////
// closures
/////////////

// const generateFunc = () => {
//   const userName = 'Sabri';
  
//   const showName = () => { 
//     console.log(`Hola ${userName}`); 
//     return userName;
//   }

//   return showName;
// };

// // console.log(); // () => console.log(`Hola ${name}`)

// const myFunc = generateFunc(); // 

// // console.log(myFunc)
// myFunc() // Ejecutamos myFunc === ejecutar showName();

//////////////
// objectos
/////////////

// const persona = {
//   name: 'Leo Messi',
//   age: 36,
//   clubs: ['Barcelona', 'PSG', 'Inter Miami'],
//   isRetired: false,
//   champs: {
//     championsLeague: true,
//     americCup: true,
//     worldCup: true
//   }
// };

// console.log('Persona: ', persona);
// console.log('Persona nombre', persona.name);
// console.log('Clubes', persona['clubs']);
// console.log('Has world cup? ', persona.champs.worldCup);
// console.log('Clubs', persona.clubs[0]);

// persona.nationalClub = 'Argentina';

// console.log(persona);

const personaV2 = {
  name: 'Leo Messi',
  age: 36,
  clubs: ['Barcelona', 'PSG', 'Inter Miami'],
  isRetired: false,
  champs: {
    championsLeague: true,
    americCup: true,
    worldCup: true
  },
  saludar: function () {
    console.log(`Hola, soy ${this.name} y mi club es ${personaV2.clubs[2]}`);
  },

};

// personaV2.saludar();

/// Metodos de objetos

// Entries

const entries = Object.entries(personaV2);

// console.log('entries:', entries[0]);

const values = Object.values(personaV2);

// console.log('value', values);

const keys = Object.keys(personaV2);

// console.log('keys: ', keys);

//////////
// Spread
//////////

const carrito1 = ['Remera', 'Pantalon'];
const carrito2 = ['Gorra', 'buzo'];

const nuevoCarrito = [...carrito2, ...carrito1, ]; 

// console.log('Nuevo carrito', nuevoCarrito)

const messiCommon = { club: [ 'Barcelona', 'PSG', 'Miami' ], age: 36 };
const messiExtraData = { champs: [ 'Champions', 'World Cup'] };
const messiExtraDataV2 = { age: 37, city: 'Miami' };

// const messi = { ...messiCommon, ...messiExtraData, ...messiExtraDataV2 };
// console.log(messi);

///////////////////
// Rest  operator//
///////////////////

// function showData(...data) {

//   console.log(data)

//   for(const value of data) {
//     console.log(value);
//   }
// }

// showData(1, 2, 3, 4, 5, 'hola como va?');

function sum(...numbers) {
  let total = 0;

  for (const number of numbers) {
    total = total + number;
  }

  console.log('El total que obtuve de todos los args que me pasaste fue: ', total);
}

// sum(1,2,3,4,5, 200);


/////////////
// Desestructuracion
//////////////

const arrayOfNumber = [1, 2, 3, 4];
const [one, two, ...rest] = arrayOfNumber;

console.log('one: ', one);
console.log('two: ', two);
console.log('rest: ', rest);

const oneV2 = arrayOfNumber[0];
const twoV2 = arrayOfNumber[1];

console.log('onev2:', oneV2);

const messi = { ...messiCommon, ...messiExtraData, ...messiExtraDataV2 };

const { age, champs, city, club } = messi; // good

console.log(age, champs, city, club);

const age2 = messi.age; // no tan bien