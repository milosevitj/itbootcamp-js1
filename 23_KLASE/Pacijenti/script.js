import Pacijenti from "./pacijenti.js"

let pacijent1 = new Pacijenti ("Milica" , 1.65, 43);
let pacijent2 = new Pacijenti ("Goran", 2.02, 105);
let pacijent3 = new Pacijenti ("Milan", 1.69, 70);
let pacijent4 = new Pacijenti ("Ana", 1.73, 70);

// pacijent1.stampaj();
// pacijent2.stampaj();
// pacijent3.stampaj();
// pacijent4.stampaj();

let pacijenti = [pacijent1,pacijent2,pacijent3,pacijent4]

//Ispisati podatke o pacijentu sa najmanjom težinom.

let btnMinTezina = document.getElementById("racunajMinTezinu");
let pMinTezina = document.getElementById("minTezina");
btnMinTezina.addEventListener("click", () =>{
    let minPac = pacijenti[0];
    pacijenti.forEach(p=>{
        if(p.tezina < minPac.tezina){
        minPac = p // update tezine tekuceg pacijenta
        }
    })
    minPac.stampaj();
    pMinTezina.innerHTML = minPac.stampajListu();
})

//Ispisati podatke o pacijentu sa najvećim bmi vrednošću.

let btnMaxBmi =document.getElementById("racunajMaxBmi")
let pMaxBmi = document.getElementById ("najBmi")

btnMaxBmi.addEventListener("click", ()=>{
    let maxBmi = pacijenti[0];
    for(let i=0;i<pacijenti.length;i++){
        if(maxBmi.bmi() < pacijenti[i].bmi()){
        maxBmi=pacijenti[i]
        }
    }
    maxBmi.stampaj();
    pMaxBmi.innerHTML+=maxBmi.stampajListu()
})

// Ispisati sve pacijente čije ime sadrži slovo A.

let btnSadrziA = document.getElementById("Aa");
let psadrziA = document.getElementById("psad")

btnSadrziA.addEventListener("click", () =>{
    for(let i=0; i<pacijenti.length;i++){
    let sadrziA = pacijenti[i]
        if(sadrziA.ime.includes("a")){
        sadrziA.stampaj()
        psadrziA.innerHTML+=sadrziA.stampajListu()
        }
    }
})

// Napraviti funkciju srednjaVisina kojoj se prosleđuje niz pacijanata a koja određuje i vraća srednju visinu pacijenata.

let srednjaVisina = niz =>{
    let sumaVisina=0;
    let brPacijenata=niz.length;
    niz.forEach(p=>{
        sumaVisina+= p.visina;
    })
    return sumaVisina/brPacijenata;
}
console.log(srednjaVisina(pacijenti))

let divAvgVisina = document.querySelector("#avgVisina")
divAvgVisina.innerHTML = `Prosecna visina svih pacijenata je: ${srednjaVisina(pacijenti)}`







