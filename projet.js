// ======= Liste des projets =======
const projects = {
  shiny: {
    title: "Application R Shiny",
    media: { type: "iframe", src: "https://ton-app-shiny-link" },
    description: "Exploration interactive de modèles de classification supervisée avec R Shiny.",
    tech: ["R / Shiny", "ggplot2", "dplyr", "tidyr"]
  },
  powerapps: {
    title: "Portail Power Apps",
    media: { type: "image", src: "images/powerapps.jpg" },
    description: "Application centralisant les rapports Power BI et les contacts métier.",
    tech: ["Power Apps", "SharePoint", "Power BI"]
  },
  powerbi: {
    title: "Tableaux de bord Power BI",
    media: { type: "iframe", src: "https://app.powerbi.com/view?r=..." },
    description: "Automatisation des rapports et mesures DAX pour un suivi efficace.",
    tech: ["Power BI", "DAX", "Power Query"]
  },
  classification: {
    title: "Classification supervisée",
    media: { type: "image", src: "images/classification.jpg" },
    description: "Comparaison de cinq méthodes de classification en R et Python.",
    tech: ["R", "Python", "Scikit-learn", "caret"]
  },
  decisiontools: {
    title: "Outils décisionnels",
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
