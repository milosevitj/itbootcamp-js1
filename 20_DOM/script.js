console.log(document);// objekat (koren dom stabla)
console.log(document.body); // objekat body tag iz doma stabla

let el1 = document.getElementById("p2");
console.log(el1) //objekat iz dom stabla

let el2 = document.getElementsByClassName("par")
console.log(el2) // HTMl collection objekata iz DOM stabla

let el3 = document.getElementsByTagName ("p")
console.log(el3) // HTML collection iz dom tabla

let el4 = document.getElementsByTagName("a")
console.log(el4)

let el5 = document.getElementsByName ("p")
console.log(el5) // NodeList objekata iz DOM stabla

// pristup elementima html kolekcije

for(let i=0; i<el2.length; i++){
    console.log(el2[i]) // el2[i] je element(objekat,html tag) iz html kolekcije el2
};

// OVAKO NE MOZE JER HTML COLLECTION NE POSEDUJE FOR EACH PETLJU
// el2.forEach(e=>{
//     console.log(e)
// })

let elems = Array.from(el2);
elems.forEach(e=>{
    console.log(e)
})

//Pristup elementima Nodelist-moze i preko for i prekof forEach

el5.forEach(e=>{
    console.log(e)
})

//Primena metoda querySelector
let t1=document.querySelector("#p2"); // kao parametar ide css seleketor
console.log(t1)//objekat

let t2=document.querySelector(".par"); 
console.log(t2); // objekat= PRVI objekat obuhvacen prosledjenim CSS selektorom

let t3=document.querySelectorAll(".par");
console.log(t3) 

t1.innerHTML += "Novi tekst paragrafa sa id-jem <span class='bold'>p2 </span>"

for (let i=0; i< t3.length;i++){
    t3[i].innerHTML = "promena teksta u elementu sa klasom<span class='bold'> par</span>"
}
// postavlja vrednost atributa
let link = document.querySelector ("a");
link.href = "https://www.google.com"
link.target = "_blank"
link.id="link"
//postavlja stil datom elementu / POJEDINACNO
// link.style.color = "red";
// link.style.border = "1px solid blue"
// link.style.fontSize = "24px"
//postavlja stila elementu ZAJDNO
// link.style = "color:red; border:1px solid blue; font-size:24px"

link.setAttribute("style", "color:red; border:1px solid blue; font-size:24px")
link.setAttribute("id", "link")

let table = document.querySelector ("table");
console.log(table)
console.log(table.parentNode)
console.log(table.childNodes[0])
console.log(table.childNodes[1]) //tbody
console.log(table.childNodes[1].childNodes[0]) //tr

for(let i=0; i< document.body.childNodes.length;i++) {
    let element = document.body.childNodes[i];
    console.log(element)
}

let naslov= document.createElement('h1')
naslov.innerHTML = "Naslov kreiran iz JS=a"
document.body.prepend(naslov)

// prepend dodaje kao prvi potomak
//append dodaje kao poslednji potmoak

naslov.remove(naslov) // brisanje zadatog elementa