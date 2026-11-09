// ✏️ Tout le contenu à personnaliser se trouve ici.
const EMAIL = "jonathanbalezi05@gmail.com";

const PROJETS = [
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
		cat: "Algorithmes",
		nom: "Convertisseur RPN",
		url: "convertisseur-rpn.app",
		val: "a b c * +",
		label: "// Convertisseur RPN",
		
		desc: "Programme en C++ qui convertit une expression mathématique en notation infixe (a+b*c) en notation polonaise inversée (a b c * +). Il gère les cinq opérateurs + - * / ^, les parenthèses imbriquées et les priorités entre opérateurs, grâce à une pile codée à la main.",
		
		tech: ["C++", "Pile (liste chaînée)", "Shunting-yard", "Pointeurs", "Fichiers texte"],
		
		demarche: "Implémentation de l’algorithme Shunting-yard de Dijkstra. L’expression est lue caractère par caractère : les opérandes sont affichés directement, les opérateurs et les parenthèses ouvrantes passent par une pile construite avec des noeuds chaînés (empiler, depiler) et de l’allocation dynamique. Une fonction de priorité décide quand dépiler les opérateurs, et chaque caractère traité est consigné dans le fichier valeurs.in.",
		
		defis: "Le principal défi était de bien gérer les priorités et l’associativité : les opérateurs + - * / s’évaluent de gauche à droite, alors que ^ s’évalue de droite à gauche (a^b^c devient a b c ^ ^). Il fallait aussi retirer correctement la parenthèse ouvrante de la pile à chaque parenthèse fermante, et placer l’empilement de l’opérateur courant après la boucle de dépilage pour éviter les boucles infinies.",
		
		resultats: "Un convertisseur interactif qui produit la bonne notation postfixe, par exemple a+b*c devient a b c * + et ((a+b)*(c-d))/e devient a b + c d - * e /. Le programme a été testé sur des expressions avec parenthèses imbriquées et opérateurs de même priorité. Il reste à améliorer le support des espaces et des nombres à plusieurs chiffres.",
		
		code: "https://github.com/JiGo29/RPN-cpp"
	},

{
	cat: "Structures de données",
		nom: "Vérificateur de palindromes",
		url: "verificateur-palindromes.app",
		val: "radar",
		label: "// Palindromes",
		
		desc: "Programme en C++ qui détermine si un mot ou une phrase est un palindrome (radar, Engage le jeu que je le gagne). Il repose sur une pile et une file génériques, codées à la main avec des noeuds chaînés, sans utiliser les structures de la bibliothèque standard.",
		
		tech: ["C++", "Templates", "Pile", "File", "Listes chaînées"],
		
		demarche: "Chaque lettre de la phrase est placée à la fois dans une pile et dans une file. Comme la pile restitue les lettres de la fin vers le début et la file du début vers la fin, il suffit de retirer les éléments un à un et de comparer chaque paire : une différence signifie que ce n’est pas un palindrome. Les espaces, la ponctuation et les chiffres sont ignorés, et les lettres sont converties en minuscules avant la comparaison.",
		
		defis: "Concevoir une pile Pile<A>, une file File<A> et un noeud Noeud<A> génériques avec des templates, puis gérer soi-même la mémoire : allocation à chaque ajout, libération à chaque retrait et dans les destructeurs. Il fallait aussi vérifier que les tailles et les éléments correspondent à chaque étape de la comparaison.",
		
		resultats: "Un programme qui reconnaît correctement des mots et des phrases complètes, en ignorant la casse et la ponctuation (A man, a plan, a canal: Panama est reconnu comme un palindrome). Les limites identifiées sont la gestion des lettres accentuées et l’ajout en fin de file, dont le coût pourrait être réduit avec un pointeur vers le dernier noeud.",
		
		code: "https://github.com/JiGo29/palindrome-cpp"
},
];

// [nom, 1 = Intermédiaire / 0 = Notions]
const COMPETENCES = {
	"Langages":[["C++",1],["Python",0],["HTML / CSS",0],["JavaScript",0]],
	"Frameworks":[["Qt",0],["SFML",0],["Flet",0],["Pytest",0]],
	"Outils":[["VS Code",1],["Git / GitHub",0],["CMake",0],["Figma",0]],
	"Systèmes":[["Windows",1],["Linux",0],["Bash",0],["Docker",0]]
};

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

