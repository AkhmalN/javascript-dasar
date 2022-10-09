const orderCoffe = callback => {
   let coffe = null

   console.log('sedang membuat coffe , silahkan tunggu')

   setTimeout(()=>{
      coffe = 'coffe sudah jadi'
      callback(coffe)
   }, 3000)
}


orderCoffe(coffe => {
   console.log(coffe)
})



const orderFood = callback => {
   let food = null

   console.log('wait a minute, food has been cooking')

   setTimeout(()=> {
      food = 'makanan sudah jadi'

      callback(food)
   }, 4000)
}


orderFood(food => {
   console.log(food)
})