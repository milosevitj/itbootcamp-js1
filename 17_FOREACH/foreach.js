// zadatak 2

let sumaElem = niz =>{
    let suma = 0;
    niz.forEach(el => {
        suma= suma+el;
    }); // ova arrow funkcija jeste call back funkcija
    return suma;
}

// zadatak 5
let maxVr = niz => {
    let max=[0];
    niz.forEach(el => {
        if(el>max){
            max=el;
        }
    });
    return max;
}

// zadatak 7 Odrediti indeks maksimalnog elementa celobrojnog niza.
let indexMaxVr = niz =>{
    let max= niz[0];
    let idx = 0;
    niz.forEach((el, i) =>{
        if(el>max){
            max=el;
            idx=i;
        }
    })
    return idx;
}
///
let indexSvihMaxVr2 = niz =>{
    let max=maxVr(niz);
    let indices=[]
    niz.forEach((el,i) =>{
        if(el==max ){
            indices.push(i);
        }
    });
    return indices;
}

let a = [1,3,4,6];
console.log(sumaElem(a)); // sumaElem nije callback funkcija
console.log(maxVr(a));
console.log(indexMaxVr(a))

let b=[1,3,6,-8,6,6,4]
// console.log(indexMaxVr(b)); 
console.log(indexSvihMaxVr2(b))

// 19 Ispisati dužinu svakog elementa u nizu stringova. 

let duzina = niz =>{
    niz.forEach(el =>{
        console.log(el.length)
    });
}

let elementi = ["jabuka", "kruska", "jagodaaaaaa", "ananas"]
duzina(elementi)


// 20 Odrediti element u nizu stringova sa najvećom dužinom.

let najvecaDuzina = niz =>{
    let najveci = 0
    
    niz.forEach (el =>{
        if(el.length>najveci){
            najveci = el.length
        }
    })
    let najString= undefined;
    niz.forEach (el=>{
        if(el.length == najveci){
            najString=el
        }
    })
    return najString;
}
console.log(najvecaDuzina(elementi))

// 21 Odrediti broj elemenata u nizu stringova čija je dužina veća od prosečne dužine svih stringova u nizu.

let prosecnaDuzina = niz =>{
    let duz=0;
    niz.forEach(el=>{
        duz=duz+el.length
    })
    return duz/niz.length
}
console.log(prosecnaDuzina(elementi))

let brojNatprosecnoDugih = niz => {
    let duz = prosecnaDuzina(niz);
    let br=0;
    niz.forEach(el =>{
        if(el.length>duz){
            br++;
        }
    })
    return br;
}
console.log(brojNatprosecnoDugih(elementi))

// 22 Odrediti broj elemenata u nizu stringova koji sadrže slovo 'a’. 

let brSadrziA= niz =>{
    let br=0;
    niz.forEach (el=>{
        if(el.includes("a") || el.includes("A")){
            br++
        }
    })
    return br;
}
console.log(brSadrziA(elementi));

// 23 Odrediti broj elemenata u nizu stringova koji počinju na slovo 'a' ili 'A’. 

let brPocinjeA= niz =>{
    let br=0;
    niz.forEach (el=>{
        if(el[0]==("a") || el[0]==("A")){
            br++
        }
    })
    return br;
}
console.log(brPocinjeA(elementi));
