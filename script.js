// Get the navbar toggler button
const navbarToggler = document.querySelector('.navbar-toggler');

// Get the navbar collapse element
const navbarCollapse = document.querySelector('.navbar-collapse');

// Add an event listener to the navbar toggler button
navbarToggler.addEventListener('click', () => {
  // Toggle the 'show' class on the navbar collapse element
  navbarToggler.classList.toggle('show');
  // Toggle the 'hide' class on the navbar collapse element
  navbarCollapse.classList.toggle('hide');
});



  const images = document.querySelectorAll('.carousel-image');
  let currentIndex = 0;

  function showImage(index) {
    images.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  function startCarousel() {
    showImage(currentIndex);
    setInterval(() => {
      currentIndex = (currentIndex + 1) % images.length;
      showImage(currentIndex);
    }, 2000); // Change every 3 seconds
  }

  document.addEventListener('DOMContentLoaded', startCarousel);


  const heroImages = document.querySelectorAll('.hero-carousel-image');
  let currentHeroIndex = 0;

  function showHeroSlide(index) {
    heroImages.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  function startHeroCarousel() {
    showHeroSlide(currentHeroIndex);
    setInterval(() => {
      currentHeroIndex = (currentHeroIndex + 1) % heroImages.length;
      showHeroSlide(currentHeroIndex);
    }, 2000); // 4 seconds
  }

  document.addEventListener('DOMContentLoaded', startHeroCarousel);


 
  const togatherImages = document.querySelectorAll('.togather-carousel-image');
  let currentTogatherIndex = 0;

  function showTogatherSlide(index) {
    togatherImages.forEach((img, i) => {
      img.classList.toggle('active', i === index);
    });
  }

  function startTogatherCarousel() {
    showTogatherSlide(currentTogatherIndex); // Fix: used correct variable
    setInterval(() => {
      currentTogatherIndex = (currentTogatherIndex + 1) % togatherImages.length;
      showTogatherSlide(currentTogatherIndex);
    }, 2000);
  }

  // Start the carousel once the page loads
  window.addEventListener('DOMContentLoaded', startTogatherCarousel);

  window.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".filled").forEach(bar => {
      const width = bar.style.width;
      bar.style.width = "0";
      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    });
  });


  let currentSlide = 0;
const slides = document.querySelectorAll('.event-carousel-slide');

function showSlide(n) {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');
    if (index === n) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide(currentSlide);
}

setInterval(nextSlide, 2000); // Change slide every 3 seconds