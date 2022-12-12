//PRIORITET U LOGICKIM OPERATORIMA:
//1. !
//2. &&
//3. ||

// and - &&
// vraca da je TRUE iskuljucivo ako imamo true && true
let a = 5;
let b = 6;

if( a == 5 && b == 6) {
    console.log("Hello");
}

// OR - ||
// Ne daje true iskljucivo ako su oba izraza netacna
//tj. daje TRUE ukoliko je makar jedan izraz tacan

if( a==5 || b == 6){
    console.log ("World")
}
let c = 7;

if( a == 5 && b==6 && c == 7){
    console.log(`Sva tri su tacna`)
}
else {
    console.log (`Neki od uslova nije tacan`)
}

if (a==5 || b ==6 || c==7){
    console.log (`Makar jedan od uslova je tacan`);
}
else {
    console.log (`Ni jedan od uslova nije tacan tj. svi uslovi su netacni`);
}

if(c != 7) {
    console.log (`c je razlicito od 7`);
}

if ( !(c==7) ) {
    console.log(`c je razlicito od 7`);
}

// 21. Naći koji je najveći od tri uneta broja a, b i c, korišćenjem logičkih operatora. 

let x = 5;
let y = 7;
let z = 12;

if ( x > y && x > z){
    console.log (`${x} je najveci broj`);
}
else if ( y > x && y > z){
    console.log( `${y} je najveci broj`);
}
else {
    console.log (`${z} je najveci broj`);
}

// 22. U promenljivu uneti broj koji predstavlja temperaturu vazduha. Na ekranu ispisati „ekstremna temperatura“ ukoliko je temperatura manja od -15 stepeni Celzijusovih ili veća od 40 stepeni Celzijusovih.

let temp = 10;
if( temp < -15 || temp > 40){
    console.log(`ekstremna temperatura`);
}
else {
    console.log(`temperatura je u granicama normale`);
}

// 23.Ispitati da li je trenutna godina prestupna. (godinu preuzeti iz vremena na Vašem računaru).Godina je prestupna ako je deljiva sa 4 i nije deljiva sa 100 ili ako je deljiva sa 400.

let date = new Date;
let godina = date.getFullYear();
console.log (godina);

// let ost = godina % 4;
// let ost1 = godina % 400;

if ((godina %4==0 && godina%100!=0) || godina%400==0){
    console.log (`godina ${godina} je prestupna`);
}
else {
    console.log (`Godina ${godina} nije prestupna`);
}

// 24 Jedan butik ima radno vreme od 9h do 20h radnim danima, a vikendom od 10h do 18h. Preuzeti dan i vreme sa računara, ispitati “otvoreno” ukoliko je butik trenutno otvoren.
// U suprotnom ispisati “zatvoreno”.

// Ko bude imao vremena: 
// Ukoliko je butik trenutno otvoren, prikazati i sličicu otvorenih vrata na ekranu. Ukoliko je butik trenutno zatvoren, prikazati i sličicu zatvorenih vrata.

let dan = 0;
let sat = 18;

if (dan == 0 || dan == 6){
     //vikend
     if (sat>=10  && sat <18){
        console. log (`Vikend je i butik je trenutno otvoren`);
        document.write (`<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/17_Open_sign_-_free_stock_photo.jpg/1200px-17_Open_sign_-_free_stock_photo.jpg">`);
     }
     else{
        console.log (`Vikend je i butik je trenutno zatvoren`);
        document.write (`<img src="https://img.freepik.com/free-vector/sorry-we-re-closed-sign_23-2148832148.jpg">`);
     }
}
else {
    //Radni dan
    if (sat>=9 && sat<20){
        console.log (`Radni dan je i butik je trenutno otvoren`);
        document.write (`<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/17_Open_sign_-_free_stock_photo.jpg/1200px-17_Open_sign_-_free_stock_photo.jpg">`);
    }
    else{
        console.log (`Radni dan je i butik je trenutno zatvoren`);
        document.write (`<img src="https://img.freepik.com/free-vector/sorry-we-re-closed-sign_23-2148832148.jpg">`);
    }
}


