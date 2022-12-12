// 1. Ispisati brojeve od 1 do 20 

//WHILE

let  w = 1;
while ( w <= 20){
    console.log (w);
    w++;
}

//FOR 

for (i=1; i<=20; i++){
    console.log (i);
}

// 2. Ispisati brojeve od 20 do 1 

for (i=20; i>=1 ; i--){
    console.log (i);
}

// 3. Ispisati parne brojeve od 1 do 20 
// 1 nacin
for (i=1; i<=20; i++){
    if ( i%2 ==0){
        console.log (i);
    }
}
//2 nacin 
for (i=1; i<=20; i+=2 ){
    console.log (i);
}

// 5. zadatak Odrediti sumu brojeva od 1 do n

let s = 0;
let n = 5;

for (i = 1; i<=n; i++){
    s+=i;
}

console.log(`suma je ${s}`);

// 7/ zadatak Odrediti proizvod brojeva od n do m

n=2;
let m=5;
i=n;
let proizvod = 1;
for (i=n; i<=m; i++){
    proizvod = proizvod*i;
}
console.log(`proizvod je ${proizvod}`);


// 9 zadatak Preuzeti proizoljne tri slike sa istom ekstenzijom i imenovati ih 1, 2 i 3. 
// For petljom u HTML-u ispisati svaku od sličica uz pomoć brojača (iteratora).
//1.jpg
//2.jpg
//3.jpg

for (i=1; i<=3; i++){
    document.write (`<img src="${i}.jpg">`);
}



// 10 zadatak Odrediti proizvod svih brojeva deljivih sa 11 u intervalu od 20 do 100. //PROVERI REZULTAT

proizvod=1;
for( i=20; i<=100; i++){
    if (i % 11==0){
        proizvod = proizvod*i;
    }
    i++;
}
console.log (`proizvod je ${proizvod}`)


// NEKI ZADATAK 
// ISPISATI PRVIH N PARNIH BROJEVA POCEVSI OD BROJA 2

n= 3;
i=2;
br_parnih = 0;

while(br_parnih <= n){
    if(i%2 ==0){
        br_parnih++;
        console.log (`${br_parnih}. od ${n} parnih je broj ${i}`);
    }
    i++;
}

// koliko neparnih brojeva ucestvuje u sumiranju dok suma ne predje broj k

let k = 10;
let suma = 0;
let br_brojeva = 0;
let ii = 1;

while (suma<k){
    if(ii%2 != 0){
    suma += ii;
    br_brojeva++;
    }
    ii++;
}
console.log (br_brojeva);

// 11 zadatak Prebrojati koliko ima brojeva deljivih sa 13 u intervalu od 5 do 150.
let deljiv13 = 0;
for (b=5; b<=150; b++){
    if (b%13 == 0){
        console.log(b);
        deljiv13 ++;
    }
}
console.log (`U intervalu od 5 do 150 ima ${deljiv13} brojeva koji su deljivi brojem 13`)

// 12 zadatak Ispisati aritmetičku sredinu brojeva od n do m.

n = 10;
m = 14;
let zbir = 0;
br_brojeva=0;

for (i=n; i<=m; i++){
    zbir = zbir+i;
    br_brojeva++;
}
let aritmeticka = zbir/br_brojeva;
console.log(`Aritmeticka sredina je ${aritmeticka}`);

// Prebrojati i izračunati sumu brojeva od n do m kojima je poslednja cifra 4.

n = 1;
m = 25;
suma = 0;
br_brojeva= 0;
for(i=n; i<=m; i++){
    if ( i%10 == 4){
        console.log (i)
        suma = suma+i;
        br_brojeva++;
    }
   
}
console.log (`suma brojeva od ${n} do ${m} je ${suma}`);

// Odrediti sumu brojeva od n do m koji nisu deljivi brojem a

n= 10;
m= 15;
let a = 3;
suma = 0;

for (i=n; i<=m; i++){
    if (i %a !=0 ){
        suma = suma+i;
    }
}
console.log(suma);
