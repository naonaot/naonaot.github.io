# NAOTEXT - Site Web

## 📁 Structure des fichiers

```
naotext-site/
├── index.html                 # Page principale
├── README.md                  # Ce fichier
└── assets/
    ├── css/
    │   └── main.css          # Tous les styles (couleurs, layouts, animations)
    ├── js/                   # Pour futures scripts (vide pour l'instant)
    └── images/
        └── photo1-9.jpg      # 9 images du site
```

## 🎨 Charte Graphique

**Couleurs principales :**
- 🟢 Vert foncé : `#1a5c52` (principal)
- 🟡 Jaune accent : `#ffc107` (appels à l'action)
- ⚪ Beige clair : `#f5f1e8` (fond)
- 🔘 Gris-vert : `#a8b8ac` (textes secondaires)

## 🚀 Comment modifier

### Changer les couleurs
Ouvrir `assets/css/main.css` et modifier les variables CSS au début :
```css
:root {
  --dark: #1a5c52;      /* Vert */
  --light: #f5f1e8;     /* Beige */
  --accent: #ffc107;    /* Jaune */
  --muted: #a8b8ac;     /* Gris-vert */
}
```

### Ajouter du contenu
Modifier `index.html` - chaque section est clairement marquée.

### Changer les images
1. Ajouter les nouvelles images dans `assets/images/`
2. Modifier les `src=""` dans l'HTML

## 📱 Responsive
Le site s'adapte automatiquement aux petits écrans (mobiles, tablettes).

## ✨ Sections disponibles
1. **Header** - Logo + titre
2. **À propos** - Texte + image
3. **Solutions** - Grille de 3 icônes/features
4. **Galerie** - Grille de 9 images
5. **Stats** - 3 chiffres clés
6. **CTA** - Appel à l'action
7. **Footer** - Réseaux sociaux + copyright

---

**Pour lancer le site :** Ouvrir `index.html` dans un navigateur.
