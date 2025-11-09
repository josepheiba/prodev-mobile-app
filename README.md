# ProDev Mobile App - React Native with Expo Router

This project demonstrates the implementation of a React Native mobile application using Expo Router for navigation.

## Projects Created

### prodev-mobile-app-0x04 - Stack Navigation
- Stack navigation (Stack Navigation)
- Screens: Index, Join, Sign In
- Use of separate style files
- Custom asset images

### prodev-mobile-app-0x05 - Tab Navigation (In Progress)
- Tab navigation (Tab Navigation)
- Screens: Home, Search, Saved, Inbox, Profile
- Reusable components for properties
- User interface with property cards

## Project Structure

```
app/
├── _layout.tsx          # Main navigation configuration
├── index.tsx            # Home screen
├── join.tsx             # Sign up screen
├── signin.tsx           # Sign in screen
└── (home)/              # Tab group
    ├── _layout.tsx      # Tab configuration
    ├── index.tsx        # Home with listings
    ├── search.tsx       # Search
    ├── saved.tsx        # Favorites
    ├── inbox.tsx        # Messages
    └── profile.tsx      # Profile

components/
├── common/
│   └── PropertyListingCard.tsx
└── PropertyListing.tsx

styles/
├── _mainstyle.ts        # Main styles
├── _joinstyle.ts        # Form styles
├── _homestyle.ts        # Home styles
└── _propertyCardStyle.ts # Card styles

constants/
├── index.ts             # Asset constants
└── data.ts              # Test data

interfaces/
└── index.ts             # TypeScript types
```

## Features

### Stack Navigation (0x04)
- ✅ Home screen with background image
- ✅ Navigation to sign up/sign in
- ✅ Forms with visual validation
- ✅ Buttons with social icons
- ✅ Responsive interface

### Tab Navigation (0x05)
- ✅ Tab configuration with icons
- ✅ Home screen with search
- ✅ Horizontal filters
- ✅ Property cards with images
- ✅ Reusable components
- 🚧 Simulated data
- 🚧 Placeholder images needed

## Installation and Usage

```bash
# Install dependencies
cd prodev-mobile-app-0x04  # or prodev-mobile-app-0x05
npm install

# Start the application
npx expo start

# Scan QR code with Expo Go (mobile)
# Or open in a simulator
```

## Required Assets

The following images are needed in `assets/images/` :

**For 0x04:**
- hero-icon.png (background image)
- Logo.png (main logo)
- logo-green.png (green logo)
- google.png (Google logo)
- facebook.png (Facebook logo)

**For 0x05 (in addition):**
- sample-image.png (property image)
- mansion.png (filter icon)
- user-image.png (user avatar)

## Technologies Used

- React Native
- Expo Router v5
- TypeScript
- Expo Vector Icons
- StyleSheet API

## Next Steps

1. **Task 2:** NativeWind integration (TailwindCSS)
2. **Task 3:** UI implementation challenge
3. Add real asset images
4. Authentication implementation
5. Connect to data API

## Known Issues

- Imports with `@/` may require additional TypeScript configuration
- Some placeholder images are missing
- Navigation to grouped tabs requires additional debugging

## Useful Links

- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
- [Expo Vector Icons](https://docs.expo.dev/guides/icons/)
- [React Navigation](https://reactnavigation.org/)
