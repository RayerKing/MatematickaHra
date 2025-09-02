const mythicDiv = document.getElementById("mythic");
const legendaryDiv = document.getElementById("legendary");
const rareDiv = document.getElementById("rare");
const epicDiv = document.getElementById("epic");
const uncommonDiv = document.getElementById("uncommon");
const commonDiv = document.getElementById("common");

const button = document.querySelector(".album-btn .btn");

// TODO relativni cesta je pictures/zadniStrana.png, dát u všech - splněno
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

loadAlbum();

spusteniAlbum();

function spusteniAlbum() {
  mythic.forEach((element, index) => {
    const divMythic = document.createElement("div");
    divMythic.className = "pictures";
    divMythic.setAttribute("data-index", index);
    let img;
    if (element.own == true) {
      img = `<img src="${element.predniStrana}" alt="Přední strana karty - ${element.name}">`;
    } else {
      img = `<img src="${element.zadniStrana}" alt="Zadní strana karty">`;
    }
    divMythic.innerHTML = `<h3>${element.name}</h3>
        ${img}`;
    mythicDiv.appendChild(divMythic);
  });

  legendary.forEach((element, index) => {
    const divLegendary = document.createElement("div");
    divLegendary.className = "pictures";
    divLegendary.setAttribute("data-index", index);
    let img;
    if (element.own == true) {
      img = `<img src="${element.predniStrana}" alt="Přední strana karty - ${element.name}">`;
    } else {
      img = `<img src="${element.zadniStrana}" alt="Zadní strana karty">`;
    }
    divLegendary.innerHTML = `<h3>${element.name}</h3>
        ${img}`;
    legendaryDiv.appendChild(divLegendary);
  });

  epic.forEach((element, index) => {
    const divEpic = document.createElement("div");
    divEpic.className = "pictures";
    divEpic.setAttribute("data-index", index);
    let img;
    if (element.own == true) {
      img = `<img src="${element.predniStrana}" alt="Přední strana karty - ${element.name}">`;
    } else {
      img = `<img src="${element.zadniStrana}" alt="Zadní strana karty">`;
    }
    divEpic.innerHTML = `<h3>${element.name}</h3>
        ${img}`;
    epicDiv.appendChild(divEpic);
  });

  rare.forEach((element, index) => {
    const divRare = document.createElement("div");
    divRare.className = "pictures";
    divRare.setAttribute("data-index", index);
    let img;
    if (element.own == true) {
      img = `<img src="${element.predniStrana}" alt="Přední strana karty - ${element.name}">`;
    } else {
      img = `<img src="${element.zadniStrana}" alt="Zadní strana karty">`;
    }
    divRare.innerHTML = `<h3>${element.name}</h3>
        ${img}`;
    rareDiv.appendChild(divRare);
  });

  uncommon.forEach((element, index) => {
    const divUncommon = document.createElement("div");
    divUncommon.className = "pictures";
    divUncommon.setAttribute("data-index", index);
    let img;
    if (element.own == true) {
      img = `<img src="${element.predniStrana}" alt="Přední strana karty - ${element.name}">`;
    } else {
      img = `<img src="${element.zadniStrana}" alt="Zadní strana karty">`;
    }
    divUncommon.innerHTML = `<h3>${element.name}</h3>
        ${img}`;
    uncommonDiv.appendChild(divUncommon);
  });

  common.forEach((element, index) => {
    const divCommon = document.createElement("div");
    divCommon.className = "pictures";
    divCommon.setAttribute("data-index", index);
    let img;
    if (element.own == true) {
      img = `<img src="${element.predniStrana}" alt="Přední strana karty - ${element.name}">`;
    } else {
      img = `<img src="${element.zadniStrana}" alt="Zadní strana karty">`;
    }
    divCommon.innerHTML = `<h3>${element.name}</h3>
        ${img}`;
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
  const pravdepodobnost = Math.floor(Math.random() * 100);
  //const pravdepodobnost = 98;
  // pro kartu common
  if (pravdepodobnost <= commonPravdepodobnost) {
    console.log("common");
    const random = Math.floor(Math.random() * common.length);
    if (common[random].own == false) {
      common[random].own = true;
      const div = document.querySelector(
        `#common .pictures[data-index="${random}"]`
      );

      div.innerHTML = `<h3>${common[random].name}</h3>
      <img src="${common[random].predniStrana}" alt="Přední strana karty - ${common[random].name}">`;
      saveAlbum();
    } else {
      return;
    }
  }
  // pro kartu uncommon
  else if (pravdepodobnost <= uncommonPravdepodobnost) {
    console.log("uncommon");
    const random = Math.floor(Math.random() * uncommon.length);
    if (uncommon[random].own == false) {
      uncommon[random].own = true;
      const div = document.querySelector(
        `#uncommon .pictures[data-index="${random}"]`
      );

      div.innerHTML = `<h3>${uncommon[random].name}</h3>
      <img src="${uncommon[random].predniStrana}" alt="Přední strana karty - ${uncommon[random].name}">`;
      saveAlbum();
    } else {
      return;
    }
  }
  // pro kartu rare
  else if (pravdepodobnost <= rarePravdepodobnost) {
    console.log("rare");
    const random = Math.floor(Math.random() * rare.length);
    if (rare[random].own == false) {
      rare[random].own = true;
      const div = document.querySelector(
        `#rare .pictures[data-index="${random}"]`
      );

      div.innerHTML = `<h3>${rare[random].name}</h3>
      <img src="${rare[random].predniStrana}" alt="Přední strana karty - ${rare[random].name}">`;
      saveAlbum();
    } else {
      return;
    }
  }
  // pro kartu epic
  else if (pravdepodobnost <= epicPravdepodobnost) {
    console.log("epic");
    const random = Math.floor(Math.random() * epic.length);
    if (epic[random].own == false) {
      epic[random].own = true;
      const div = document.querySelector(
        `#epic .pictures[data-index="${random}"]`
      );

      div.innerHTML = `<h3>${epic[random].name}</h3>
      <img src="${epic[random].predniStrana}" alt="Přední strana karty - ${epic[random].name}">`;
      saveAlbum();
    } else {
      return;
    }
  }
  // pro kartu legendary
  else if (pravdepodobnost <= legendaryPravdepodobnost) {
    console.log("lgd");
    const random = Math.floor(Math.random() * legendary.length);
    if (legendary[random].own == false) {
      legendary[random].own = true;
      const div = document.querySelector(
        `#legendary .pictures[data-index="${random}"]`
      );

      div.innerHTML = `<h3>${legendary[random].name}</h3>
      <img src="${legendary[random].predniStrana}" alt="Přední strana karty - ${legendary[random].name}">`;
      saveAlbum();
    } else {
      return;
    }
  }
  // pro kartu mythic
  else {
    console.log("mythic");
    const random = Math.floor(Math.random() * mythic.length);
    if (mythic[random].own == false) {
      mythic[random].own = true;
      const div = document.querySelector(
        `#mythic .pictures[data-index="${random}"]`
      );

      div.innerHTML = `<h3>${mythic[random].name}</h3>
      <img src="${mythic[random].predniStrana}" alt="Přední strana karty - ${mythic[random].name}">`;
      saveAlbum();
    } else {
      return;
    }
  }
}

function moneyNeeded() {
  if (coin >= price) {
    setCoins(coin - price);
    coinsDiv.textContent = coin;
    vyberKarty();
  } else {
    alert("MoneyNeeded");
  }
}

button.addEventListener("click", moneyNeeded);
