const projects = [
          {
    title: "Application d’accès centralisé aux rapports Power BI",
    description: "Application Power Apps conçue pour centraliser l’accès aux rapports Power BI de l’entreprise. Elle offre une navigation fluide grâce à des filtres par périmètre et par catégorie, un affichage dynamique des contacts métiers et un historique des versions. L’application permet également de mettre en favoris les rapports les plus consultés. Elle vise à améliorer l’accessibilité, la documentation et la valorisation des rapports Power BI.",
    image: "images/apporano.png",
    date: "Juillet 2024",
    url: "https://apps.powerapps.com/play/e/029e8b18-35a7-ef34-97bc-f759daae8efb/a/6f7bfc02-b823-4bc1-9ab3-24739a846276?tenantId=c4cb41a7-56e7-47fc-b399-169fa2eb2bf0&hint=8c11eebe-4dab-45a8-a6d8-125b66e1d4d1&sourcetime=1747922030114"
  },
    {
    title: "Application R Shiny ML",
    description: "Ce projet s'inscrit dans le cadre de l'exploration des techniques de classification en apprentissage automatique. L'application web, développée avec RShiny, permet d'importer et de prétraiter des jeux de données, d'explorer visuellement leurs caractéristiques, et d'appliquer différents modèles de classification (k‑NN, régression, forêts aléatoires, SVM, réseaux de neurones). Grâce à une interface interactive et intuitive, les utilisateurs peuvent ajuster les hyperparamètres et visualiser les performances des modèles en temps réel, facilitant ainsi la prise de décision et l'optimisation des méthodes.",
    image: "images/shinyapp.png",
    date: "Février 2025",
    url: "https://qnr4y4-maxime-rey0dor0ne.shinyapps.io/application/"
  },
  {
    title: "Méthodes de classification supervisée en R et Python",
    description: "Cette publication présente une étude comparative de méthodes de classification supervisée, mises en œuvre avec les langages R et Python. Plusieurs algorithmes sont explorés (k plus proches voisins, régression logistique, forêts aléatoires, SVM, réseaux de neurones) à travers cinq jeux de données de référence (Iris, Spam, MNIST, Titanic, Wine). L’approche est appliquée, reproductible, et destinée à un public intéressé par la data science et l’apprentissage automatique.",
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
  <div class="project-content">
    <img src="${project.image}" alt="${project.title}">
    <div class="project-text">
      <h3>${project.title}</h3>
      <br>
      <p class="project-date">${project.date}</p>
      <br>
      <p class="project-description">${project.description}</p>
      <a href="project.html?url=${encodeURIComponent(project.url)}&title=${encodeURIComponent(project.title)}">Voir le projet</a>
    </div>
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
