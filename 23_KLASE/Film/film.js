class Film {
    constructor (n, r, g, o){
        this.naslov = n;
        this.reziser = r;
        this.godinaIzdanja = g;
        this.ocene = o;
    }
    stampaj(){
        console.log(`${this.naslov} - ${this.reziser} - ${this.godinaIzdanja}`)
    }

    prosek(){
        let sumaOcena = 0;
        this.ocene.forEach(ocena=>{
            sumaOcena += ocena;
        })
        return sumaOcena/this.ocene.length
    }

    set naslov(n){
        if(n.length >0){
            this._naslov = n;
        }
        else{
            this._naslov = "Film"
        }
    }

    set reziser(r){
        if(r.length>0){
            this._reziser = r;
        }
        else{
            this._reziser = "Nepoznata osoba"
        }
    }

    set godinaIzdanja(god){
        if(god<1800){
            this._godinaIzdanja = 1800
        }
        else{
            this._godinaIzdanja = god
        }
    }

    set ocene(o){
        if(Array.isArray(o)){
            this._ocene=o;
        }
        else{
            this._ocene=[];
        }
        
    }

    get ocene(){
        return this._ocene
    }

    get naslov(){
        return this._naslov
    }

    get reziser(){
        return this._reziser
    }

    get godinaIzdanja(){
        return this._godinaIzdanja
    }


}
export default Film