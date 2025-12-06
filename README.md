# MoodShift Platform

A comprehensive full-stack application for tracking, understanding, and sharing your emotional wellness journey with an interactive CSS-based user interface.

## 🌈 Features

### Landing Page (index.html)
- **Interactive Mood Zones**: Hover over 4 quadrants to experience theme transitions
- **Animated Blob**: Beautiful CSS-only animation that changes color based on mood zone
- **Responsive Design**: Perfect on all devices
- **Smooth Navigation**: Seamless transitions between pages

### Features Page (features.html)
- Showcase of app capabilities
- 6 feature cards with icons
- Detailed breakdown of mood types (Calm, Energetic, Mystery, Happy)
- Visual analytics demonstration
- Advanced analytics explanation

### Insights & Analytics Page (insights.html)
- **Weekly Chart**: Visual representation of mood distribution by day
- **Mood Distribution**: Pie chart-style breakdown of mood percentages
- **Key Insights**: AI-generated personalized recommendations
- **Monthly Trends**: Historical mood data visualization
- **Data Visualization**: Interactive charts and graphs

### Community Page (community.html)
- **Shared Mood Feed**: Real-time community moments and stories
- **Support Groups**: 6 community topics with member counts
- **Success Stories**: User testimonials and transformations
- **Community Stats**: Growth metrics (50K+ members, 2.5M+ moods tracked)
- **Engagement Features**: Like, comment, and share functionality

### Journaling & Notes Page (journaling.html)
- **Journal Editor**: Rich text editor for mood entries
- **Entry Form**: Select mood type and date for entries
- **Writing Prompts**: 6 daily prompts to inspire journaling
- **Mood History**: Browse and read past entries
- **Milestone Tracking**: Celebrate journaling achievements
- **Monthly Reflections**: View mood trends by month
- **Stats Dashboard**: Track entries, streaks, and milestones

### Dashboard (dashboard.html)
- User profile and welcome section
- Mood selector with emoji indicators
- Mood history cards
- Weekly statistics visualization
- User profile information

### Enhanced Frontend Features
- **Smooth Scrolling Navigation**: All links use smooth scroll behavior
- **CSS Animations**: Fade-in effects, hover animations, and transitions
- **Responsive Grid Layouts**: Adapt to all screen sizes
- **Interactive Forms**: Form validation and submission handling
- **Notification System**: Toast notifications for user feedback
- **Theme Switching**: Dynamic color theme updates on mood zone hover
- **Counter Animations**: Animated statistics counters
- **Mobile-First Design**: Optimized for mobile, tablet, and desktop

## Tech Stack

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcryptjs** for password hashing
- **CORS** for cross-origin requests
- **dotenv** for environment variables

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Advanced styling with:
  - CSS Variables for theming
  - CSS Grid and Flexbox
  - Keyframe animations
  - Gradients and transitions
  - Responsive design
- **JavaScript (Vanilla)** - Pure JS for:
  - DOM manipulation
  - Event handling
  - Smooth scrolling
  - Form validation
  - Intersection Observer API for animations
  - Counter animations

## Project Structure

```
moodshift-platform/
├── backend/
│   ├── config/
│   │   └── db.js                 # MongoDB connection
│   ├── controllers/
│   │   ├── authController.js     # Auth logic (signup/login)
│   │   └── moodController.js     # Mood CRUD operations
│   ├── middleware/
│   │   └── auth.js               # JWT verification
│   ├── models/
│   │   ├── User.js               # User schema
│   │   └── Mood.js               # Mood schema
│   ├── routes/
│   │   ├── authRoutes.js         # /api/auth endpoints
│   │   └── moodRoutes.js         # /api/moods endpoints
│   ├── .env                      # Environment variables
│   ├── package.json              # Dependencies
│   └── server.js                 # Express server setup
│
└── frontend/
    ├── index.html                # Landing page
    ├── features.html             # Features showcase
    ├── insights.html             # Analytics dashboard
    ├── community.html            # Community & stories
    ├── journaling.html           # Journaling interface
    ├── dashboard.html            # User dashboard
    ├── styles/
    │   └── styles/
    │       └── style.css         # All styling (2500+ lines)
    ├── js/
    │   └── main.js               # JavaScript interactivity
    ├── assets/                   # Images, icons
    └── components/               # Reusable components
```

## Installation & Setup

### Backend

