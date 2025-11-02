// Sélectionne toutes les sections
const sections = document.querySelectorAll('.section');

// Utilise l'Intersection Observer pour détecter quand une section entre dans la fenêtre
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible'); // Ajoute la classe pour l'animation CSS
      observer.unobserve(entry.target);       // Optionnel : n'observe plus après l'animation
    }
  });
}, { threshold: 0.1 });

// Observe chaque section
sections.forEach(section => observer.observe(section));

document.addEventListener("DOMContentLoaded", () => {
  const track = document.querySelector(".carousel-track");
  const cards = Array.from(track.children);
  const btnNext = document.querySelector(".carousel-btn.next");
  const btnPrev = document.querySelector(".carousel-btn.prev");

  let index = 0;

  function updateCarousel() {
    const cardWidth = cards[0].offsetWidth + 30; // marge de 30px
    const offset = -index * cardWidth + (track.parentElement.offsetWidth / 2 - cardWidth / 2);
    track.style.transform = `translateX(${offset}px)`;

    cards.forEach((card, i) => {
      card.classList.toggle("active", i === index);
    });
  }

  btnNext.addEventListener("click", () => {
    index = (index + 1) % cards.length;
    updateCarousel();
  });

  btnPrev.addEventListener("click", () => {
    index = (index - 1 + cards.length) % cards.length;
    updateCarousel();
  });

  window.addEventListener("resize", updateCarousel);
  updateCarousel();
});

