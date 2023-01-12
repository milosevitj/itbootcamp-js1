let ime = "Nela";

var prezime = "Petrovic"

function povecaj (x){
    x= x+5;
    ispis(x)
    return x;
}

function ispis (p) {
    console.log(p)
}

function radi (){
    //glavna funk koja resava zadatak
}

///.....

export {povecaj, ime}; // export pa ime funkcije u viticastim

// moze i ovako: PISATI EXPORT DIREKTNO U PROMENLJIVOJ, FUNKCIJI,...

// export let ime = "Nela";

// export function povecaj (x){
//     x= x+5;
//     return x;
// }