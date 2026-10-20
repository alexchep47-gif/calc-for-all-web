const modules = [
  {
    id: 'calc',
    title: 'Calculatrice',
    subtitle: 'Scientifique + fractions',
    icon: '🔢',
    color: '#1565C0',
    description: 'Opérations de base, fonctions trigonométriques, logarithmes, racines, puissances et saisie de fractions a/b. Résultats affichés aussi sous forme de fraction quand c’est possible.'
  },
  {
    id: 'etude',
    title: 'Étude de fonction',
    subtitle: 'Graphique + analyse + PDF',
    icon: '📈',
    color: '#2E7D32',
    description: 'Trace la courbe, estime le domaine, la périodicité, les extremums, les asymptotes et la symétrie. Exporte le plan d’étude complet en PDF.'
  },
  {
    id: 'solver',
    title: 'Solveur d’équations',
    subtitle: 'Polynômes de degré n',
    icon: '∫',
    color: '#6A1B9A',
    description: 'Résout les équations polynomiales. Solutions exactes pour les degrés 1 et 2, solutions numériques approchées pour les degrés plus élevés, avec explications.'
  },
  {
    id: 'matrices',
    title: 'Matrices',
    subtitle: '2×2 et 3×3',
    icon: '▦',
    color: '#0277BD',
    description: 'Addition, soustraction, multiplication, déterminant et inverse pour les matrices 2×2 et 3×3, avec le détail des calculs.'
  },
  {
    id: 'trigo',
    title: 'Cercle trigonométrique',
    subtitle: 'Interactif',
    icon: '◎',
    color: '#00838F',
    description: 'Visualise le cercle unité, déplace l’angle et observe en direct les valeurs de cosinus, sinus et tangente.'
  },
  {
    id: 'suites',
    title: 'Suites numériques',
    subtitle: 'Arithmétiques & géométriques',
    icon: '1,2,3…',
    color: '#5D4037',
    description: 'Calcule le terme général uₙ et la somme Sₙ des suites arithmétiques et géométriques, avec toutes les formules détaillées.'
  },
  {
    id: 'geo',
    title: 'Géométrie',
    subtitle: 'Pythagore, Thalès, aires, volumes',
    icon: '△',
    color: '#37474F',
    description: 'Théorème de Pythagore, Thalès, calcul d’aires (rectangle, triangle, cercle) et de volumes (cube, sphère, cylindre).'
  },
  {
    id: 'exercices',
    title: 'Exercices',
    subtitle: 'Quiz avec correction',
    icon: '✏️',
    color: '#C62828',
    description: 'Entraîne-toi avec des questions générées automatiquement (calcul, fractions, Pythagore, suites, probabilités) et vois la solution détaillée.'
  },
  {
    id: 'derivee',
    title: 'Dérivée & Intégrale',
    subtitle: 'Calcul + explications',
    icon: 'ƒ′',
    color: '#4527A0',
    description: 'Approximation numérique de la dérivée en un point et de l’intégrale définie, accompagnée des formules et rappels de cours.'
  },
  {
    id: 'proba',
    title: 'Probabilités',
    subtitle: 'Permutations, arrangements, combinaisons',
    icon: '🎲',
    color: '#00695C',
    description: 'Calcule n!, A(n,k) et C(n,k) avec le détail de chaque étape du calcul.'
  },
  {
    id: 'stats',
    title: 'Statistiques',
    subtitle: 'Série de données',
    icon: '📊',
    color: '#EF6C00',
    description: 'Entre une série de nombres et obtiens moyenne, médiane, écart-type, min, max et étendue, avec les calculs détaillés.'
  },
  {
    id: 'complexes',
    title: 'Nombres complexes',
    subtitle: 'Opérations + forme polaire',
    icon: 'ℂ',
    color: '#AD1457',
    description: 'Addition, multiplication, division, module, argument et conjugué des nombres complexes.'
  },
  {
    id: 'convert',
    title: 'Convertisseur',
    subtitle: 'Unités & devises',
    icon: '⇄',
    color: '#455A64',
    description: 'Convertis longueurs, masses, températures et devises (taux approximatifs à titre éducatif).'
  },
  {
    id: 'history',
    title: 'Historique',
    subtitle: 'Tes derniers calculs',
    icon: '🕒',
    color: '#4E342E',
    description: 'Retrouve facilement tes calculs précédents.'
  }
];

const grid = document.getElementById('modulesGrid');
const modal = document.getElementById('moduleModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

// Render modules
modules.forEach(m => {
  const card = document.createElement('div');
  card.className = 'module-card';
  card.innerHTML = `
    <div class="module-icon" style="background:${m.color}22;color:${m.color}">${m.icon}</div>
    <div>
      <h3>${m.title}</h3>
      <p>${m.subtitle}</p>
    </div>
  `;
  card.addEventListener('click', () => openModal(m));
  grid.appendChild(card);
});

function openModal(m) {
  modalBody.innerHTML = `
    <div style="font-size:2rem;margin-bottom:8px">${m.icon}</div>
    <h2 style="margin-bottom:4px">${m.title}</h2>
    <p style="color:#64748B;margin-bottom:16px">${m.subtitle}</p>
    <p style="line-height:1.6">${m.description}</p>
  `;
  modal.classList.add('open');
}

modalClose.addEventListener('click', () => modal.classList.remove('open'));
modal.addEventListener('click', (e) => {
  if (e.target === modal) modal.classList.remove('open');
});

// Mobile nav
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navLinks.classList.remove('open'));
});
