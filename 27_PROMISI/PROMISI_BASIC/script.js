let getSomething = () => {
  let obj = new Promise((resolve, reject) => {
    resolve("Nesto resolve"); //Ako je sve proslo ok onda je resolve
    reject("Nesto reject"); //Ako nesto nije proslo ok onda je reject
  });
  return obj; // vraca objekat promise
};

// Ako je promise vratio reolve, realizuje se .then() grana
// Ako je promise vratio reject, realizuje se .catch() grana

getSomething().then(a=>{ // automatski aktivira RESOLVE
    console.log(`aktivirana je .then grana ${a}`)
}).catch(b=>{
    console.log(`Aktivirana je .catch grana ${b}`)
})

