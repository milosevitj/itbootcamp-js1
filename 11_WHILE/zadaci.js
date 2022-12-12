//1 zadatak a)

let i = 1;
while (i <= 20){
    console.log(i);
    i++;
}


// 1 zadatak b)
i = 1;
let poruka = "";
while (i <= 20){
        poruka = poruka + i + " ";
        i++;
}
console.log (poruka);

//2 zadaatak od 20 d0 1

// 1. nacin
i  = 20;
while (i >= 1){
    console.log (i);
    i--; // i-=1 // i= i-1
}
// 2. nacin - ne preporucuje se
i = 1;
while (i<=20){
    console.log (21-i);
    i++;
}


// broj 20: let i = 20;
// string "20" : let j = "20" // string od dva karaktera" 2 i 0

// 3 zadatak Ispisati parne brojeve od 1 do 20.
// 1 nacin
i = 1;
while (i<=20){
    if (i % 2 ==0){
        console.log(i);
    }
   i++;
}
// 2 nacin
i = 2;
while(i<=20){
    console.log (i);
    i +=2; // i = i+2;
}


// 4 zadatak Kreirati n paragrafa sa proizvoljnim tekstom i naizmenično ih obojiti u tri različite boje

let n = 10;
i = 1;
while (i <=n){
if( i% 3 == 0 ){
    document.write("<p style = 'color:red'> neki tekst</p>");
}
else if ( i%3==1){
    document.write ("<p style = 'color:green;'> neki tekst </p>");
}
else {
    document. write ("<p style = 'color:yellow'> neki tekst </p>");
}
    i++;
}

// 2 nacin

n = 7;
i = 1;
while (i <=n){
if( i% 3 == 0 ){
    document.body.innerHTML += "<p class='plava';> Neki tekst </p>";
}
else if ( i%3==1){
    document.body.innerHTML += "<p class='zelena';> Neki tekst </p>";
}
else {
    document.body.innerHTML += "<p class='crvena';> Neki tekst </p>";
}
    i++;
}

// 5 zadatak
//Kreirati n proizvoljnih slika i staviti im naizmenično dva različita okvira





// zadatak 6 (suma brojeva od 1 do 100)

i = 1;
let suma = 0;
while ( i <=100){
    suma = suma + i; // suma += i;
    i++
}
console.log (`suma brojeva od 1 do 100 je: ${suma}`);


// 7. Odrediti sumu brojeva od 1 do n

i = 1;
n = 30;
suma = 0;
while( i<=n){
    suma = suma +n;
    i++;
}
console.log (`suma brojeva od 1 do n je ${suma}`);

// 8  Odrediti sumu brojeva od n do m


n = 2;
let m = 15;
suma = 0;
i=n;
while( i<=m){
    suma = suma + i;
    i++;
}
console.log (`suma brojeva od n do m je ${suma}`);

// 9 Odrediti proizvod brojeva od n do m

n =2;
m = 5;
i=n;
let pr = 1;
while (i<=m){
    pr= pr*i;
    i++;
}
console.log (`proizvod brojeva je ${pr}`);

// 10 Odrediti sumu kvadrata parnih i sumu kubova neparnih brojeva od n do m

// suma kvadrata parnih

n=2;
m=6;
sumakvadrataParnih = 0;
let sumaKubovaNeparnih = 0;

i = n;
while (i<=m){
    if(i%2 == 0){
        sumakvadrataParnih += (i*i);
        // sumakvadrataParnih += (i**2);
    }
    else( i %2 ==1 )
    {
        sumaKubovaNeparnih += (i **3);
    }
    i++;
}
console.log(`suma kvadrata parnih brojeva od ${n} do ${m} jednaka je ${sumakvadrataParnih}`);

console.log (`suma kubova neparnih borjeva jednaka je: ${sumaKubovaNeparnih}`)

//11 Odrediti sa koliko brojeva je deljiv uneti broj k

let k = 4;
i = 1;
let brojDelioca = 0;
while(i <=k){
    if(k % i == 0){
        brojDelioca++;
    }
    i++;
}
console.log (`Broj delioca ${k} jednak je ${brojDelioca}`);

//12 Odrediti da li je dati prirodan broj n prost. Broj je prost ako je deljiv samo sa jedan i sa samim sobom.

if (brojDelioca == 2)
{
    console.log (`broj ${k} je prost`)
}
else{
    console.log (`broj ${k} je slozen`)
}

// 2 nacin

k = 5;
i = 2;
let prostBroj = true;
while (i<k){
    if (k%1 ==0){
        prostBroj = false;
        break;
    }
    i++;
}
if (prostBroj == false){
    console.log (`broj ${k} je slozen broj`);
}
else {
    console.log (`broj ${k} je prost broj`);
}
