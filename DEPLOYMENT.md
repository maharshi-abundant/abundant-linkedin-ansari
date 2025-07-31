# Deployment Guide - Fixing White Screen Issue

## The Problem
If you're seeing a white screen on deployment, it's most likely due to missing Firebase environment variables or configuration issues.

## Solution Steps

### 1. Create Environment Variables File
Create a `.env` file in your project root with your Firebase configuration:

```env
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

### 2. Get Firebase Configuration
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Click on the gear icon (⚙️) next to "Project Overview"
4. Select "Project settings"
5. Scroll down to "Your apps" section
6. Click on the web app (</>) icon
7. Copy the configuration values

### 3. Set Environment Variables in Firebase Hosting
For production deployment, you need to set environment variables in Firebase:

```bash
# Set each environment variable
firebase functions:config:set firebase.api_key="your_api_key"
firebase functions:config:set firebase.auth_domain="your_project_id.firebaseapp.com"
firebase functions:config:set firebase.project_id="your_project_id"
firebase functions:config:set firebase.storage_bucket="your_project_id.appspot.com"
firebase functions:config:set firebase.messaging_sender_id="your_messaging_sender_id"
firebase functions:config:set firebase.app_id="your_app_id"
firebase functions:config:set firebase.measurement_id="your_measurement_id"
```

### 4. Alternative: Use Firebase Hosting Environment Variables
Update your `firebase.json` to include environment variables:

```json
{
  "hosting": {
    "public": "dist",
    "ignore": [
      "firebase.json",
      "**/.*",
      "**/node_modules/**"
    ],
    "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ],
    "environment": {
      "VITE_FIREBASE_API_KEY": "your_api_key",
      "VITE_FIREBASE_AUTH_DOMAIN": "your_project_id.firebaseapp.com",
      "VITE_FIREBASE_PROJECT_ID": "your_project_id",
      "VITE_FIREBASE_STORAGE_BUCKET": "your_project_id.appspot.com",
      "VITE_FIREBASE_MESSAGING_SENDER_ID": "your_messaging_sender_id",
      "VITE_FIREBASE_APP_ID": "your_app_id",
      "VITE_FIREBASE_MEASUREMENT_ID": "your_measurement_id"
    }
  }
}
```

### 5. Build and Deploy
```bash
# Build the project
npm run build

# Deploy to Firebase
firebase deploy
```

### 6. Verify Deployment
After deployment, check the browser console for any error messages. The app should now show either:
- The login page (if not authenticated)
- The main app (if authenticated)
- A configuration error page (if Firebase is not properly configured)

## Common Issues and Solutions

### Issue: Still seeing white screen
**Solution**: Check browser console for errors and ensure all environment variables are set correctly.

### Issue: Firebase initialization errors
**Solution**: Verify that your Firebase project is properly set up and the configuration values are correct.

### Issue: CORS errors
**Solution**: Make sure your Firebase project's authentication and Firestore rules allow your domain.

## Testing Locally
To test if your environment variables are working:

```bash
# Start development server
npm run dev
```

The app should work locally if the `.env` file is properly configured.

## Security Note
Never commit your `.env` file to version control. Make sure it's in your `.gitignore` file. 