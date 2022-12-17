console.log (`funkcije`);

function zdravo (){
    console.log(`Zdravo!`);
}

zdravo (); //poziv fukcije
zdravo();
console.log  ('Hello');
zdravo();

for (i=1; i <=5; i++){
    zdravo (); // 5 puta poziva funkicju zdravo
}

/////////////////////////////////////

function hello (name){ // (name) je promenljiva
    console.log(`Hello ${name}`); // ${name} ocitavanje promenljive
}

hello ("Jelena");// prosledjuje "Jelena" u ${name} promenljivu
hello ("Stefan");

let ime = "Milica";
hello(ime);

/////////////// IME I PREZIME

function hello_full_name (ime, prezime){
    console.log(`Hello ${ime} ${prezime}`);
}
hello_full_name ("Stefan", "Stanimirovic");

let im = "ana";
let pr = "ivanovic";
hello_full_name(im,pr);

////////////////

// 2 Napisati funkciju zbir koja računa zbir dva realna broja.
// Šta bi trebalo izmeniti da bi se dobila razlika, proizvod ili količnik dva broja

function zbir (broj1, broj2){
    console.log (broj1+broj2);
}
zbir (5, 7);

// 5 zadatak 
// Napisati funkciju koja prikazuje sliku za prosledjenu adresu slike.

function prikazSlike (adresa){
    document.write (`<img src=${adresa} width="100px">`)
}
prikazSlike ("1.jpg") 


// 6 zadatak Napisati funkciju koja za unetu boju na engleskom jeziku boji tekst paragrafa u tu boju.

function boji_paragraf (boja){
    document.write(`<p style="color:${boja};"> Obojeni tekst</p>`)
    // document.write(`<p style="color:blue;"> Obojeni tekst</p>`) //moze i ovako
}
boji_paragraf ("red");
boji_paragraf ("orange");
boji_paragraf ("green");

///////////////

// 13 Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.

function velicinaFonta (broj){
    document.write (`<p style = 'font-size: ${broj}px;'> tekst</p>`)
}
velicinaFonta (50)


// 14 Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 

function recenica (pf){
    for(i=0; i<=4; i++){
        document.write (`<p style = 'font-size: ${i+pf}px;'> tekst</p>`)
    }
}
recenica (30);

// 3 Napisati funkciju neparan koja za uneti ceo broj n vraća tačno ukoliko je neparan ili netačno ukoliko nije neparan.

function neparan (n){
    if (n%2==0){
        return 'Paran broj';
    }
    else {
        return 'Neparan broj';
    }
}

let tekst = neparan (11);
console.log(tekst);
document.write(tekst);

// 

// 4 Napisati funkciju maks2 koja vraća veći od dva prosleđena realna broja. Zatim napisati funkciju maks4 koja vraća najveći od četiri prosleđena realna broja.


function maks2 (br1, br2) {
    if(br1>br2){
        return br1;
    }
    else {
        return br2;
    }
}

let m1 =maks2 (13,6);
console.log(`veci je broj ${m1}`)


function  maks4 (br1, br2, br3, br4){
    if (br1>=br2 && br1>=br3 && br1>=br4){
        return br1;
    }
    else if (br2>=br1 && br2>=br3 && br2>=br4){
        return br2;
    }
    else if (br3>=br1 && br3>=br2 && br3>=br4){
        return br3;
    }
    else {
        return br4;
    }

}
let m4 = maks4 (35,5,19,2);
console.log (`najveci broj je ${m4}`);


////// 2 resenje

function maksimum4 (br1,br2,br3,br4){
    // let veci1 = maks2(br1,br2);
    // let veci2 = maks2 (br3,br4);
    // let najveci = maks2 (veci1, veci2);
    // return najveci;

    // let najveci = maks2(maks2(br1,br2), maks2 (br3,br4));
    // return najveci;

    //ili 
    return najveci = maks2(maks2(br1,br2), maks2 (br3,br4));
    

}
let naj = maksimum4 (15, 2, 24, 3);
console.log(naj);