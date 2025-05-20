const projects = [
    {
    title: "Application R Shiny ML",
    description: "Application interactive en R Shiny pour tester des modèles de machine learning.",
    image: "images/shinyapp.png",
    date: "Février 2025",
    url: "https://qnr4y4-maxime-rey0dor0ne.shinyapps.io/application/"
  },
  {
    title: "Méthodes de classification supervisée en R et Python",
    description: "Méthodes de classification en R et Python.",
    image: "images/classification.png",
    date: "Juillet 2024",
    url: "https://cel.hal.science/hal-04690630v2"
  }
];

const container = document.getElementById("project-list");

projects.forEach(project => {
  const div = document.createElement("div");
  div.className = "project";
div.innerHTML = `
  <img src="${project.image}" alt="aperçu du projet" class="project-img">
  <div class="project-content">
    <h3>${project.title}</h3>
    <p><strong>Date :</strong> ${project.date}</p>
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
