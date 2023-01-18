let butt = document.getElementById("bat");
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

butt.addEventListener("click", () => {
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
