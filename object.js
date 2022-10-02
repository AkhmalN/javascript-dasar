// object

const user = {
   firstName: "Luke",
   lastName: "Skywalker",
   age: 19,
   isJedi: true,
};

console.log(`Halo, nama saya ${user.firstName} ${user.lastName}`);
console.log(`Umur saya ${user.age} tahun`);


// Array
let myArray = ["Cokelat", 42.5, 22, true, "Programming"];
console.log(myArray);
console.log(myArray[1]);
console.log("Panjang nilai myArray adalah " + myArray.length + ".");

// menambkan elemen di akhir array 
myArray.push('JavaScript');
console.log(myArray);

// pop mengeluarkan elemen terakhir dari array
myArray.pop();

// shift mengeluarkan array yg paling depang
console.log(myArray);
myArray.shift();
// unshift menambhakan array didepan
myArray.unshift("Apple");

console.log(myArray);

// hapus isi array tapi tempat isi yg dihapus menjadi kosong
delete myArray[1];

// Untuk menghapus elemen, gunakan metode splice() 