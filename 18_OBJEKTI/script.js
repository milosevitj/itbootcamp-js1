console.log(`objekti`)

let blog1 = {
    title: 'HTML',
    content: 'Ovo je blog o osvnovnim html tagovima',
    author: 'Katarina'
};
console.log(blog1);
console.log(typeof blog1);

//ispis jednog propertija
console.log(blog1.title); 
// ili
console.log(blog1['title']);

// izmena propertija
blog1.content = "Osnove HTML-A";
console.log(blog1)
//ili
blog1['author']="Stefan";// kada pristupamo elementu stavljamo = 
console.log(blog1)

let user = {
    username: 'kacaaa92',
    age: 30,
    blogs: ["if naredba grananja", "For petlja", "While petlja"],
    login: function(){
        console.log('Ulogovani ste');
    },
    logout: function(){
        console.log('Izlogovani ste')
    },
    logBlogs: function (){
        this.blogs.forEach (b=>{
            console.log(b)
        });
    }
};

  // console.log(this.blogs) //  mora da se koristi THIS za pristupanje iskljucivo u nekom objektu

user.login();
user.logout(); 
user.logBlogs();
user.blogs.forEach( b=>{
    document.write(`<p>${b}</p>`);
})

/////////////////////////////////////////

// Formirati objekat dan koji sadrži:
// Datum (string u formatu YYYY/MM/DD),
// Kiša (true/false),
// Sunce (true/false),
// Oblačno (true/false),
// Vrednosti temperature (Niz temperatura tog dana).

let dan = {
    datum: "2021/12/23",
    kisa: false,
    sunce: false,
    oblacno: true,
    temperature: [5,10,15],

    // 1 zadatak Određuje i vraća prosečnu temperaturu izmerenu tog dana.

    prosecna: function (){
        let suma=0;
        this.temperature.forEach(t =>{
            suma += t;
        });
        return suma / this.temperature.length;
    },
    // 2 zadatak Prebrojava i vraća koliko merenja je bilo sa natprosečnom temperaturom.
    brNatprosecnih: function(){
        let br=0;
        let avg = this.prosecna();
        this.temperature.forEach(t =>{
            if(t>avg){
                br++
            }
        });
        return br;
    },
    // 3 zadatak Prebrojava i vraća koliko merenja je bilo sa maksimalnom temperaturom.
    brMaksimalne: function(){
        let br=0;
        let maks = this.temperature[0];
        this.temperature.forEach( m=>{
            if(m>maks){
                maks=m;
            }
        })
        this.temperature.forEach( m=>{
            if(maks==m){
                br++
                }    
        });
        console.log(maks)
        return br;
    },
    // 4 Prima dva parametra koji predstavljaju dve temperature. Potrebno je da metoda vrati broj merenja u toku dana čija je vrednost između ove dve zadate temperature (ne uključujući te dve vrednosti).
    brDvaParam: function (){
        let br=0;
        let suma=-1;
        let sredina=0;
        this.temperature.forEach((t1,t2) =>{
            suma= suma+(t1+ t2)
            sredina=suma/this.temperature.length
        });
        console.log(sredina);
        br++
        return br
    },
    // 5 Vraća true ukoliko je u većini dana temperatura bila iznad proseka. U suprotnom vraća false. 
    iznadProseka: function(){
        // if(this.brNatprosecnih()>this.temperature.length/2){
        //     return true;
        // }
        // else{
        //     return false;
        // }
        return this.brNatprosecnih()>this.temperature.length/2
    },
    //6 Za dan se smatra da je leden ukoliko nijedna temperatura izmerena tog dana nije iznosila iznad 0 stepeni. Metod vraća true ukoliko je dan bio leden, u suprotnom metod vraća false.
    ledenDan:function(){
        let x;
        this.temperature.forEach(t=>{
            if(t<0){
                x=true;
            }
            else{
                x=false;
            }
        });
        return x;
    },
    // 
    leden:function(){
        for(let i=0; i<this.temperature.length;i++){
            if(this.temperature[i]>0){
                return false;
            }
        }
        return true;
    },

};
console.log(dan.prosecna());
console.log(dan.brNatprosecnih());
console.log(dan.brMaksimalne());
console.log(dan.brDvaParam());
console.log(dan.iznadProseka());
console.log(dan.ledenDan());
console.log(dan.leden());

