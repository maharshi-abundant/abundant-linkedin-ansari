#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🔧 LinkedAnsari Environment Setup');
console.log('================================\n');

const envTemplate = `# Firebase Configuration
# Replace these values with your actual Firebase project configuration
VITE_FIREBASE_API_KEY=your_api_key_here
VITE_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id

# Instructions:
# 1. Go to https://console.firebase.google.com/
# 2. Select your project
# 3. Click the gear icon (⚙️) next to "Project Overview"
# 4. Select "Project settings"
# 5. Scroll down to "Your apps" section
# 6. Click on the web app (</>) icon
# 7. Copy the configuration values and replace the placeholders above
`;

const envPath = path.join(__dirname, '.env');

if (fs.existsSync(envPath)) {
  console.log('⚠️  .env file already exists!');
  console.log('If you want to recreate it, delete the existing .env file first.\n');
} else {
  fs.writeFileSync(envPath, envTemplate);
  console.log('✅ Created .env file with template configuration');
  console.log('📝 Please edit the .env file with your actual Firebase configuration values\n');
}

console.log('🚀 Next Steps:');
console.log('1. Edit the .env file with your Firebase configuration');
console.log('2. Run: npm run build');
console.log('3. Run: firebase deploy');
console.log('\n📖 For detailed instructions, see DEPLOYMENT.md'); 