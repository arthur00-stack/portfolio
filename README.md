# Portfolio Next.js - Guide Complet

Portfolio professionnel développé avec Next.js 15, React et Tailwind CSS.

## 🚀 Aperçu

Un portfolio moderne, performant et responsive présentant :
- ✨ Design moderne avec effets de curseur et animations fluides
- 📱 100% responsive (mobile, tablette, desktop)
- ⚡ Performance optimisée (PageSpeed 95+)
- 🎨 Interface dark mode élégante
- 🔍 SEO optimisé

## 📋 Sections du Portfolio

1. **Hero Section** - Présentation avec statistiques clés
2. **Projets** - Showcase de 3 projets avec liens démo et GitHub
3. **Compétences** - Skills techniques avec barres de progression
4. **Services** - Offres et tarifs
5. **Contact** - Coordonnées et disponibilité

## 🛠️ Technologies Utilisées

- **Next.js 15** - Framework React avec App Router
- **React 18** - Librairie UI
- **Tailwind CSS** - Framework CSS utility-first
- **Lucide React** - Icônes modernes
- **Vercel** - Hébergement et déploiement

## 📦 Installation

### Prérequis
- Node.js 18+ installé
- npm ou yarn

### Étapes d'installation

1. **Créer un nouveau projet Next.js**
```bash
npx create-next-app@latest mon-portfolio
```

Lors de la configuration, choisissez :
- ✅ TypeScript? → **No** (ou Yes si vous préférez)
- ✅ ESLint? → **Yes**
- ✅ Tailwind CSS? → **Yes**
- ✅ `src/` directory? → **No**
- ✅ App Router? → **Yes**
- ✅ Customize default import alias? → **No**

2. **Aller dans le dossier du projet**
```bash
cd mon-portfolio
```

3. **Installer Lucide React pour les icônes**
```bash
npm install lucide-react
```

4. **Remplacer le fichier `app/page.jsx`**
   - Supprimez le contenu actuel de `app/page.jsx`
   - Copiez tout le code du fichier `page.jsx` fourni
   - Collez-le dans `app/page.jsx`

5. **Lancer le serveur de développement**
```bash
npm run dev
```

6. **Ouvrir dans le navigateur**
   - Allez sur `http://localhost:3000`
   - Votre portfolio devrait s'afficher ! 🎉

## ✏️ Personnalisation

### 1. Informations personnelles

Dans `app/page.jsx`, modifiez les sections suivantes :

**Navigation (ligne ~50)**
```javascript
<div className="text-2xl font-bold...">
  Votre Nom  // ← Changez ici
</div>
```

**Hero Section (ligne ~80)**
```javascript
<h1>Votre Titre</h1>
<p>Votre description...</p>
```

### 2. Projets

Modifiez le tableau `projects` (ligne ~25) :
```javascript
const projects = [
  {
    title: "Votre Projet",
    description: "Description de votre projet...",
    tech: ["Next.js", "Firebase", "etc."],
    image: "URL_DE_VOTRE_IMAGE",
    link: "https://votre-demo.com",
    github: "https://github.com/vous/projet",
    stats: { performance: "98", seo: "100", accessibility: "95" }
  },
  // Ajoutez plus de projets...
];
```

