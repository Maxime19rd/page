const projects = [
  {
    title: "Classification supervisée",
    description: "Méthodes de classification en R et Python.",
    url: "https://cel.hal.science/hal-04690630v2",
    image: "images/classification.png",
    date: "juillet 2024"
  },
  {
    title: "App R Shiny ML",
    description: "Application interactive en R Shiny pour tester des modèles de machine learning.",
    url: "https://qnr4y4-maxime-rey0dor0ne.shinyapps.io/application/",
    image: "images/shinyapp.png",
    date: "Février 2025"
  }
];

const container = document.getElementById("project-list");

projects.forEach(project => {
  const div = document.createElement("div");
  div.className = "project";
  div.innerHTML = `
    <img src="${project.image}" alt="Aperçu ${project.title}" class="project-image">
    <div class="project-content">
      <h3>${project.title}</h3>
      <p class="project-date">${project.date}</p>
      <p>${project.description}</p>
      <a href="project.html?url=${encodeURIComponent(project.url)}&title=${encodeURIComponent(project.title)}">Voir le projet →</a>
    </div>
  `;
  container.appendChild(div);
});


// Bouton retour haut
const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
};
topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
