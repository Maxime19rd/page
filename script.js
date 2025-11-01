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
