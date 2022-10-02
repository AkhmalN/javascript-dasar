const items = [
   { name: 'tya', School: 'SMP', pay: 100 },
   { name: 'Ron', school: 'SMP', pay: 200 },
   { name: 'Mckenzie', school: 'SMA', pay: 150 },
   { name: 'Lucia', school: 'SD', pay: 100 },
   { name: 'Michael', school: 'SMP', pay: 50 },
   { name: 'Luca', school: 'SMA', pay: 100 },
   { name: 'Sahara', school: 'SD', pay: 200 },
   { name: 'Luna', school: 'SMP', pay: 250 },
]

// filter
const filteredPayUnder200 = items.filter((dat) => {
   return dat.pay < 200
})

console.log(filteredPayUnder200)

// map
const mappingItems = items.map((item) => {
   return item['name']
})

console.log(mappingItems)

const mappingPayUnder200 = filteredPayUnder200.map((item) => {
   return item.pay
})

console.log(mappingPayUnder200)

// find

const foundSchool = items.find((item) => {
   return item.school == "SMA"
})

const students = [
   {
      name: 'Harry',
      score: 60,
   },
   {
      name: 'James',
      score: 88,
   },
   {
      name: 'Ron',
      score: 90,
   },
   {
      name: 'Bethy',
      score: 75,
   }
];

const findJames = students.find(student => student.name === 'James');
console.log(findJames);

console.log(foundSchool)

// forEach

const loopForEach = items.forEach((item) => {
   console.log(item)
})

// some = checking Item true or false

const hasInExpensiveItems = items.some((item) => {
   return item.pay > 250
})

console.log(hasInExpensiveItems)


// reduce

const total = items.reduce((curentTotal, item) => {
   return item.pay + curentTotal
}, 0)

console.log(total)


// includes

const includeObj = items.includes('rona', 'SMP', 300)
console.log(items)


// Every
const scores = [70,85,90];
const minimumScore = 65;

const examPassed = scores.every(score => score >= minimumScore);
console.log(examPassed);