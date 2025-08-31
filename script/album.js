const mythicDiv = document.getElementById("mythic");
const legendaryDiv = document.getElementById("legendary");
const rareDiv = document.getElementById("rare");
const epicDiv = document.getElementById("epic");
const uncommonDiv = document.getElementById("uncommon");
const commonDiv = document.getElementById("common");

const coins = document.getElementById("pokusCoins");

let coin = 1000;
coins.textContent = coin;

// TODO relativni cesta je pictures/zadniStrana.png, dát u všech
const mythic = [
  {
    name: "",
    rarity: "mythic",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
];

const legendary = [
  {
    name: "",
    rarity: "legendary",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "legendary",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
];

const epic = [
  {
    name: "",
    rarity: "epic",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "epic",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "epic",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
];

const rare = [
  {
    name: "",
    rarity: "rare",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "rare",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "rare",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "rare",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  }
];

const uncommon = [
  {
    name: "",
    rarity: "uncommon",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "uncommon",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "uncommon",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "uncommon",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "uncommon",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "uncommon",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "uncommon",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "uncommon",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
];

const common = [
  {
    name: "",
    rarity: "common",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
  {
    name: "",
    rarity: "common",
    zadniStrana: "img/pictures/zadniStrana.png",
    predniStrana: "",
    own: false,
  },
];

spusteniAlbum();

function spusteniAlbum() {
  mythic.forEach((element) => {
    const divMythic = document.createElement("div");
    divMythic.className = "pictures";
    divMythic.innerHTML = `<h3>${element.name}</h3>
        <img src="${element.zadniStrana}" alt="Zadní strana">`;
    mythicDiv.appendChild(divMythic);
  });

  legendary.forEach((element) => {
    const divLegendary = document.createElement("div");
    divLegendary.className = "pictures";
    divLegendary.innerHTML = `<h3>${element.name}</h3>
        <img src="${element.zadniStrana}" alt="Zadní strana">`;
    legendaryDiv.appendChild(divLegendary);
  });

  epic.forEach((element) => {
    const divEpic = document.createElement("div");
    divEpic.className = "pictures";
    divEpic.innerHTML = `<h3>${element.name}</h3>
        <img src="${element.zadniStrana}" alt="Zadní strana">`;
    epicDiv.appendChild(divEpic);
  });

  rare.forEach((element) => {
    const divRare = document.createElement("div");
    divRare.className = "pictures";
    divRare.innerHTML = `<h3>${element.name}</h3>
        <img src="${element.zadniStrana}" alt="Zadní strana">`;
    rareDiv.appendChild(divRare);
  });

  uncommon.forEach((element) => {
    const divUncommon = document.createElement("div");
    divUncommon.className = "pictures";
    divUncommon.innerHTML = `<h3>${element.name}</h3>
        <img src="${element.zadniStrana}" alt="Zadní strana">`;
    uncommonDiv.appendChild(divUncommon);
  });

  common.forEach((element) => {
    const divCommon = document.createElement("div");
    divCommon.className = "pictures";
    divCommon.innerHTML = `<h3>${element.name}</h3>
        <img src="${element.zadniStrana}" alt="Zadní strana">`;
    commonDiv.appendChild(divCommon);
   
})


}
