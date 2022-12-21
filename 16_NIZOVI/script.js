let cars = ["Toyota", "BMW", "Volvo"]; // indeksiranje elemenata krece od nule (tojota-0; bmw=1;volvo=2)
console.log(cars);
console.log(cars[0]); //tojota
console.log(cars[2]); //volvo
console.log(cars[3]);// undefined

cars[1] = "peugeot"; // zamena [1] elementa
console.log (cars)
cars[1]= cars[1] + "208"; // dodavanje vrednosti
console.log(cars);

let razno = [15, -3.5, "hello", true, [1,2,3]];
console.log(razno);

//ispis elemenata niza cars
for(let i=0; i< cars.length; i++){
    console.log(cars[i]);
}

//pristup elementima niza razno
for (let i=0; i<razno.length;i++){
    console.log(razno[i])
}
let unutrasnjiNiz = razno[4];// sa medjupromenljivom
for(let i=0; i<unutrasnjiNiz.length;i++){
    console.log(unutrasnjiNiz[i])
}
for(let i=0; i<razno[4].length; i++){ //bez medjupromenljive
    console.log(razno[4][i]);
}
razno[4][1]=5; // zamena vrednosti
for(let i=0; i<razno[4].length; i++){ 
    console.log(razno[4][i]);
}

// uvecanje vrednosti unutrasnjeg niza za po 10%

for(let i =0; i< razno[4].length; i++){
    razno[4][i] = razno [4][i] *1.1;
}
for(let i=0; i<razno[4].length; i++){ 
    console.log(razno[4][i]);
}


let brojevi = [8,4,-2,0,1,0];
let brojevi2 = [10,-5,0,-3];
// 2 Odrediti zbir elemenata celobrojnog niza.
let zbir = 0;
for(let i=0;i<brojevi.length;i++){
    zbir= zbir+brojevi [i]
}
console.log(zbir)

// FUNKCIJA zadatak 2 

let sumaElem = niz => {
    let zbir=0;
    for(let i=0;i<niz.length;i++){
        zbir= zbir+niz[i];
    }
    return zbir;
}

// 3 Odrediti proizvod elemenata celobrojnog niza.

let proizvodElem = niz => {
    let proizvod=1;
    for(let i=0; i<niz.length;i++){
        proizvod = proizvod * niz[i];
    }
    return proizvod;
}

// pozivi funkcija
let brojevi3 = [5,1,2]
console.log(sumaElem(brojevi));// 2 zadatak
console.log(sumaElem(brojevi2)); // 2 zadatak
console.log(proizvodElem(brojevi)); // 3 zadatak
console.log(proizvodElem(brojevi2)); // 3 zadatak
console.log(proizvodElem(brojevi3));


// 4 Odrediti srednju vrednost elemenata celobrojnog niza.

let sredinaElem = niz => {
    let sredina=0;
    let broj = 0;
    for(let i=0;i<niz.length;i++){
        sredina = sredina + niz[i];
        broj++
    }
        return sredina/broj
        
    }

console.log(sredinaElem(brojevi3));

// 2 varijanta 

let srVrednost2 = niz => {
    let zbir = sumaElem (niz);
    let br = niz.length;
    return zbir/br
}
console.log(srVrednost2(brojevi3))

/// varijanta 3

let srVrednost3 = niz => sumaElem (niz) / niz.length

console.log(srVrednost3(brojevi3))

// zadatak 4a Naci srednju vrednost parnih elemenata

let srVrednostParnih = niz => {
    let zbir=0;
    let br = 0;
    for(let i=0;i < niz.length; i++){
        if(niz[i]%2==0){
        zbir = zbir + niz[i];
        br ++
    } 
    }
    return zbir/br
}

console.log(srVrednostParnih(brojevi3));

// 5 Odrediti maksimalnu vrednost u celobrojnom nizu.
let maksVrednost = niz => {
    let maks = niz [0];
    for(let i=1; i<niz.length;i++){
        if(niz[i]>maks){
        maks=niz[i]
    }
    
}
    return maks;
}
let br = [8,11,20,11,4]
console.log(maksVrednost(br))

