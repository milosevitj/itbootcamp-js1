import generateImage from "./general.js";

function generateTable (parent){
    let tabela = document.createElement ('table');
    tabela.style.border = "1px solid black"
    parent.append(tabela);
    return tabela
}

function generateTableRow (parent){
    let tr= document.createElement ('tr');
    parent.append(tr);
    return tr
}

function generateItem (parent,src){
    let td= document.createElement ('td');
    let img = generateImage (src)
    parent.append(td);
    td.append(img)
    return td
}

const length=3;

export {generateTable,generateItem,generateTableRow, length}


