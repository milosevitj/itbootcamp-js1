// DELETE
db.collection("customers")
  .doc("cust001")
  .delete()
  .then(() => {
    console.log("dokument uspesno izbrisan");
  })
  .catch((err) => {
    console.log("Desila se greska" + err);
  });

// dodavanje dokumenta u kolekciju preko metode add()
// .set se dodaje kod .doc a .add kod kolekcije

db.collection("customers")
  .add({
    name: "Mika Mikic",
    age: 25,
    salary: 800,
    addresses: ["Beograd", "Novi Sad"],
  })
  .then(() => {
    console.log("dokument uspesno dodat");
  })
  .catch((err) => {
    console.log("Desila se greska" + err);
  });

// / 1)Moze se dohvatiti jedan dokument
// / 2) Moze se dohvatiti vise dokumenata
// 1)
db.collection("users")
  .doc("vristic")
  .get()
  .then((doc) => {
    if (doc.exists) {
      let data = doc.data();
      console.log("Uspesno skinut dokument:" + doc.id); // doc.id = id dokumenta
      console.log(data);
    } else {
      console.log("Ne postoji dati dakomunet");
    }
  })
  .catch((err) => {
    console.log("Desila se greska" + err);
  });

// 2)
db.collection("customers")
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

// GET metoda kod kolekcija
// / 1) Prikazivanje dokumenata u odredjenom redosledu (orderBy)
// / 2) Prikazivanje odredjenog broja dokumenata (limit) = prvih tpliko
// / 3) Prikazivanje dokumenata koji adovaljavaju odredjene kriterijume - filtriranje (where)

// 1) orderBy
db.collection("customers")
  .orderBy("salary", "desc")
  .orderBy("name", "asc")
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

// 2) limit
db.collection("customers")
  .orderBy("salary", "desc")
  .orderBy("name", "asc")
  .limit(1)
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

// 3) where
db.collection("customers")
  //   .where("salary", ">=", 500) //svi oni cija je plata veca ili = od 500
  //   .where("salary", "<=", 600) //svi oni cija je plata manja ili = od 600
  //   .where("name", "in" , ["Laza, Mika"])
  .where("name", ">=", "M")
  .where("name", "<", "N")
  .orderBy("name")
  //   .orderBy("age") trazice da se kreirara index
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

db.collection("customers")
  .orderBy("name", "asc")
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

// Imaju adresu u Nišu,
db.collection("customers")
  .where("addresses", "array-contains", "Nis")
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

// Imaju platu veću ili jednaku od 500,
db.collection("customers")
  .where("salary", ">=", 500)
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

// Imaju platu između 300 i 800,

db.collection("customers")
  .where("salary", ">=", 300)
  .where("salary", "<=", 800)
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

// Imaju platu manju od 900, i imaju 30 godina, ????

db.collection("customers")
  .where("salary", "<", 900)
  .where("age", "==", 30)
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

// Imaju adresu u Nišu ili Beogradu,

db.collection("customers")
  .where("addresses", "array-contains-any", ["Nis", "Beograd"])
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

// Imaju 22, 25 ili 28 godina.

db.collection("customers")
  .where("age", "in", [22, 25, 38])
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
