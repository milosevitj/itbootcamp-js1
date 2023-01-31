// dohvati sve one cije je polje priority
// db.collection("tasks")
//   .where("priority", "==", true)
//   .get()
//   .then((snapshot) => {
//     snapshot.forEach((doc) => {
//       console.log("Uspesno skinut dokument:" + doc.id);
//       console.log(doc.data());
//     });
//   })
//   .catch((e) => {
//     console.log("greska" + e);
//   });

//Treba da se izvrše u tekućoj godini,

let datum = new Date();
let godina = datum.getFullYear();
let datum1 = new Date(godina, 0, 1); // 1. januar tekuce godine
let datum2 = new Date(godina + 1, 0, 1); //1. januar sledece godine
let ts1 = firebase.firestore.Timestamp.fromDate(datum1); //2023,12,1
let ts2 = firebase.firestore.Timestamp.fromDate(datum2); //2024,12,1

db.collection("tasks")
  .where("due_date", ">=", ts1)
  .where("due_date", "<", ts2)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log("Uspesno skinut dokument:" + doc.id);
      console.log(doc.data());
    });
  })
  .catch((e) => {
    console.log("greska" + e);
  });

//Su završeni

let sadDatum = new Date();
console.log(sadDatum);
let d = firebase.firestore.Timestamp.fromDate(sadDatum);

db.collection("tasks")
  .where("due_date", "<", d)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log("Uspesno skinut dokument:" + doc.id);
      console.log(doc.data());
    });
  })
  .catch((e) => {
    console.log("greska" + e);
  });

// Tek treba da počnu.

db.collection("tasks")
  .where("start_date", ">", d)
  .get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      console.log("Uspesno skinut dokument:" + doc.id);
      console.log(doc.data());
    });
  })
  .catch((e) => {
    console.log("greska" + e);
  });
