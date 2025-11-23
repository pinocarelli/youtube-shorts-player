// Video mapping per numero
const videoMap = {
  40: { id: "oi4pK6h_PPA", thumbnail: "https://img.youtube.com/vi/oi4pK6h_PPA/maxresdefault.jpg" },
  44: { id: "O5gU7n_3EUg", thumbnail: "https://img.youtube.com/vi/O5gU7n_3EUg/maxresdefault.jpg" },
  // aggiungi qui i tuoi
};

document.getElementById("loadVideo").addEventListener("click", () => {
  const number = document.getElementById("numberInput").value;
  const wrapper = document.getElementById("videoWrapper");

  wrapper.innerHTML = ""; // pulizia

  if (!videoMap[number]) {
    wrapper.innerHTML = "<p>No video mapped for this number.</p>";
    return;
  }

  const video = videoMap[number];

  const container = document.createElement("div");
  container.className = "video-container";

  container.innerHTML = `
    <img src="${video.thumbnail}" alt="Thumbnail" />
  `;

  // Click → video autoplay
  container.addEventListener("click", () => {
    container.innerHTML = `
      <iframe
        src="https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&showinfo=0"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    `;
  });

  wrapper.appendChild(container);
});



