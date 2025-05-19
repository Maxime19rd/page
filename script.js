const projects = [
  {
    title: "Classification supervisée",
    description: "Comparaison de méthodes de classification en R et Python.",
    url: "docs/classification.pdf"
  },
  {
    title: "App R Shiny ML",
    description: "Application interactive en R Shiny pour tester des modèles de machine learning.",
    url: "https://95dfada960ce43b380bf95cf44142f68.app.posit.cloud/p/a73c8409/"
  }
];

const container = document.getElementById("project-list");

projects.forEach(project => {
  const div = document.createElement("div");
  div.className = "project";
  div.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="project.html?url=${encodeURIComponent(project.url)}&title=${encodeURIComponent(project.title)}">Voir le projet →</a>
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
