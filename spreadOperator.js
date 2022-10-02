const favorites = ["Seafood", "Salad", "Nugget", "Soup"];

console.log(favorites);
console.log(...favorites);

// Spread operator bekerja seperti meleburkan nilai array menjadi beberapa elemen sesuai panjang nilai array-nya. 

// Sama seperti kita menuliskan kode seperti ini:
console.log(favorites[0], favorites[1], favorites[2], favorites[3]);

// Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru. Jika tidak menggunakan spread operator ini maka hasilnya akan seperti ini:

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];
const allFavorites = [favorites, others];

console.log(allFavorites);

/* output
[
  [ 'Seafood', 'Salad', 'Nugget', 'Soup' ],
  [ 'Cake', 'Pie', 'Donut' ]
]
*/

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...favorites, ...others];

console.log(allFavorites);

/* output
[ 'Seafood', 'Salad', 'Nugget', 'Soup', 'Cake', 'Pie', 'Donut' ]
*/



const namePerson = ['sasa', 'selby', 'richard', 'junio']
const agePerson = [20,21,22,20]

const obj1 = {namePilot : 'skywalker', age : 26}
const obj2 = {namePilot : 'lukewalker' , age : 26}

const profile = {...namePerson, ...agePerson}
const allobj = { ...obj1, ...obj2}


console.log(profile);
console.log(allobj);