// ✏️ Tout le contenu à personnaliser se trouve ici.
const EMAIL = "jonathanbalezi@gmail.com";

const PROJETS = [
	/*{ cat:"Application desktop", nom:"Station Arctique", url:"station-arctique.app", val:"-18.4°", label:"// Station Arctique",
	 *  desc:"Tableau de bord de suivi climatique pour une station de recherche nordique.", tech:["C++","Qt","SQLite"],
	 *  demarche:"À remplacer : comment tu as conçu l’application et pourquoi ces choix techniques.",
	 *  defis:"À remplacer : un problème difficile rencontré et la façon dont tu l’as résolu.",
	 *  resultats:"À remplacer : ce que le projet fait aujourd’hui, avec des chiffres si possible.", code:"#" },
	 * { cat:"Gestion de données", nom:"Clinique Vitavet", url:"clinique-vitavet.app", val:"08:30", label:"// Clinique Vitavet",
	 *  desc:"Solution de gestion des rendez-vous et dossiers pour une clinique vétérinaire.", tech:["Python","Qt","PostgreSQL"],
	 *  demarche:"À remplacer : démarche.", defis:"À remplacer : défis.", resultats:"À remplacer : résultats.", code:"#" },*/
	
	{
		cat: "Gestion des ressources",
		nom: "Station Arctique",
		url: "station-arctique.app",
		val: "-18.4°",
		label: "// Station Arctique",
		
		desc: "Programme en C++ simulant la gestion de l’inventaire d’une station de recherche arctique. Il permet de charger, afficher, consommer et trier les ressources, tout en enregistrant les opérations dans un journal de bord.",
		
		tech: ["C++", "Fichiers texte", "QuickSort", "Gestion des erreurs"],
		
		demarche: "Conception d’un programme interactif en C++ organisé autour d’un menu permettant de gérer les ressources de la station. Les données sont chargées depuis database1.txt, qui contient le nom, la quantité, le type et une valeur spécifique de chaque ressource. Les opérations sont réalisées à partir des données chargées, puis consignées dans journal_bord.txt.",
		
		defis: "La gestion fiable des entrées utilisateur et des quantités disponibles constituait un défi important. Le programme vérifie les quantités demandées, empêche la consommation lorsque le stock est insuffisant et gère les saisies invalides. Le tri par quantité croissante repose sur un algorithme QuickSort implémenté manuellement, dont la complexité moyenne est O(n log n).",
		
		resultats: "Réalisation d’un système interactif permettant de charger et d’afficher l’inventaire, de consommer des ressources, de trier les stocks par quantité et de conserver un historique des opérations. Le journal de bord enregistre notamment les chargements, les consommations, les tris, les choix invalides et la fermeture du programme.",
		
		code: "https://github.com/JiGo29/station-cpp"
	},
{
	cat: "Gestion vétérinaire",
	nom: "Clinique Vitavet",
	url: "clinique-vitavet.app",
	val: "C++",
	label: "// Clinique Vitavet",
	
	desc: "Prototype de gestion d’une clinique vétérinaire développé en C++ dans le cadre du cours INFO1102 – Principes de programmation II (Devoir 2). Il permet d’enregistrer des animaux, de gérer leurs consultations, de calculer les tarifs selon l’espèce et de produire un bilan financier.",
	
	tech: ["C++", "POO", "Polymorphisme", "Gestion de la mémoire", "Fichiers texte"],
	
	demarche: "Développement d’un système orienté objet permettant de représenter plusieurs espèces animales : chiens, chats, oiseaux et reptiles. Chaque animal possède un identifiant unique et des informations communes, ainsi qu’un attribut propre à son espèce. Le système associe les consultations aux animaux et utilise le polymorphisme pour calculer automatiquement les tarifs des soins.",
	
	defis: "La conception d’un modèle orienté objet capable de prendre en charge différentes espèces constituait un défi central. Le polymorphisme permet d’appliquer un tarif adapté à chaque espèce. Le programme protège également les opérations sensibles contre les saisies invalides, les identifiants inexistants, les fichiers illisibles et les conteneurs vides grâce à des blocs try/catch. La mémoire des animaux créés dynamiquement est libérée avant la fermeture.",
	
	resultats: "Réalisation d’un prototype fonctionnel permettant d’enregistrer les animaux, d’afficher leurs fiches, de gérer les consultations, de calculer les revenus totaux et moyens, puis de générer un rapport texte regroupant les animaux, les consultations et le bilan financier.",
	
	code: "https://github.com/JiGo29/clinique-cpp"
},

{
	cat: "Algorithmique",
	nom: "Convertisseur RPN",
	url: "convertisseur-rpn.app",
	val: "LIFO",
	label: "// Convertisseur RPN",
	
	desc: "Programme en C++ qui utilise une pile dynamique pour traiter une expression arithmétique composée de chiffres, de lettres, d'opérateurs et de parenthèses. Il affiche les éléments dans l'ordre postfixé et enregistre certaines valeurs dans un fichier texte.",
	
	tech: [
		"C++",
		"Structures de données",
		"Piles dynamiques",
		"Pointeurs",
		"Gestion des fichiers"
	],
	
	demarche: "Conception d'une pile à l'aide de structures chaînées et de pointeurs. Chaque nœud contient un caractère et un pointeur vers le nœud suivant. Les fonctions empiler et dépiler permettent de gérer le sommet de la pile. Le programme parcourt l'expression saisie caractère par caractère afin de traiter les opérandes, les opérateurs et les parenthèses.",
	
	defis: "La gestion du sommet de la pile, des parenthèses et de l'ordre de traitement des opérateurs demande une attention particulière. Le projet met en pratique l'allocation dynamique avec new et delete, la gestion de la taille de la pile et la manipulation de fichiers pour conserver des valeurs dans valeurs.in.",
	
	resultats: "Réalisation d'un programme interactif en C++ mettant en pratique les piles dynamiques, le parcours de chaînes de caractères et la manipulation de fichiers. Le programme affiche les opérandes et les opérateurs dépilés dans le terminal et conserve certaines valeurs dans un fichier texte.",
	
	code: "#"
},

{
	cat: "Structures de données",
	nom: "Détecteur de palindromes",
	url: "detecteur-palindromes.app",
	val: "LIFO / FIFO",
	label: "// Détecteur de palindromes",
	
	desc: "Programme en C++ qui détermine si un mot ou une phrase est un palindrome en utilisant simultanément une pile et une file. Il ignore les caractères non alphabétiques, normalise les lettres en minuscules et compare les caractères dans l'ordre inverse et dans l'ordre initial.",
	
	tech: [
		"C++",
		"Piles",
		"Files",
		"Chaînes de caractères",
		"Passage par référence"
	],
	
	demarche: "Le programme parcourt la phrase saisie et ajoute chaque lettre alphabétique en minuscules dans une pile et dans une file. La pile restitue les caractères selon le principe LIFO (dernier entré, premier sorti), tandis que la file utilise le principe FIFO (premier entré, premier sorti). La comparaison des caractères permet de vérifier si la phrase se lit de la même manière dans les deux sens.",
	
	defis: "Le principal défi consiste à comparer correctement les caractères dans les deux structures de données tout en ignorant les espaces, la ponctuation et les autres caractères non alphabétiques. Le passage des structures par référence évite de réaliser des copies inutiles. Après chaque vérification, la pile et la file sont vidées pour permettre le traitement d'une nouvelle phrase.",
	
	resultats: "Réalisation d'un vérificateur interactif de palindromes qui accepte des mots et des phrases. Le programme affiche si le texte est un palindrome après normalisation des lettres et comparaison des éléments de la pile et de la file.",
	
	code: "#"
},

/*{ cat:"Outil en ligne de commande", nom:"Shell Notes", url:"shell-notes.app", val:"3 notes trouvées", label:"$ notes list --recent",
 *  desc:"Prise de notes locale, rapide et indexée directement depuis le terminal.", tech:["Python","Typer","Pytest"],
 *  demarche:"À remplacer : démarche.", defis:"À remplacer : défis.", resultats:"À remplacer : résultats.", code:"#" },
 * { cat:"Prototype mobile", nom:"EcoTrack", url:"ecotrack.app", val:"-12% CO₂", label:"// EcoTrack",
 *  desc:"Suivi simple des habitudes quotidiennes et de leur impact environnemental.", tech:["Python","Flet","SQLite"],
 *  demarche:"À remplacer : démarche.", defis:"À remplacer : défis.", resultats:"À remplacer : résultats.", code:"#" }*/
];

