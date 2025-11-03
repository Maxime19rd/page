// ======= Liste des projets =======
const projects = {
  shiny: {
    title: "Application R Shiny",
    contexte : "null",
    media: { type: "iframe", src: "https://ton-app-shiny-link" },
    description: "Exploration interactive de modèles de classification supervisée avec R Shiny.",
    tech: ["R / Shiny", "ggplot2", "dplyr", "tidyr"]
  },
  powerapps: {
    title: "Portail Power Apps",
    contexte : "Ce projet a été réalisé durant mon stage de Master 2 en Statistique et Data Science chez Orano DS à La Hague. L’objectif était de concevoir une application Power Apps permettant de centraliser l’accès aux rapports Power BI utilisés par les équipes métier. Ce portail visait à améliorer la navigation, la visibilité et la documentation des rapports existants, tout en facilitant la communication entre les utilisateurs et les concepteurs de tableaux de bord",
    media: { type: "image", src: "images/apporano.png" },
    description: "Application centralisant les rapports Power BI et les contacts métier.",
    tech: ["Power Apps", "SharePoint", "Power BI"]
  },
  powerbi: {
    title: "Tableaux de bord Power BI pour le suivi de vestiaire sur site industriel",
    contexte : "null",
    media: { type: "iframe", src: "https://app.powerbi.com/view?r=..." },
    description: "Automatisation des rapports et mesures DAX pour un suivi efficace.",
    tech: ["Power BI", "DAX", "Power Query"]
  },
  classification: {
    title: "Méthodes de classification supervisée avec R et Python",
    contexte : "Ce projet, réalisé durant mon Master 1 de Statistiques Appliquées, avait pour objectif d’étudier et de comparer plusieurs méthodes de classification supervisée à travers une approche théorique et pratique. Nous avons implémenté cinq algorithmes de classification — tels que la régression logistique, les k plus proches voisins, les arbres de décision, les forêts aléatoires et les SVM — en R et en Python. L’étude portait sur différents jeux de données afin d’évaluer les performances, la robustesse et l’interprétabilité de chaque méthode. Un rapport complet d’environ 200 pages, présentant les analyses, les visualisations et le code reproductible, a été publié sur HAL Science.",
    media: { type: "image", src: "images/classification2.png" },
    description: "Comparaison de cinq méthodes de classification en R et Python.",
    tech: ["R", "Python", "Scikit-learn", "caret"]
  },
  decisiontools: {
    title: "Transformation de données avec Power Query",
    contexte : "null",
    media: { type: "image", src: "images/decisiontools.jpg" },
    description: "Centralisation d’applications internes avec Power Apps.",
    tech: ["Power Apps", "SharePoint", "Power BI"]
  }
};

// ======= Récupération du projet depuis l'URL =======
const urlParams = new URLSearchParams(window.location.search);
const projetKey = urlParams.get('id');
const project = projects[projetKey];

if (project) {
  // Titre
  document.getElementById("project-title").textContent = project.title;

  document.getElementbyId("project-contexte").textContent = project.contexte;

  // Description
  document.getElementById("project-description").textContent = project.description;

  // Technologies
  const techList = document.getElementById("project-tech");
  project.tech.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    techList.appendChild(li);
  });

  // Media
  const mediaContainer = document.getElementById("project-media");
  if (project.media) {
    let mediaElem;
    switch(project.media.type) {
      case "image":
        mediaElem = document.createElement("img");
        mediaElem.src = project.media.src;
        mediaElem.alt = project.title;
        break;
      case "video":
        mediaElem = document.createElement("video");
        mediaElem.src = project.media.src;
        mediaElem.controls = true;
        break;
      case "iframe":
        mediaElem = document.createElement("iframe");
        mediaElem.src = project.media.src;
        mediaElem.style.height = "500px";
        mediaElem.allowFullscreen = true;
        break;
    }
    mediaElem.style.width = "100%";
    mediaElem.style.borderRadius = "15px";
    mediaElem.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
    mediaContainer.appendChild(mediaElem);
  }

} else {
  document.getElementById("project-title").textContent = "Projet inconnu";
  document.getElementById("project-description").textContent = "Ce projet n'existe pas.";
}
