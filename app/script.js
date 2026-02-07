const videos = [
  // 🎌 ANIME TRAILERS
  {
    title: "Naruto Shippuden Trailer",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumb: "https://i.imgur.com/9qO5H0K.jpeg",
    category: "anime"
  },
  {
    title: "Attack on Titan Trailer",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumb: "https://i.imgur.com/WF7pK0I.jpeg",
    category: "anime"
  },

  // 🎬 MOVIE TRAILERS
  {
    title: "Epic Movie Trailer",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumb: "https://i.imgur.com/j8m8K0F.jpeg",
    category: "movies"
  },
  {
    title: "Action Movie Preview",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    thumb: "https://i.imgur.com/EL9V1uM.jpeg",
    category: "movies"
  },

  // 🌿 NATURE VIDEOS
  {
    title: "Beautiful Waterfall",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumb: "https://i.imgur.com/t5nH3FQ.jpeg",
    category: "series"
  },
  {
    title: "Forest Nature Clip",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    thumb: "https://i.imgur.com/9qK8ZcM.jpeg",
    category: "series"
  },

  // 🔥 TRENDING MIX
  {
    title: "Cinematic Landscape",
    src: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    thumb: "https://i.imgur.com/rq8xF6V.jpeg",
    category: "trending"
  }
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
        <img src="${video.thumb}" alt="${video.title}">
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