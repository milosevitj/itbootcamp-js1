console.log("CALLBACK");

let getResponse = (resource) => {
  // prosledjujem putanju do fajla i funkciju

  // 1. kreiranje XML objekta i addeventelistener za taj objekat
  let request = new XMLHttpRequest();
  // 2. Otvaranje kreiranih zahteva
  request.open("GET", resource);

  // 3. Slanje zahteva
  request.send();

  return new Promise((resolve, reject) => {
    request.addEventListener("readystatechange", () => {
      if (request.readyState == 4 && request.status == 200) {
        resolve(request.responseText); //sve je ok i koristimo resolve kome prosledjujemo podatke iz json.fajla
      } else if (request.readyState == 4) {
        reject("Nije moguce dohvatiti podatke"); // Nesto nije ok i korisitmo reject kome saljemo tekst greske
      }
    });
  });
};

getResponse("../JSON/prvi.json")
  .then((sadrzaj) => {
    console.log("prvi.json resolved", sadrzaj);
    return getResponse("../JSON/drugi.json"); // vraca promise ukoliko je resolved , na njega se odnosi nareni then
  })
  .then((sadrzajDugog) => {
    console.log("drugi.json resolved", sadrzajDugog); // vraca promise ukoliko je resolved , na njega se odnosi nareni then
    return getResponse("../JSON/treci.json");
  })
  .then((sadrzajTreceg) => {
    console.log("treci.jason resolved", sadrzajTreceg);
  })
  .catch((greska) => {
    console.log("promise reject", greska);
  });

console.log("KRAJ");
