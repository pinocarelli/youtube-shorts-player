body {
  font-family: sans-serif;
  background: #111;
  color: #eee;
  padding: 20px;
}

#app {
  max-width: 400px;
  margin: auto;
}

#numberInput {
  width: 100%;
  padding: 12px;
  font-size: 18px;
  border-radius: 8px;
  border: none;
  margin-bottom: 10px;
}

#loadVideo {
  width: 100%;
  padding: 12px;
  background: #444;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
}

#videoWrapper {
  margin-top: 20px;
}

/* ---- VIDEO CONTAINER 9:16 ---- */
.video-container {
  position: relative;
  width: 100%;
  padding-top: 177.77%; /* 9:16 ratio */
  background: #000;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
}

.video-container iframe,
.video-container img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}


