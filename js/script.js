const slides = document.querySelectorAll('.slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const dots = document.querySelectorAll('.dot');

let current = 0;

function showSlide(index) {
  if(index >= slides.length) current = 0;
  else if(index < 0) current = slides.length - 1;
  else current = index;

  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${100 * (i - current)}%)`;
  });

  dots.forEach(dot => dot.classList.remove('active'));
  dots[current].classList.add('active');
}

// Initial display
showSlide(current);

// Auto slide
setInterval(() => {
  showSlide(current + 1);
}, 5000); // 5 seconds

// Next/Prev buttons
next.addEventListener('click', () => showSlide(current + 1));
prev.addEventListener('click', () => showSlide(current - 1));

// Dot navigation
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});



