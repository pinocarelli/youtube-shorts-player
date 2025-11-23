// script.js

// ID del div dove mostrare il video
const videoContainer = document.getElementById('videos');

// Funzione per caricare JSON e mostrare il video selezionato
async function loadVideo(num) {
  try {
    // Carica il JSON da GitHub Pages
    const response = await fetch('videos.json');
    const videos = await response.json();

    // Controlla che il numero sia valido
    if (num < 0 || num >= videos.length || !videos[num]) {
      videoContainer.innerHTML = `<p style="color:red; text-align:center;">Invalid video number</p>`;
      return;
    }

    const selectedVideo = videos[num];

    // Mostra solo il video selezionato
    videoContainer.innerHTML = `
      <div class="video-container" id="video-${num}">
        <img src="https://img.youtube.com/vi/${selectedVideo.id}/maxresdefault.jpg" alt="${selectedVideo.title}">
        <div class="play-button"></div>
      </div>
      <div class="title">${selectedVideo.title}</div>
    `;

    // Click-to-load: sostituisci immagine con iframe YouTube
    const container = document.getElementById(`video-${num}`);
    container.addEventListener('click', () => {
      container.innerHTML = `
        <iframe
          src="https://www.youtube.com/embed/${selectedVideo.id}?autoplay=1&rel=0"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          style="width:100%; height:100%;"
        ></iframe>
      `;
    });

  } catch (error) {
    console.error('Error loading videos.json:', error);
    videoContainer.innerHTML = `<p style="color:red; text-align:center;">Error loading video data</p>`;
  }
}

// Funzione per ottenere il numero da URL o input utente
function getVideoNumber() {
  // Esempio: prende numero dai parametri URL ?num=40
  const params = new URLSearchParams(window.location.search);
  return parseInt(params.get('num')) || 0; // default 0 se non c'è
}

// Avvia caricamento video
const videoNum = getVideoNumber();
loadVideo(videoNum);
