const videos = [
  { title: "Naruto Fight Scene", id: "QczGoCmX-pI" },
  { title: "Avengers Trailer", id: "TcMBFSGVi1c" },
  { title: "Football Highlights", id: "2Vv-BfVoq4g" },
  { title: "Top Web Series Scene", id: "kJQP7kiw5Fk" },
  { title: "Anime Opening", id: "dQw4w9WgXcQ" }
];

const container = document.getElementById("videos");
const modal = document.getElementById("videoModal");
const player = document.getElementById("videoPlayer");
const closeModal = document.getElementById("closeModal");
const searchInput = document.getElementById("searchInput");

function displayVideos(filter = "") {
  container.innerHTML = "";
  videos
    .filter(v => v.title.toLowerCase().includes(filter.toLowerCase()))
    .forEach(video => {
      const card = document.createElement("div");
      card.className = "video-card";
      card.innerHTML = `
        <img src="https://img.youtube.com/vi/${video.id}/hqdefault.jpg" alt="${video.title}">
        <div class="video-info"><h4>${video.title}</h4></div>
      `;
      card.onclick = () => openVideo(video.id);
      container.appendChild(card);
    });
}

function openVideo(id) {
  player.src = `https://www.youtube.com/embed/${id}?autoplay=1`;
  modal.style.display = "flex";
}

closeModal.onclick = () => {
  modal.style.display = "none";
  player.src = "";
};

window.onclick = e => {
  if (e.target === modal) {
    modal.style.display = "none";
    player.src = "";
  }
};

searchInput.addEventListener("input", e => displayVideos(e.target.value));

displayVideos();