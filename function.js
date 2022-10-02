function greeting(name, language) {
   if (language === "English") {
      console.log(`Good Morning ${name}!`);
   } else if (language === "French") {
      console.log(`Bonjour ${name}!`);
   } else {
      console.log(`Selamat Pagi ${name}!`);
   }
}

greeting("Harry", "French");


function greeting(name, language) {
   if (language === "English") {
      return `Good Morning ${name}!`
   } else if (language === "French") {
      return `Bonjour ${name}!`;
   } else {
      return `Selamat Pagi ${name}!`;
   }
}
let greetingMessage = greeting("Harry", "French");
console.log(greetingMessage);

// Arrow Function

const myArrowFunc = () => {
   console.log('arrow function pertama')
}

const myArrowFunc2 = () => 'arrow function kedua'

console.log(myArrowFunc2())

myArrowFunc()

const menyapa = (name, language) => {

   if (language === "English") {
      console.log(`Good Morning ${name}!`);
   } else if (language === "French") {
      console.log(`Bonjour ${name}!`);
   } else {
      console.log(`Selamat Pagi ${name}!`);
   }
}
console.log(greeting('Ron', 'English'));


const user = {
   id : 200,
   displayName : 'Ron',
   fullName : 'Ron Harry',
   pay : 200000,
}


const introduce = ({displayName, id, pay}) =>{
   console.log(`hello ${displayName} with ID = ${id} your pay back Rp. ${pay} `);
}

introduce(user)


function exponentsFormula(baseNumber, exponent){
   let result = baseNumber ** exponent
   console.log(`${baseNumber}^${exponent} = ${result} `)
}


// add default value param
function exponentsFormula2(baseNumber2, exponent2 = 3){
   let result2 = baseNumber2 ** exponent2
   console.log(`${baseNumber2}^${exponent2} = ${result2}`)
}

exponentsFormula(2) 
// output 2^undifined

exponentsFormula2(6)



// REST Parameters
//  three consecutive dots (...).
function sum(...numbersInp){
   let resultSum = 0
   for (let numbers of numbersInp){
      resultSum += numbers
   }

   return resultSum;
}



console.log(sum(1,2,3,4,10))

function myRestFunc(parameter1, parameter2, ...parameter3){
   console.log('param 1 : ' + parameter1);
   console.log('param 2 : '+ parameter2);
   console.log('param 3 : ' + parameter3);
}

myRestFunc('param ke-1', 'param ke-2', 1,2,3,4)


// function declaration
// function sayHello(greet) {
//    console.log(`${greet}!`);
// }

// // function expression
// const sayName = function (name) {
//    console.log(`Nama saya ${name}`)
// }

// const sayName = (name) => {
//    console.log(`Nama saya ${name}`)
// }

// sayName("Leia");

// // satu parameter bisa tidak menggunakan tanda kurung

// const sayName = name => {
//    console.log(`Nama saya ${name}`)
// }

// sayName("Leia");


// const sayHello = () =>{
//    console.log('hello bos');
// }

// with Param
const sayName = name => console.log(`Nama saya ${name}`);
sayName("Leia");


// without param
const sayHello = () => console.log("Selamat pagi semuanya!");
sayHello();


// with 2 param
const multiply = (a, b) => a * b;
console.log(multiply(3, 4));



// event terjadi pada html

// document.addEventListener('click', function (){
   
// })

(function (){
   console.log('function ini berjalan otomatis')
})()


// parameter with spread operator 

function functionGue({param1 = 1, param2} = {}){
   console.log(`param 1 : ${param1}, param 2 : ${param2} `)
}

console.log(functionGue())

console.log(functionGue({
   param1 : 'param ke 1',
   param2 : 'param ke 2',
}))


const test = function(){
   
}

