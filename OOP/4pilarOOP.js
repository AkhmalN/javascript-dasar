// Encapsulation
// Enkapsulasi adalah kondisi di mana attribute atau method di dalam class dibungkus dan bersifat privat. Artinya objek lain tidak bisa mengakses atau mengubah nilai dari property secara langsung. Pada contoh kasus Mail kita tidak bisa langsung mengubah daftar contact, namun kita bisa menambahkannya melalui fungsi saat kirim pesan atau mengambil data tersebut melalui method showAllContacts.
// class Mail {
//    constructor(author) {
//       this._contacts = [];
//       this.from = author;
//    }
//    sendMessage = function (msg, to) {
//       console.log('you send:', msg, 'to', to, 'from', this.from);
//       this._contacts.push(to);
//    }
//    showAllContacts() {
//       return this._contacts;
//    }
// }

// Abstraction
// Abstraksi bisa dibilang merupakan penerapan alami dari enkapsulasi. Abstraksi berarti sebuah objek hanya menunjukkan operasinya secara high-level. Misalnya kita cukup tahu bagaimana pesan dikirim atau diterima, namun kita tidak perlu tahu seperti apa proses enkripsi dan dekripsi isi pesan, atau bagaimana sebuah daftar contact dapat bertambah.

// inheritance
// Beberapa objek bisa memiliki beberapa karakteristik atau perilaku yang sama, tetapi mereka bukanlah objek yang sama. Di sinilah inheritance atau pewarisan berperan. SMS dan jenis pesan lainnya memiliki karakteristik umum yang dimiliki juga oleh jenis pesan lainnya, seperti memiliki konten pesan, alamat/nomor pengirim, alamat/nomor penerima, dsb. Maka dari itu, Email sebagai objek turunan (subclass) mewarisi semua sifat dan perilaku dari objek induknya (superclass) Mail. Begitu juga dengan objek Whatsapp juga mewarisi sifat dan perilaku yang sama. Namun, whatsapp bisa membuat grup, mengirim broadcast message sedangkan Email tidak.


// cara 1: menggunakan keyword `extends` jika menggunakan statement `class`
// class ChildClassName extends ParentClassName { }


// cara 2: menggunakan `prototype` jika menggunakan statement `function` / `class`
// ChildClassName.prototype = new ParentClassName()

class Mail {
   constructor(author) {
      this.from = author;
      this._contacts = [];
   }
   sendMessage(msg, to) {
      console.log(`you send: ${msg} to ${to} from ${this.from}`);
      this._contacts.push(to);
   }
   showAllContacts() {
      return this._contacts;
   }
}

class WhatsApp extends Mail {
   constructor(author) {
      super(author);
      this.username = 'dicoding';
      this.isBussinessAccount = true;
   }
   myProfile() {
      return `my name ${this.username}, is ${this.isBussinessAccount ? 'Business' : 'Personal'}`;
   }
}

const wa1 = new WhatsApp('080111000222');
console.log(wa1.myProfile());