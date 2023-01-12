// class Auto {
//     constructor(marka, boja, imaKrov) {
//         this._marka = marka;
//         this._boja = boja;
//         this._imaKrov = imaKrov;
//     }
// }

import {Auto} from "./auto.js";

let a1 = new Auto("Audi", "bela", true);
console.log(a1)
console.log(a1._marka)
console.log(a1.marka)

let a2 = new Auto ("Opel", "crvena", false);
console.log(a2)

a1.sviraj();
a2.sviraj();

a1._marka = "Skoda";
console.log(a1)

a1._marka = "";
console.log(a1);

a1.marka = "peugeot" // u pozadini ovde se poziva metoda set marka
console.log(a1)

a1.marka ="";
a1.boja = "zuta";
a1.imaKrov = false;
console.log(a1)
console.log(a1.marka+ " " + a1.boja + " " + a1.imaKrov)

let a3 = new Auto ("", "", 0);
console.log(a3)



// klasa-sablon, korisnicki tip
// Objekat = instanca (realizacija) klase = promenljiva neke klase