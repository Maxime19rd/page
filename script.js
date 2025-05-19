// Liste de projets (tu peux en ajouter autant que tu veux)
const projects = [
  {
    title: "📊 Analyse Covid",
    description: "Visualisation des données Covid avec Python, Pandas et Matplotlib.",
    link: "https://github.com/tonpseudo/covid-data-analysis"
  },
  {
    title: "🤖 Chatbot NLP",
    description: "Assistant conversationnel en Python avec spaCy.",
    link: "https://github.com/tonpseudo/chatbot-nlp"
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
