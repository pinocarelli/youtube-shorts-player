fetch('videos.json')
  .then(res => res.json())
  .then(videos => {
    const container = document.getElementById('videos');
    videos.forEach(v => {
      const div = document.createElement('div');
      div.className = 'video-container';

      if(v.id){
        const img = document.createElement('img');
        img.src = `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`;
        div.appendChild(img);

        const play = document.createElement('div');
        play.className = 'play-button';
        div.appendChild(play);

        div.addEventListener('click', () => {
          div.innerHTML = `<iframe width="200" height="355" src="https://www.youtube.com/embed/${v.id}?autoplay=1" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
        });
      } else {
        div.style.background = "#111"; // placeholder vuoto
      }

      const title = document.createElement('div');
      title.className = 'title';
      title.textContent = v.title || '';
      container.appendChild(div);
      container.appendChild(title);
    });
  });
