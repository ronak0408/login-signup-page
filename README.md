# Canvas Photography - Login & Signup

A clean authentication system for a photography gallery website with dark aesthetic theme.

🔗 **Live Site:** [https://login-signup-page-sepia-tau.vercel.app/](https://login-signup-page-sepia-tau.vercel.app/)

---

## About

Simple login and signup pages with a dark photography theme. Users can create account, login, and see a personalized dashboard with their name.

---

## Tech Stack

| Part | Technology |
|------|------------|
| Frontend | React, Vite, React Router |
| Backend | Node.js, Express |
| Database | MongoDB Atlas |
| Auth | JWT tokens, bcrypt |
| Hosting | Vercel (frontend), Render (backend) |

---

## Features

- User registration with validation
- Secure password hashing
- JWT based authentication
- Clean dark photography theme
- Responsive design
- Personalized welcome dashboard

---

## How to Use

1. Visit the live site
2. Click "Create one" to sign up
3. Enter your name, email and password
4. Click "Create Account"
5. Dashboard shows "Welcome, [Your Name]"
6. Next time just login with email and password

---

## Run Locally

**Backend:**
```
cd backend
npm install
npm start
```

**Frontend:**
```
cd "assignment signup"
npm install
npm run dev
```

---

## Author

Made for Canvas Photography Gallery

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

