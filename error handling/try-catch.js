// keyword error handling 
// 1. error.name
// 2. error.message
// 3. error.stack

try {
   console.log('succses code');
   errorCode
} catch (error) {
   console.log(error.name);
   console.log(error.message);
   console.log(error.stack);
}


try {
   console.log('awal blok try');
   console.log('akhir blok try');
} catch (error) {
   console.log('error');
   // diabaikan
}finally{
   console.log('akan tetap di eksekusi');
}
