class Pacijenti {
    constructor( i, v ,t){
        this.ime = i;
        this.visina = v;
        this.tezina = t;
    }
    set ime(i){
        if(i.length>0){
            this._ime=i
        }
        else{
            this._ime="Neko ime"
        }
    }
    get ime(){
        return this._ime
    }

    set visina(v){
        if(v>0 && v<2.5){
            this._visina=v
        }
        else{
            this._visina=1.8
        }
    }
    get visina(){
        return this._visina
    }

    set tezina(t){
        if(t>0 && t<550){
            this._tezina=t;
        }
        else{
            this._tezina=100;
        }
    }
    get tezina(){
        return this._tezina
    }

    stampaj(){
        console.log(`${this.ime}, ${this.visina}, ${this.tezina}`)
    }

    bmi(){
        let bmiVrednost= (this.tezina)/((this.visina/100) *(this.visina/100))
    }

    kritican(){
        if(this.bmi()<15 || this.bmi() >40){
            return true
        }
        else{
            return false
        }
    }
}
export default Pacijenti