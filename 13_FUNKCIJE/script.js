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
    document.write (`<img src=${adresa}>`)
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
    document.write (`<p> ${broj}</p>`)
}
velicinaFonta (15)


// 14 Napisati funkciju koja pet puta ispisuje istu rečenicu, a veličina fonta rečenice treba da bude jednaka vrednosti iteratora. 