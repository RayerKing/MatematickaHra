const coinsDiv = document.getElementById("pokusCoins");
const albumCoin = document.querySelector(".coins-album-okno");
const price = 50;
let coin = parseInt(localStorage.getItem("coin")) || 500;


coinsDiv.textContent = coin;

if(albumCoin){
  albumCoin.textContent = coin;
}

// stav, zda byla odměna vyzvednuta + hodnota odměny
let cviceniSplneno = false;
let odmenaCvika = 50;

// mění hodnoítu peněz
function setCoins(value){
    coin = value;
    localStorage.setItem("coin", coin);
    if (coinsDiv)    coinsDiv.textContent = coin;
  if (albumCoin)   albumCoin.textContent = coin;
}

// ukládá album
function saveAlbum() {
  localStorage.setItem("album", JSON.stringify({
    mythic, legendary, epic, rare, uncommon, common
  }));
}

// načítá album
function loadAlbum() {
  const saved = localStorage.getItem("album");
  if (saved) {
    const data = JSON.parse(saved);
    // obnovit data zpět do proměnných
    Object.assign(mythic, data.mythic);
    Object.assign(legendary, data.legendary);
    Object.assign(epic, data.epic);
    Object.assign(rare, data.rare);
    Object.assign(uncommon, data.uncommon);
    Object.assign(common, data.common);
  }
}

// ukládá násobilku, jestli byla vyzvednuta odměna
function saveNasobilka(){
  localStorage.setItem("nasobilka", JSON.stringify(cviceniSplneno));
}

// načítá, zda byla odměna předána
function loadNasobilka(){
  cviceniSplneno = JSON.parse(localStorage.getItem("nasobilka"));
}