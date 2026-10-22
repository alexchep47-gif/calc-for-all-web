# Statut du deploiement Flutter Web

## Version actuellement dans ce dossier

**1.1.0+2** (ancienne)

## Version attendue

**2.7.0+3** — priorites du 21 oct 2026 :
- Export PNG / LaTeX
- Vecteurs 3D
- Taille de police + OLED
- Lois binomiale / normale
- Plan complexe
- Boutons Exemple

## Pourquoi ce n est pas a jour ?

Le build V2.7 est bien produit par GitHub Actions (`calc-for-all` → artefact `calc-for-all-web`),
mais le token par defaut **ne peut pas pousser** vers un autre depot (`calc-for-all-web`).

## Comment publier V2.7 sur /app/

### Option A — Secret GH_PAT (automatique)
1. Cree un Personal Access Token (classic) avec scope `repo`
2. Dans `calc-for-all` → Settings → Secrets → Actions
3. Ajoute le secret **`GH_PAT`** = ton token
4. Relance le workflow **Build APK + Web**

### Option B — Manuel (depuis un telephone + GitHub)
1. Ouvre https://github.com/alexchep47-gif/calc-for-all/actions
2. Ouvre le dernier run **Build APK + Web** (vert)
3. Telecharge l artefact **calc-for-all-web**
4. Dezippe et remplace tout le contenu du dossier `app/` de ce depot
5. Commit + push → Vercel redeploie

### Option C — GitHub Pages (deja en cours de maj)
https://alexchep47-gif.github.io/calc-for-all/
