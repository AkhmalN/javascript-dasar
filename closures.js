function outerFunc(outervariable){
   return function innerfunc(innerVariable){
      console.log('outer variable', outervariable);
      console.log('inner variable' , innerVariable);
   }
}

const myFunction = outerFunc('outside')