// [nom, 1 = Intermédiaire / 0 = Notions]
const COMPETENCES = {
	"Langages":[["C++",1],["Python",0],["HTML / CSS",0],["JavaScript",0]],
	"Frameworks":[["Qt",0],["SFML",0],["Flet",0],["Pytest",0]],
	"Outils":[["VS Code",1],["Git / GitHub",0],["CMake",0],["Figma",0]],
	"Systèmes":[["Windows",1],["Linux",0],["Bash",0],["Docker",0]]
};

/*const VEILLE = [
	["C++ moderne","J’explore les concepts, ranges et smart pointers pour écrire du code plus sûr et expressif.","cppreference.com","https://cppreference.com"],
["Linux au quotidien","Je documente mon passage progressif à Linux et les outils qui améliorent mon flux de travail.","linuxjourney.com","https://linuxjourney.com"],
["Web accessible","Je teste les bonnes pratiques ARIA et la navigation clavier sur chacun de mes prototypes.","web.dev/accessibility","https://web.dev/accessibility"]
];*/


const VEILLE = [
    [
        "C++ moderne",
        "J’explore les concepts, ranges et smart pointers pour écrire du code plus sûr et expressif.",
        "cppreference.com",
        "https://cppreference.com"
    ],
    [
        "Linux au quotidien",
        "Je documente mon passage progressif à Linux et les outils qui améliorent mon flux de travail.",
        "linuxjourney.com",
        "https://linuxjourney.com"
    ],
    [
        "Développement web",
        "J’essaie d’apprendre les bases du développement web en découvrant HTML pour structurer les pages, CSS pour les mettre en forme et JavaScript pour ajouter de l’interactivité.",
        "MDN Web Docs",
        "https://developer.mozilla.org/fr/docs/Learn_web_development"
    ],
    [
        "Découverte de Python",
        "Je souhaite découvrir Python, comprendre sa syntaxe et apprendre progressivement les bases de la programmation à travers des exercices et de petits projets.",
        "Python — Guide pour débutants",
        "https://wiki.python.org/python/getting-started/"
    ]
];


