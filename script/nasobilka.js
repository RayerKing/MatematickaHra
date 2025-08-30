// button pro cvičení
const cvikButton = document.getElementById("cvikNasobilka");
// button pro zkoušku na ostro
const naOstro = document.getElementById("naOstroNasobilka");
// hlavní sekce s vysvětlením a nadpisem
const hlavniSekce = document.getElementById("hlavniSekce");
// části flexu pro skrytí
const cvika = document.getElementById("cvika");
const ostryTest = document.getElementById("ostryTest");
// flex pro příklady
const flex = document.querySelector(".flex");
// pole násobilky
const nasobilka = [
  { prvni: 2, druhy: 2 },
  { prvni: 2, druhy: 3 },
  { prvni: 2, druhy: 4 },
  { prvni: 2, druhy: 5 },
  { prvni: 2, druhy: 6 },
  { prvni: 2, druhy: 7 },
  { prvni: 2, druhy: 8 },
  { prvni: 2, druhy: 9 },
  { prvni: 2, druhy: 10 },
  { prvni: 3, druhy: 3 },
  { prvni: 3, druhy: 4 },
  { prvni: 3, druhy: 5 },
  { prvni: 3, druhy: 6 },
  { prvni: 3, druhy: 7 },
  { prvni: 3, druhy: 8 },
  { prvni: 3, druhy: 9 },
  { prvni: 3, druhy: 10 },
  { prvni: 4, druhy: 4 },
  { prvni: 4, druhy: 5 },
  { prvni: 4, druhy: 6 },
  { prvni: 4, druhy: 7 },
  { prvni: 4, druhy: 8 },
  { prvni: 4, druhy: 9 },
  { prvni: 4, druhy: 10 },
  { prvni: 5, druhy: 5 },
  { prvni: 5, druhy: 6 },
  { prvni: 5, druhy: 7 },
  { prvni: 5, druhy: 8 },
  { prvni: 5, druhy: 9 },
  { prvni: 5, druhy: 10 },
  { prvni: 6, druhy: 6 },
  { prvni: 6, druhy: 7 },
  { prvni: 6, druhy: 8 },
  { prvni: 6, druhy: 9 },
  { prvni: 6, druhy: 10 },
  { prvni: 7, druhy: 7 },
  { prvni: 7, druhy: 8 },
  { prvni: 7, druhy: 9 },
  { prvni: 7, druhy: 10 },
  { prvni: 8, druhy: 8 },
  { prvni: 8, druhy: 9 },
  { prvni: 8, druhy: 10 },
  { prvni: 9, druhy: 9 },
  { prvni: 9, druhy: 10 },
  { prvni: 10, druhy: 10 },
];
// pole pro ukládání příkladů a následnou kontrolu
let vyber = [];
// pole pro ukládání výsledků od uživatele
let vysledky = [];
// počet příkladů
const pocetPrikladu = 3;
// funkce pro procvičování
function training() {
  console.log("Spouštím funkci Training");
  hlavniSekce.classList.add("hiddenClass");
  ostryTest.classList.add("hiddenClass");
  cvikButton.innerText = "Potvrdit";
  test();
  cvikButton.removeEventListener("click", training);
  cvikButton.addEventListener("click", kontrola);
}

function test() {
  vyber = [];
  const kopie = nasobilka.slice();
  for (let i = 0; i < pocetPrikladu; i++) {
    const index = Math.floor(Math.random() * kopie.length);
    console.log("Index je: " + index);

    vyber.push({
      prvni: kopie[index].prvni,
      druhy: kopie[index].druhy,
      vysledek: kopie[index].prvni * kopie[index].druhy,
    });
    kopie.splice(index, 1);
  }
  console.table(kopie);
  console.table(vyber);

  vyber.forEach((element) => {
    const box = document.createElement("div");
    box.classList.add("inner-flex");
    box.innerHTML = `<strong>${element.prvni} x ${element.druhy} 
    = </strong><input type="number" class="inputNasobilka">
    <span class="komentar"></span>`
    ;

    flex.prepend(box);
  });
}

function kontrola() {
  console.log("Kontrola");
  let inputs = [...document.querySelectorAll(".inputNasobilka")];
  
  inputs.reverse();
  

  vysledky = inputs.map((input) => input.value);
  if (vysledky.some((element) => element == "")) {
    alert("praadzno");
  } else {
    porovnaniVysledku();
    
  }
  console.table(vysledky);
}

function porovnaniVysledku(){
    let komentare = [...document.querySelectorAll(".komentar")];
    komentare.reverse();
    
    for(let i = 0; i < vysledky.length; i++){
        const a = vyber[i].vysledek;
        const b = vysledky[i];
        console.log(a);
        console.log(b);
        
        if(a == b){
            komentare[i].textContent = "správně";
        } else {
            komentare[i].textContent = "špatně";
        }
    }
}

// Listenery na tlačítkách
cvikButton.addEventListener("click", training);
