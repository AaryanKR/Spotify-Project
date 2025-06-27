const audioMap = {
  "Nee Singham Dhan": "/audios/nee-singam-dhan.mp3",
  "MAUNA LOA": "/audios/mauna-loa.mp3",
  "Finding Her": "/audios/finding-her.mp3",
  "Laal Pari": "/audios/laal-pari.mp3",
  "Sapphire": "/audios/sapphire.mp3",
  "Qatal": "/audios/qatal.mp3",
  "Akhiyaan Gulaab": "/audios/akhiyaan-gulaab.mp3",
  "I wanna be yours": "/audios/i-wanna-be-yours.mp3",
  "Top Songs Global": "/audios/diet-mountain-dew.mp3",
  "Top Songs India": "/audios/chuttamalle.mp3",
  "Viral 50 - Global": "/audios/isq-risk.mp3",
  "Viral 50 - India": "/audios/mann-mera.mp3", 

  // 🎤 Popular Artist Tracks
  "Arijit Singh": "/audios/arijit-singh-song.mp3",
  "Vishal Mishra": "/audios/vishal-mishra-song.mp3",
  "Rahat Ali Khan": "/audios/rahat-ali-khan-song.mp3"
};

document.addEventListener("DOMContentLoaded", () => {
  const songCards = document.querySelectorAll(".card");
  const albumImg = document.querySelector(".album img");
  const albumTitle = document.querySelector(".album-title");
  const albumInfo = document.querySelector(".album-info");
  const audio = document.getElementById("audio-player");
  const playBtn = document.getElementById("play-btn");
  const progressBar = document.querySelector(".progress-bar");
  const currTime = document.querySelector(".curr-time");
  const totTime = document.querySelector(".tot-time");
  const volumeSlider = document.querySelector(".controls-range input[type='range']");
  const toggleBtn = document.getElementById("menu-toggle");
  const sidebar = document.querySelector(".sidebar");

  //toggle button hamburger
  toggleBtn.addEventListener("click" , () => {
    sidebar.classList.toggle("open");
  });

  // let isPlaying = false;
  // let currentSong = null;

  // Utility: Format seconds to mm:ss
  function formatTime(sec) {
    const minutes = Math.floor(sec / 60).toString().padStart(2, '0');
    const seconds = Math.floor(sec % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  }

  // Update progress bar in real-time
  audio.addEventListener("timeupdate", () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressBar.value = percent || 0;
    currTime.textContent = formatTime(audio.currentTime);
  });

  // Set total duration when metadata loads
  audio.addEventListener("loadedmetadata", () => {
    totTime.textContent = formatTime(audio.duration);
  });

  // Play/pause button toggle
  playBtn.addEventListener("click", () => {
    if (audio.src) {
      if (audio.paused) {
        audio.play();
        playBtn.classList.remove("fa-play");
        playBtn.classList.add("fa-pause");
      } else {
        audio.pause();
        playBtn.classList.remove("fa-pause");
        playBtn.classList.add("fa-play");
      }
    }
  });

  // Song card click: update player UI and play
  songCards.forEach(card => {
    card.addEventListener("click", () => {
      const imgSrc = card.querySelector(".card-img").src;
      const title = card.querySelector(".card-title").innerText;
      const info = card.querySelector(".card-info").innerText;
      // const songTitle = card.querySelector(".card-title").innerText;
      const songTitle = title;
      const audioSrc = audioMap[songTitle];

      albumImg.src = imgSrc;
      albumTitle.textContent = title;
      albumInfo.innerHTML = `<a href="#">${info}</a>`;

      // Set fake mp3 (replace with real audio path)
      if (audioSrc) {
        audio.src = audioSrc;
        audio.play();
        playBtn.classList.remove("fa-play");
        playBtn.classList.add("fa-pause");
      } else {
        audio.pause();
        audio.src = "";
        playBtn.classList.remove("fa-pause");
        playBtn.classList.add("fa-play");
        // alert("Audio file not available for this song.");
      }
    });
  });

  // Volume control
  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value / 100;
  });

  // Click on progress bar to seek
  progressBar.addEventListener("input", () => {
    const seekTime = (progressBar.value / 100) * audio.duration;
    audio.currentTime = seekTime;
  });
});
