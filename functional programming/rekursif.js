// teknik memamnggil dirinya sendiri


// tidak bisa mengolah tree dan array

const countDown = start => {
   do {
      console.log(start)
      start -= 1
   }
   while(
      start>0
   )
}


countDown(10)


// bentuk rekursif
// bisa mengubah tree dan array

const countDown2 = start =>{
   console.log(start)
   if(start>0){
      countDown(start)
   }
}