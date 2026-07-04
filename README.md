# Quiz Géant V2

Nouveau projet indépendant de la V1.

## Fichiers

- `index.html`
- `style.css`
- `app.js`
- `Code.gs`

## Déploiement

1. Créer un nouveau repo GitHub, par exemple `quiz-v2`.
2. Ajouter `index.html`, `style.css`, `app.js`.
3. Activer GitHub Pages.
4. Créer un nouveau Google Sheet.
5. Extensions > Apps Script > coller `Code.gs`.
6. Remplacer `SPREADSHEET_ID` par l'ID du nouveau Google Sheet.
7. Déployer Apps Script en application web :
   - Exécuter en tant que : Moi
   - Accès : Tout le monde
8. Copier l'URL `/exec` dans `API_BASE` dans `app.js`.

## Fonctions

- Blocs classiques
- Blocs multi-thèmes
- Prénom unique
- Score manuel Bonne/Mauvaise réponse
- Annuler
- Classement
- Email automatique
- Stats de réussite par question
- Stats de sélection des thèmes
- Stats de réussite des thèmes

## Reset classement

Supprimer les lignes de données dans la feuille `scores`, en gardant l'en-tête.
