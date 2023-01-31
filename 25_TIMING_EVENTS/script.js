console.log(1);
console.log(2);
window.setTimeout(() => {
  console.log("Poruka ispisana nakon nekog vremena");
}, 1000 * 3);
console.log(3);
console.log(4);

let i = 5;
setInterval(() => {
  console.log(i);
  i++;
}, 1000);

let btn1 = document.querySelector("#click1");
let btn2 = document.querySelector("#click2");
let btn3 = document.querySelector("#click3");
let btn4 = document.querySelector("#click4");
let ispis = document.querySelector("#ispis");

let vreme = 1000 * 2; // moze i sa promenljivom
let tajmer = null;

btn1.addEventListener("click", function (e) {
  console.log(this);
  e.preventDefault();
  let datum = new Date();
  let h = datum.getHours();
  let m = datum.getMinutes();
  let s = datum.getSeconds();
  if (tajmer === null) {
    tajmer = setTimeout(function () {
      ispis.innerHTML = `${h}:${m}:${s}`;
      tajmer = null;
    }, 1000 * 2);
  }
  // moze i umesto 1000*2 - promenljiva vreme
});

btn2.addEventListener("click", function (e) {
  e.preventDefault();
  clearTimeout(tajmer);
  tajmer = null;
});

let vr = 0;
let clock = null; // clock -> sat1, clock ->sat2, clock -> sat3
btn3.addEventListener("click", () => {
  if (clock === null) {
    clock = setInterval(() => {
      // let datum = new Date();
      // let h = datum.getHours();
      // let m = datum.getMinutes();
      // let s = datum.getSeconds();
      // ispis.innerHTML = `${h}:${m}:${s}`;
      vr++;
      ispis.innerHTML = vr;
    }, 1000);
  }
});

btn4.addEventListener("click", () => {
  clearInterval(clock);
  clock = null;
});


let btn5 = document.querySelector("#click5");
let input = document.querySelector("#inp");
let btn6 = document.querySelector("#click6");


let interval = null;
let brojac=0;
btn5.addEventListener("click", () => {
  if (interval == null) {
    interval = setInterval(() => {
      brojac++
      input.value = `${brojac}`;
    }, 1000);
  }
});

btn6.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  brojac= 0;
  input.value = "";
});