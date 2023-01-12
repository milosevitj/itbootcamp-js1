class Film {
    constructor (naslov, reziser, godinaIzdanja){
        this.naslov = naslov;
        this.reziser = reziser;
        this.godinaIzdanja = godinaIzdanja;
    }
    stampaj(){
        console.log(`${this.naslov} - ${this.reziser} - ${this.godinaIzdanja}`)
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