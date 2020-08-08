
const images = document.querySelectorAll('.carousel img');
const previousBtn = document.querySelector('.previous-btn');
const nextBtn = document.querySelector('.next-btn');
const carouselSpeed = 5000;

function changeActiveImage(direction){
  let currentImage = document.querySelector('.carousel img.active');
  let currentIndex = currentImage.dataset.index;
  let x = parseInt(currentIndex) + direction;
  let nextIndex = x === -1 ? images.length - 1  : x === images.length ? 0 : x;
  console.log(nextIndex)
  let nextImage = images[nextIndex];
  nextImage.classList.add('active');
  currentImage.classList.remove('active');
}

function cycleImages(){
  changeActiveImage(1);
  carouselTimeout = window.setTimeout(cycleImages, carouselSpeed)
}

function carouselClick(direction){
  window.clearTimeout(carouselTimeout);
  changeActiveImage(direction);
  carouselTimeout = window.setTimeout(cycleImages, carouselSpeed);
}

nextBtn.addEventListener('click', () => {
 carouselClick(1); 
})

previousBtn.addEventListener('click', () => {
  carouselClick(-1);
})

let carouselTimeout = window.setTimeout(cycleImages, carouselSpeed)