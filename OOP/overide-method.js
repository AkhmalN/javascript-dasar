

class Shape{
   Paint(){
      console.info('paint Shape!')
   }
}

class Circle extends Shape{
   Paint(){
      super.Paint()
      console.info('paint circle')
   }
}

const circle = new Circle()
circle.Paint( )




// class Mail {
//    constructor(author) {
//       this.from = author;
//       this._contacts = [];
//    }
//    sendMessage(msg, to) {
//       console.log(`you send: ${msg} to ${to} from ${this.from}`);
//       this._contacts.push(to);
//    }
//    showAllContacts() {
//       return this._contacts;
//    }
// }

// class WhatsApp extends Mail {
//    constructor(username, isBussinessAccount, phoneNumber) {
//       super(phoneNumber);
//       this.username = username;
//       this.isBussinessAccount = isBussinessAccount;
//    }
//    myProfile() {
//       return `my name ${this.username}, is ${this.isBussinessAccount ? 'Business' : 'Personal'}`;
//    }
// }

// const wa1 = new WhatsApp('dicoding', true, '6281111111');
// console.log(wa1.from);