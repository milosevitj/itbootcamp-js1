function sum (a,b){ // Imenovane funkcije: (function), ime , {parametar}, {return}
    return a+b;
}
let rez = (1, 2);
console.log(rez);

// Anonimne funkcije
//skracenje sintakse
// rade u kontekstu bloku u kojem su definisane

// prvo se uvodi promenljiva

let suma = function (a,b){ // Anonimne funkcije: (function), {parametar} , {return}
    return a+b;
}
rez = suma (1,2); // poziv anonimne funkcije preko promenljive suma
console.log (rez);


// ARROW FUNKCIJA (anonimne funkcije sa skracenim zapisom)

let suma2 = (a,b) => { // {parametri}, =>, {return}
    return a+b;
}
rez = suma2 (5,6);
console.log(rez)

let hello = () =>{
    console.log("Hello world")
}
hello();
hello ();

//Arrow funkcija koja ispisuje dva stringa (parametre) razdvojene zarezom

let echo = (s1,s2) => {
    let rezultat = s1+ ", " + s2;
    console.log(rezultat)
}
echo("Katarina", "Milosevic")

// //////

let osoba = (ime,prezime,godine) =>{
    if(godine>=18){
        console.log(`${ime} ${prezime} je ponoletna`);
    }
    else{
        console.log (`${ime} ${prezime} je maloletna`);
    }
}
osoba ("Katarina", "Milsoevic", 30)

//////

let ispisHTML = (ime, prezime, godine) => {
    if (godine>=18){
        let ispis = `<p>osoba ${ime} ${prezime} je punoletna</p>`;
        return ispis;
    }
    else{
        let ispis = `<p>osoba ${ime} ${prezime} je maloletna</p>`;
        return ispis;
    }
}
document.body.innerHTML += ispisHTML ("Katarina", "Milosevic", 30)
document.body.innerHTML += ispisHTML ("Pera" , "Peric", 15)

//3 Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

// varijanta 1
let neparan = n => {
    if (n%2==1) {
        return true;
    }
    else {
        return false;
    }
    return x;
}
console.log (neparan (5));
console.log (neparan(6));

// varijanta 2, isto kao varijanta 1 samo skraceno

let neparan2 = (n) => {
    return (n%2==1);
}
console.log(neparan2(9));
console.log(neparan2(2));

// varijanta 3, isto kao varijanta 2 samo koristeci svojsvta arrow funkcija
// 1) ako arrow funckiji prosledjujemo TACNO JEDAN parametar, onda () nisu obavezne
// 2) ako se telo arrow funkcije sastoji SAMO od return naredbe, ona nije obavezna

let neparan3 = n => (n%2==1);

console.log(neparan2(9));
console.log(neparan2(2));

// varijanta 1
// let neparan = n => {
//     let x;
//     if (n%2==1) {
//         x= true;
//     }
//     else {
//         x= false;
//     }
//     return x;
// }
// console.log (neparan (5));
// console.log (neparan(6));


// Varijant 2 preko medjupromenljive deklarisane sa var 
// let neparan = n => {
//     if (n%2==1) {
//         var x= true;
//     }
//     else {
//         var x= false;
//     }
//     return x;
// }

// // var vazi unutar funkcije
// console.log (neparan (5));
// console.log (neparan(6));


//4 Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.

// varijanta 1 Arrow funkcije
let max2 = (a,b) => {
    if (a>b){
        return a;
    }
    else {
        return b;
    }
}
console.log(max2 (15,20))

// varijanta 2 sa skracenim zapisom
let maks2 = (a,b) => (a>b) ? a : b; 

console.log(maks2(13,6))

// varijanta 1 maksimum 4 broja 

let maks4 = (a,b,c,d) => {
    return maks2 (maks2(a,b), maks2(c,d));
}
console.log(maks4(5,35,20,25))

// varijanta 2 maksimum 4 broja

let max4 = (a,b,c,d) => maks2(maks2 (maks2(a,b) , c), d);

console.log(maks4(55,35,20,25));

// 5 Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

let slika = adresa => `<img src="${adresa}">`;

document.body.innerHTML += slika ("https://cdn2.emmezeta.rs/media/catalog/product/cache/01cb2cb658d395381faf29e7336ee183/6/6/661296-slika-s-okvirom-urban-area-70x140cm_1.jpg");


// 6 Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

let bojenje = boja => `<p style ="color:${boja}">Neki tekst</p>`;

document.write(bojenje("green"));