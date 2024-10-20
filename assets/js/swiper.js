const mainSwiper = new Swiper(".main-swiper", {
  effect: "coverflow",
  spaceBetween: 10,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",

  coverflowEffect: {
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  rewind: true,

  keyboard: {
    enabled: true,
  }
});


const carouselItems = document.getElementsByClassName('project-item');
const projectPopover = document.getElementsByClassName('project-popover')[0];

projectPopover.addEventListener('click', event => {
  if (event.target === projectPopover) {
    projectPopover.classList.toggle('active');
  }
});

for (let item of carouselItems) {
  if (item.classList.contains('carousel')) {
    item.addEventListener('click', () => {
      const images = item.querySelectorAll('.carousel-data > img');


      const carousels = projectPopover.getElementsByClassName('swiper-wrapper');
      for (let carousel of carousels) {
        let html = '';

        for (let image of images) {
          html += `<div class="swiper-slide">
            <img src="${image.src}" />
      </div>`;
        }

        carousel.innerHTML = html;
      }

      projectPopover.classList.add('active');
    })
  }
}