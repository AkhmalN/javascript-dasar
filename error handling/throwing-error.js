const json = ' {"name" : "luke", "age" : 20} '


try {
   
   let user = JSON.parse(json)

   console.log(user.name);
   console.log(user.age);

} catch (error) {
   console.log(error.name);
   console.log(error.message);
}


const json2 = '{bad json}'

try {
   
   let user2 = JSON.parse(json2)
   console.log(user2.name);
   console.log(user2.age);


} catch (error) {
   
   console.log(error.name);
   console.log(error.message);

}

const json3 = ' {"age" : 20} '

try {
   let user3 = JSON.parse(json3)

   if(!user3.name)


} catch (error) {
   
}