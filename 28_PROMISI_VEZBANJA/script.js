let form = document.getElementById("order");
let truckCap = document.getElementById("cap");
let result = document.getElementById("result");

function getItems(resourse, resolve, reject) {
  let request = new XMLHttpRequest();
  request.addEventListener("readystatechange", function () {
    if (request.readyState == 4 && request.status == 200) {
      //sve okej, obradi zahtev
      let data = JSON.parse(request.responseText);
      resolve(data);
    } else if (request.readyState == 4) {
      //desila se neka greska
      reject("Greska");
    }
  });
  request.open("GET", resourse);
  request.send();
}

function sumbitForm1(e) {
  e.preventDefault();
  //1. iz fajla stock.json dohvati sve artikle koji nisu na stanju
  let ids = [];
  getItems(
    "json/stock.json",
    (data) => {
      data.forEach((artikal) => {
        if (artikal.stock == 0) {
          ids.push(artikal.id);
        }
      });
      // 2. Iz fajla weights.json dohvati njihovu tezinu = artikala koji nisu na stanju
      getItems(
        "json/weights.json",
        (data) => {
          let totalWeight = 0;
          data.forEach((artikal) => {
            if (ids.includes(artikal.id)) {
              totalWeight += artikal.weight;
            }
          });
          if (totalWeight > truckCap.value) {
            result.innerHTML = "Kamion nema dovoljni kapacitet";
          } else {
            //3. Ako tezina nije veca od kapaciteta kamiona, iz fajla prices.json dohvati njihovu cenu
            getItems(
              "./json/prices.json",
              (data) => {
                let totalPrice = 0;
                data.forEach((artikal) => {
                  if (ids.includes(artikal.id)) {
                    totalPrice += artikal.price;
                  }
                });
                result.innerHTML = `Ukupna cena proizvoda je ${totalPrice}`;
              },
              (message) => {
                result.innerHTML = message;
              }
            );
          }
        },
        (message) => {
          result.innerHTML = message;
        }
      );
    },
    (message) => {
      result.innerHTML = message;
    }
  );
}
/*
PRVI PRISTUP: da se funkcije getItems() zovu jedna ispod druge
OVO NIJE DOBRO!!!!!!
*/

// DRUGI PRISTUP: redosled ainhronih poziva se odvija preko callback funkcija

// TRECI PRISTUP: Pozivi se lancaju preko promisa
//  TACAN I PRAKTICAN

// form.addEventListener("submit", sumbitForm1)

function getItemsRetrunPromise(resourse) {
  return new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener("readystatechange", function () {
      if (request.readyState == 4 && request.status == 200) {
        //sve okej, obradi zahtev
        let data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState == 4) {
        //desila se neka greska
        reject("Greska");
      }
    });
    request.open("GET", resourse);
    request.send();
  });
}

function sumbitForm2(e){
  e.preventDefault();
  let ids=[]
  getItemsRetrunPromise("json/stock.json")
  .then((data)=>{
    data.forEach(artikal=>{
      if(artikal.stock==0){
        ids.push(artikal.id)
      }
    })
    return getItemsRetrunPromise("json/weights.json")
  })
  .then((data)=>{
    let totalWeight = 0;
    data.forEach(artikal=>{
      if(ids.includes(artikal.id)){
        totalWeight+=artikal.weight
      }
    })
    if(totalWeight>truckCap.value){
      result.innerHTML = "Kamion nema slobodnih kapaciteta"
    }
    else{
      return getItemsRetrunPromise("json/prices.json")
    }
  })
  .then((data)=>{
    let totalPrice=0;
    if(data!== undefined){
      data.forEach((artikal)=>{
        if(ids.includes(artikal.id)){
          totalPrice+=artikal.price
        }
      })
      result.innerHTML = `Ukupna cena proizvoda je ${totalPrice}`
    }
  })
  .catch(message=>{
    result.innerHTML = message;
  })
}

form.addEventListener("submit", sumbitForm2);
