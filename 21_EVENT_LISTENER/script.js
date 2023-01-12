//1. dohvatiti element na koji zelimo da postavimo oslusckivac

let btnHello = document.getElementById ("hello");

//2. Postavljamo osluskivac na element koji smo dohvatili

btnHello.addEventListener("click",()=>{
    console.log("Hello!");
});

///////

let btnEvents = document.getElementById("hello3");

btnEvents.addEventListener("click",()=>{
    console.log('Event click')
})
btnEvents.addEventListener("dblclick",()=>{
    console.log('Event dblclick')
})


let btnHelloHello=document.getElementById("hello2");
btnHelloHello.addEventListener("dblclick",() =>{
    console.log("Hello hello");
})

// 1 Napraviti dugme klikom na koje se u konzoli ispisuje vrednost brojača br. 
// Brojač na početku ima vrednost 1, a svaki put kada se klikne na dugme povećati vrednost brojača za 1.

let btnBrojac=document.getElementById("brojac");
let brojac= 1;
btnBrojac.addEventListener("click", () =>{
    console.log(`Brojac je ${brojac}`)
    let btn=document.getElementById ("par");
    btn.innerHTML = brojac
    brojac=brojac+1 // brojac++
})

//2  Napraviti paragraf i vrednost prethodne funkcije ispisivati u paragrafu umesto u konzoli.


// Napraviti dugme + i dugme -. 
// Kada se klikne na dugme +, na ekranu prikazati vrednost brojača povećanu za 1. Kada se klikne na dugme -, na ekranu prikazati vrednost brojača smanjenu za 1.

// Dopuniti prethodni zadatak uslovima, tako da se na ekranu prikazuju samo pozitivni brojevi. Ukoliko je vrednost manja od nule, na ekranu nastaviti prikazivanje broja 0.

let btnMinus=document.getElementById("minus");
let btnPlus=document.getElementById("plus");
let spanRez =document.getElementById("rezultat");
let br=0;

btnMinus.addEventListener("click", ()=>{
    br--;
    if(br<0){
        br=0
    }
    spanRez.innerHTML=br;

    if(br>0 && br<10){
        spanRez.style.color = "green"
    }
    else if(br>10){
        spanRez.style.color= "red"
    }
})

btnPlus.addEventListener("click", ()=>{
    br++
    spanRez.innerHTML=br
    if(br>0 && br<10){
        spanRez.style.color = "green"
    }
    else if(br>10){
        spanRez.style.color= "red"
    }

})
// 5

let inputUnos = document.getElementById ("ime");
let btnPrikazi = document.getElementById ("prikazi");
let spanPrikaz = document.getElementById ("prikaz");
// let inputPol = document.querySelectorAll ("input[name='pol']")


btnPrikazi.addEventListener("click",()=>{
    let value = inputUnos.value; //preuzimam
    spanPrikaz.innerHTML = `Hello ${value}`; // isipis+ime promenljive //ukoliko stavimo += dodaje za po jedan 
    // inputUnos.value = ""; // prazni se polje
})

btnPrikazi.addEventListener ("dblclick",()=>{
    /// Selektovanje samo jednog rado buttona koji je cekiran///
    let checkedPol = document.querySelector("input[name='pol']:checked"); // jedan radio button koji je cekiran (vraca html tag)
    console.log(checkedPol) // vraca celokupan html tag
    let valueCheckedPol=checkedPol.value; // varaca da je vrednost VALUE iz selektovanog Html taga
    console.log(valueCheckedPol);
    console.log(checkedPol.value)// moze i bez medjupromenljive
    console.log(checkedPol.name)


    ///////// Selektovanje sih radio buttona prema name atributu////

    let inputRadios = document.getElementsByName ("pol");
    inputRadios.forEach(input=>{
        if(input.checked){
            console.log(input.value)
        }
    });

    /// Isto postizemo i ukoliko koristimo querySelectorAll

    let inputRadiosQuery = document.querySelectorAll ("input[name='pol']")
    inputRadiosQuery.forEach(input=>{
        if(input.checked){
            console.log(input.value)
        }
    })
});

/// zavrsi poslednji zadatak

