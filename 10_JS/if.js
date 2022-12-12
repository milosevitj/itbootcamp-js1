let x,y
x = 3;
y = 3;
console.log (x == y);

// poredjenje po jednakosti
if(x==y) 
{ //sta pisemo izmedju viticastih zagrada zove se blok-U TOM BLOKU
    console.log("Vrednosti promenljivih x i y su jednake");
    console.log("Jos jedna poruka");
    console.log ("Vrednosti " + x+ "i" + y + "jednake");

    // vrednosti u string kose navodnike koristimo``
    console. log(`vrednosti ${x} i ${y} su jednake`);

}

console.log ("Komanda posle IF grananja");

x = 5;
x = 4.5;
x = "4";
y = "4";
if (x === y)
{
    console.log (`Vrednosti x i y su jednake po tipu i po vrednosti`)
}

x = "14";
y = "4";
if(x !== y)
{
    console.log (`vrednosti x i y su razlicite po tipu ili po vrednosti`);
}