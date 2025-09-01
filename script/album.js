const mythicDiv = document.getElementById("mythic");
const legendaryDiv = document.getElementById("legendary");
const rareDiv = document.getElementById("rare");
const epicDiv = document.getElementById("epic");
const uncommonDiv = document.getElementById("uncommon");
const commonDiv = document.getElementById("common");

const button = document.querySelector(".album-btn .btn");

const coins = document.getElementById("pokusCoins");

let coin = 1000;
coins.textContent = coin;

// TODO relativni cesta je pictures/zadniStrana.png, dát u všech
const mythic = [
  {
    name: "",
    rarity: "mythic",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
];

const legendary = [
  {
    name: "",
    rarity: "legendary",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "legendary",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
];

const epic = [
  {
    name: "",
    rarity: "epic",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "epic",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "epic",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
];

const rare = [
  {
    name: "",
    rarity: "rare",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "rare",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "rare",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "rare",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
];

const uncommon = [
  {
    name: "",
    rarity: "uncommon",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "uncommon",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "uncommon",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "uncommon",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "uncommon",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "uncommon",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "uncommon",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "uncommon",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
];

const common = [
  {
    name: "",
    rarity: "common",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
];

spusteniAlbum();

function spusteniAlbum() {
  mythic.forEach((element, index) => {
    const divMythic = document.createElement("div");
    divMythic.className = "pictures";
    divMythic.setAttribute("data-index", index);
    divMythic.innerHTML = `<h3>${element.name}</h3>
        <img src="${element.zadniStrana}" alt="Zadní strana">`;
    mythicDiv.appendChild(divMythic);
  });

  legendary.forEach((element, index) => {
    const divLegendary = document.createElement("div");
    divLegendary.className = "pictures";
    divLegendary.setAttribute("data-index", index);
    divLegendary.innerHTML = `<h3>${element.name}</h3>
        <img src="${element.zadniStrana}" alt="Zadní strana">`;
    legendaryDiv.appendChild(divLegendary);
  });

  epic.forEach((element, index) => {
    const divEpic = document.createElement("div");
    divEpic.className = "pictures";
    divEpic.setAttribute("data-index", index);
    divEpic.innerHTML = `<h3>${element.name}</h3>
        <img src="${element.zadniStrana}" alt="Zadní strana">`;
    epicDiv.appendChild(divEpic);
  });

  rare.forEach((element, index) => {
    const divRare = document.createElement("div");
    divRare.className = "pictures";
    divRare.setAttribute("data-index", index);
    divRare.innerHTML = `<h3>${element.name}</h3>
        <img src="${element.zadniStrana}" alt="Zadní strana">`;
    rareDiv.appendChild(divRare);
  });

  uncommon.forEach((element, index) => {
    const divUncommon = document.createElement("div");
    divUncommon.className = "pictures";
    divUncommon.setAttribute("data-index", index);
    divUncommon.innerHTML = `<h3>${element.name}</h3>
        <img src="${element.zadniStrana}" alt="Zadní strana">`;
    uncommonDiv.appendChild(divUncommon);
  });

  common.forEach((element, index) => {
    const divCommon = document.createElement("div");
    divCommon.className = "pictures";
    divCommon.setAttribute("data-index", index);
    divCommon.innerHTML = `<h3>${element.name}</h3>
        <img src="${element.zadniStrana}" alt="Zadní strana">`;
    commonDiv.appendChild(divCommon);
  });
}

const commonPravdepodobnost = 50; // od 0 - 50
const uncommonPravdepodobnost = 75; // od 51 - 75
const rarePravdepodobnost = 90; // od 76 - 90
const epicPravdepodobnost = 96; // od 91 - 96
const legendaryPravdepodobnost = 99; // od 97 - 99
const mythicPravdepodobnost = 100; // 100

// funkce pro výběr kartičky na základě nějaké pravděpodobnosti
function vyberKarty() {
  //const pravdepodobnost = Math.floor(Math.random() * 100);
  const pravdepodobnost = 30;
  // pro kartu common
  if (pravdepodobnost <= commonPravdepodobnost) {
    console.log("common");
    const random = Math.floor(Math.random() * common.length);
    if (common[random].own == false){
      common[random].own = true;
      const div = document.querySelector(`#common .pictures[data-index="${random}"]`);
      
      div.innerHTML = "Ahoj";
    } else {
      return;
    }
  }
  // pro kartu uncommon
  else if (pravdepodobnost <= uncommonPravdepodobnost) {
    console.log("uncommon");
    const random = Math.floor(Math.random() * uncommon.length);
    if (uncommon[random].own == false){
      uncommon[random].own = true;
      const div = document.querySelector(`#uncommon .pictures[data-index="${random}"]`);
      
      div.innerHTML = "Ahoj";
    } else {
      return;
    }
  }
  // pro kartu rare
  else if (pravdepodobnost <= rarePravdepodobnost) {
    console.log("rare");
    const random = Math.floor(Math.random() * rare.length);
    if (rare[random].own == false){
      rare[random].own = true;
      const div = document.querySelector(`#rare .pictures[data-index="${random}"]`);
      
      div.innerHTML = "Ahoj";
    } else {
      return;
    }
  }
  // pro kartu epic
  else if (pravdepodobnost <= epicPravdepodobnost) {
    console.log("epic");
    const random = Math.floor(Math.random() * epic.length);
    if (epic[random].own == false){
      epic[random].own = true;
      const div = document.querySelector(`#epic .pictures[data-index="${random}"]`);
      
      div.innerHTML = "Ahoj";
    } else {
      return;
    }
  }
  // pro kartu legendary
  else if (pravdepodobnost <= legendaryPravdepodobnost) {
    console.log("lgd");
    const random = Math.floor(Math.random() * legendary.length);
    if (legendary[random].own == false){
      legendary[random].own = true;
      const div = document.querySelector(`#legendary .pictures[data-index="${random}"]`);
      
      div.innerHTML = "Ahoj";
    } else {
      return;
    }
  }
  // pro kartu mythic
  else {
    console.log("mythic");
    const random = Math.floor(Math.random() * mythic.length);
    if (mythic[random].own == false){
      mythic[random].own = true;
      const div = document.querySelector(`#mythic .pictures[data-index="${random}"]`);
      
      div.innerHTML = "Ahoj";
    } else {
      return;
    }
  }
}

button.addEventListener("click", vyberKarty);