1. **Navigate to backend directory:**
```bash
cd backend
```

2. **Install dependencies:**
```bash
npm install
```

3. **Create `.env` file:**
```
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/moodshift
JWT_SECRET=your_jwt_secret_key_change_in_production
```

4. **Start the server:**
```bash
npm start
```

Server runs on: `http://localhost:5000`

### Frontend

**Option 1: Using VS Code Live Server**
1. Right-click on `frontend/index.html`
2. Select "Open with Live Server"

**Option 2: Direct Browser Access**
1. Open `frontend/index.html` in your browser
2. Or navigate to the file path in address bar

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Register new user
  - Body: `{ name, email, password }`
  - Returns: JWT token + user data

- `POST /api/auth/login` - Login user
  - Body: `{ email, password }`
  - Returns: JWT token + user data

### Moods (Protected - Requires JWT)
- `POST /api/moods` - Create mood entry
  - Headers: `Authorization: Bearer <token>`
  - Body: `{ moodType, note }`
  - Returns: Created mood object

- `GET /api/moods` - Get user's mood history
  - Headers: `Authorization: Bearer <token>`
  - Returns: Array of moods sorted by date

### Health
- `GET /api/health` - API health status
  - Returns: `{ message: "MoodShift API is running" }`

## Mood Types

- **☮️ Calm** - Peaceful, relaxed, centered (Cyan #06b6d4)
- **⚡ Energetic** - Vibrant, productive, motivated (Orange #f59e0b)
- **🌙 Mystery** - Contemplative, introspective, thoughtful (Purple #8b5cf6)
- **✨ Happy** - Joyful, content, grateful (Pink #ec4899)

## Color Themes

Each mood has its own color scheme applied globally:

| Mood | Primary | Secondary | Background |
|------|---------|-----------|------------|
| Calm | #06b6d4 | #0891b2 | #ecf9ff |
| Energetic | #f59e0b | #d97706 | #fffbeb |
| Mystery | #8b5cf6 | #7c3aed | #faf5ff |
| Happy | #ec4899 | #db2777 | #fdf2f8 |

## JavaScript Features

- **Smooth Scrolling**: All anchor links use smooth scroll
- **Mood Zone Interactivity**: Hover effects with theme updates
- **Form Handlers**: Save, draft, and validation
- **Animations**: Fade-in effects using Intersection Observer
- **Counter Animations**: Animated number counters for stats
- **Prompt Usage**: Writing prompts auto-populate textarea
- **Notifications**: Toast notifications for user actions
- **Current Date**: Auto-fills entry date field

## CSS Features

- **2500+ Lines**: Comprehensive styling for all pages
- **CSS Variables**: Dynamic theming system
- **Animations**: 15+ custom animations
- **Responsive Breakpoints**: 768px, 600px, 400px
- **Gradients**: Linear gradients for visual appeal
- **Transitions**: Smooth hover effects
- **Grid & Flexbox**: Modern layout techniques
- **Media Queries**: Mobile-first approach

## Responsive Design

- **Desktop** (1024px+): Full multi-column layouts
- **Tablet** (768px - 1023px): 2-column grids
- **Mobile** (600px - 767px): Single column, condensed
- **Small Mobile** (<600px): Minimal layouts, touch-friendly

## Features Implemented

✅ Interactive landing page with animated blob
✅ 4-zone mood selection system
✅ Full authentication with JWT
✅ Mood tracking and logging
✅ Journal entries with rich text
✅ Analytics and visualizations
✅ Community features
✅ User profiles
✅ Responsive design
✅ Beautiful CSS animations
✅ Smooth JavaScript interactions
✅ Form validation
✅ Notification system
✅ Mobile-optimized
✅ SEO-friendly HTML
✅ Accessibility considerations

## Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lightweight CSS (~2500 lines)
- Vanilla JavaScript (no frameworks)
- Optimized animations using requestAnimationFrame
- Intersection Observer for lazy animations
- Efficient DOM manipulation

## Future Enhancements

- Dark mode toggle
- Multi-language support
- Export data to CSV/PDF
- Mood predictions with ML
- Reminder notifications
- Social sharing integration
- Mobile app (React Native)
- Advanced analytics
- Community moderation
- Premium features

## License

MIT License - Feel free to use this project for learning and development

## Author

Created by Sarika Panchalwar

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

**MoodShift**: Track your moods, understand yourself, live better. 🌈
