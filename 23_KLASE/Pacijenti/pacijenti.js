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
    stampajListu(){
        let htmlLista = 
        `<ul>
            <li>Ime: ${this.ime}</li>
            <li>Visina: ${this.visina}</li>
            <li>Tezina: ${this.tezina}</li>
        </ul>`;
        return htmlLista
    }

    bmi(){
        let bmi = this.težina / (this.visina * this.visina);
        return bmi;
    }

    kritican() {
        let x = false;
        if (this.bmi() < 15 || this.bmi() > 40) {
            x = true;
        }
        return x;
    }
}
export default Pacijenti