# LinkedAnsari
LinkedAnsari is a LinkedIn clone, a social networking platform for professionals.

Home page:
![github ss](https://github.com/MeFaisalAnsari/LinkedAnsari/assets/84059960/9e429176-df19-4afc-8949-a7ab081c212a)

Profile page:
![github ss 2](https://github.com/MeFaisalAnsari/LinkedAnsari/assets/84059960/e431ee81-3a38-4875-adf6-0b8a7ee4abdd)

🚀 Key Features:
- User Authentication
- Post Sharing
- Like, Comment, and React to Posts
- Delete your Post and Comment
- View and Update Profile
- Real-time Updates with Firebase
- Responsive Layout

👩‍💻 Tech Stack:
- React for Frontend
- Firebase for Backend and Real-time Database
- Tailwind CSS for Styling

## 🚀 Quick Setup

### 1. Clone and Install
```bash
git clone <repository-url>
cd LinkedAnsari
npm install
```

### 2. Configure Firebase
```bash
# Run the setup script to create environment template
node setup-env.js

# Edit the .env file with your Firebase configuration
# Get your Firebase config from: https://console.firebase.google.com/
```

### 3. Run Locally
```bash
npm run dev
```

### 4. Deploy to Firebase
```bash
npm run build
firebase deploy
```

## 🔧 Fixing White Screen Issue

If you're seeing a white screen on deployment, follow these steps:

1. **Check Environment Variables**: Ensure your `.env` file has all required Firebase configuration
2. **Verify Firebase Setup**: Make sure your Firebase project is properly configured
3. **Check Browser Console**: Look for any error messages
4. **Follow Deployment Guide**: See `DEPLOYMENT.md` for detailed instructions

## 🔗 Live Demo
[LinkedAnsari](https://linkedansari.web.app/)

## 📖 Documentation
- [Deployment Guide](DEPLOYMENT.md) - Detailed deployment instructions
- [Firebase Setup](https://firebase.google.com/docs/web/setup) - Firebase configuration guide
