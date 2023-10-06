let toogleLeaves = document.getElementById('toggle-leaves');
let leaves = document.getElementById('leaves');
let toggleMusic = document.getElementById('toggle-music');
let toggleBg = document.getElementById('toggle-bg');
let toggleFs = document.getElementById('toggle-fs')

// Carregar preferências do localStorage ao carregar a página
document.addEventListener('DOMContentLoaded', function () {
  let leavesPreference = localStorage.getItem('leavesPreference');
  let musicPreference = localStorage.getItem('musicPreference');
  let bgPreference = localStorage.getItem('bgPreference');
  

  if (musicPreference === 'on') {
    toggleMusic.checked = true;
    playVideo();
  } else {
    toggleMusic.checked = false;
    pauseVideo();
  }

  if (leavesPreference === 'visible') {
    toogleLeaves.checked = true;
    leaves.style.display = 'flex';
  } else {
    toogleLeaves.checked = false;
    leaves.style.display = 'none';
  }

  if (bgPreference === 'on') {
    toggleBg.checked = true;
    document.body.classList.toggle('bg-remove')
  } else {
    toggleBg.checked = false;
  }

});

const showLeaves = (e) => {
  if (e.target.checked) {
    leaves.style.display = 'flex';
    localStorage.setItem('leavesPreference', 'visible');
  } else {
    leaves.style.display = 'none';
    localStorage.setItem('leavesPreference', 'hidden');
  }
}

const toggleBackground = (e) => {
  if (e.target.checked) {
    document.body.classList.toggle('bg-remove');
    localStorage.setItem('bgPreference', 'on');
  } else {
    document.body.classList.remove('bg-remove');
    localStorage.setItem('bgPreference', 'off');
  }
}

const iframe = document.getElementById('video-player');
const widget = SC.Widget(iframe);

const playVideo = () => {
  widget.bind(SC.Widget.Events.READY, () => {
    widget.getDuration((duration) => {
      const musicDuration = parseInt(duration) / 1000; // Converte para segundos
      const randomPosition = Math.floor(Math.random() * musicDuration); // Gera uma posição aleatória em segundos
      widget.seekTo(randomPosition * 1000); // Converte de volta para milissegundos e define a posição
      widget.play(); // Inicia a reprodução
    });
  });
  
};

const pauseVideo = () => {
  widget.pause();
};

const turnMusic = (e) => {
  if (e.target.checked) {
    playVideo();
    localStorage.setItem('musicPreference', 'on');
  } else {
    pauseVideo();
    localStorage.setItem('musicPreference', 'off');
  }
}


// Função para ativar a tela cheia
function enterFullscreen() {
  const element = document.documentElement; // Elemento raiz da página (geralmente <html>)
  if (element.requestFullscreen) {
      element.requestFullscreen();
  } else if (element.mozRequestFullScreen) { // Para Firefox
      element.mozRequestFullScreen();
  } else if (element.webkitRequestFullscreen) { // Para Chrome, Safari e Opera
      element.webkitRequestFullscreen();
  } else if (element.msRequestFullscreen) { // Para o Internet Explorer
      element.msRequestFullscreen();
  }
}

// Função para sair da tela cheia
function exitFullscreen() {
  if (document.exitFullscreen) {
      document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { // Para Firefox
      document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { // Para Chrome, Safari e Opera
      document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { // Para o Internet Explorer
      document.msExitFullscreen();
  }
}

const ToggleFullScreen = (e) => {
  if (e.target.checked) {
    enterFullscreen()
  } else {
    exitFullscreen();
  }
}

toogleLeaves.addEventListener('change', showLeaves);
toggleMusic.addEventListener('change', turnMusic);
toggleBg.addEventListener('change', toggleBackground);
toggleFs.addEventListener('change', ToggleFullScreen)
