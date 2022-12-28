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

let blog4 = {
    title: "Responsive web design",
    likes: 300,
    dislikes: 15
};

let blog5 = {
    title: "NoSQL DB",
    likes: 2,
    dislikes: 15
};

let blog6 = {
    title: "Event Listener",
    likes: 7,
    dislikes: 70
};

let blogs = [blog1, blog2, blog3];

let user = {
    username : "Jelena",
    age: 28,
    blogs: [blog1, blog2, blog3],
    logBlogs: function (){
        this.blogs.forEach(blog=>{
            console.log(blog.title);
        });
    }
};

let user1 = {
    username: "Stefan",
    age:13,
    blogs: [blog4, blog5],
    logBlogs: function (){
        this.blogs.forEach(blog=>{
            console.log(blog.title);
        });
    }
};

let user2 = {
    username: "JohnDoe",
    age:6,
    blogs: [blog6],
    logBlogs: function (){
        this.blogs.forEach(blog=>{
            console.log(blog.title);
        });
    }
};

// ispisati sve blogove korisnika user
user.logBlogs()

// ispisati sve blogove korisnika user
console.log(user.blogs);
console.log(user.blogs[0]); // ovo je prvi blog korisnika user
// ispisati naslov prvog bloga koji je napisao korisnik user
console.log(user.blogs[0].title)

//////////////////

let users = [user, user1, user2];

// Ispisati imena onih autora koji imaju ispod 18 godina

users.forEach(u=>{
    if(u.age < 18){
       console.log(u.username);
    }
});

// Ispisati naslove onih blogova koji imaju više od 50 lajkova

users.forEach(user=>{
    let blogs = user.blogs; // niz blogova tekuceg user-a
    blogs.forEach(blog=>{
        if(blog.likes>50){
            console.log(blog.title)
        }
    });
});

// Ispisati sve blogove autora čiji je username ’JohnDoe’
users.forEach(user=>{
    if(user.username == "JohnDoe"){
        user.logBlogs();
    }
})

// Napraviti arrow funkciju kojoj se prosledjuje username autora, a ona ispisuje sve njegove blogove
let printBlogs = username => {
    users.forEach(user=>{
    if(user.username == "JohnDoe"){
        user.logBlogs();
    }
});
}
printBlogs("Stefan");


// Ispisati imena onih autora koji imaju ukupno više od 100 lajkova za blogove koje su napisali

users.forEach(u=>{
    let blogs=u.blogs;
    let zbir=0;
    blogs.forEach(blog=>{
        zbir=zbir+blog.likes
    });
    if(zbir>100){
        console.log(u.username)
    }
})

// Ispisati naslove onih blogova koji imaju natprosečan broj pozitivnih ocena

// let prosecniLike = likes=>{
//     let suma=0;
//     likes.forEach(like=>{
//         suma= suma+like
//     })
//     return suma/blogs.likes.length
// }

// let blabla= user=>{
//     user.forEach(u=>{
//     blogs.forEach(blog=>{
//         if (prosecniLike(u.blog.likes)>prosecniLike(blog.likes)){
//             natprosecni=u
//         }
//     })
//     return `${natprosecni}`
// })
// }
// console.log((blogs))

let prosecniLikes= users =>{
    let suma=0; // ukupna suma lajkova
    let brojac=0; // ukupan broj blogova
    for(i=0; i<users.length;i++){
        let user=users[i]; // ovo daje objekat user (jedan element iz niza user)
        let blogs=user.blogs // ovo daje niz blogova za "selektovanog" korisnika
        for(let j=0; j<blogs.length;j++) {
            let blog=blogs[j]// ovo daje objekat blog (jedan element iz niza blogs)
            suma=suma+blog.likes;//Dodajem lajkove na sumu
            brojac++ // Dodajem da sam naisla na jos jedan blog
        }
    }
    return suma/brojac
}

let iznadProsekaLajkovi = users =>{
    let prosekLajkova=prosecniLikes(users); // cuvam
     for(let i=0; i<users.length;i++){
        let user= users[i];
        let blogs=user.blogs;
        for(let j=0; j<blogs.length;j++){
            let blog=blogs[j];
            if(blog.likes>prosekLajkova){
                console.log(blog.title)
            }
        }
     }
}
console.log(`prosecan broj lajkova je ${prosecniLikes(users)}`)
iznadProsekaLajkovi(users)
