const videosByCategory = {
  anime: ["aqz-KE-bpKQ"],
  movies: ["dQw4w9WgXcQ"],
  sports: ["5qap5aO4i9A"],
  series: ["M7lc1UVf-VE"]
};

function createCards(category) {
  const container = document.getElementById(category);
  videosByCategory[category].forEach(id => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `<img src="https://source.unsplash.com/300x450/?${category}">`;
    card.onclick = () => openModal(id);
    container.appendChild(card);
  });
}

Object.keys(videosByCategory).forEach(createCards);

function openModal(videoId){
  document.getElementById("videoModal").style.display = "flex";
  document.getElementById("ytplayer").src =
    `https://www.youtube.com/embed/${videoId}?autoplay=1`;
}

document.getElementById("closeBtn").onclick = () => {
  document.getElementById("videoModal").style.display = "none";
  document.getElementById("ytplayer").src = "";
};

// Search filter
document.getElementById("search").addEventListener("input", function() {
  let term = this.value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    card.style.display = card.innerText.toLowerCase().includes(term) ? "block" : "none";
  });
});