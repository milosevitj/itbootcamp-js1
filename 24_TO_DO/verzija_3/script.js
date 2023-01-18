let input = document.getElementById("tekst");
let lista = document.querySelectorAll("li");

// lista.forEach((li) => {
//   li.addEventListener("click", () => {
//     // 1 nacin
//     if (li.style.textDecoration == "line-through") {
//       li.style.textDecoration = "none";
//     } else {
//       li.style.textDecoration = "line-through";
//     }

//     //2 nacin
//     // li.classList.toggle("precrtaj")
//   });
// });

let list = document.querySelector("ul");

input.addEventListener("keyup", (e) => {
  // console.log(e.key, e.keyCode);
  if (e.key == "Enter") {
    let noviLiValue = input.value;
    let radio = document.getElementsByName("radio");
    let noviLi = document.createElement("li");
    noviLi.textContent += noviLiValue;
    if (noviLiValue != 0) {
      input.value = "";
    }
    radio.forEach((input) => {
      if (input.checked) {
        if (input.value == "pocetak") {
          list.prepend(noviLi);
        } else {
          list.appendChild(noviLi);
        }
      }
    });
  }
});
list.addEventListener("click", (e) => {
  // console.log('kliknuto na ul');
  // console.log(e)
  // console.log(e.target)
  // console.log(e.target.tagName)
  if (e.target.tagName == "LI") {
    // console.log("Kliknuto na LI")
    // e.target.classList.toggle("precrtaj");
    e.target.remove();
  }
});

//////////
// LOCAL STORAGE
///////////////////////////
// Smestanje u lokalnu memoriju
// localStorage.setItem("name", "Jelena");

localStorage.setItem("username","Jelena")
localStorage.setItem("city","Nis")

// Update u lokalnoj memoriji
localStorage.setItem("username", "stefan")

//Ukoliko key postoji vec u local storage onda vrsi update vrednosti za taj key
//Ukoliko key ne postoji u local storage onda vrsi dodavanje (novi unos) u local storage

console.log(localStorage.getItem("city"))
console.log(localStorage.getItem("name"));
// MOZE I OVAKO zabeleziti u neku ptromenljivu  i onda je ispisati
let u = localStorage.getItem("username") 
console.log(u);

localStorage.setItem("year", 28);
let god = localStorage.getItem("year")
god++
localStorage.setItem("year", god)
console.log(`imam ${god} godina`)

