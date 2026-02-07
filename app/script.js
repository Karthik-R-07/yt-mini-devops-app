const videos = [
  { title: "Anime Battle", id: "z4x4pbn0gR0" },
  { title: "Avengers Trailer", id: "TcMBFSGVi1c" },
  { title: "Football Skills", id: "1Roy4o4tqQM" },
  { title: "Web Series Scene", id: "8ugaeA-nMTc" }
];

const videoContainer = document.getElementById("videos");
const modal = document.getElementById("videoModal");
const player = document.getElementById("videoPlayer");
const closeModal = document.getElementById("closeModal");
const searchInput = document.getElementById("searchInput");

function displayVideos(filter = "") {
  videoContainer.innerHTML = "";
  videos
    .filter(v => v.title.toLowerCase().includes(filter.toLowerCase()))
    .forEach(video => {
      const card = document.createElement("div");
      card.className = "video-card";
      card.innerHTML = `
        <img src="https://img.youtube.com/vi/${video.id}/0.jpg">
        <div class="video-info">
          <h4>${video.title}</h4>
        </div>
      `;
      card.onclick = () => openVideo(video.id);
      videoContainer.appendChild(card);
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