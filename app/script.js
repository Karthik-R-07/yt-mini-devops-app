const videos = [
  { title: "Big Buck Bunny", src: "https://www.w3schools.com/html/mov_bbb.mp4", category: "movies" },
  { title: "Nature Clip", src: "https://samplelib.com/lib/preview/mp4/sample-5s.mp4", category: "series" },
  { title: "Ocean View", src: "https://samplelib.com/lib/preview/mp4/sample-10s.mp4", category: "sports" },
  { title: "Mountain Timelapse", src: "https://samplelib.com/lib/preview/mp4/sample-15s.mp4", category: "anime" },
  { title: "City Night", src: "https://samplelib.com/lib/preview/mp4/sample-20s.mp4", category: "trending" }
];

const container = document.getElementById("videos");
const modal = document.getElementById("videoModal");
const player = document.getElementById("videoPlayer");
const closeModal = document.getElementById("closeModal");
const searchInput = document.getElementById("searchInput");

function displayVideos(filter = "", category = "") {
  container.innerHTML = "";

  videos
    .filter(v => v.title.toLowerCase().includes(filter.toLowerCase()))
    .filter(v => category ? v.category === category : true)
    .forEach(video => {
      const card = document.createElement("div");
      card.className = "video-card";
      card.innerHTML = `
        <img src="https://source.unsplash.com/400x250/?${video.category},video">
        <div class="video-info"><h4>${video.title}</h4></div>
      `;
      card.onclick = () => openVideo(video.src);
      container.appendChild(card);
    });
}

function openVideo(src) {
  player.src = src;
  modal.style.display = "flex";
}

closeModal.onclick = () => {
  modal.style.display = "none";
  player.pause();
  player.src = "";
};

searchInput.addEventListener("input", e => displayVideos(e.target.value));

document.querySelector(".sidebar").addEventListener("click", e => {
  const cat = e.target.dataset.cat;
  displayVideos("", cat);
});

displayVideos();