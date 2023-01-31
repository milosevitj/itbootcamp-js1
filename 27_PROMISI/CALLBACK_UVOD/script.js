console.log("Primeri callback funkcija");

let myFunc = callback => {
  // callback nije kljucna rec
  callback(); // okidamo funkciju tj. njenu realizaciju
};
myFunc(() => {
  //pozivamo
  console.log("call back funkcija okinuta"); //realizacija
});

///////////////////////
//callback funkcija za sabiranje dva broja

let sum = callback => {
  callback(5, 7);
};

//1. nacin
//kreirali smo posebnu funkciju koja nam sluzi kao realizacija i koju cemo prosledjivati kao parametar
function printSum(a, b) {
  console.log(a + b);
}
sum(printSum); // Poziv funkcije koja realizuje callback ide bez zagrada

//2.nacin
sum((a, b) => {
  console.log(a + b);
});


///////////////////////////////

let racunaj = (str, cb) =>{
    console.log(str)
    let rez = cb(10,5)
    console.log(str, rez)
}

racunaj("Oduzimanje", (x,y)=>{ // prvi paramtar string, drugi parametar funkcija
    return x-y;
});
racunaj("Deljenje", (x,y)=>{
    return x/y
})



//////////////

let racunaj2 = (str, br1, br2, funkcija) =>{
    console.log(str)
    console.log(str, funkcija(br1,br2))
}
racunaj2("Mnozenje",4,7, (x,y)=>{
    return x*y
})