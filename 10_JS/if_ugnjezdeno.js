// 18. Za tri uneta broja ispisati koji od njih je najveći, koji od njih je srednji, a koji od njih je najmanji, ovoga puta korišćenjem ugnježdenog grananja.

let a = 10;
let b = 20;
let c = 15;

if(a>b){
    if(a>c){
        console.log(`Najveci broj je ${a}`);
        if(b > c){
            console.log(`Srednji broj je ${b}`);
            console.log (`Najmanji broj je ${c}`);
        }
        else {
            console.log (`Srednji broj je ${c}`);
            console.log(`Najmanji broj je ${b}`);
        }
    }
    else{ 
        console.log(`Najveci broj je ${c}`);
        console.log (`Srednji broj je ${a}`);
        console.log (`Najmanji broj je ${b}`);
    }
}
else{
    // Ili je b najveci ili je c najveci
    if(b > c){
        console.log (`Najveci broj je ${b}`);
        if (a > c){
            console.log(`Srednji broj je ${a}`);
            console.log (`najmanji broj je ${c}`);
        }
        else{
            console.log (`Srednji broj je ${c}`);
            console. log (`najmanji broj je ${a}`);
        }
    }
    else {
        console. log(`Najveci broj je ${c}`);
        console.log (`Srednji broj je ${b}`);
        console. log (`najmanji broj je ${a}`);
    }
}

// 19  Učitati dva cela broja i ispitati da li je veći od njih paran. 

let br1 = 10;
let br2 = 9;
 if( br1 > br2){ //
    if ( br1 % 2 == 0){
        console.log (`broj je veci i paran`);
    }
    else {
        console.log("Broj je neparan");
    }
 }
 else if (br2> br1){
    if (br2 % 2 ==0){
        console.log("Broj je veci i paran");
    }
    else{
        console.log ("Broj je neparan");
    }
 }

//20. Uneti dva datuma i ispisati onaj koji je raniji. Datume unosimo tako što u posebnim promenljivama navedemo dan, mesec i godinu, za svaki od njih.

let d1 = 12; //prvi datum
let m1 = 12;
let g1 = 2020;

let d2 = 12;
let m2 = 12;
let g2 = 2020;
 
if(g1 < g2) {
    console.log (`Radinij datum je: ${d1}.${m1}. ${g1}`);
}
else if ( g2 < g1) {
    console.log(`Raniji datum je: ${d2}.${m2}.${d2}`);
}
else{
    //obuhvata one slucajeve kada su godine iste
    if (m1 < m2){
        console.log (`Raniji datum je: ${d1}.${m1}. ${g1}`);
    }
    else if(m2 < m1){
        console.log(`Raniji datum je: ${d2}.${m2}.${d2}`);
    }
    else{
        //obuhvata one slucajeve kada su i meseci isti
        if ( d1< d2){
            console.log (`Radinij datum je: ${d1}.${m1}. ${g1}`);
        }
        else if (d2 < d1){
            console.log(`Raniji datum je: ${d2}.${m2}.${d2}`);
        }
        else {
            console.log (`Datumi su isti`);
        }
    }
}



//     if (m1 <= m2){
//         console.log ("Datum je raniji");
//     }
//     else if( d1 < d2){
//         console.log ("datum je raniji");
//     }
//     else {
//         console.log ("datum je kasniji");
//     }
// }
// else{
//     console.log ("datum je kasniji");
// }