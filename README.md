# 🎨 PixelMind – AI Image Transformation Platform

PixelMind is a full-stack AI-powered image transformation web application that allows users to upload images, apply AI-based transformations using Cloudinary, and manage credits through Razorpay payments.

It is built using the MERN stack with a modern, scalable architecture.

---

## 🚀 Features

* 🔐 User Authentication & Protected Routes
* 🖼️ AI Image Transformation using Cloudinary
* ☁️ Cloud-based Image Upload & Storage
* 💳 Razorpay Payment Integration
* 💰 Credit-based system for transformations
* 📁 User image upload & processing system
* ⚡ Fast and responsive UI
* 📊 Secure backend APIs
* 🔄 Real-time image URL generation

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Context API
* Axios

### Backend

* Node.js
* Express.js
* MongoDB & Mongoose

### Services

* Cloudinary (Image storage & transformation)
* Razorpay (Payments)

---

## 📂 Project Structure

### 📦 Client (Frontend)

client/
├── public/
├── src/
│   ├── assets/        # Images, icons, static files
│   ├── components/    # Reusable UI components
│   ├── context/       # Global state management  (App state)
│   ├── pages/         # Application pages (Home, Login, Dashboard, etc.)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
└── package.json

---

### ⚙️ Server (Backend)

server/
├── configs/           # DB, Cloudinary, Razorpay configs
├── models/            # Mongoose schemas (User, Transactions, etc.)
├── routes/            # API routes
├── controllers/       # Business logic (if separated)
├── middleware/        # Auth middleware, error handling
├── uploads/           # Temporary/local uploads 
├── server.js          # Entry point
├── .env
└── package.json

---

## ⚙️ Environment Variables

### Backend (.env)

MONGODB_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_secret

CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_api_key
CLOUD_API_SECRET=your_api_secret

---

### Frontend (.env)

VITE_API_URL=http://localhost:5000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository

git clone https://github.com/razakhnn14/PixelMind.git
cd pixelmind

---

### 2️⃣ Install dependencies

#### Frontend

cd client
npm install

#### Backend

cd ../server
npm install

---

## ▶️ Run the project locally

### Start backend

cd server
npm run dev

### Start frontend

cd client
npm run dev

---

## 💳 Payment Flow (Razorpay)

1. User selects a credit plan
2. Backend creates Razorpay order
3. User completes payment
4. Payment signature is verified
5. Credits are added to user account
6. Credits are deducted on image transformation

---

## ☁️ Cloudinary Workflow

PixelMind uses Cloudinary to:

* Upload images securely
* Apply AI-based transformations via URL parameters
* Optimize and deliver images via CDN
* Generate transformed image URLs instantly

---

## 🚀 Deployment

### Frontend

* Deploy on Vercel

### Backend

* Deploy on Render

### Database

* MongoDB Atlas

---

## 🔮 Future Improvements

* Image transformation history
* Download & share gallery
* AI style presets
* User dashboard analytics
* Admin panel
* Batch image processing

---

## 👨‍💻 Author

**Raza Khan**

---

## ⭐ Support

If you like this project, consider starring the repository on GitHub.