/*const PARCOURS = [
	["2024 — 2028","Baccalauréat en informatique appliquée","Université de Moncton","Algorithmique, programmation orientée objet, bases de données et génie logiciel."],
["Été 2026","Assistant au soutien informatique","Organisation fictive — à remplacer","Diagnostic de postes, documentation et accompagnement des utilisateurs.","« Jonathan apprend vite et communique avec beaucoup de clarté. » — Citation fictive"],
["2025","Certification Git & GitHub","Plateforme fictive — à remplacer","Branches, revues de code, résolution de conflits et intégration continue."],
["2023 — 2024","Diplôme d’études secondaires","Établissement à remplacer",""]
];*/


const PARCOURS = [
    [
        "Août 2025 — Aujourd’hui",
        "Baccalauréat en informatique appliquée",
        "Université de Moncton",
        "Formation en informatique axée sur l’algorithmique, la programmation, les bases de données et le développement logiciel."
    ],
    [
        "Novembre 2024 — Juin 2025",
        "Bachelor of Engineering, Computer Software Engineering",
        "Institut Supérieur d’Informatique, Programmation et Analyse",
        "Études en génie logiciel et découverte des concepts fondamentaux du développement informatique."
    ],
    [
        "Février 2023 — Mars 2024",
        "Études en sciences biomédicales",
        "Université Catholique de Bukavu",
        "Études en médecine avec une initiation aux sciences biomédicales."
    ],
    [
        "Septembre 2016 — Juillet 2022",
        "Diplôme d’études secondaires — Mathématiques, Physique, Biologie et Chimie",
        "Collège Alfajiri",
        "Formation scientifique avec un accent sur les mathématiques et les sciences naturelles."
    ]
];

