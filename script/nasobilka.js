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
// text pro skore
const textScore = document.getElementById("skoreText");
// div pro příklady v CHallengi
const divPriklady = document.getElementById("prikladyChall");
// div pro časovač
const divTime = document.getElementById("prikladyChallTime");
// p pro stav získání odměny
const odmenaKomentar = document.getElementById("odmenaKomentar");
// proměnné pro timeOut
let cas = 10;
let prodlouzeni = 2;
let interval;
let score;
let cislo1;
let cislo2;

// načtení paměti stavu
loadNasobilka();

// co se má ukázat, pokud není vyzvednuta ještě odměna
!cviceniSplneno
  ? (odmenaKomentar.innerHTML = `Odměna ještě nebyla <b><i>získána!</i></b>`)
  : (odmenaKomentar.textContent = `Odměna byla vyzvednuta!`);

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
const pocetPrikladu = 10;
// proměnná, bude udržovat výsledek u challenge
let vysledekChallenge;
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

// funkce pro vytvoření kopie pole s násobilkou,
// odkud odstraňuju vybrané indexy, aby nebyly duplikáty
function test() {
  vyber = [];
  const kopie = nasobilka.slice();
  for (let i = 0; i < pocetPrikladu; i++) {
    const index = Math.floor(Math.random() * kopie.length);
    console.log("Index je: " + index);
    // přidání vybraných příkladů do pole vyber
    vyber.push({
      prvni: kopie[index].prvni,
      druhy: kopie[index].druhy,
      vysledek: kopie[index].prvni * kopie[index].druhy,
    });
    kopie.splice(index, 1);
  }
  //console.table(kopie);
  //console.table(vyber);

  // pro každý prvek vytvoří div s určitými parametry
  vyber.forEach((element) => {
    const box = document.createElement("div");
    box.classList.add("inner-flex");
    box.innerHTML = `
  <div class="priklad-line">
    <strong>${element.prvni} × ${element.druhy} =</strong>
    <input type="number" class="inputNasobilka" min="0" max="100">
    <span class="komentar"></span>
  </div>
`;

    flex.prepend(box);
  });
}

// načítá inputy a kontroluje, zda všechny inputy byly vyplněny
function kontrola() {
  console.log("Kontrola");
  let inputs = [...document.querySelectorAll(".inputNasobilka")];

  inputs.reverse();

  vysledky = inputs.map((input) => input.value);
  if (vysledky.some((element) => element == "")) {
    alert("Něco chybí vyplnit! :)");
  } else {
    porovnaniVysledku();
  }
  console.table(vysledky);
}

// vyskakující okno pro upozornění, že odměna byla vyzvednuta
const alertDiv = document.getElementById("alertSplneno");
console.log(alertDiv);
// tlačítko pro zavření vyskakujícího okna
const btnAlert = document.getElementById("alertButton");

btnAlert.addEventListener("click", () => {
  alertDiv.style.display = "none";
});

// kontroluje správnost výsledku přes indexi dvou polí a porovnání jejich hodnot
function porovnaniVysledku() {
  let komentare = [...document.querySelectorAll(".komentar")];
  komentare.reverse();
  let score = 0;
  for (let i = 0; i < vysledky.length; i++) {
    const a = vyber[i].vysledek;
    const b = vysledky[i];
    console.log(a);
    console.log(b);

    if (a == b) {
      komentare[i].textContent = "Správně";

      score++;
    } else {
      komentare[i].textContent = "Špatně";
    }
  }
textScore.classList.remove("hiddenClass");
  textScore.classList.add("skoreText");

  textScore.innerHTML = `<p class="textCelkScore">Celkové skóre: ${score} z ${pocetPrikladu}</p>`;

  // po vyhodnocení přepnout tlačítko na další kolo
  cvikButton.innerText = "Další kolo";
  cvikButton.removeEventListener("click", kontrola);
  cvikButton.addEventListener("click", nextRound);
  // podmínka pro ukázání okna, že byly přidány odměny
  if (!cviceniSplneno) {
    if (score == pocetPrikladu) {
      cviceniSplneno = true;
      console.log("Vše ok");
      alertDiv.style.display = "block";
      const alertKomentar = document.getElementById("alertOdstavec");
      alertKomentar.innerHTML = `<p class="odmenaText">Odměny byly připsány.</p>
      <p class="odmenaCvika">+${odmenaCvika}</p>`;
      setCoins(coin + odmenaCvika);
      saveNasobilka();
    } else {
      console.log("Nic se neděje");
      return;
    }
  }

  
}
// funkce pro vyčištění příkladů a polí
function clearPriklady() {
  flex.querySelectorAll(".inner-flex").forEach((element) => element.remove());
  textScore.classList.remove("textSkore");
  textScore.classList.add("hiddenClass");
  vyber = [];
  vysledky = [];
}
// funkce pro další kolo
function nextRound() {
  clearPriklady();
  textScore.classList.remove("skoreText");
  textScore.classList.add("hiddenClass");
  cvikButton.innerText = "Potvrdit";
  cvikButton.removeEventListener("click", nextRound);
  cvikButton.addEventListener("click", kontrola);
  test();
}

// dočasné body, které hráč nahraje
const docasneStaty = document.getElementById("docasneStaty");

