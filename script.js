function populate(section, count){
  const container = document.getElementById(section);
  for(let i=1;i<=count;i++){
    const card = document.createElement("div");
    card.className="card";
    card.innerHTML = `
      <img src="https://picsum.photos/300/450?random=${Math.random()}">
      <div class="overlay">▶</div>
    `;
    card.onclick = () => alert("Playing " + section + " video");
    container.appendChild(card);
  }
}

populate("anime",8);
populate("movies",8);
populate("sports",8);
populate("series",8);