document.addEventListener("DOMContentLoaded", () => {

  const projects = {
    shiny: {
      title: "Application R Shiny",
      contexte: "Ce projet académique avait pour objectif de créer une application interactive permettant d’explorer et de comparer différents modèles de classification supervisée. L’enjeu principal était de rendre accessibles les résultats statistiques et les performances des modèles aux utilisateurs, même sans compétences techniques avancées. L’accent a été mis sur l’ergonomie et la visualisation dynamique des résultats.",
      media: { type: "iframe", src: "https://ton-app-shiny-link" },
      description: "L’application R Shiny permet de charger des jeux de données, de configurer et d’entraîner plusieurs modèles de classification (régression logistique, k-NN, arbres de décision, forêts aléatoires, SVM). Les utilisateurs peuvent visualiser les performances des modèles via des graphiques interactifs, explorer les contributions des variables explicatives et comparer les prédictions. Ce projet m’a permis de consolider mes compétences en R, en visualisation de données et en conception d’interfaces interactives.",
      tech: ["R / Shiny", "ggplot2", "dplyr", "tidyr"]
    },
    powerapps: {
      title: "Portail Power Apps",
      contexte: "Ce projet a été réalisé lors de mon stage de Master 2 chez Orano DS à La Hague. Le but était de centraliser l’accès aux rapports Power BI utilisés par les équipes métier et de faciliter la communication entre les utilisateurs et les concepteurs de tableaux de bord. L’objectif était de réduire le temps de recherche des rapports et d’améliorer la documentation et la traçabilité des informations.",
      media: { type: "image", src: "images/apporano.png" },
      description: "J’ai conçu une application Power Apps offrant un portail interactif où les utilisateurs peuvent consulter, filtrer et rechercher des rapports selon le périmètre, la catégorie et les favoris. Le portail affiche dynamiquement les contacts métier associés à chaque rapport, permet de gérer l’historique des versions et d’ajouter de nouveaux rapports ou contacts via un formulaire intégré. Ce projet a renforcé mes compétences en Power Apps, Power Fx et intégration avec SharePoint et Power BI, tout en améliorant l’expérience utilisateur et la productivité des équipes.",
      tech: ["Power Apps", "SharePoint", "Power BI"]
    },
    powerbi: {
      title: "Tableaux de bord Power BI",
      contexte: "Ce projet professionnel visait à automatiser le suivi des vestiaires et à uniformiser les rapports existants sur un site industriel. Le défi consistait à consolider des données provenant de multiples sources, à créer des mesures fiables et à proposer une interface intuitive pour la consultation des indicateurs clés par les équipes opérationnelles.",
      media: { type: "iframe", src: "https://app.powerbi.com/view?r=..." },
      description: "J’ai développé des tableaux de bord intégrant des mesures DAX avancées et des transformations Power Query complexes pour assurer la fiabilité et la cohérence des données. Les dashboards permettent de suivre les vestiaires, détecter rapidement les anomalies et visualiser les indicateurs clés de performance. Ce projet m’a permis d’acquérir une expertise en modélisation de données, en automatisation de rapports et en amélioration de l’expérience utilisateur dans un contexte industriel exigeant.",
      tech: ["Power BI", "DAX", "Power Query"]
    },
    classification: {
      title: "Méthodes de classification supervisée",
      contexte: "Projet académique réalisé en Master 1 visant à étudier et comparer cinq méthodes de classification supervisée (régression logistique, k plus proches voisins, arbres de décision, forêts aléatoires et SVM) sur différents jeux de données. L’objectif était de comprendre les forces et limites de chaque algorithme, d’évaluer leur performance et leur robustesse, et de produire un rapport complet avec analyses et visualisations.",
      media: { type: "image", src: "images/classification2.png" },
      description: "J’ai implémenté et comparé les modèles en R et Python, en utilisant des métriques standards pour évaluer la performance (précision, rappel, F1-score, matrice de confusion). Le projet incluait l’analyse graphique des résultats et la production d’un rapport de 200 pages publié sur HAL Science. Ce travail m’a permis de renforcer mes compétences en analyse de données, en machine learning et en documentation scientifique, tout en mettant en pratique les concepts théoriques appris en cours.",
      tech: ["R", "Python", "Scikit-learn", "caret"]
    },
    decisiontools: {
      title: "Transformation de données avec Power Query",
      contexte: "Ce projet professionnel consistait à traiter et structurer des fichiers logs non standardisés provenant de systèmes industriels. L’objectif était de rendre ces données exploitables dans Power BI pour le suivi opérationnel et l’analyse métier, en automatisant le processus de nettoyage et de transformation.",
      media: { type: "image", src: "images/decisiontools.jpg" },
      description: "J’ai mis en place un processus complet dans Power Query incluant l’agrégation de fichiers multi-lignes, le nettoyage des données, l’extraction des champs clés (date, heure, type d’événement, message), et la transformation en tables structurées. Ces tables sont ensuite utilisées dans des dashboards Power BI pour le suivi et l’analyse. Ce projet m’a permis d’acquérir une forte expertise dans la manipulation de données complexes et dans la conception de pipelines fiables pour la prise de décision.",
      tech: ["Power Query", "SharePoint", "Power BI"]
    }
  };

  // Récupération du projet
  const projetKey = new URLSearchParams(window.location.search).get('id');
  const project = projects[projetKey];

  if (!project) {
    document.getElementById("project-title").textContent = "Projet inconnu";
    document.getElementById("project-contexte").textContent = "";
    document.getElementById("project-description").textContent = "Ce projet n'existe pas.";
    return;
  }

  // Remplissage du contenu
  document.getElementById("project-title").textContent = project.title;

  const contexteEl = document.getElementById("project-contexte");
  contexteEl.textContent = project.contexte;
  contexteEl.style.textAlign = "center";
  contexteEl.style.margin = "15px 0";
  contexteEl.style.fontSize = "1rem";
  contexteEl.style.lineHeight = "1.6";

  const descriptionEl = document.getElementById("project-description");
  descriptionEl.textContent = project.description;
  descriptionEl.style.textAlign = "center";
  descriptionEl.style.margin = "15px 0";
  descriptionEl.style.fontSize = "1rem";
  descriptionEl.style.lineHeight = "1.6";

  // Technologies
  const techList = document.getElementById("project-tech");
  techList.style.textAlign = "center";
  project.tech.forEach(t => {
    const li = document.createElement("li");
    li.textContent = t;
    li.style.display = "inline-block";
    li.style.margin = "0 10px";
    li.style.fontWeight = "500";
    techList.appendChild(li);
  });

  // Media
  const mediaContainer = document.getElementById("project-media");
  mediaContainer.style.textAlign = "center";
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
    mediaElem.style.width = "80%";
    mediaElem.style.borderRadius = "10px";
    mediaElem.style.boxShadow = "0 4px 12px rgba(0,0,0,0.08)";
    mediaContainer.appendChild(mediaElem);
  }

});
