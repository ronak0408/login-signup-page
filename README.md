# Canvas Gallery - Login & Signup

A simple authentication system for a photography gallery website.

## What is this?

This is a basic login and signup page with a dark photography theme. Users can create an account, login, and see a welcome dashboard with their name.

## Tech Stack

- Frontend: React, Vite, React Router
- Backend: Node.js, Express
- Database: MongoDB Atlas
- Auth: JWT tokens, bcrypt for password hashing

## How to Run

### Step 1: Setup MongoDB

1. Go to mongodb.com/atlas and create a free cluster
2. Get your connection string
3. Paste it in `backend/.env` file

### Step 2: Start Backend

```
cd backend
npm install
npm start
```

Server runs on http://localhost:5000

### Step 3: Start Frontend

```
cd "assignment signup"
npm install
npm run dev
```

Opens on http://localhost:5173

## How to Use

1. Open the site in browser
2. Click "Create one" to go to signup page
3. Enter your name, email and password (min 6 characters)
4. Click "Create Account"
5. You'll be redirected to dashboard showing "Welcome, [Your Name]"
6. Next time, just login with your email and password

## Folder Structure

```
├── backend/           # Node.js server
│   ├── models/        # User schema
│   ├── routes/        # API routes
│   ├── server.js      # Main server file
│   └── .env           # Environment variables
│
└── assignment signup/ # React frontend
    └── src/
        ├── pages/     # Login, Signup, Dashboard
        ├── App.jsx    # Main app with routing
        └── App.css    # All styles
```

That's it! Simple and clean.

