let auto1 = {
    marka: "tojota",
    km: 1000,
    godiste: 2016,
    vlasnici: ["Pera", "Mika", "Laza"]
}

let auto2 = {
    marka: "nisan",
    km: 1500,
    godiste: 2018,
    vlasnici: ["Pera", "Mika", "Laza"]
}

let auto3 = {
    marka: "jugo",
    km: 1700,
    godiste: 2020,
    vlasnici: ["Pera", "Mika", "Laza"]
}

let auto4 = {
    marka: "fica",
    km: 2000,
    godiste: 2022,
    vlasnici: ["Pera", "Mika", "Laza"]
}
//1 Kreirati niz od najmanje tri objekta (najmanje tri automobila koji se nalaze na placu

let automobili= [auto1, auto2, auto3, auto4]
console.log(automobili)
//2 Napisati funkciju prosecnoGodiste kojoj se prosleđuje niz automobila, a koja
// vraća prosečno godište proizvodnje automobila.
// Ukoliko je prosečno godište automobila realan broj, zaokružiti ga na donji ceo
// deo.

let prosecnoGodiste = niz =>{
    let suma=0;
    for(let i=0; i<niz.length;i++){
        suma= suma+ niz[i].godiste
    }
    return Math.floor(suma/niz.length)
}
console.log(prosecnoGodiste(automobili))


//3 Napisati funkciju markaNajmanjeKm kojoj se prosleđuje niz automobila kao i
// marka automobila, a koja vraća automobil (objekat) sa zadatom markom, a koji je
// prešao najmanje kilometara.
// Ukoliko nema automobila sa datom markom, kao rezultat vratiti null.
// Ukoliko ima tačno jedan automobil sa datom markom, vratiti taj automobil.
// Ukoliko ima više automobila sa datom markom koji su prešli isti broj kilometara,
// vratiti najskorije proizveden takav automobil. Ukoliko, pak, ima i više takvih
// automobila, vratiti bilo koji od njih.

let markaNajmanjeKm = (automobili,marka) =>{
    let km=0;
    // let auto=null;
    let auto=true;
    for(let i=0;i<automobili.length;i++){
        if(automobili[i].marka == marka && i==0 ){
            km=automobili[i].km
            auto=automobili[i]
        }
        if(automobili[i].marka == marka && automobili[i].km<km){
            km=automobili[i].km
            auto=automobili[i]
        }
    }
    if(auto==null){
        return null
    }
    else{
        return auto
    }
}
console.log(markaNajmanjeKm(automobili,"Tojota"))

// 4

let prosekKm10 = automobili =>{
    let suma=0;
    let br=0;
    for(let i=0; i<automobili.length;i++){
        if( 2022 - automobili[i].godiste <= 10 ){
            suma=suma+automobili[i].km
            br++
        }
    }
    return suma/br
}

console.log(prosekKm10(automobili))


// 5 Napisati funkciju rokfeler kojoj se prosleđuje niz automobila kao i ime vlasnika, a
// koja vraća true ukoliko postoji vlasnik sa zadatim imenom koji je u svom
// vlasništvu posedovao više od dva automobila, a u suprotnom vraća false.
// Pozvati funkciju i rezultat ispisati u konzoli.

let rokfeler = (automobili,ime)=>{
    automobili.forEach (a=>{
        let x=true;
        let y=false;
        let br=0;
        let vlasnik=a.vlasnici
        vlasnik.forEach(vl=>{
            if(vl.includes(`${ime}`)){
                br++
                console.log(vl)
            }
            if(br>2){
                return x
            }
            else{
                return y
            }
        })
        
    })
}
console.log(rokfeler(automobili,"Pera"))

// 6

let raniji = [auto1,auto2]
let skoriji = [auto3,auto4]

//prosek raniji

let ranijiAut = raniji =>{
    let suma=0;
    for(i=0;i<raniji.length;i++){
        suma=suma+raniji[i].godiste
    }
    return suma/raniji.length
}
console.log(ranijiAut(raniji))

//prosek kasniji

let kasnijiAut = skoriji =>{
    let suma=0;
    for(i=0;i<skoriji.length;i++){
        suma=suma+skoriji[i].godiste
    }
    return suma/skoriji.length
}
console.log(kasnijiAut(skoriji))

//skorije

let skorije = automobili =>{
    let naj=true
    automobili.forEach(a=>{
        if(kasnijiAut(skoriji)<ranijiAut(raniji)){
            naj=false
        }
        else{
            naj=true
        }
    })
    return naj
}
console.log(skorije(automobili))