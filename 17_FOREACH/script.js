// Funkcija 1: prihvata niz kao parametar niz=> {for petljom prodjemo kroz sve elemente niza, i svaki ispisemo u konzoli}

// Funkcija 2: niz=> {for petljom prolazimo kroz sve elemente niza i svaki ispisemo u div elementu}

// Funkcija: (niz,nacinIspisa) => {for petljom prodjemo kroz sve elemente niza i svaki ispisemo na zadati nacin}

function ispisKonzola(poruka){
    console.log(poruka)
}

function ispisStranica(poruka){
    let div=document.getElementById("container");
    div.innerHTML=poruka;
}

function ispisNiza (niz, callback){
    let poruka= "";
    for(let i=0;i<niz.length;i++){
        poruka += (niz[i] + " ");
    }
    callback (poruka);
}

ispisKonzola("balbalbll");
ispisStranica("bla bla bla");

let a = [6, -8, 10, 0, 5];
let b = ["Pera", "mika", "laza"]
ispisNiza(a, ispisStranica);
ispisNiza (a, ispisKonzola);
ispisNiza(b, ispisKonzola);3

a.forEach(ispisKonzola);
// for each petlja je metoda koja za svaki element niza poziva callback funkciju, a kao parametar te callback funkcije prosledjuje bas taj element niza
// konkretno, 35. linija koda za niz a poziva sledece:
//ispisKonzola(6)
//ispisKonola(-8)
//ispisKonzola)(10);
//ispisKonzola(0)
//ispisKonzola(5)

b.forEach(ispisKonzola);

a.forEach(function(element) {
    console.log(element);
})
// for each ce za svaki element niza da pozove anonimnu funkciju i prosledice svaki put po jedan element niza

a.forEach(elem => {
    console.log(elem);
});