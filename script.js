const projects = [
    {
  title: "Suivi des vestiaires sur site industriel avec Power BI",
  description: "Ce projet consiste en la création d’un tableau de bord Power BI permettant de suivre l’occupation et l’état des vestiaires sur un site industriel. Il facilite la gestion opérationnelle en offrant une visualisation claire des données en temps réel. L’objectif est d’optimiser l’utilisation des installations et d’anticiper les besoins en maintenance.",
  image: "images/vestiaires.png",
  date: "Juin 2025",
  url: "https://tonlienouportfolio.com/vestiaires",  // Remplace ce lien par le bon
  page: "vestiaires.html"
},
          {
    title: "Application d’accès centralisé aux rapports Power BI",
    description: "Application Power Apps conçue pour centraliser l’accès aux rapports Power BI de l’entreprise. Elle offre une navigation fluide grâce à différents filtres, un affichage dynamique des métadonnées et un historique des versions. L’application permet également de mettre en favoris les rapports les plus consultés. Elle vise à améliorer l’accessibilité, la documentation et la valorisation des rapports Power BI.",
    image: "images/apporano.png",
    date: "Mai 2025",
    url: "",
    page: "apporano.html "              
  },
    {
    title: "Application R Shiny ML",
    description: "Ce projet s'inscrit dans le cadre de l'exploration des techniques de classification en apprentissage automatique. L'application web, développée avec RShiny, permet d'importer et de prétraiter des jeux de données, d'explorer visuellement leurs caractéristiques, et d'appliquer différents modèles de classification supervisée.",
    image: "images/shinyapp.png",
    date: "Février 2025",
    url: "https://qnr4y4-maxime-rey0dor0ne.shinyapps.io/application/",
    page: "shinyapp.html"         
  },
  {
    title: "Méthodes de classification supervisée en R et Python",
    description: "Cette publication présente une étude comparative de méthodes de classification supervisée, mises en œuvre avec les langages R et Python. Plusieurs algorithmes sont explorés à travers cinq jeux de données de référence. L’approche est appliquée, reproductible, et destinée à un public intéressé par la data science.",
    image: "images/classification.png",
    date: "Juillet 2024",
    url: "https://cel.hal.science/hal-04690630v2",
    page: "ml.html"        
  }

];
const container = document.getElementById("project-list");


projects.forEach(project => {
  const div = document.createElement("div");
  div.className = "project";

div.innerHTML = `
  <div class="project-card" onclick="window.location.href='${project.url || project.page}'" role="button" aria-label="Voir le projet ${project.title}">
    <h3 class="project-title">${project.title}</h3>
    <p class="project-date">${project.date}</p>
    <img src="${project.image}" alt="${project.title}" class="project-image">
    <p class="project-description">${project.description}</p>
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
