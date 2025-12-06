# MoodShift Platform

A full-stack application for tracking and visualizing your emotional states with an interactive CSS-based user interface.

## Features

- **Interactive Landing Page**: Hover-based mood zones with animated blob and theme transitions
- **Dashboard**: Track mood history, view statistics, and manage your emotional journey
- **Secure Authentication**: User registration and login with JWT tokens
- **Mood Logging**: Save mood entries with optional notes
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Beautiful gradients, animations, and mood-based color themes

## Tech Stack

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing
- CORS enabled

### Frontend
- HTML5
- Pure CSS3 (no JavaScript)
- Responsive design with CSS Grid and Flexbox
- CSS animations and transitions

## Project Structure

```
moodshift-platform/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   └── moodController.js
│   ├── middleware/
│   │   └── auth.js
│   ├── models/
│   │   ├── User.js
│   │   └── Mood.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── moodRoutes.js
│   ├── .env
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── index.html
│   ├── dashboard.html
│   ├── styles/
│   │   └── styles/
│   │       └── style.css
│   ├── assets/
│   └── components/
└── .gitignore
```

## Installation

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file with:
```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/moodshift
JWT_SECRET=your_jwt_secret_key_change_in_production
```

4. Start the server:
```bash
npm start
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Open `frontend/index.html` in a web browser
2. Or use VS Code Live Server extension:
   - Right-click on `frontend/index.html`
   - Select "Open with Live Server"

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user

### Moods (Protected Routes - Require JWT)
- `POST /api/moods` - Save a mood entry
- `GET /api/moods` - Retrieve user's mood history

### Health Check
- `GET /api/health` - API health status

## Usage

1. **Landing Page**: 
   - Explore the animated blob in the center
   - Hover over the 4 mood zones to see theme changes
   - Click "Go to Dashboard" to navigate

2. **Dashboard**:
   - View your mood history
   - Log new moods with optional notes
   - Check weekly statistics
   - View your profile

## Mood Types

- **Calm** ☮️ - Peaceful, relaxed state (Cyan theme)
- **Energetic** ⚡ - Energized, productive state (Orange theme)
- **Mystery** 🌙 - Contemplative, introspective state (Purple theme)
- **Happy** ✨ - Joyful, content state (Pink theme)

## Requirements

- Node.js (v14 or higher)
- MongoDB (running locally on port 27017)
- Modern web browser

## License

MIT

## Author

Sarika Panchalwar
