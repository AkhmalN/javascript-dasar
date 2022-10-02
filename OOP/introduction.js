const mail = {
   from: "pengirim@dicoding.com",
   sendMessage: function (msg, to) {
      console.log(`you send: ${msg} to ${to} from ${this.from}`);
   }
};

console.log(mail.from);
mail.sendMessage('apakabar', 'penerima@dicoding.com');



const waMsg = {
   fromMsg : "unkown person",
   sendMsg : function(Msg, toMsg){
      console.log(`you send Message : ${Msg} to ${toMsg} `)
   }
}

waMsg.sendMsg('hallo apakabar', '@akhmalkliah01@gmail.com')