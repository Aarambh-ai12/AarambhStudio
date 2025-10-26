# AarambhStudio - Dance Studio Management System

AarambhStudio is a full-stack web application designed to help dance studios manage students, classes, inquiries, and administrative tasks. It features a modern React frontend and a robust Node.js/Express backend.

## 🩰 Features

### Client (Frontend)
- Student registration and profile management
- Inquiry form and tracking
- Invoice generation and payment summary
- Admin dashboard with authentication
- Responsive, user-friendly interface

### Server (Backend)
- RESTful API for students, classes, inquiries, and admin
- JWT-based authentication for admin routes
- MongoDB database integration
- Email notifications for inquiries
- Secure environment variable management

## 🛠️ Tech Stack

- **Frontend:** React, Vite, Context API, CSS
- **Backend:** Node.js, Express.js, MongoDB, JWT
- **Other:** Vercel (deployment), ESLint

## 🏗️ Project Structure

```
AarambhStudio/
├── client/         # React frontend
│   ├── src/
│   │   ├── components/      # UI components (admin, dashboard, inquiry, invoice, etc.)
│   │   ├── Pages/           # Main pages (Home, Dashboard, AdminLogin, etc.)
│   │   ├── context/         # AuthContext for state management
│   │   ├── constant/        # Static data
│   │   └── assets/          # Images and static files
│   ├── public/              # Public assets
│   ├── index.html           # Main HTML file
│   ├── package.json         # Frontend dependencies
│   └── vite.config.js       # Vite configuration
├── server/         # Node.js backend
│   ├── controllers/         # Route handlers
│   ├── model/               # Mongoose models
│   ├── routes/              # API routes
│   ├── utils/               # DB connection, mailer
│   ├── index.js             # Server entry point
│   ├── package.json         # Backend dependencies
│   └── vercel.json          # Deployment config
└── README.md       # Project documentation
```

## 🚦 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB instance

### 1. Clone the repository

```bash
git clone https://github.com/Aarambh-ai12/AarambhStudio.git
cd AarambhStudio
```

### 2. Install dependencies

#### Client

```bash
cd client
npm install
```

#### Server

```bash
cd ../server
npm install
```

### 3. Configure environment variables

Create `.env` files in both `client` and `server` folders.

#### Example for server/.env

```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

#### Example for client/.env

```
VITE_API_URL=http://localhost:5000
```

### 4. Run the applications

#### Start the backend server

```bash
cd server
npm start
```

#### Start the frontend

```bash
cd ../client
npm run dev
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

---

**AarambhStudio** - Dance Studio Management System
