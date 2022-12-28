// Dohvatiti prvi paragraf na stranici.
let e1 = document.getElementById("prvi")
console.log(e1)

// Dohvatiti prvi div tag sa klasom „error“.
let e2 = document.querySelector("div.error")
console.log(e2)

//  Dohvatiti poslednji red u tabeli.
let e3 =document.getElementById("red")
// let e3_2=document.querySelector("#ime tr:last-child")
console.log(e3)

//Dohvatiti sve linkove na stranici.
let e4 = document.getElementsByTagName ("a")
console.log(e4)
for(let i=0; i<e4.length;i++){
    console.log(e4[i])
    e4[i].target="_blank"
}


//Dohvatiti sve slike na stranici.
let e5 = document.getElementsByTagName ("img")
console.log(e5)



//  1.
let par = document.getElementsByTagName ("p")
for(let i=0; i<par.length; i++){
    par[i].innerHTML += "VAZNO!" 
}

// 2. 
let divovi = document.querySelectorAll("div.error")
for(let i=0; i<divovi.length; i++){
    divovi[i].innerHTML += "<h1>GRESKA</h1>"
}

//3
let n= document.getElementsByTagName ("p")
for(let i=0;i<n.length;i++){
    n[i].innerHTML += (i+1) **2
}

// 4.

let img=document.getElementsByTagName ("img")
for(let i=0;i<img.length;i++){
    img[i].alt = "img"
}

//5 

let ljubicasta = document.getElementsByTagName ("p")
for(let i=0; i<ljubicasta.length;i++){
    ljubicasta[i]. style.color= "purple"
}
// par.setAttribute ("style", "color:purple")

//6
let parni = document.getElementsByTagName ("p")
for(let i=0;i<parni.length;i++){
    if(i%2==0){
        parni[i].style.backgroundColor = "green"
    }
    else {
        parni[i].style.backgroundColor = "red"
    }
}

// 7
let linkovi = document.getElementsByTagName ("a")
for(let i=0; i<linkovi.length;i++){
    linkovi[i].style.padding = "5px" 
    linkovi[i].style.fontSize = "8px" 
    linkovi[i].style.textDecoration = "none"
    linkovi[i].style.target = "_blank"
    if(i%2==0){
        linkovi[i].style.backgroundColor = "blue"
        linkovi[i].style.color = "white"
    }
    else {
        linkovi[i].style.backgroundColor = "green"
        linkovi[i].style.color = "purple"
    }
}

// 8
let slike = document.getElementsByTagName ("img")
for(let i=0; i<slike.length;i++){
    if(slike[i].src.includes(".jpg")){
        slike[i].style.border = "2px solid red"
    }
}

//9
// let blank = document.getElementsByTagName ("a")
// for(let i=0; i<blank.length;i++){
//     blank[i].style.target = "_blank"
// }