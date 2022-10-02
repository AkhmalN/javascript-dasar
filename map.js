// MAP


const myMap = new Map([
   ['1' , 'a string key'],
   [1, 'a number key']
])

const capital = new Map([
   ['jakarta', 'indonesia'],
   ['inggris', 'london'],
   ['turki', 'ankara'],
   ['jakarta', 'indonesia']
])



// console.log(capital.size);
// console.log(capital.get('turki'))
// console.log(capital.set('india', 'new delhi'))

// console.log(myMap)


// SET

const numberSet = new Set([1,2,2,1,4,5,6])
numberSet.add(6)
numberSet.add(8)


console.log(numberSet)
numberSet.delete(8)
console.log(numberSet)