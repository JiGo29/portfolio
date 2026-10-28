// ✏️ Tout le contenu à personnaliser se trouve ici.
const EMAIL = "jonathan.a.remplacer@email.com";

const PROJETS = [
  { cat:"Application desktop", nom:"Station Arctique", url:"station-arctique.app", val:"-18.4°", label:"// Station Arctique",
    desc:"Tableau de bord de suivi climatique pour une station de recherche nordique.", tech:["C++","Qt","SQLite"],
    demarche:"À remplacer : comment tu as conçu l’application et pourquoi ces choix techniques.",
    defis:"À remplacer : un problème difficile rencontré et la façon dont tu l’as résolu.",
    resultats:"À remplacer : ce que le projet fait aujourd’hui, avec des chiffres si possible.", code:"#" },
  { cat:"Gestion de données", nom:"Clinique Vitavet", url:"clinique-vitavet.app", val:"08:30", label:"// Clinique Vitavet",
    desc:"Solution de gestion des rendez-vous et dossiers pour une clinique vétérinaire.", tech:["Python","Qt","PostgreSQL"],
    demarche:"À remplacer : démarche.", defis:"À remplacer : défis.", resultats:"À remplacer : résultats.", code:"#" },
  { cat:"Outil en ligne de commande", nom:"Shell Notes", url:"shell-notes.app", val:"3 notes trouvées", label:"$ notes list --recent",
    desc:"Prise de notes locale, rapide et indexée directement depuis le terminal.", tech:["Python","Typer","Pytest"],
    demarche:"À remplacer : démarche.", defis:"À remplacer : défis.", resultats:"À remplacer : résultats.", code:"#" },
  { cat:"Prototype mobile", nom:"EcoTrack", url:"ecotrack.app", val:"-12% CO₂", label:"// EcoTrack",
    desc:"Suivi simple des habitudes quotidiennes et de leur impact environnemental.", tech:["Python","Flet","SQLite"],
    demarche:"À remplacer : démarche.", defis:"À remplacer : défis.", resultats:"À remplacer : résultats.", code:"#" }
];

// [nom, 1 = Intermédiaire / 0 = Notions]
const COMPETENCES = {
  "Langages":[["C++",1],["Python",1],["HTML / CSS",1],["JavaScript",0]],
  "Frameworks":[["Qt",1],["SFML",0],["Flet",0],["Pytest",0]],
  "Outils":[["Git / GitHub",1],["VS Code",1],["CMake",0],["Figma",0]],
  "Systèmes":[["Windows",1],["Linux",1],["Bash",0],["Docker",0]]
};

const VEILLE = [
  ["C++ moderne","J’explore les concepts, ranges et smart pointers pour écrire du code plus sûr et expressif.","cppreference.com","https://cppreference.com"],
  ["Linux au quotidien","Je documente mon passage progressif à Linux et les outils qui améliorent mon flux de travail.","linuxjourney.com","https://linuxjourney.com"],
  ["Web accessible","Je teste les bonnes pratiques ARIA et la navigation clavier sur chacun de mes prototypes.","web.dev/accessibility","https://web.dev/accessibility"]
];

const PARCOURS = [
  ["2024 — 2028","Baccalauréat en informatique appliquée","Université de Moncton","Algorithmique, programmation orientée objet, bases de données et génie logiciel."],
  ["Été 2026","Assistant au soutien informatique","Organisation fictive — à remplacer","Diagnostic de postes, documentation et accompagnement des utilisateurs.","« Jonathan apprend vite et communique avec beaucoup de clarté. » — Citation fictive"],
  ["2025","Certification Git & GitHub","Plateforme fictive — à remplacer","Branches, revues de code, résolution de conflits et intégration continue."],
  ["2023 — 2024","Diplôme d’études secondaires","Établissement à remplacer",""]
];
