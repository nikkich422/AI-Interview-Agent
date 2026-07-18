# 🚀 AI Interview MERN

An AI-powered mock interview platform built with the MERN Stack that helps candidates prepare for real-world interviews through resume analysis, personalized question generation, AI-based answer evaluation, and detailed performance reports.

---

# 📌 Overview

AI Interview MERN simulates professional HR and Technical interviews using AI. Users can upload their resumes, generate customized interview questions based on their experience and skills, answer those questions, and receive intelligent feedback with performance scoring.

The platform is designed to help students, freshers, and experienced developers improve their interview skills through realistic practice sessions.

---

# ✨ Features

## 🔐 Authentication & User Management

* User Registration
* User Login
* JWT Authentication
* Protected Routes
* Current User Session Management

---

## 📄 Resume Analysis

Users can upload their resume in PDF format.

The system:

* Extracts text from PDF files
* Analyzes resume content using AI
* Identifies:

  * Job Role
  * Experience Level
  * Skills
  * Projects

---

## 🤖 AI Interview Generation

Generates personalized interview questions using:

* Candidate Role
* Experience
* Resume Content
* Skills
* Projects
* Selected Interview Mode

Supported interview types:

* HR Interview
* Technical Interview

Question difficulty progresses automatically:

| Question | Difficulty |
| -------- | ---------- |
| 1        | Easy       |
| 2        | Easy       |
| 3        | Medium     |
| 4        | Medium     |
| 5        | Hard       |

---

## 🎯 AI Answer Evaluation

Each answer is analyzed by AI and scored based on:

* Correctness
* Communication
* Confidence
* Overall Quality

The platform also generates personalized feedback for every response.

---

## 📊 Interview Reports

After completing an interview:

* Detailed performance report is generated
* Individual question analysis
* AI feedback
* Overall score
* Performance summary

---

## 📜 Interview History

Users can:

* View previous interviews
* Access historical reports
* Track progress over time

---

## 💳 Credit System

Interview generation consumes credits.

Features:

* User credit tracking
* Credit validation before interview creation
* Remaining credits display

---

# 🛠 Tech Stack

## Frontend

* React.js
* React Router DOM
* Redux Toolkit
* Axios
* Tailwind CSS

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose

## AI Integration

* OpenRouter API
* GPT-4o Mini

## File Processing

* Multer
* PDF.js

## Authentication

* JWT
* Cookies

---

# 📁 Project Structure

```text
AI-Interview-MERN
│
├── Client
│   ├── src
│   │   ├── pages
│   │   ├── components
│   │   ├── redux
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── Server
│   ├── Controllers
│   ├── Models
│   ├── Routes
│   ├── Services
│   ├── Middleware
│   ├── public
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/your-username/AI-Interview-MERN.git
cd AI-Interview-MERN
```

---

## 2. Backend Setup

Navigate to server folder:

```bash
cd Server
```

Install dependencies:

```bash
npm install
```

Create `.env` file:

```env
PORT=8000

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key

OPENROUTER_API_KEY=your_openrouter_api_key
```

Run backend server:

```bash
npm run dev
```

---

## 3. Frontend Setup

Navigate to client folder:

```bash
cd Client
```

Install dependencies:

```bash
npm install
```

Start frontend:

```bash
npm run dev
```

---

# 🔑 Environment Variables

## Backend (.env)

```env
PORT=8000

MONGODB_URI=

JWT_SECRET=

OPENROUTER_API_KEY=
```

---

# 🔄 Application Flow

### Step 1

User registers or logs into the platform.

⬇

### Step 2

User uploads a resume PDF.

⬇

### Step 3

AI extracts:

* Role
* Experience
* Projects
* Skills

⬇

### Step 4

User selects interview mode:

* HR
* Technical

⬇

### Step 5

AI generates personalized interview questions.

⬇

### Step 6

User answers interview questions.

⬇

### Step 7

AI evaluates answers and generates feedback.

⬇

### Step 8

Interview report is created and stored.

⬇

### Step 9

User can revisit reports from interview history.

---

# 🗄 Database Models

## User Model

```javascript
{
  name: String,
  email: String,
  password: String,
  credits: Number
}
```

---

## Interview Model

```javascript
{
  userId: ObjectId,
  role: String,
  experience: String,
  mode: String,
  resumeText: String,

  questions: [
    {
      question: String,
      difficulty: String,
      timeLimit: Number,

      answer: String,
      feedback: String,

      score: Number,
      confidence: Number,
      communication: Number,
      correctness: Number
    }
  ],

  finalScore: Number,
  status: String
}
```

---

# 🌟 Key Highlights

* AI Resume Parsing
* Personalized Interview Questions
* HR & Technical Interview Modes
* AI Feedback System
* Interview Reports
* Interview History
* Credit-Based Usage System
* JWT Authentication
* MongoDB Database Integration
* Modern React Frontend
* Scalable MERN Architecture

---

# 🚀 Future Enhancements

* Voice-Based Interviews
* Real-Time AI Conversation
* Video Interview Support
* Interview Analytics Dashboard
* Resume Improvement Suggestions
* Multiple Language Support
* Payment Gateway Integration
* AI Career Recommendations

---

# 👨‍💻 Author

Developed as a full-stack MERN application to simulate realistic interview experiences using modern AI technologies.

---

# 📄 License

This project is licensed under the MIT License.

Feel free to use, modify, and contribute.
