console.log("CALLBACK");

let getResponse = (resource, callback) => { // prosledjujem putanju do fajla i funkciju
  // 1. kreiranje XML objekta i addeventelistener za taj objekat
  let request = new XMLHttpRequest();

  request.addEventListener("readystatechange", () => {
    if (request.readyState == 4 && request.status == 200) {
      //sve je ok
      //   console.log(request.responseText);
      callback(request.responseText, undefined);
    } else if (request.readyState == 4) {
      // Nesto nije ok
      //   console.log("Nije moguce dohvatiti podatke");
      callback(undefined, "Nije moguce dohvatiti podatke");
    }
  });

  // 2. Otvaranje kreiranih zahteva
  request.open("GET", resource);

  // 3. Slanje zahteva
  request.send();
};

//Ucitaj najpre prvi.json fajl
getResponse("../JSON/prvi.json", (data, err) => {
//   console.log(data, err);
    if(data){
      //Ukoliko je sve ok sa prvi.json fajlom, ispisi njegove podatke i potom ucitaj drugi.json fajl
        console.log(data) 
        getResponse("../JSON/drugi.json", (data, err)=>{
          if(data){
            //ukoliko je sve ok sa drugi.json fajlom ispisi njegove podatke i potom ucitaj treci.json fajl
            console.log(data)
            getResponse("../JSON/treci.json", (data,err)=>{
              if(data){
                console.log(data)
              }
              else{
                console.log(err) // ispisuje gresku ukoliko treci.json fajl nije prosao
              }
            })
          }
          else{
            console.log(err)// ipsiije gresku ukoliko drugi.json nije prosao
          }
        })
    }
    else{
        console.log(err) // ispisuje gresku ukoliko prvi.json nije prosao
    }
});

console.log("KRAJ");
