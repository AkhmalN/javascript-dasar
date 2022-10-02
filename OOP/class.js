//                   TEST CODE OOP week 6
// use arr and method filter
// class Mail {
//    constructor() {
//       this.from = 'mall@gmail.com';
//       this.contacts = [];
//       this.username = [];
//       // this.yourOtherProperty = 'the values';
//    }
//    sendMessage(msg, to, Uname) {
//       console.log(`you send: ${msg} to ${to} from ${this.from}`);
//       this.contacts.push(to);
//       this.username.push(Uname) // menyimpan kontak baru
//    };
// }


// const mail = new Mail()
// mail.sendMessage('hallo apakabar', 'test@gmail.com', 'donald')
// mail.sendMessage('hallo apakabar', 'account1@gmail.com', 'razor')
// mail.sendMessage('hallo apakabar', 'account2@gmail.com', 'rick')



// const filteringUName = mail.username.filter(wordName => 
//    wordName.includes('a')
// )

// const filteringContact = mail.contacts.filter(word => 
//    word.includes('acc')
// )

// console.log(filteringContact)
// console.log(filteringUName)


class WaMessage{
   constructor(){
      this.nameUser = 'akhmal'
      this.phoneUser = '083845708457'
      this.emailUser = 'test@gmail.com'
      this.arraySending = []
   }
   sendingMessage(descMessage, phoneNumber, emailTo){
      console.log(`you send message to ${phoneNumber}, message : ${descMessage}`)
      this.arraySending.push(phoneNumber, emailTo, descMessage)
   }
}

const datMessage = new WaMessage()

datMessage.sendingMessage('hallo', '08976745879', 'testing12@gmail.com')
datMessage.sendingMessage('hallo bro', '089427326531', 'brocode@gmail.com')
