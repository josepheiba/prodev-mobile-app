# Configuration NativeWind - Résumé

## Fichiers de Configuration

### 1. tailwind.config.js
Configuration TailwindCSS avec preset NativeWind :
```javascript
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### 2. metro.config.js
Configuration Metro avec support NativeWind :
```javascript
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, { input: './styles/global.css' });
```

### 3. babel.config.js
Configuration Babel avec plugin NativeWind :
```javascript
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: ['nativewind/babel'],
  };
};
```

### 4. nativewind-env.d.ts
Types TypeScript pour NativeWind :
```typescript
/// <reference types="nativewind/types" />
```

### 5. styles/global.css
Fichier CSS global avec directives TailwindCSS :
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 6. app/_layout.tsx
Layout principal avec import du CSS global :
```tsx
import { Stack } from "expo-router";
import "../styles/global.css";
```

## Installation

1. Copier prodev-mobile-app-0x05 vers prodev-mobile-app-0x06
2. Installer les dépendances : `npm install nativewind tailwindcss react-native-reanimated react-native-safe-area-context`
3. Configuration automatique des fichiers
4. Mise à jour du fichier profile.tsx avec les classes TailwindCSS

## Utilisation

Pour démarrer l'application :
```bash
cd prodev-mobile-app-0x06
npx expo start
```

Ou utiliser le script :
```bash
./start.sh
```

## Avantages de NativeWind

- Classes utilitaires TailwindCSS dans React Native
- Développement plus rapide avec styling prédéfini
- Réduction du code CSS personnalisé
- Meilleure cohérence visuelle
- Support TypeScript intégré
