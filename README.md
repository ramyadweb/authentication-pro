# User Registration, Login & Home Dashboard System

A production-ready Full-Stack User Authentication Web Application built for portfolio and resume purposes. This project demonstrates a secure, scalable, and modern approach to user authentication using the MERN stack.

## 🚀 Features

- **Secure Authentication**: JWT-based authentication with bcrypt password hashing.
- **Modern UI/UX**: Built with React, Tailwind CSS, and Framer Motion for smooth transitions.
- **Responsive Dashboard**: Mobile-friendly layout with user profile information.
- **Protected Routes**: Ensuring only authenticated users can access the dashboard.
- **State Management**: Context API for global authentication state.
- **Robust Backend**: Express.js server with MongoDB integration and middleware for error handling.
- **Toast Notifications**: Real-time feedback for user actions.

## 🛠 Tech Stack

- **Frontend**: React.js, Tailwind CSS, React Router DOM, Axios, Lucide Icons, Framer Motion.
- **Backend**: Node.js, Express.js.
- **Database**: MySQL (Sequelize ORM).
- **Security**: JWT (JSON Web Tokens), bcrypt.js.

## 📁 Project Structure

```text
├── backend/
│   ├── config/         # Database configuration
│   ├── controllers/    # Route controllers
│   ├── middleware/     # Auth and Error middleware
│   ├── models/         # Sequelize schemas
│   ├── routes/         # API endpoints
│   ├── utils/          # Utility functions (token generation)
│   └── server.js       # Entry point
├── frontend/
│   ├── src/
│   │   ├── components/ # Reusable UI components
│   │   ├── context/    # Auth Context
│   │   ├── pages/      # Login, Register, Dashboard, NotFound
│   │   ├── hooks/      # Custom hooks
│   │   ├── services/   # API services
│   │   └── App.jsx     # Main routing
│   └── tailwind.config.js
└── package.json        # Root scripts for concurrent execution
```

## ⚙️ Setup Instructions

### Prerequisites

- Node.js (v16+)
- MySQL Server
- npm or yarn

### 1. Clone the repository
```bash
git clone <repository-url>
cd authentication-pro
```

### 2. Backend Setup
```bash
cd backend
npm install
```
Create a `.env` file in the `backend` directory:
```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_NAME=auth_db
JWT_SECRET=your_secret_key
NODE_ENV=development
```
*Note: Make sure to create the `auth_db` database in your MySQL server before running.*

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

### 4. Run the Application
From the root directory:
```bash
npm run dev
```
This will start both the backend (port 5000) and frontend (port 5173) simultaneously.

## 🔌 API Documentation

| Method | Endpoint            | Description             | Access    |
|--------|---------------------|-------------------------|-----------|
| POST   | /api/auth/register  | Register a new user     | Public    |
| POST   | /api/auth/login     | Login and get JWT token | Public    |
| GET    | /api/user/profile   | Get current user data   | Protected |

## 👤 Author
**[Your Name]**
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)
