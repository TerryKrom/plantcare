// JavaScript
let myPlants = [];
let altText = document.getElementById('alt-text');
let plantsList = document.querySelector('.container-list');
let savedPlants = JSON.parse(localStorage.getItem('plants')) || [];
let labelPlant = document.getElementById('label-plant');
let plantName = document.getElementById('plant-name');
let modal = document.getElementById("modal");
let deleteModal = document.getElementById('delete-modal');
let menuModal = document.getElementById('menu-options');
let plantModal = document.getElementById('plant-modal');
let menuModalContent = document.querySelector('.modal-content-menu')
document.addEventListener('DOMContentLoaded', function(){
  if(savedPlants.length == 0){
    altText.style.display='block';
  } else {
    altText.style.display='none';
    savedPlants.forEach(element => {
      createPlant(element)
    });
  }
});

const openModal = () => {
  modal.style.animation='appear 0.3s linear';
  modal.style.display = "block";
};

const openMenuModal = () => {
  menuModalContent.style.animation='appearRight 0.3s linear';
  menuModal.style.display = 'block'
}

const openDeleteModal = (index) => {
  try {
    if (index >= 0 && index < plantsList.children.length) {
      let name = plantsList.children[index].querySelector('.name-p').textContent;
      labelPlant.innerHTML = name;
      if (deleteModal) {
        deleteModal.style.animation = 'appear 0.3s linear';
        deleteModal.style.display = 'block';
        let removeBtn = document.getElementById('remove-btn');
        removeBtn.addEventListener('click', function () {
          closeDeleteModal();
          removePlant(index);
        });
      }
    } else {
      console.error('Invalid index for opening delete modal.');
    }
  } catch (error) {
    console.error('Error opening delete modal:', error);
  }
};


const openPlantModal = (index) => {
  try {
    if (index >= 0 && index < plantsList.children.length) {
      let name = plantsList.children[index].querySelector('.name-p').textContent;
      plantName.innerHTML = name;
      plantModal.style.animation = 'appear 0.3s linear';
      plantModal.style.display = 'block';
    } else {
      console.error('Invalid index for opening plant modal.');
    }
  } catch (error) {
    console.error('Error opening plant modal:', error);
  }
};

const closeModal = () => {
  modal.style.animation = '';
  modal.style.display = "none";
};

const closeMenuModal = () => {
  menuModal.style.display='none';
}

const closeDeleteModal = () => {
  deleteModal.style.animation = '';
  deleteModal.style.display = "none";
};

const closePlantModal = () => {
  plantModal.style.animation = '';
  plantModal.style.display = "none";
}

const saveData = () => {
  var name = document.getElementById("name").value;
  var type = document.getElementById("type").value;

  if(name != '' && type != ''){
    const plant = {
      name: name,
      type: type
    };
    createPlant(plant);
    closeModal();
  }
};

const removePlant = (index) => {
    myPlants.splice(index - 1, 1);
    localStorage.setItem('plants', JSON.stringify(myPlants));
    if (plantsList && plantsList.children[index]) {
      let toRemove = plantsList.children[index];
      plantsList.removeChild(toRemove);
    }
    if(savedPlants.length == 0){
      altText.style.display='block';
    } else {
      altText.style.display='none';
    }
};

const trashSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
<path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
</svg>`;

const upModalSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-left" viewBox="0 0 16 16">
<path fill-rule="evenodd" d="M7.364 3.5a.5.5 0 0 1 .5-.5H14.5A1.5 1.5 0 0 1 16 4.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 3 14.5V7.864a.5.5 0 1 1 1 0V14.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H7.864a.5.5 0 0 1-.5-.5z"/>
<path fill-rule="evenodd" d="M0 .5A.5.5 0 0 1 .5 0h5a.5.5 0 0 1 0 1H1.707l8.147 8.146a.5.5 0 0 1-.708.708L1 1.707V5.5a.5.5 0 0 1-1 0v-5z"/>
</svg>`

const createPlant = (obj) => {
  myPlants.push(obj);
  localStorage.setItem('plants', JSON.stringify(myPlants));
  if(altText.style.display == 'block'){
    altText.style.display='none';
  }
  let name = obj.name;
  let type = obj.type;

  let div = document.createElement('div');
  div.innerHTML = `<p class="name-p">${name}</p> <p class="type-p">${type}</p>`;
  let span = document.createElement('span');
  let span2 = document.createElement('span');
  span.classList.add('trash-icon');
  span2.classList.add('modal-icon');

  span.addEventListener('click', function() {
    const index = Array.from(plantsList.children).indexOf(div);
    openDeleteModal(index);
  });

  span2.addEventListener('click', function(){
    const index = Array.from(plantsList.children).indexOf(div);
    openPlantModal(index);
  })

  span2.id='openPlantIcon'
  span2.setAttribute("data-type", type)
  span2.innerHTML = upModalSvg;
  span.innerHTML = trashSvg;
  div.appendChild(span2)
  div.appendChild(span);
  plantsList.appendChild(div);
};



// Obtenha o elemento do ícone gear
const gearIcon = document.getElementById('gear-icon');

// Adicione um evento de clique no ícone gear
gearIcon.addEventListener('click', function() {
    this.classList.toggle('rotation')
    // Adicione ou remova a classe 'show-menu' para mostrar ou ocultar o menu
    setTimeout(() => {
      openMenuModal()
      this.classList.toggle('rotation')
    }, 200);
});


let toogleLeaves = document.getElementById('toggle-leaves');
let leaves = document.getElementById('leaves');
let toggleMusic = document.getElementById('toggle-music');

// Carregar preferências do localStorage ao carregar a página
document.addEventListener('DOMContentLoaded', function(){
  let leavesPreference = localStorage.getItem('leavesPreference');
  let musicPreference = localStorage.getItem('musicPreference');
  playVideo()
  if (leavesPreference === 'visible') {
    toogleLeaves.checked = true;
    leaves.style.display = 'flex';
  } else {
    toogleLeaves.checked = false;
    leaves.style.display = 'none';
  }

  if (musicPreference === 'on') {
    toggleMusic.checked = true;
    playVideo();
  } else {
    toggleMusic.checked = false;
    pauseVideo();
  }
});

const showLeaves = (e) => {
  if(e.target.checked){
    leaves.style.display='flex';
    localStorage.setItem('leavesPreference', 'visible');
  } else {
    leaves.style.display='none';
    localStorage.setItem('leavesPreference', 'hidden');
  }
}

const playVideo = () => {
  const iframe = document.getElementById('video-player');
  if (iframe && iframe.contentWindow && iframe.contentWindow.postMessage) {
    iframe.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
  }
};

const pauseVideo = () => {
  const iframe = document.getElementById('video-player');
  if (iframe && iframe.contentWindow && iframe.contentWindow.postMessage) {
    iframe.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', '*');
  }
};

const turnMusic = (e) => {
  if(e.target.checked){
    playVideo();
    localStorage.setItem('musicPreference', 'on');
  } else {
    pauseVideo();
    localStorage.setItem('musicPreference', 'off');
  }
}

toogleLeaves.addEventListener('change', showLeaves);
toggleMusic.addEventListener('change', turnMusic);

let refreshBtn = document.querySelector('.refresh-btn')

refreshBtn.addEventListener("click", function() {
  window.location.reload();
})