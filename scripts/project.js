const info = document.querySelector('.project-info');
const hero = document.querySelector('.project-hero img');
const caption = document.querySelector('.img-caption');
const description = document.querySelector('.project-description');


window.addEventListener('scroll', () => {
  if(window.innerWidth > 768){
    console.log(hero.getBoundingClientRect());
    const scrollRemaining = Math.round(info.getBoundingClientRect().y / window.innerHeight * 100) / 100;
    hero.style.opacity = scrollRemaining;
    info.classList.toggle('top', scrollRemaining <= 0);
  }
})