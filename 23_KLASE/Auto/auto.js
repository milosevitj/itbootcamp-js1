class Auto {
    constructor(marka, boja, imaKrov) {
        this._marka = marka;
        this._boja = boja;
        this._imaKrov = imaKrov;
    }
    //zapisuje se samo ime metode
    sviraj(){
        console.log(`Auto marke ${this._marka} svira:beep beep!`)
    }
    // Seteri
    set marka(m) {
        if(m.length>0){
            this._marka=m;
        }
        else{
            this._marka="Skoda";
        }
        console.log("pozvan je seter za polje _marka")
    }

    set boja (b){
        if(b.length>0){
            this._boja=b
        }
        else{
            this._boja = "bela"
        }
    }

    set imaKrov (ik) {
        if(ik==true || ik == false){
            this._imaKrov = ik
        }
        else{
            this._imaKrov = false
        }
    }

    // GETERI citaju vrednost!

    get marka(){
        return this._marka;
    }

    get boja(){
        return this._boja
    }

    get imaKrov(){
        return this._imaKrov
    }
}
export { Auto }
