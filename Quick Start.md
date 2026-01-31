# 🚀 Démarrage Rapide - 5 Minutes

## Installation Express

### 1️⃣ Créer le projet (2 min)
```bash
# Ouvrez votre terminal et tapez :
npx create-next-app@latest mon-portfolio

# Répondez aux questions :
✅ TypeScript? → No
✅ ESLint? → Yes  
✅ Tailwind CSS? → Yes
✅ src/ directory? → No
✅ App Router? → Yes
✅ Import alias? → No
```

### 2️⃣ Installer les dépendances (1 min)
```bash
cd mon-portfolio
npm install lucide-react
```

### 3️⃣ Remplacer le code (1 min)
- Ouvrez le fichier `app/page.jsx`
- Supprimez TOUT le contenu
- Copiez-collez le code du fichier `page.jsx` fourni

### 4️⃣ Lancer (30 sec)
```bash
npm run dev
```

### 5️⃣ Voir le résultat (30 sec)
Ouvrez `http://localhost:3000` dans votre navigateur

**🎉 Votre portfolio est prêt !**

---

## Personnalisation Minimale (10 min)

### À changer OBLIGATOIREMENT :

1. **Votre nom** (ligne ~50)
2. **Votre email** (ligne ~400)
3. **Vos liens GitHub/LinkedIn** (ligne ~410-430)
4. **Vos projets** (ligne ~25-45)

### Où changer ?

Ouvrez `app/page.jsx` et cherchez :

```javascript
// 1. Votre nom
"Portfolio" → "Votre Nom"

// 2. Email
"votre.email@example.com" → "vraiemail@gmail.com"

// 3. Projets - Ligne ~25
const projects = [
  {
    title: "Votre Projet",  // ← Changez
    description: "...",      // ← Changez
    link: "votre-lien",      // ← Changez
    github: "votre-github",  // ← Changez
  }
];
```

---

## Déploiement en Ligne (10 min)

### Sur Vercel (GRATUIT et FACILE)

1. **Créez un compte GitHub**
   - Allez sur github.com
   - Sign up (gratuit)

2. **Créez un repository**
   - New repository
   - Nom : `mon-portfolio`
   - Public
   - Create

3. **Push votre code**
```bash
git init
git add .
git commit -m "Mon portfolio"
git remote add origin https://github.com/VOTRE_USER/mon-portfolio.git
git push -u origin main
```

4. **Déployez sur Vercel**
   - Allez sur vercel.com
   - Sign up avec GitHub
   - Import Project
   - Sélectionnez `mon-portfolio`
   - Deploy

**⏱️ 2 minutes d'attente...**

**✅ Votre portfolio est EN LIGNE !**

URL : `https://mon-portfolio-votrenom.vercel.app`

---

## Checklist Rapide

- [ ] Portfolio installé localement
- [ ] Nom et email changés
- [ ] Au moins 1 projet modifié
- [ ] Code sur GitHub
- [ ] Déployé sur Vercel
- [ ] URL fonctionnelle

---

## Aide Rapide

**Problème ?** 

```bash
# Erreur de dépendances ?
npm install

# Le serveur ne démarre pas ?
rm -rf .next
npm run dev

# Erreur lucide-react ?
npm install lucide-react
```

**Besoin de plus de détails ?**
→ Consultez le README.md complet

---

**Temps total : ~25 minutes**

De zéro à portfolio en ligne ! 🚀