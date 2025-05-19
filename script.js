// Liste de tes projets
const projects = [
  {
    title: "🧠 Classification supervisée avec R et Python",
    description: "Étude comparative de plusieurs méthodes de classification supervisée implémentées en R et Python sur divers jeux de données.",
    link: "https://github.com/tonpseudo/classification-supervisee"
  },
  {
    title: "📈 App R Shiny ML",
    description: "Application R Shiny interactive permettant d’appliquer et visualiser des algorithmes de machine learning sur ses propres données.",
    link: "https://github.com/tonpseudo/app-rshiny-ml"
  }
];

// Insertion dynamique dans le DOM
const container = document.getElementById("project-list");

projects.forEach(project => {
  const div = document.createElement("div");
  div.className = "project";
  div.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">Voir sur GitHub →</a>
  `;
  container.appendChild(div);
});

// Bouton retour en haut
const topBtn = document.getElementById("topBtn");

window.onscroll = () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

topBtn.onclick = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
