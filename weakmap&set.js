let visitCountMap = new Map()

function countUser(user){
   let count = visitCountMap.get(user) || 0
   visitCountMap.set(user, count +1)
}


let mhs = {name : 'jonas'}

countUser(mhs)

setTimeout(() =>{
   console.log(visitCountMap)
}, 10000)

