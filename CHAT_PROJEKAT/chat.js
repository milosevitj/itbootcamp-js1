export class Chatroom {
  constructor(r, u) {
    this.room = r;
    this.username = u;
    this.chats = db.collection("chats");
  }
  set room(r) {
    this._room = r;
  }
  get room() {
    return this._room;
  }

  set username(u) {
    if (u.length >= 2 && u.length <= 10 && u.trim() !== "") {
      this._username = u;
    } else {
      alert("Korisnicko ime nije validno");
    }
  }
  get username() {
    return this._username;
  }
  // dodavanje poruke
  async addChat(message) {
    let date = new Date();
    let docChat = {
      message: message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(date),
    };
    let response = await this.chats.add(docChat); // cuvanje dokumenata u db
    // await=sacekaj trenutak izvrsenja
    return response; // return je promise koji vracamo i od njega mozemo potrazivati .then i .catch
  }

  // Pracenje poruka u bazi i ispis dodatih poruka

  getChats(callback) {
    this.chats.onSnapshot((snapshot) => {
      // snapshot niz promena
      snapshot.docChanges().forEach((change) => {
        //krecemo se nizom promena
        if (change.type == "added") {
          // zanima nas one koje su added
          // console.log(change.doc.data()); //
          callback(change.doc.data());
        }
      });
    });
  }

  // getChats(cb) {
  //   db.collection("chats")
  //     .where("room", "==", this.room)
  //     .orderBy("created_at", "desc")
  //     .onSnapshot((snapshot) => {
  //       let changes = snapshot.docChanges();
  //       changes.forEach((change) => {
  //         console.log("promena u bazi", change.doc.data());
  //         // let type = change.type;
  //         // let doc = change.doc;
  //         if (change.type == "added") {
  //           cb("Dodat dokument", change.doc.data());
  //         }
  //       });
  //     });
  // }
}

// let chatroom1 = new Chatroom("#general", "kaca");
// console.log(chatroom1.username, chatroom1.room);
// console.log(chatroom1.chats);

// let chatroom2 = new Chatroom("#general", "Milena");
// chatroom2
//   .addChat("Imamo gostovanje")
//   .then(() => {
//     console.log("Uspesno dodat cet");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// chatroom2.getChats((data) => {
//   console.log(data);
// }); // pozivam funkicju callback