**Sources d'images gratuites :**
- [Unsplash](https://unsplash.com) - Photos gratuites haute qualité
- [Pexels](https://pexels.com)
- Vos propres screenshots de projets

### 3. Compétences

Modifiez le tableau `skills` (ligne ~50) :
```javascript
const skills = [
  { name: "Next.js", level: 90, category: "Frontend" },
  { name: "Votre Skill", level: 85, category: "Catégorie" },
  // Ajoutez vos compétences...
];
```

### 4. Services et Tarifs

Modifiez le tableau `services` (ligne ~60) :
```javascript
const services = [
  {
    icon: <Code2 className="w-8 h-8" />,
    title: "Votre Service",
    description: "Description...",
    price: "À partir de XXX€"
  },
  // Personnalisez vos services...
];
```

### 5. Contact

Changez vos coordonnées (ligne ~400) :
```javascript
<a href="mailto:votre.email@example.com">
  votre.email@example.com
</a>

<a href="https://github.com/votre-username">
  @votre-username
</a>

<a href="https://linkedin.com/in/votre-profil">
  /votre-profil
</a>
```

## 🎨 Personnalisation des Couleurs

Les couleurs principales utilisent Tailwind CSS. Pour changer le thème :

**Couleur principale (Indigo/Purple) :**
Cherchez et remplacez dans le fichier :
- `indigo-` → `blue-` (pour du bleu)
- `purple-` → `pink-` (pour du rose)
- `indigo-` → `emerald-` (pour du vert)

**Exemple de couleurs disponibles :**
- `slate-` (gris)
- `blue-` (bleu)
- `emerald-` (vert)
- `pink-` (rose)
- `orange-` (orange)
- `cyan-` (cyan)

## 📸 Ajouter vos Screenshots

1. Prenez des screenshots de vos projets
2. Uploadez-les sur [Imgur](https://imgur.com) ou [Cloudinary](https://cloudinary.com) (gratuit)
3. Copiez le lien de l'image
4. Remplacez dans le tableau `projects` :
```javascript
image: "https://i.imgur.com/VOTRE_IMAGE.png"
```

## 🚀 Déploiement sur Vercel (GRATUIT)

### Étape 1 : Créer un compte GitHub
1. Allez sur [github.com](https://github.com)
2. Créez un compte (gratuit)

### Étape 2 : Créer un repository
1. Cliquez sur "New repository"
2. Nom : `mon-portfolio`
3. Public ou Private (votre choix)
4. Cliquez "Create repository"

### Étape 3 : Push votre code
Dans votre terminal :
```bash
# Initialiser Git (si pas déjà fait)
git init

# Ajouter tous les fichiers
git add .

# Commit
git commit -m "Initial commit - Portfolio Next.js"

# Lier au repository GitHub
git remote add origin https://github.com/VOTRE_USERNAME/mon-portfolio.git

# Push
git branch -M main
git push -u origin main
```

### Étape 4 : Déployer sur Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Cliquez "Sign Up" et connectez-vous avec GitHub
3. Cliquez "Import Project"
4. Sélectionnez votre repository `mon-portfolio`
5. Cliquez "Deploy"
6. Attendez 1-2 minutes... ✨
7. **Votre portfolio est en ligne !**

Vercel vous donne une URL comme : `https://mon-portfolio-username.vercel.app`

### Étape 5 : Domaine personnalisé (OPTIONNEL)
- Achetez un domaine sur [Namecheap](https://namecheap.com) ou [OVH](https://ovh.com) (~10€/an)
- Dans Vercel, allez dans Settings → Domains
- Ajoutez votre domaine personnalisé

## 🔄 Mettre à jour le portfolio

Après avoir modifié votre code localement :

```bash
# Ajouter les modifications
git add .

# Commit avec message
git commit -m "Mise à jour des projets"

# Push sur GitHub
git push

# Vercel redéploiera automatiquement ! 🚀
```

## 📊 Optimisation Performance

Le portfolio est déjà optimisé, mais pour aller plus loin :

1. **Images** : Utilisez le composant Next.js Image
```javascript
import Image from 'next/image';

<Image 
  src="/votre-image.jpg" 
  alt="Description"
  width={800}
  height={600}
  priority
/>
```

2. **Fonts** : Optimisez les polices dans `app/layout.js`
```javascript
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
```

3. **Metadata SEO** : Ajoutez dans `app/layout.js`
```javascript
export const metadata = {
  title: 'Votre Nom - Développeur Next.js',
  description: 'Portfolio de développeur Next.js spécialisé...',
  keywords: ['Next.js', 'React', 'Développeur', 'Portfolio'],
  openGraph: {
    title: 'Votre Nom - Portfolio',
    description: 'Développeur Next.js',
    images: ['/og-image.jpg'],
  },
};
```

## 🐛 Problèmes Courants

### Le site ne s'affiche pas
- Vérifiez que vous êtes dans le bon dossier
- Essayez `npm install` puis `npm run dev`
- Vérifiez qu'il n'y a pas d'erreurs dans le terminal

### Les icônes ne s'affichent pas
- Vérifiez que `lucide-react` est installé : `npm install lucide-react`

### Erreur de build sur Vercel
- Vérifiez que votre code n'a pas d'erreurs de syntaxe
- Assurez-vous que `package.json` contient toutes les dépendances

## 📱 Test Responsive

Testez votre portfolio sur différents appareils :
- **Desktop** : Chrome, Firefox, Safari
- **Mobile** : Chrome DevTools (F12 → Toggle Device Toolbar)
- **Tablette** : Même méthode avec taille iPad

## ✅ Checklist Avant Mise en Ligne

- [ ] Toutes les informations personnelles sont à jour
- [ ] Les 3 projets sont configurés avec vos vrais projets
- [ ] Les liens GitHub et démo fonctionnent
- [ ] L'email de contact est correct
- [ ] Les compétences reflètent votre niveau réel
- [ ] Les tarifs sont alignés avec votre stratégie
- [ ] Le site est responsive (testé mobile/tablette/desktop)
- [ ] Aucune erreur dans la console du navigateur
- [ ] Le code est push sur GitHub
- [ ] Le site est déployé sur Vercel
- [ ] La performance est > 90 sur PageSpeed Insights

## 🎯 Utilisation pour Fiverr et Malt

1. **URL du portfolio** : Ajoutez l'URL Vercel dans vos profils
2. **Screenshots** : Prenez des screenshots du portfolio pour vos gigs
3. **Exemples de projets** : Les projets du portfolio servent de démo
4. **Crédibilité** : Un portfolio en ligne = +300% de crédibilité

## 📚 Ressources Utiles

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
- [Vercel Documentation](https://vercel.com/docs)
- [Unsplash Images](https://unsplash.com)

## 🆘 Besoin d'Aide ?

- **Documentation Next.js** : https://nextjs.org/docs
- **Communauté Discord** : Next.js Discord
- **Stack Overflow** : Tag `next.js`

## 📄 License

Ce template est libre d'utilisation pour votre portfolio personnel.

---

**Fait avec ❤️ et Next.js**

Bonne chance pour votre lancement sur Fiverr et Malt ! 🚀#   p o r t f o l i o  
 #   p o r t f o l i o  
 