# 🚀 Portfolio Next.js d'Excellence

> Un portfolio moderne, performant et entièrement responsive conçu avec l'écosystème Next.js 15, React 18 et Tailwind CSS.

## 💎 Caractéristiques Techniques & UX

*   **Design & Animations :** Interface *Dark Mode* épurée, enrichie d'effets de curseur immersifs et de transitions fluides.
*   **Adaptabilité :** Expérience utilisateur optimisée à 100 % pour le mobile, la tablette et le desktop.
*   **Performances Critiques :** Score de rapidité supérieur à **95+ sur Google PageSpeed Insights**.
*   **Visibilité :** Architecture sémantique pensée pour un référencement naturel (SEO) de premier ordre.

---

## 📋 Architecture des Sections

1.  **L'Introduction (Hero Section) :** Une accroche percutante adossée à vos indicateurs clés de performance.
2.  **La Vitrine (Projets) :** Une mise en valeur de 3 réalisations majeures, connectées directement à leurs démos privées et leurs dépôts GitHub.
3.  **L'Expertise (Compétences) :** Une cartographie visuelle de vos compétences techniques à l'aide de barres de progression dynamiques.
4.  **L'Offre commerciale (Services) :** Une grille transparente détaillant vos prestations et votre grille tarifaire.
5.  **La Conversion (Contact) :** Vos canaux de communication directs et un indicateur en temps réel de vos disponibilités.

---

## 🛠️ Stack Technique

*   **Next.js 15** (App Router)
*   **React 18**
*   **Tailwind CSS**
*   **Lucide React** (Icônes vectorielles)
*   **Vercel** (Hébergement & Déploiement continu)

---

## 📦 Guide d'Installation Rapide

### Prérequis
*   Node.js v18+
*   Un gestionnaire de paquets (`npm`, `yarn` ou `pnpm`)

### Déploiement local

1. **Initialiser l'application Next.js :**
   ```bash
   npx create-next-app@latest mon-portfolio
   ```
   *Configuration recommandée : TypeScript (No/Yes) | ESLint (Yes) | Tailwind CSS (Yes) | `src/` directory (No) | App Router (Yes) | Import alias (No).*

2. **Accéder au projet et installer les icônes :**
   ```bash
   cd mon-portfolio
   npm install lucide-react
   ```

3. **Intégrer le code source :**
   *   Ouvrez le fichier `app/page.jsx`.
   *   Remplacez tout son contenu par votre code personnalisé de portfolio.

4. **Lancer l'environnement de développement :**
   ```bash
   npm run dev
   ```
   Accédez à l'application sur [http://localhost:3000](http://localhost:3000).

---

## ✏️ Stratégie de Personnalisation

Ouvrez le fichier `app/page.jsx` pour injecter votre propre identité :

*   **Identité (~l.50) :** Modifiez votre nom dans la barre de navigation.
*   **Accroche (~l.80) :** Adaptez le titre principal (`<h1>`) et votre texte de présentation (`<p>`).
*   **Projets (~l.25) :** Mettez à jour le tableau `projects` avec vos titres, descriptions, liens de démo, dépôts GitHub et images (hébergées sur Unsplash, Imgur ou Cloudinary).
*   **Compétences (~l.50) :** Ajustez les technologies et vos pourcentages de maîtrise dans le tableau `skills`.
*   **Services (~l.60) :** Définissez vos prestations et votre grille tarifaire dans le tableau `services`.
*   **Contact (~l.400) :** Renseignez vos liens de profil (Email, GitHub, LinkedIn).

---

## 🎨 Identité Visuelle (Thèmes)

Pour modifier la couleur dominante de l’interface, effectuez un remplacement global (*Find & Replace*) dans votre éditeur de code :

*   **Thématique Bleue :** Remplacer `indigo-` par `blue-`
*   **Thématique Émeraude :** Remplacer `indigo-` par `emerald-`
*   **Thématique Rose Éclatant :** Remplacer `purple-` par `pink-`
*   **Thématique Cyan Cyber :** Remplacer `indigo-` par `cyan-`

---

## 🚀 Guide de Déploiement Continu (Vercel)

1.  **Héberger le code sur GitHub :** Créez un dépôt nommé `mon-portfolio` sur GitHub, puis exécutez :
    ```bash
    git init
    git add .
    git commit -m "feat: initialisation du portfolio Next.js"
    git remote add origin https://github.com/VOTRE_USERNAME/mon-portfolio.git
    git branch -M main
    git push -u origin main
    ```
2.  **Déploiement sur Vercel :** Connectez-vous sur [Vercel](https://vercel.com) avec votre compte GitHub. Importez le projet `mon-portfolio` et cliquez sur **Deploy**. Votre site est en ligne !
3.  **Mises à jour automatiques :** Chaque nouveau `git push` déclenchera un redéploiement automatique en tâche de fond sur Vercel.

---

## 📊 Optimisation Avancée

*   **Images :** Utilisez le composant natif `import Image from 'next/image'` pour compresser vos visuels dynamiquement.
*   **SEO :** Configurez l'objet de métadonnées dans votre fichier `app/layout.js` pour maximiser votre indexation Google.

---

## ✅ Checklist Avant Lancement

- [ ] Coordonnées et liens fonctionnels.
- [ ] Liens de démo et GitHub testés.
- [ ] Responsive design validé sur mobile.
- [ ] Projet compilé sur Vercel sans erreur de build.

---
*Fait avec ❤️ et Next.js — Idéal pour booster votre crédibilité sur Malt et Fiverr.*
