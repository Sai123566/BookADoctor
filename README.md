# BookADoctor
# 🏥 Smart Internz - Hospital Management System

A full-stack Hospital Management System built with React, Node.js (Express), MongoDB, Ant Design, Bootstrap, and MUI.

## 🚀 Features

### 👩‍⚕️ For Doctors
- Apply to become a doctor with specialization, timing, and fee info
- View, approve or reject appointment requests
- See patient details and attached documents

### 👨‍💻 For Users (Patients)
- Register/Login securely
- Book appointments with available doctors
- View appointment history and statuses
- Download medical documents (PDF)

### 🔐 Authentication
- JWT-based secure login
- Role-based routing for admin, doctor, and user

### 📊 Admin Dashboard
- Manage doctors and users
- View all appointments

---

## 🛠️ Tech Stack

| Technology      | Description                        |
|----------------|------------------------------------|
| React           | Frontend framework                 |
| Express.js      | Backend server                     |
| MongoDB         | NoSQL database                     |
| Mongoose        | ODM for MongoDB                    |
| React-Bootstrap | UI styling                         |
| Ant Design      | Notification and form components   |
| MUI Icons       | Icons used in dashboard and UI     |
| Axios           | API calls                          |
| JWT             | Authentication and authorization   |
| Multer          | File uploads for documents         |

---

## 📁 Project Structure

smart-internz/
├── backend/
│ ├── controllers/
│ ├── models/
│ ├── routes/
│ ├── middlewares/
│ └── server.js
└── frontend/
├── src/
│ ├── components/
│ │ ├── admin/
│ │ ├── common/
│ │ ├── user/
│ ├── App.js
│ └── index.js
└── package.json

yaml
Copy
Edit

---

## 🧑‍💻 Getting Started

### 1️⃣ Clone the Repository


git clone https://github.com/your-username/smart-internz.git
cd smart-internz
2️⃣ Backend Setup
bash
Copy
Edit
cd backend
npm install
npm run start
Set up your .env file in the backend folder:

env
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/smart-internz
JWT_SECRET=your_jwt_secret
3️⃣ Frontend Setup
bash
Copy
Edit
cd frontend
npm install
npm run start
⚙️ Required Dependencies
Make sure the following dependencies are installed in frontend:

bash
Copy
Edit
npm install react react-dom react-router-dom
npm install axios antd bootstrap react-bootstrap
npm install @mui/material @mui/icons-material @emotion/react @emotion/styled
📸 Screenshots
Add screenshots of your doctor form, appointment table, user dashboard, etc.











