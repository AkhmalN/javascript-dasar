const isRaining = true;

console.log("Persiapan sebelum berangkat kegiatan.");
if (isRaining) {
   console.log("Hari ini hujan. Bawa payung.");
}
console.log("Berangkat kegiatan.");


let x = 50;

if (x > 70) {
   console.log(x);
} else {
   console.log("Nilai kurang dari 70");
}

let language = "French";
let greeting = "Selamat Pagi"
let namePerson = "freddrick"

if (language === "English") {
   greeting = "Good Morning!";
   namePerson = "johnson";
} else if (language === "French") {
   greeting = "Bonjour!"
   namePerson = "lucas";
} else if (language === "Japanese") {
   greeting = "Ohayou Gozaimasu!"
   namePerson = "bale";
}

console.log(greeting);
console.log(namePerson);


// Ternary Operator
const isMember = false;
const discount = isMember ? 0.1 : 0;
console.log(`Anda mendapatkan diskon sebesar ${discount * 100}%`)

// Truthy & Falsy

// Number 0
// BigInt 0n
// String kosong seperti “” atau ‘’
// null
// undefined
// NaN, atau Not a Number

let myname = "";

if (myname) {
   console.log(`Halo, ${myname}`);
} else {
   console.log("Nama masih kosong");
}



// Switch case

let mylanguage = "French";
let mygreeting = null;

switch (mylanguage) {
   case "English":
      mygreeting = "Good Morning!";
      break;
   case "French":
      mygreeting = "Bonjour!";
      break;
   case "Japanese":
      mygreeting = "Ohayou Gozaimasu!";
      break;
   default:
      mygreeting = "Selamat Pagi!";
}

console.log(mygreeting);