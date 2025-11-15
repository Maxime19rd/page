// Animation d'entrée des sections
const sections = document.querySelectorAll('.section');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));

// Carousel
document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const cards = Array.from(track.children);
  const btnNext = document.querySelector(".carousel-btn.next");
  const btnPrev = document.querySelector(".carousel-btn.prev");

  let index = 0;

  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + parseFloat(getComputedStyle(cards[0]).marginRight);
    const visibleWidth = track.parentElement.offsetWidth;
    const offset = -index * cardWidth + (visibleWidth / 2 - cardWidth / 2);
    track.style.transform = `translateX(${offset}px)`;
    cards.forEach((card, i) => card.classList.toggle("active", i === index));
  }

  btnNext.addEventListener("click", () => {
    index = (index + 1) % cards.length;
    updateCarousel();
  });

  btnPrev.addEventListener("click", () => {
    index = (index - 1 + cards.length) % cards.length;
    updateCarousel();
  });

  // Support clavier
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") btnNext.click();
    if (e.key === "ArrowLeft") btnPrev.click();
  });

  window.addEventListener("resize", updateCarousel);
  updateCarousel();
});
