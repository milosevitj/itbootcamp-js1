// 1 Svim parnim paragrafima na stranici dodati klasu error, a svim neparnim paragrafima dodati klasu success

let par = document.getElementsByTagName ("p")

for(let i=0;i<par.length;i++){
    if(i%2==0){
        par[i].classList.add ("error")

    }
    else{
        par[i].classList.add ("succes")
    }
}

//2 Tekst u paragrafima naizmenično pisati veličinom 15px, veličinom 20px i veličinom od 25px.
for(let i=0;i<par.length;i++){
    if(i%3==0){
        par[i].style.fontSize = "15px"
    }
    else if(i%3==1){
        par[i].style.fontSize = "20px"
    }
    else{
        par[i].style.fontSize = "25px"
    }
}

//4 Svim paragrafima koji imaju klasu error skloniti tu klasu, a svim paragrafima koji nemaju klasu error dodati tu klasu.

for(i=0;i<par.length;i++){
par[i].classList.toggle(`error`)
}
