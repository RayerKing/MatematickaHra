const coinsDiv = document.getElementById("pokusCoins");
const price = 50;
let coin = parseInt(localStorage.getItem("coin")) || 500;


coinsDiv.textContent = coin;




function setCoins(value){
    coin = value;
    localStorage.setItem("coin", coin);
    coinsDiv.textContent = coin;
}

function saveAlbum() {
  localStorage.setItem("album", JSON.stringify({
    mythic, legendary, epic, rare, uncommon, common
  }));
}

function loadAlbum() {
  const saved = localStorage.getItem("album");
  if (saved) {
    const data = JSON.parse(saved);
    // obnovit data zpět do tvých proměnných
    Object.assign(mythic, data.mythic);
    Object.assign(legendary, data.legendary);
    Object.assign(epic, data.epic);
    Object.assign(rare, data.rare);
    Object.assign(uncommon, data.uncommon);
    Object.assign(common, data.common);
  }
}
