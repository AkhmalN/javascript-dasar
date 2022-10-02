// Fungsi tersebut tidak bisa dikatakan pure function karena ia membutuhkan nilai yang berada di luar dari fungsinya, yakni nilai PI. Bila nilai PI berubah, maka penggunaan fungsi menghasilkan nilai yang berbeda walaupun diberikan nilai parameter yang sama.

let PI = 3.14;

const hitungLuasLingkaran = (jariJari) => {
   return PI * (jariJari * jariJari);
}

console.log(hitungLuasLingkaran(4));



const hitungLuasLingkaran = (jariJari) => {
   return 3.14 * (jariJari * jariJari);
}

//  Dengan memindahkan nilai PI secara konstan di dalam fungsi, maka dapat dipastikan nilai tersebut tidak akan berubah atau tak sengaja diubah. Dengan begitu fungsi selalu menghasilkan nilai yang sama bila nilai parameter yang diberikan sama. 

// contoh pure function 
const createPersonWithAge = (age, person) => {
   return { ...person, age };
};

const person = {
   name: 'Bobo'
};

const newPerson = createPersonWithAge(18, person);

console.log({
   person,
   newPerson
});




// IMMUTABILITY

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log({
   names,
   newNamesWithExcMark,
});



// Lantas, bagaimana bila kita benar-benar perlu mengubah nilai dari sebuah objek? Contohnya seperti ini:

const user = {
   firstname: 'Harry',
   lastName: 'Protter', // ups, typo!
}

const renameLastNameUser = (newLastName, user) => {
   user.lastName = newLastName;
}

renameLastNameUser('Potter', user);

console.log(user);


// => penerapan FP
const user = {
   firstname: 'Harry',
   lastName: 'Protter', // ups, typo!
}

const createUserWithNewLastName = (newLastName, user) => {
   return { ...user, lastName: newLastName }
}

const newUser = createUserWithNewLastName('Potter', user);

console.log(newUser);