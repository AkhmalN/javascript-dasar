x += y; // artinya -> x = x + y;
x -= y; // artinya -> x = x - y;
x *= y; // artinya -> x = x * y;
x /= y; // artinya -> x = x / y;
x %= y; // artinya -> x = x % y;



// ==	Membandingkan kedua nilai apakah sama (tidak identik).
// !=	Membandingkan kedua nilai apakah tidak sama (tidak identik).
// ===	Membandingkan kedua nilai apakah identik.
// !==	Membandingkan kedua nilai apakah tidak identik.
// >	Membandingkan dua nilai apakah nilai pertama lebih dari nilai kedua.
// >=	Membandingkan dua nilai apakah nilai pertama lebih atau sama dengan nilai kedua.
// <	Membandingkan dua nilai apakah nilai pertama kurang dari nilai kedua.
// <=	Membandingkan dua nilai apakah nilai pertama kurang atau sama dengan nilai kedua.
// &&	Operator dan (and). Logika akan menghasilkan nilai true apabila semua kondisi terpenuhi (bernilai true).
// ||	Operator atau (or). Logika akan menghasilkan nilai true apabila ada salah satu kondisi terpenuhi (bernilai true).
// !  Operator tidak (not). Digunakan untuk membalikkan suatu kondisi.


const aString = '10';
const aNumber = 10

console.log(aString == aNumber) // true, karena nilainya sama-sama 10
console.log(aString === aNumber) // false, karena walaupun nilainya sama, tetapi tipe datanya berbeda
