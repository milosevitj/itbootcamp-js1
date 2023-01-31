let request6 = new XMLHttpRequest();
request6.addEventListener("readystatechange", () => {
  // console.log(request6.readyState)
  if (request6.readyState === 4 && request6.status === 200) {
    let data = JSON.parse(request6.responseText); // data = neki js objekat
    console.log(data);
  } else if (request6.readyState === 4) {
    console.log("desila se greska");
  }
});

// request6.addEventListener("readystatechange", function() {
//   // console.log(request6.readyState)
//   if (this.readyState == 4) {
//     console.log(this.responseText);
//   }
// });
request6.open("GET", "https://jsonplaceholder.typicode.com/posts");
request6.send();

// 1
// Uspostaviti konekciju ka endpointu za users resurs: https://jsonplaceholder.typicode.com/users

// 2 Ispisati u konzoli one korisnike čiji website ima domen „.com".

let request = new XMLHttpRequest();

request.addEventListener("readystatechange", () => {
  if (request.readyState === 4 && request.status === 200) {
    let data = JSON.parse(request.responseText);
    data.forEach((el) => {
      if (el.website.includes(".com")) {
        console.log(el);
      }
    });
  } else if (request.readyState === 4) {
    console.log("desila se greska");
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();

// 3 Ispisati korisnike čije ime sadrži reč „Clementin".

request.addEventListener("readystatechange", () => {
  if (request.readyState === 4 && request.status === 200) {
    let data = JSON.parse(request.responseText);
    data.forEach((el) => {
      if (el.name.includes("Clementin")) {
        console.log(el);
      }
    });
  } else if (request.readyState === 4) {
    console.log("desila se greska");
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();

// 4 Ispisati korisnike koji rade u kompaniji čije ime sadrži reč „Group", ili reč „LLC".

request.addEventListener("readystatechange", () => {
  if (request.readyState === 4 && request.status === 200) {
    let data = JSON.parse(request.responseText);
    data.forEach((el) => {
      if (
        el.company.name.includes("Group") ||
        el.company.name.includes("LLC")
      ) {
        console.log(el);
      }
    });
  } else if (request.readyState === 4) {
    console.log("desila se greska");
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();

// 5 Ispisati sve različite gradove u kojima rade ovi korisnici.

request.addEventListener("readystatechange", () => {
  if (request.readyState === 4 && request.status === 200) {
    let data = JSON.parse(request.responseText);

    data.forEach((el) => {
      console.log(el.address.city);
    });
  } else if (request.readyState === 4) {
    console.log("desila se greska");
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();

// 6 Ispisati broj korisnika koji žive na adresi čije su obe vrednosti geografske dužine i geografske širine negativni brojevi.
let zbir = 0;
request.addEventListener("readystatechange", () => {
  if (request.readyState === 4 && request.status === 200) {
    let data = JSON.parse(request.responseText);
    data.forEach((el) => {
      if (el.address.geo.lat < 0 && el.address.geo.lng < 0) {
        zbir++;
      }
    });
    console.log(
      `Ima ${zbir} korisnika koji zive na adresi sa negativnim geografskim dimenzijama`
    );
  } else if (request.readyState === 4) {
    console.log("desila se greska");
  }
});

request.open("GET", "https://jsonplaceholder.typicode.com/users");
request.send();

////////// CALL BACK ///////////////

let getUsers = (resolve, reject) => {
  let request = new XMLHttpRequest();
  request.addEventListener("readystatechange", () => {
    if (request.readyState === 4 && request.status === 200) {
      let data = JSON.parse(request.responseText);
      resolve(data);
    } else if (request.readyState === 4) {
      reject("Desila se greska");
    }
  });
  request.open("GET", "https://jsonplaceholder.typicode.com/users");
  request.send();
};

let ispisKonzola = (poruka) => {
  console.log(poruka);
};

// Zadatak 2
let websiteCom = (niz) => {
  niz.forEach((user) => {
    // for(let i = 0; i < niz.length; i++) { let user = niz[i]; }
    if (user.website.includes(".com")) {
      console.log(user.website);
    }
  });
};
getUsers(websiteCom, ispisKonzola);

// Zadatak 3
let imeClementin = (niz) => {
  niz.forEach((user) => {
    if (user.name.includes("Clementin")) {
      console.log(user.name);
    }
  });
};
getUsers(imeClementin, ispisKonzola);

// Zadatak 4
getUsers(
  (niz) => {
    niz.forEach((user) => {
      if (
        user.company.name.includes("Group") ||
        user.company.name.includes("LLC")
      ) {
        console.log(user.company.name);
      }
    });
  },
  (poruka) => {
    document.body.innerHTML += poruka;
  }
);
