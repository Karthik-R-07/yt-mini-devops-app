const videos = [
  { title: "Anime Trailer", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4", thumb: "images/anime1.jpg", category: "Anime" },
  { title: "Movie Trailer", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4", thumb: "images/movie1.jpg", category: "Movies" },
  { title: "Nature Clip", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", thumb: "images/nature1.jpg", category: "Nature" },
  { title: "Adventure Clip", src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4", thumb: "images/movie2.jpg", category: "Movies" }
];

const content = document.getElementById("content");

function createRows() {
  const categories = [...new Set(videos.map(v => v.category))];

  categories.forEach(cat => {
    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `<h2>${cat}</h2><div class="row-posters"></div>`;

    const posterContainer = row.querySelector(".row-posters");

    videos.filter(v => v.category === cat).forEach(video => {
      const img = document.createElement("img");
      img.src = video.thumb;
      img.className = "poster";
      img.onclick = () => openVideo(video.src);
      posterContainer.appendChild(img);
    });

    content.appendChild(row);
  });
}

function openVideo(src) {
  const player = document.getElementById("videoPlayer");
  const modal = document.getElementById("videoModal");
  player.src = src;
  modal.style.display = "flex";
}

document.getElementById("closeModal").onclick = () => {
  videoModal.style.display = "none";
  videoPlayer.pause();
  videoPlayer.src = "";
};

createRows();