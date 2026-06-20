# 🎨 PixelMind – AI Image Transformation Platform

PixelMind is a full-stack AI-powered image transformation platform that allows users to upload images, apply AI-powered transformations through Cloudinary, and manage credits using Razorpay payments.

Built with the MERN stack, PixelMind provides a seamless experience for transforming and managing images with secure authentication, cloud storage, and an integrated payment system.

---

## 🚀 Live Demo

🌐 Frontend: https://pixelmind-beryl.vercel.app

🔗 Backend API: https://pixelmind-0f4f.onrender.com

---

## ✨ Features

* 🔐 Secure User Authentication & Authorization
* 🖼️ AI-Powered Image Transformations
* ☁️ Cloudinary Image Upload & Storage
* 💳 Razorpay Payment Integration
* 💰 Credit-Based Usage System
* 📁 Image Upload & Processing Workflow
* ⚡ Fast & Responsive User Interface
* 🔄 Real-Time Image URL Generation
* 📊 Secure REST APIs
* 🌍 Cloud Deployment with Vercel & Render

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
* MongoDB
* Mongoose
* JWT Authentication

### Third-Party Services

* Cloudinary
* Razorpay
* MongoDB Atlas

---

## 📂 Project Structure

### Frontend

```text
client/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env
└── package.json
```

### Backend

```text
server/
├── configs/
├── controllers/
├── middleware/
├── models/
├── routes/
├── uploads/
├── app.js
├── .env
└── package.json
```

---

## ⚙️ Environment Variables

### Backend (.env)

```env
MONGODB_URI=your_mongodb_uri

JWT_SECRET=your_jwt_secret

RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret

CLOUD_NAME=your_cloud_name
CLOUD_API_KEY=your_cloud_api_key
CLOUD_API_SECRET=your_cloud_api_secret
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000
VITE_RAZORPAY_KEY_ID=your_razorpay_key_id
```

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/razakhnn14/PixelMind.git
cd PixelMind
```

### 2. Install Frontend Dependencies

```bash
cd client
npm install
```

### 3. Install Backend Dependencies

```bash
cd server
npm install
```

---

## ▶️ Running Locally

### Start Backend

```bash
cd server
npm run dev
```

### Start Frontend

```bash
cd client
npm run dev
```

---

## 💳 Payment Workflow

1. User selects a credit package.
2. Backend creates a Razorpay order.
3. User completes the payment.
4. Payment signature is verified.
5. Credits are added to the user's account.
6. Credits are deducted whenever an image transformation is performed.

---

## ☁️ Cloudinary Workflow

PixelMind leverages Cloudinary to:

* Securely upload images
* Store images in the cloud
* Generate transformation URLs
* Deliver optimized images through CDN
* Instantly render transformed results

---

## 🚀 Deployment

### Frontend

* Vercel

### Backend

* Render

### Database

* MongoDB Atlas

---

## 👨‍💻 Author

**Raza Khan**

GitHub: https://github.com/razakhnn14

---

## ⭐ Support

If you found this project helpful, please consider giving it a star on GitHub.
