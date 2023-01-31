const sportisti = [
  {
    imePrezime: "Lionel Messi",
    visina: 170,
    timovi: ["Barcelona", "Argentina"],
  },
  {
    imePrezime: "Cristiano Ronaldo",
    visina: 185,
    timovi: ["Juventus", "Portugal"],
  },
  {
    imePrezime: "Neymar Jr",
    visina: 175,
    timovi: ["Paris Saint-Germain", "Brazil"],
  },
];

const jsonData = JSON.stringify(sportisti);
console.log(jsonData)
const blob = new Blob([jsonData], { type: "application/json" });
const url = URL.createObjectURL(blob);
const a = document.createElement("a");
a.href = url;
a.download = "sportisti.json";
a.click();