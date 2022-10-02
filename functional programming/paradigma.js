// gaya penulisan kode imperatif Di mana proses pengisian nilai array baru (newNames) berdasarkan array lama (names) dilakukan secara manual


const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = [];

for (let i = 0; i < names.length; i++) {
   newNamesWithExcMark.push(`${names[i]}!`);
}

console.log(newNamesWithExcMark);



// tentu ini jauh lebih mudah dibaca dan ringkas. Yap! Inilah yang disebut dengan gaya deklaratif. Kita tidak perlu pusing untuk memikirkan cara manual untuk mencapai sebuah tujuan. 

const names = ['Harry', 'Ron', 'Jeff', 'Thomas'];

const newNamesWithExcMark = names.map((name) => `${name}!`);

console.log(newNamesWithExcMark);