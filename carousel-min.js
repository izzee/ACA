const images=document.querySelectorAll(".carousel img"),previousBtn=document.querySelector(".previous-btn"),nextBtn=document.querySelector(".next-btn"),carouselSpeed=5e3;function changeActiveImage(e){let c=document.querySelector(".carousel img.active"),t=c.dataset.index,o=parseInt(t)+e,i=-1===o?images.length-1:o===images.length?0:o;console.log(i),images[i].classList.add("active"),c.classList.remove("active")}function cycleImages(){changeActiveImage(1),carouselTimeout=window.setTimeout(cycleImages,carouselSpeed)}function carouselClick(e){window.clearTimeout(carouselTimeout),changeActiveImage(e),carouselTimeout=window.setTimeout(cycleImages,carouselSpeed)}nextBtn.addEventListener("click",()=>{carouselClick(1)}),previousBtn.addEventListener("click",()=>{carouselClick(-1)});let carouselTimeout=window.setTimeout(cycleImages,carouselSpeed);