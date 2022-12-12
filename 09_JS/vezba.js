let x=5;
console.log(x);

//zadatak 1
let sati= 23;
let minuti= 59;
let odPonoci= sati*60 + minuti;


console.log(odPonoci);

let doPonoci= 24 * 60 -odPonoci;

console.log(doPonoci);

// zadatak 2 
// 1.nacin

let minOdPonoci = 95;

let hours = Math.floor (minOdPonoci/60);
let minutes = minOdPonoci % 60;

console.log(hours + ":" + minutes);

//2.nacin

minutes=minOdPonoci % 60; //95%60=35
hours = (minOdPonoci - minutes)/60; // (95-35) = 60/60=1
console.log(hours + ":" + minutes);

//zadatak 4
let datum = new Date() //datum je objekat koji sadrzi inof o trenutnom datumu i vremenu
// let mesec=datum.getMonth() +1;
// console.groupCollapsed(datum.getFullYear() + "/" + mesec);

let h= datum.getHours();
let m= datum.getMinutes();
console.log (h+ ":" +m);
console.log (h* 60+ m );

//zadatk 3

let ukupnaCenaRobe = 1399;
let novcanica = 2000;
let kusur = novcanica - ukupnaCenaRobe;
console.log(kusur);

//zadatk 5

// let d= new Date;
// console.log(new Date)


// let year= 2022;
// let month=12;
// let day=05;


// console.log(year+ ""+month + ""+day);

let dan = datum.getDate();
let mesec = datum.getMonth() +1;
let godina = datum.getFullYear();
console.log(dan + "." + mesec + "." + godina);
console.log(dan + "/" + mesec  +  "/" + godina);


// zadatak 6

// let evro=10;
// let kurs=117;

// console.log(evro*kurs);

// let dinar=1170;
// let kur=117;

// console.log(dinar/kurs);

// Prva kovezija 

let euro = 150;
let kurs = 117.2986;
let dinara = euro*kurs;
console.log(dinara);

//Druga koverzija

dinara = 13000;
euro = dinara / kurs;
console.log(euro);

//A koliko je 150euru dinarima

//zadatk 7

let evro = 10;
let evroDinar = 117.2986;
let dolarDinar = 117.57;

let dolarRazmena = evro*dolarDinar;
console.log(dolarRazmena);

//osmi adatak

let c=1;
let farenhajt= c * 1.8 +32;
console.log (farenhajt);

let f = 32;
let celzijus = ( f-32 ) / 1.8;
console.log(celzijus);

//9. zadatak

let cel=1;
let kelvin= c+273.15;
console.log(kelvin);

let k=273.15;

// zavrsi zadatak 9



// DOMACI
// ZADATAK 1

let pera = 1000;
let mika = 800;
let kus = 300;
let cenaDzempera = (pera + mika - kus) /2;
console.log ( cenaDzempera)

console.log (pera - cenaDzempera);
console.log(mika - cenaDzempera);

// ZADATAK 2

let n = 22; //poglavlje knjige
let a = 5; // citalac 1i dan procitao 5 poglavlja
let a2 = a + 2; // drugi dan je procitao dva vise =7ukupno procitao
let preostalo = n-a-a2; //preostalo je 18
console.log( preostalo);
if ( preostalo < n/2) {
    console.log("Ostalo je da procita jos manje od polovine knjige");
}

// ZADATAK 3

let u = 9000; //unos kalorija dnevno u kJ
let kcal= 1 ;
let kJ = 4.1868; // 1kcal=4.1868kJ
let vrednostkcal = u/kJ;
console.log(vrednostkcal);
if(vrednostkcal<2000){
    console.log("potrebno je povecati dnevni unos")
}
else{
    console.log ("nije potrebno uvecati dnevni unos")
}




