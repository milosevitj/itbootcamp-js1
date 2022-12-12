let br = 0;
if (br < 0){
    console.log ("Broj je manji od nule");
}
else if (br == 0){
    console.log ("Broj je jednak nuli");
}
else {
    console.log ("Broj je veci od nule");
}

console.log("Kraj grananja");

//Ako nesto moze da pripada na dva mesta, onda ce ici IF IF IF
// Ako nesto pripada samo jednom, onda ce ici IF-ELSE IF-ElSE

// 7 zadatak 
// Preuzeti koji je dan u nedelji sa računara i ispitati da li je to radni dan ili je u pitanju vikend. 

let date = new Date;
let dan = date.getDay(); 

if(dan == 0){
   document.write("vikend");
}
else if(dan == 6){
    document.write("vikend");
}
else {
    document.write("Radni dan");
}

//8 zadatak
 // NE ZNAM

 //9 zadatak

 let time= new Date;
 let vreme = time.getHours();
 if (vreme<12){
    document.write ("dobro jutro");
 }

 else if (vreme<18) {
    document.write ("Dobar dan");
 }

else{
    document.write("Dobro vece");
}


// 10 zadatak
let sati = new Date;
let cas = sati.getHours();


if (cas < 9){
    document.write("<p>Firma ne radi</p>");
}
else if (cas>=17){
    document.write("<p>Firma ne radi</p>")
}
else{
    document.write("<p>Firma radi</p>");
}

// 11 zadatak

let p1 = 8; //poceo da radi prvi lekar
let k1 = 16 // zavrsio sa radnom prvi i lekar
let p2 = 16 // drugi poceo sa radom
let k2 = 20 // drugi zavrsio sa radom

if (k1 < p2) {
    document.write ("Nema preklapanja");
}
else if (k2 < p1){
    document.write ("Nema preklapanja");
}
else{
    document.write ("Ime preklapanja");
}

// 15 zadatak

let broj = 15;
let prethodnik = 1;
 

if (broj <= 0){
    console.log(`prethodnik je ${broj-prethodnik}`);
}

else if (broj>0) {
    console.log(`sledbenik je: ${broj+prethodnik}`);
}
    

// if (broj <= 0){
//     console.log (broj-1);
// }

// else if (broj>0){
//     console.log (broj+1);
// }

// 16 zadatak

let prvi = 8;
let drugi = 10;
let treci = 15;
//najveci
let najveci = prvi; //8
if( najveci < drugi){
   najveci = drugi; //12
}
if (najveci < treci ){
   najveci = treci; 
}

console.log (najveci);
// najmanji
let najmanji = prvi ;
if (drugi < najmanji){
    najmanji = drugi;
}
if (treci < najmanji){
    najmanji=treci;
}

console.log (najmanji);
// srednji

let srednji = prvi;
if (srednji <= drugi){
    srednji =drugi;
}
if (srednji < treci){
    srednji=treci;
}
console.log (srednji)


//17 zadatak
//Za učitani broj ispitati da li je ceo.


let nr = 15.3;
console.log(Number.isInteger (nr)); 

if(Number.isInteger (nr)){
    console.log ("Ceo broj");
}
else{
    console.log("Decimalan broj");
}
 

