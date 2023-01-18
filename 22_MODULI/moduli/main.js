// import {GL,GI} from "./modules/list.js"
// import { generateTable, generateTableRow, generateItem as generalTableItem } from "./modules/table.js";

// let ul = GL (document.body);
// GI (ul, "slike/buketGerber.jpg")
// GI (ul, "slike/buketLjiljan.png")
// GI (ul, "slike/buketRuza.png")

// let table = generateTable (document.body)
// let tr = generateTableRow (table)
// generalTableItem(tr, "slike/buketGerber.jpg")
// generalTableItem(tr, "slike/buketLjiljan.png")
// generalTableItem(tr, "slike/buketRuza.png")


import * as Lista from "./modules/list.js"

import * as Tabela from "./modules/table.js"

let ul = Lista.GL(document.body);
for(let i=1; i<=Lista.length;i++){
    Lista.GI(ul, `slike/0${i}.png`)
}

let table = Tabela.generateTable (document.body);
let tr= Tabela.generateTableRow (table);
for(let i=1;i<=Tabela.length;i++){
    Tabela.generateItem(tr, `slike/0${i}.png`)
}