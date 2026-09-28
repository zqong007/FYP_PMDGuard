# PMDGuard

PMDGuard is a mobile application developed to support Personal Mobility Device (PMD) fire safety awareness and preparedness in Singapore.

The application provides educational resources, interactive assessments, a safety checklist, emergency information, progress tracking, achievement badges, and a Safety Map showing the user's live location and nearby emergency facilities.

## Live Application

PMDGuard can be viewed and tested using Expo Snack:

[Open PMDGuard on Expo Snack](YOUR_EXPO_SNACK_LINK)

## Features

- Home dashboard
- PMD fire safety educational resources
- Battery Safety quiz
- Emergency Response quiz
- Safety Self-Assessment checklist
- Achievement badges and progress tracking
- Safety Map with live user location
- Nearby hospitals and fire stations
- Emergency contact information
- SOS button for calling 995
- Local progress storage using AsyncStorage

## Technologies Used

- React Native
- Expo
- JavaScript
- AsyncStorage
- Expo Location
- React Native WebView
- Leaflet
- OpenStreetMap

## Running the Application

### Option 1: Expo Snack

The application can be viewed and tested directly using the Expo Snack link provided above.

Location permission should be enabled to use the live location feature on the Safety Map.

### Option 2: Run Locally

1. Install the required dependencies:

```bash
npm install
```

2. Start the Expo development server:

```bash
npx expo start
```

3. Open the application using Expo Go or another supported Expo environment.

Location permission should be enabled to use the live location feature on the Safety Map.

## Project Structure

```text
PMDGuard/
├── App.js
├── components/
│   ├── ProgressCard.js
│   └── SOSButton.js
├── screens/
│   ├── HomeScreen.js
│   ├── AssessmentScreen.js
│   ├── QuizScreen.js
│   ├── MapScreen.js
│   ├── ResourcesScreen.js
│   └── BadgesScreen.js
├── data/
│   ├── emergencyContacts.js
│   ├── resources.js
│   ├── quizzes.js
│   ├── checklist.js
│   └── badges.js
├── constants/
│   ├── colors.js
│   └── tabBars.js
└── styles/
    └── styles.js
```

## Data Storage

PMDGuard uses AsyncStorage to store user progress locally on the device.

The stored progress includes:

- Completed quizzes
- Safety Self-Assessment checklist progress
- Read resources
- Earned badges
- Safety Map progress

This allows user progress to be retained between application sessions without requiring a user account or external database.

## Safety Map

The Safety Map uses Expo Location to obtain the user's live location.

Leaflet and OpenStreetMap are displayed through React Native WebView to provide the interactive map. The map displays the user's location together with relevant hospitals and fire stations.

The Safety Map is designed for use in Singapore. If the user's detected location is outside Singapore, the application informs the user that the feature is intended for use within Singapore.

## Emergency Features

PMDGuard provides quick access to emergency contact information.

The SOS button provides access to SCDF emergency services through 995. A confirmation message is displayed before opening the device's dialer to reduce the possibility of an accidental emergency call.

## Author

Developed as part of the CM3070 Computer Science Final Project.