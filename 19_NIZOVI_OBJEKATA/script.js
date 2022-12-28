console.log("Nizovi objekata");

let blog1 = {
    title: "HTML!",
    likes: 12,
    dislikes: 6
};

let blog2 = {
    title: "CSS!",
    likes: 20,
    dislikes: 15
};

let blog3 = {
    title: "Java Script",
    likes: 70,
    dislikes: 7
};

let blogs = [blog1, blog2, blog3];
// ispis niza objekata
console.log(blogs); 

// ispis jednog objekta iz niza
console.log(blogs[2]);

//ispis propertija
console.log(blogs[2].title);
console.log(blogs[2]["title"])

// ispis SVIH naslova blogova u konzoli
blogs.forEach(blog =>{
    console.log(blog.title)
})
//ispis SVIH naslova blogova na strainici
for(let i=0;i<blogs.length;i++){
    document.body.innerHTML += `<h3> ${blogs[i].title}</h3>`
    document.body.innerHTML += `<p> likes:${blogs[i].likes}</p>`
    document.body.innerHTML += `<p> dislikes:${blogs[i].dislikes}</p>`
}

// 1 Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća ukupan broj lajkova


let sumLikes = arrObj =>{
    let sum=0;
    arrObj.forEach(obj=>{
        sum += obj.likes
    });
    
    return sum;
}
console.log(sumLikes(blogs))

// 2 Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona vraća prosečan broj lajkova

let avgLikes = blogs =>{
    return sumLikes(blogs) / blogs.length;
}
console.log(`prosecan broj lajkova je: ${avgLikes(blogs)}`);

// 3 Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju više pozitivnih nego negativnih ocena

let viseLajkova = arr =>{
    arr.forEach(obj => {
        if(obj.likes>obj.dislikes){
            console.log(obj.title)
        }
    })
}
viseLajkova(blogs)

// 4 Napraviti arrow funkciju kojoj se prosleđuje niz objekata, a ona ispisuje sve one naslove blogova koji imaju najmanje duplo više pozitivnih nego negativnih ocena

let najmanje = arr=>{
    arr.forEach(obj=>{
        if(obj.likes>=obj.dislikes*2){
            console.log(obj.title)
        }
    })
}
najmanje(blogs)

// 5 Napisati arrow funkciju kojoj se prosleđuje niz objekata a ona ispisuje sve naslove koji se završavaju uzvičnikom

let uzvicinik = arr =>{
    arr.forEach(obj=>{
        if(obj.title.endsWith("!")){
            console.log(obj.title)
        }
    })
}
uzvicinik(blogs)




