let x = 5;
let y = 7;

if(x == y)
{
    console.log("Jednake vrednosti")
}
else
{
    console.log("Razlicite vrednosti")
}

// isto kao prethodni samo kontra pitanje
if(x != y)
{
    console.log("razlicite vrednost");
}
else
{
    console.log("Isste vrednosti");
}

// 1. Za unetu zapreminu proizvoda, u paragrafu ispisati “Throw away”, ukoliko je proizvod zapremine veće od 100ml. U suprotnom ispisati “Pack up”.

let proizvod = 95
if(proizvod > 100)
{
    document.write ("<p> Throw away </p>");
}
else 
{
    document.write ("<p> Pack up </p>");
}

// 2. Za unetu temperaturu u paragrafu, ispisati “Temperatura u plusu” crvenom bojom ili “Temperatura u minusu” plavom bojom. Ukoliko je temperatura nula, računati kao temperaturu u plusu.

let temp = -10;
if(temp >= 0) {
    document.write ("<p style='color: red;'> Temperatura u plusu</p>");
}
else{
    document.write ("<p style='color: blue;'>Temperatura u minusu </p>")
}

// 3.U odnosu na pol koji je korisnik uneo u promenljivu  (“m” za muški pol ili “z” za ženski pol)  na ekranu prikazati odgovarajući avatar (odgovarajuću sličicu). 

let pol = "z";
if (pol == "m") {
    document.write ("<img src= 'https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg' width='50px'>");
}
else{
    document.write ("<img src = 'https://st3.depositphotos.com/1007566/13175/v/600/depositphotos_131750410-stock-illustration-woman-female-avatar-character.jpg' width= '50px'>")
}

//4 zadatak

let datum = new Date();
let vreme = datum.getHours();

console.log (vreme);
if(vreme>12){
    document.write ("<p>Popodne</p>");
}
else{
    document.write ("<p>Prepodne</p>")
}

//5 zadatak

let godina = datum.getFullYear();

let godinaRodjenja = 2004;
if (godina-godinaRodjenja>=18){
    document.write ("<p> Osoba je punoletna</p>")
}
else {
    document.write ("<p>Osoba je maloletna </p>")
}

// 6 zadatak 6.   Odrediti i u paragrafu ispisati najveći od tri uneta broja (samo uz pomoć if naredbi, bez korišćenja logičkih operatora)

let b1 = 10;
let b2 = -15;
let b3 = 13;

let maks = b1;
if (maks < b2) {
    maks = b2;
}
if (maks < b3){
    maks=b3;
}
document.write (`<p>Maksimum je  ${maks} </p>`)

// sa minimumom

let mini = b1;
if (b2 < mini){
    mini = b2;
}
if (b3 < mini) {
    mini = b3;
}

document.write (`<p>Minimum je  ${mini} </p>`)