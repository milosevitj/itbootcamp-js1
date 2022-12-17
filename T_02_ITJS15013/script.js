// 1 Cvećara radi svakim danom od 9:00h do 17:00h. Vaš zadatak je da za
// vreme koje ste preuzeli sa računara izračunate koliko sati i minuta je
// ostalo cvećarki do kraja radnog vremena. Dobijeni rezultat ispisati u
// konzoli.
// Ukoliko je vreme koje ste preuzeli pre 9:00h, ispisati tekst
// „Radno vreme još uvek nije počelo“.
// Ukoliko je vreme koje ste preuzeli nakon 17:00h, ispisati tekst
// „Radno vreme je već završeno“.

let date= new Date();
let h = date.getHours();
let m = date.getMinutes();
console.log(h);
console.log(m);
let vreme = h*60 + m;
console.log(vreme);
let radnoVreme = (17* 60);
console.log(radnoVreme)//radno vreme u minutima

if(h<9){
    console.log("radno vreme joc uvek nije pocelo")
}
else if (h >=17){
    console.log("radno vreme je vec zavrseno")
}
else if (h>=9 && h<17){
    console.log (`preostalo vreme je ${radnoVreme - vreme} minuta `)
}

//  3  Cvećarka želi da pošalje ruže svojim redovnim kupcima. Uneti broj ruža
// koje cvećarka trenutno ima u radnji i broj redovnih kupaca. U konzoli
// ispisati koliko NAJMANJE ruža cvećarka treba da dokupi da bi svaki
// kupac dobio isti broj ruža, a da joj pri tome ne ostane nijedna ruža u
// radnji.
// ➢ Primer 1:
// ○ Broj ruža u cvećari 101
// ○ Broj redovnih kupaca 25
// ○ Broj ruža koje treba da dokupi je 24 (kako bi svaki kupac dobio po
// 5 ruža).
// ➢ Primer 2:
// ○ Broj ruža u cvećari 100
// ○ Broj redovnih kupaca 25
// ○ Broj ruža koje treba da dokupi je 0 (kako bi svaki kupac dobio po
// 4 ruže).
let i=1;
let brRuza=220;
let redovniKupci = 100; 
let dokupiti = 0;

while (i<=redovniKupci){
    if( brRuza % redovniKupci !=0){
        dokupiti++
        
    }
    
    else if ( brRuza % redovniKupci ==0){
        console.log(`broj ruza koji treba da se dokupi je ${dokupiti}`)
    }
    i++;
}
console.log(`broj ruza koji treba da dokupi je ${dokupiti}`)

// Zadatak 4
// ➢ Odrediti sumu i broj brojeva, u intervalu od n do m (uključujući brojeve
// n i m), koji su deljivi sa 7 i neparni su. Vrednosti promenljivih n i m
// odredite sami.
// U konzoli ispisati:
// ● U prvom redu ispisati sumu
// ● U drugom redu ispisati broj brojeva
// ● U trećem redu ispisati proizvod sume i broja brojeva

let n=5;
m=25;
let suma=0;
let brojBrojeva = 0;
let proizvod=1;
for(i=n;i<=m;i++){
    if(i%7==0 && i%2!=0){
        console.log(i)
        suma=suma+i;
        brojBrojeva++
        proizvod = suma*brojBrojeva;
    }
}
console.log(`suma je ${suma}`)
console.log(`${brojBrojeva}`)
console.log(`proizvod je ${proizvod}`)

// ➢ Prilikom transporta buketa cveća u drugi grad, potrebno je platiti
// poštarinu. Poštarina košta 5 dinara po gramu pošiljke. Pošto cveće
// sadrži dosta vode, koja ispari prilikom transporta, pošta daje popust na
// cenu izračunate poštarine po sledećoj tarifi:
// ➢ Za pošiljku težine između 1kg i 2kg, pošta daje popust od 5%, dok na
// pošiljku preko 2kg pošta daje popust od 10%.
// ➢ Za unetu težinu pošiljke u gramima, u konzoli u dva reda ispisati kolika
// je cena poštarine bez popusta i sa popustom.
// Ispis treba da bude u formatu:
// Cena bez popusta je _____ dinara.
// Cena sa popustom je _____ dinara.

let postarina = 5; //dinara po gramu
let tezinaCveca = 1000; // grama
let cena= postarina*tezinaCveca;
let popust1 = 0.05;
let popust2= 0.1;
let tezina1=1*1000;
let tezina2= 2*1000;
if(tezinaCveca>=tezina1 && tezinaCveca<=tezina2){
    console.log(`cena bez popusta je ${cena} dinara`)
    console.log(`cena sa popustom je ${cena - (cena *popust1)}dinara `)
}
else if (tezinaCveca>tezina2){
    console.log(`cena bez popusta je ${cena} dinara`)
    console.log(`cena sa popustom je ${cena*popust2} dinara`)
}

else {
    console.log(`cena bez popusta je ${cena} dinara `)
}


// Zadatak 5
// ➢ Odrediti razliku zbira parnih brojeva od n do m koji su deljivi sa 3 i broja
// brojeva od n do m kojima je poslednja cifra 3 (uključujući i brojeve n i
// m).
// ➢ Rezultat računanja ispisati u konzoli.


n=5;
m=15;
let zbir= 0;
let brBrojeva=0
for (i=n;i<=m;i++){
    if(i%2==0 && i%3==0){
        console.log(i);
        zbir= zbir+i;
    }
    if(i%10==3){
        console.log(i)
        brBrojeva++
    }
}
console.log (`razlika je ${zbir-brBrojeva}`)