// 6 Odrediti minimalnu vrednost u celobrojnom nizu.
// let brojevi3 = [5,2,1]
let minNiza = niz => {
    let min = niz [0];
    for(let i=1; i<niz.length;i++){
        if(niz[i]< min){
        min=niz[i];
    }
   
}
    return min;
}
br = [8,11,10,11,4]
console.log(minNiza (br))

// 7 Odrediti indeks maksimalnog elementa celobrojnog niza.
// Ovakva funkcija vraca indeks poslednjeg maksimuma
let indMaxNiza = niz =>{
    let max = maksVrednost (niz);
    let indeks = -1;
    for(let i=0; i<niz.length;i++){
        if(max == niz [i]){
            indeks = i;
        }
    }
    return indeks;
}
let elementi = [15,13,15, 10, 15];
console.log(indMaxNiza(elementi));
// 2 verzija 
// Ovakva funkcija vraca indeks prvog maksimuma
let indMaxNiza2 = niz =>{
    let max = maksVrednost (niz);
    let indeks = -1;
    for(let i=0; i<niz.length;i++){
        if(max == niz [i]){
            indeks = i;
            return indeks; // ili break// ili return i bez definisanog indexa
        }
    }
}
console.log(indMaxNiza2(elementi));
// 9 Odrediti broj elemenata celobrojnog niza koji su veći od srednje vrednosti.

// URADI PONOVO

 let srVrednost = niz =>{
    let vrednost=0;
    let br=0;
    let veci=0;
    for(let i=0; i<=niz.length;i++){
        vrednost=vrednost + niz[i]
        br++
        if(niz[i]>vrednost/br){
            veci++
        }
    }
    return veci;

 }
 let nekiBrojevi = [1,25,15,20]
 console.log(srVrednost(nekiBrojevi))

// 10 Izračunati zbir pozitivnih elemenata celobrojnog niza.

let pozitivniBr = niz => {
    let zbir=0;
    for (let i =0; i<=niz.length;i++){
        if (niz[i] > 0) {
            zbir=zbir + niz[i]
        }
    }
    return zbir;
}
let pozBr = [25,15,-20,-3]
console.log(pozitivniBr(pozBr))

// 11 Odrediti broj parnih elemenata u celobrojnom nizu.

let parniBr = niz => {
    let broj = 0;
    for(let i=0; i<niz.length; i++){
        if( niz [i]%2==0){
            broj++
        }
    }
    return broj;
}
let parBr = [2,4,10,7]
console.log (parniBr(parBr))

// Zadatak 12 Odrediti broj parnih elemenata sa neparnim indeksom.

let paranBrNeparanInd = niz => {
    let br=0;
    for(let i=0;i<niz.length;i++){
        if(niz[i]%2==0 && i%2!=0){
            br++;
        }
    }
    return br;
}
// niz= [10,12,11,13,14,16]
//br = 2
//i = 5
let nn= [10,12,11,13,14,16];
console.log(paranBrNeparanInd(nn));

// 2 nacin 

let paranBrNeparanInd2 = niz => {
    let br=0;
    for(let i=0;i<niz.length;i+=2){
        if(niz[i]%2==0 ){
            br++;
        }
    }
    return br;
}
console.log(paranBrNeparanInd2(nn));

// 13  Izračunati sumu elemenata niza sa parnim indeksom.

let sumParInd = niz => {
    let suma=0;
    for(let i=0;i<niz.length;i++){
        if(i%2==0){
            suma=suma+niz[i]
        }
    }
    return suma;
}
let parBrojevi = [5,12,16,2]
console.log(sumParInd(parBrojevi))

 // 14  Promeniti znak svakom elementu celobrojnog niza.

 let elemNiz = niz => {
    let noviNiz = []
    for(let i=0;i<niz.length;i++){
        // noviNiz.push (-niz[i]);
        noviNiz.push (niz[i]*(-1));
    }
    return noviNiz
 }

 let niz = [10,12,11,-13,14,16]
 console.log(elemNiz(nn))






