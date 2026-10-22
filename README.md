# Calc For All — Site web

Site de présentation interactif de l’application **Calc For All**.

## Contenu

- Page d’accueil moderne et responsive
- Présentation des 14 modules
- Section téléchargement (lien vers GitHub Actions)
- Accès direct à la version Flutter Web
- FAQ

## Version Web de l’application

Le bouton **Essayer la version Web** ouvre l’application Flutter complète :

https://calc-for-all-web.vercel.app/app/

## Synchronisation automatique

Le workflow GitHub Actions `Sync latest Flutter app to Vercel` vérifie toutes les cinq minutes la branche `main` du dépôt `calc-for-all`. Lorsqu'un nouveau commit est détecté, il reconstruit automatiquement Flutter Web avec le renderer HTML, remplace le dossier `app/`, puis pousse la mise à jour. Vercel déploie alors automatiquement la dernière version sous `/app/`.

## Déploiement

Tu peux déployer ce site gratuitement sur :

- **Vercel** (recommandé)
- **Netlify**
- **GitHub Pages**

### Avec Vercel

1. Va sur [vercel.com](https://vercel.com)
2. Importe le dépôt `calc-for-all-web`
3. Déploie (aucune configuration spéciale nécessaire)

## Fichiers

- `index.html` — structure
- `styles.css` — design
- `script.js` — interactivité (modules + menu mobile)
