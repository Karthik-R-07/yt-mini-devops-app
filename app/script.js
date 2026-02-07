const videos = document.getElementById("videos");

for(let i=1;i<=12;i++){
  const card = document.createElement("div");
  card.className="card";
  card.innerHTML = `
    <img src="https://picsum.photos/400/220?random=${i}">
    <div class="overlay">▶</div>
    <p>Professional Demo Video ${i}</p>
  `;
  card.onclick = () => alert("Playing Demo Video " + i);
  videos.appendChild(card);
}