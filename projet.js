document.addEventListener("DOMContentLoaded", () => {
  const projects = {
    shiny: {
      title: "Application R Shiny",
      contexte: "Exploration interactive de modèles de classification supervisée avec R Shiny.",
      media: { type: "iframe", src: "https://ton-app-shiny-link" },
      description: "Ce projet consiste à créer une application R Shiny pour explorer et visualiser des modèles de classification.",
      tech: ["R / Shiny", "ggplot2", "dplyr", "tidyr"]
    },
    powerapps: {
      title: "Portail Power Apps",
      contexte: "Ce projet a été réalisé durant mon stage de Master 2 en Statistique et Data Science chez Orano DS à La Hague. L’objectif était de concevoir une application Power Apps permettant de centraliser l’accès aux rapports Power BI utilisés par les équipes métier.",
      media: { type: "image", src: "images/apporano.png" },
      description: "Application centralisant les rapports Power BI et les contacts métier.",
      tech: ["Power Apps", "SharePoint", "Power BI"]
    },
    powerbi: {
      title: "Tableaux de bord Power BI",
      contexte: "Projet réalisé pour automatiser le suivi des vestiaires et uniformiser les rapports sur site industriel.",
      media: { type: "iframe", src: "https://app.powerbi.com/view?r=..." },
      description: "Automatisation des rapports et mesures DAX pour un suivi efficace.",
      tech: ["Power BI", "DAX", "Power Query"]
    },
    classification: {
      title: "Méthodes de classification supervisée",
      contexte: "Projet de Master 1 visant à étudier et comparer cinq méthodes de classification supervisée avec R et Python.",
      media: { type: "image", src: "images/classification2.png" },
      description: "Comparaison de cinq méthodes de classification en R et Python.",
      tech: ["R", "Python", "Scikit-learn", "caret"]
    },
    decisiontools: {
      title: "Transformation de données avec Power Query",
      contexte: "Centralisation d’applications internes et outils décisionnels pour l’entreprise.",
      media: { type: "image", src: "images/decisiontools.jpg" },
      description: "Gestion et transformation des données pour les équipes métier.",
      tech: ["Power Apps", "SharePoint", "Power BI"]
    }
  };

  const projetKey = new URLSearchParams(window.location.search).get('id');
  const project = projects[projetKey];

  if (!project) {
    document.getElementById("project-title").textContent = "Projet inconnu";
    document.getElementById("project-description").textContent = "Ce projet n'existe pas.";
    return;
  }

  // Remplissage des sections
  document.getElementById("project-title").textContent = project.title;
  document.getElementById("project-contexte").textContent = project.contexte || "";
  document.getElementById("project-description").textContent = project.description;

  const techList = document.getElementById("project-tech");
  project.tech.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    techList.appendChild(li);
  });

  const mediaContainer = document.getElementById("project-media");
  if (project.media) {
    let mediaElem;
    switch (project.media.type) {
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
        mediaElem.title = project.title;
        mediaElem.style.height = "500px";
        mediaElem.allowFullscreen = true;
        break;
    }
    mediaElem.style.width = "100%";
    mediaElem.style.borderRadius = "15px";
    mediaElem.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
    mediaContainer.appendChild(mediaElem);
  }
});
