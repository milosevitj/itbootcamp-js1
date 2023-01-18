import Film from "./film.js";

let film1 = new Film(
  "Pulp Fiction",
  "Quentin Tarantino",
  1994,
  [10,9,9,9]
);
let film2 = new Film("Avatar", "James Cameron", 2009, [10, 10, 8, 9, 7]);
let film3 = new Film("Forrest Gump", "Robert Zemeckis", 1994, [8, 6, 7, 8, 7]);

film1.stampaj();
film2.stampaj();
film3.stampaj();

let filmovi = [film1, film2, film3];

console.log(film3.ocene);
console.log(`Prosecna ocena ${film1.naslov} filma je: ${film1.prosek()}`);

// Napraviti funkciju vekFilmova kojoj se prosleđuje niz filmova i ceo broj (vek), a funkcija ispisuje samo one filmove koji su stvoreni u prosleđenom veku

let vekFilmova = (niz, vek) => {
  let godina1 = 100 * vek - 99;
  let godina2 = 100 * vek;
  niz.forEach((f) => {
    if (f.godinaIzdanja >= godina1 && f.godinaIzdanja <= godina2)
      console.log(f.naslov);
  });
};
vekFilmova(filmovi, 20);

//Napraviti funkciju prosecnaOcena kojoj se prosleđuje niz filmova, a koja određuje i vraća  prosečnu ocenu svih filmova.

let prosecnaOcena = (niz) => {
  let suma = 0;
  let broj = 0;
  niz.forEach((f) => {
    f.ocene.forEach((o) => {
      suma += o;
      // broj++
    });
    broj += f.ocene.length;
  });
  return suma / broj;
};
console.log(prosecnaOcena(filmovi));

// Napraviti funkciju osrednjiFilm kojoj se prosleđuje niz filmova a ona vraća film koji je najbliži prosečnoj oceni svih filmova.

let osrednjiFilm = (niz) => {
  let avgSvihFilmova = prosecnaOcena(niz); // Prosecna ocena svih filmova u nizu
  let minFilm = niz[0]; // Pretpostavka za film najblizi proseku
  let minRastojanje = Math.abs(avgSvihFilmova - minFilm.prosek());

  niz.forEach((f) => {
    console.log(f.prosek());
    let rastojanje = Math.abs(avgSvihFilmova - f.prosek()); // koliko se razlikuje prosecna ocena svih filmova od prosecne ocene posmatranog filmova
    if (minRastojanje > rastojanje) {
      minRastojanje = rastojanje;
      minFilm = f;
    }
  });
  return minFilm;
};
console.log(osrednjiFilm(filmovi));

// Napraviti funkciju najboljeOcenjeni kojoj se prosleđuje niz filmova, a ona vraća najbolje ocenjeni film.
let najboljeOcenjeni = (niz) => {
  let naj = niz[0];
  niz.forEach((f) => {
    if (naj.prosek() < f.prosek()) {
      naj = f;
    }
  });
  return naj;
};
console.log(najboljeOcenjeni(filmovi));

// Napraviti funkciju najmanjaOcenaNajboljeg kojoj se prosleđuje niz filmova a ona određuje najbolji film i ispisuje njegovu najslabiju ocenu.

let najmanjaOcenaNajboljeg = (niz) => {
  let najFilm = najboljeOcenjeni(niz);
  let najslabijaOcena = najFilm.ocene[0];
  najFilm.ocene.forEach((o) => {
    if (najslabijaOcena > o) {
      najslabijaOcena = o;
    }
  });
  console.log(najslabijaOcena);
};
najmanjaOcenaNajboljeg(filmovi);

// Napisati funkciju najmanjaOcena kojoj se prosleđuje niz filmova, a koja vraća koja je najmanja ocena koju je bilo koji film dobio.

let najmanjaOcena = (niz) => {
  // Ovo mmozemo da razlozimo na sledeci kod:
  /*
    let prviObjekat = niz[0]; // Ovo je objekat
    let nizOcenaPrvogObjekta = prviOjekat.ocene // Ovo je niz ocena seletkrovanog objekta
    let najmanja=nizOcenaPrvogObjekta[0] // Ovo je prva ocena iz niza ocena
    */
  let najmanja = niz[0].ocene[0];
  niz.forEach((film) => {
    film.ocene.forEach((o) => {
      if (o < najmanja) {
        najmanja = o;
      }
    });
  });
  return najmanja;
};
console.log(najmanjaOcena(filmovi))

// Napisati funkciju najcescaOcena kojoj se prosleđuje niz ocena, a ona vraća ocenu koju su filmovi najčešće dobijali. 

// niz koji sadrzi sve ocene:

let sveOcene = niz =>{
    let arrSVeOcene = [];// prazan niz u koji smestamo sve ocene
    niz.forEach(f=>{
        // arrSVeOcene.push(f.ocene) // daje niz u kome su ocene za svaki od filmova podnizovi
        arrSVeOcene = arrSVeOcene.concat(f.ocene) //nema podnizove, sve je jedan veliki niz
    })
    return arrSVeOcene
    // arrSVeOcene.push(f1.ocene)
    // arrSVeOcene = arrSVeOcene.concat(f1.ocene)
}
console.log(sveOcene(filmovi))

let najcescaOcena = nizOcena =>{
    let pretpostavkaNajucestalijiElem = nizOcena[0];
    let brPojavljivanjaPretpostavke = 1; // sigurno se jednom pojavila ta ocena
    for(let i=0;i<nizOcena.length;i++){
        let tekuci = nizOcena[i];// zvezdica
        let tekuciBrPojavljivanja = 0;

        for(let j=0; j<nizOcena.length;j++){
            if(tekuci == nizOcena[j]){
                tekuciBrPojavljivanja++ //nasli smo isti element i treba povecati broj pojavljivljanja tekuceg
            }
        }
        if(tekuciBrPojavljivanja > brPojavljivanjaPretpostavke){
            brPojavljivanjaPretpostavke = tekuciBrPojavljivanja;
            pretpostavkaNajucestalijiElem = tekuci;
        }
    }
    return pretpostavkaNajucestalijiElem
}
let nizSvihOcena=sveOcene(filmovi);
console.log(najcescaOcena(nizSvihOcena))


// Napraviti funkciju iznadOcene kojoj se prosleđuje ocena i niz filmova, a ona vraća niz onih filmova koji su bolje ocenjeni (veća im je prosečna ocena) od prosleđene ocene.

let iznadOcene = (ocena, filmovi) =>{
    let nizFilmova =[]
    filmovi.forEach (f=>{
        if(f.prosek()>ocena){
            nizFilmova.push(f)
        }
    })
    return nizFilmova
}
console.log(film1.prosek(), film2.prosek(), film3.prosek())
console.log(iznadOcene(8.5,filmovi))

// Napisati funkciju iznadOceneNoviji kojoj se prosleđuje ocena i niz filmova  a koja treba da na ekranu da ispiše sve podatke o najnovijem filmu koji zadovoljava prosleđenu ocenu

let iznadOceneNoviji = (ocena, filmovi) => {
    let nizFilmova = iznadOcene(ocena, filmovi);
    let noviji = nizFilmova[0];
    nizFilmova.forEach(f=>{
        if(f.godinaIzdanja > noviji.godinaIzdanja){
            noviji = f
        }
    })
    console.log(noviji)
}
iznadOceneNoviji(8,filmovi)