let docasneExp = 0;
let docasneCoins = 0;
// funkce pro spuštění challenge
function exam() {
  docasneExp = 0;
  docasneCoins = 0;
  cas = 10;
  score = 0;
  docasneStaty.innerHTML = `<h3>Body za kolo</h3>
    <div class="docasnyFlex">
    <div class="inner-docasnyFlex hiddenClass">Exp: <span id="docasneExpText">${docasneExp}</span></div>
    <div class="inner-docasnyFlex"><span id="implifikator">+ 1</span></div>
    <div class="inner-docasnyFlex">Coins: <span id="docasneCoinsText">${docasneCoins}</span></div>
    </div>
    `;
  divTime.innerHTML = `Zbývající čas: <span id="timeLeft">${cas}</span>`;
  console.log("Exam");

  const timeLeft = document.getElementById("timeLeft");

  hlavniSekce.classList.add("hiddenClass");
  cvika.classList.add("hiddenClass");
  naOstro.innerText = "Potvrdit";
  interval = setInterval(() => {
    cas--;
    timeLeft.innerHTML = `${cas}`;

    if (cas < 0) {
      clearInterval(interval);

      timeOut();
    }
  }, 1000);
  testExam();
  naOstro.removeEventListener("click", exam);
  naOstro.addEventListener("click", examControl);
}
// funkce pro generování příkladů
function testExam() {
  const random = Math.floor(Math.random() * nasobilka.length);
  cislo1 = nasobilka[random].prvni;
  cislo2 = nasobilka[random].druhy;
  divPriklady.innerHTML = `${cislo1} x ${cislo2} = <input id="inputChal" type="number" min="0" max="100">`;

  textScore.innerHTML = `Skóre: ${score}`;

  // pro přímé psaní do inputu
  const inp = document.getElementById("inputChal");
  if (inp) {
    inp.focus();
    inp.select();
  }
}

// funkce pro kontrolu výsledků
function examControl() {
  let inputChal = document.getElementById("inputChal").value;
  vysledekChallenge = cislo1 * cislo2;
  if (inputChal == vysledekChallenge) {
    score++;
    const implifikator = document.getElementById("implifikator");
    const threshHolds = [5, 10, 15];
    // resetování animace při změně
    if (score < threshHolds[0]) {
      if (implifikator.className === "flash-effect1") {
        implifikator.classList.remove("flash-effect1");
      } else if (implifikator.className === "flash-effect2") {
        implifikator.classList.remove("flash-effect2");
      } else if (implifikator.className === "flash-effect3") {
        implifikator.classList.remove("flash-effect3");
      }
      implifikator.textContent = "+ 1";
    } else if (score < threshHolds[1]) {
      implifikator.classList.add("flash-effect1");
      implifikator.textContent = "+ 3";
    } else if (score < threshHolds[2]) {
      implifikator.classList.remove("flash-effect1");
      implifikator.classList.add("flash-effect2");
      implifikator.textContent = "+ 5";
    } else {
      implifikator.classList.remove("flash-effect2");
      implifikator.classList.add("flash-effect3");

      implifikator.textContent = "+ 8";
    }

    // změna bodů 
    if (score <= threshHolds[0]) {
      docasneCoins++;
      docasneExp++;
    } else if (score <= threshHolds[1]) {
      docasneCoins = docasneCoins + 3;
      docasneExp = docasneExp + 3;
    } else if (score <= threshHolds[2]) {
      docasneCoins = docasneCoins + 5;
      docasneExp = docasneExp + 5;
    } else {
      docasneCoins = docasneCoins + 8;
      docasneExp = docasneExp + 8;
    }

    let docasneCoinsText = document.getElementById("docasneCoinsText");
    let docasneExpText = document.getElementById("docasneExpText");

    docasneCoinsText.innerHTML = `${docasneCoins}`;
    docasneExpText.innerHTML = `${docasneExp}`;

    textScore.innerHTML = `Skóre: ${score}`;
    cas += prodlouzeni;

    const timeLeft = document.getElementById("timeLeft");
    timeLeft.innerHTML = `${cas}`;
    testExam();
  } else {
    clearInterval(interval);
    konecHry();
  }
}

// funkce pro konecHry
function konecHry() {
  divPriklady.innerHTML = `<h2>Konec hry</h2>
  <p><b>Špatný výsledek!</b>
  <p>Správný výsledek:  ${cislo1} x ${cislo2} = ${vysledekChallenge}</p>`;
  divTime.innerText = "";
  setCoins(coin + docasneCoins);
  naOstro.removeEventListener("click", examControl);
  naOstro.innerText = "Znovu?";
  naOstro.addEventListener("click", exam);
}

// funkce, když vyprší čas
function timeOut() {
  const a = cislo1 * cislo2;
  divPriklady.innerHTML = `<h2>Konec hry</h2>
  <p><b>Bohužel ti došel čas.</b>
  <p>Správný výsledek:  ${cislo1} x ${cislo2} = ${a}</p>`;
  divTime.innerText = "";
  naOstro.removeEventListener("click", examControl);
  naOstro.innerText = "Znovu?";
  naOstro.addEventListener("click", exam);
}

// Listenery na tlačítkách
cvikButton.addEventListener("click", training);
naOstro.addEventListener("click", exam);

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    examControl();
  }
});
