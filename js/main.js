var elPokemonsList = document.querySelector(".pokemons-list");


for (var poke of pokemons) {
  
  var newItem = document.createElement("li");
  var pokeTitle = document.createElement("h2");
  var pokeNum = document.createElement("span")
  var pokeImg = document.createElement("img");
  var pokeType = document.createElement("p");
  var pokeTime = document.createElement("time");
  var pokeWeknes = document.createElement("p");
  
  pokeTitle.textContent = poke.name;
  pokeNum.textContent = poke.num;
  pokeImg.src = poke.img;
  pokeType.textContent = poke.type.join(" ");
  pokeTime.textContent = poke.spawn_time;
  pokeWeknes.textContent = poke.weaknesses.join(" ");
  
  newItem.classList.add("pokemons-item");
  pokeTitle.classList.add("poke-title")
  pokeNum.classList.add("pokemons-num");
  pokeType.classList.add("poke-types");
  pokeTime.classList.add("poke-time");
  pokeWeknes.classList.add("poke-weknes");
  
  newItem.append(pokeTitle , pokeNum , pokeImg, pokeType, pokeTime, pokeWeknes);
  elPokemonsList.appendChild(newItem);
  
  
}
