console.log(db); // db je objekat baze podatka

//PRISTUP KOLEKCIJI
let users = db.collection("users");
console.log(users);

//PRISTUP DOKUMENTU
let user1 = users.doc("jmatejic");
console.log(user1);

//PRISTUP DOKUMENTU DIREKNTO IZ BAZE
let user2 = db.doc("users/sstanimirovic");
console.log(user2);

/*
Kada pikiramo dokument preko ovih komandi, mozemo da izvrsimo jednu od4 osnovne operacije:
CRUD(Create, Read, Update, Delete)
CREATE: doc.set(...)
READ: doc.get(...)
UPDATE: doc.update(...)
DELETE: doc.delete(...)
Sve cetiri metode kao rezultat vracaju Promise!
=> Mozemo da lancamo .then() i .catch() na bilo koju od 4 metode
*/

//CREATE
db.collection("customers")
  .doc("cust001") // ako ostavimo prazne zagrade automatski ce da izgenerise ID dokumenta
  .set({
    name: "Laza Lazic",
    age: 35,
    adresses: ["Beograd", "Cacak"],
    salary: 400,
  })
  .then(() => {
    console.log("uspesno dodata musterija");
  })
  .catch((err) => {
    console.log("greska:" + err);
  });
console.log(1);
console.log(2);

db.collection("customers")
  .doc("cust001") // ako ostavimo prazne zagrade automatski ce da izgenerise ID dokumenta
  .set(
    {
      height: 185,
    },
    {
      merge: true, //dodati
    }
  )
  .then(() => {
    console.log("uspesno dodata musterija");
  })
  .catch((err) => {
    console.log("greska:" + err);
  });
console.log(1);
console.log(2);

db.collection("customers")
  .doc("cust002")
  .set({
    name: "Pera Peric",
    age: 38,
    adresses: ["Jagodina", "Nis"],
    salary: 500,
  })
  .then(() => {
    console.log("uspesno dodat drugi korisnik");
  })
  .catch((err) => {
    console.log("Desila se greska" + err);
  });

let datum1 = new Date("2022-01-26 19:00:00");
let datum2 = new Date("2022-02-26 21:00:00");

// Add a new document in collection "tasks"
db.collection("tasks")
  .doc("fudbal")
  .set(
    {
      title: "Fudbal",
      start_date: firebase.firestore.Timestamp.fromDate(datum1),
      due_date: firebase.firestore.Timestamp.fromDate(datum2),
      priority: false,
      description: "Fudbalica sa drustvom",
    },
    { merge: true }
  )
  .then(function () {
    console.log("Task successfully added!");
  })
  .catch(function (error) {
    console.error("Error adding task: ", error);
  });
let datum3 = new Date("2021-03-15 19:00:00");
let datum4 = new Date("2021-03-15 21:00:00");
//TASK
db.collection("tasks")
  .doc("plivanje")
  .set({
    title: "Plivanje",
    start_date: firebase.firestore.Timestamp.fromDate(datum3),
    due_date: firebase.firestore.Timestamp.fromDate(datum4),
    priority: true,
    description: "Plivanje",
  })
  .then(() => {
    console.log("I ovaj task je dodat");
  })
  .catch((err) => {
    console.log("greska" + err);
  });
//USER
db.collection("users")
  .doc("Cetvrti user")
  .set({
    name: "Mika",
    surname: "Mikic",
    username: "mm",
    age: 29,
  })
  .then(() => {
    console.log("Mika je dodat u usere");
  })
  .catch((err) => {
    console.log("greska" + err);
  });

//miki dodaj nesto
db.collection("users")
  .doc("Cetvrti user")
  .set(
    {
      height: 200,
    },
    {
      merge: true,
    }
  )
  .then(() => {
    console.log("Miki je dodata visina");
  })
  .catch((err) => {
    console.log("greska" + err);
  });

/// UPDATE metoda
db.collection("users")
  .doc("vristic")
  .update({
    godine: 22,
    adresa: ["Nis", "Beograd"],
  })
  .then(() => {
    console.log("korisnik uspesno promenjen");
    return db
      .collection("users")
      .doc("vristic")
      .update({
        adresa: firebase.firestore.FieldValue.arrayUnion("Leskovac"),
      });
  })
  .then(() => {
    console.log("korisnik uspesno promenjen");
  })
  .catch((err) => {
    console.log(err);
  });
