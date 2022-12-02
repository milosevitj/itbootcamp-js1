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
