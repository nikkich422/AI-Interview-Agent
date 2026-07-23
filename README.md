# 🎯 InterviewIQ AI

An AI-powered mock interview platform that helps candidates prepare for technical and HR interviews through personalized questions, voice interaction, automated evaluation, and performance analytics.

## 🚀 Features

### 🤖 AI-Powered Interview Generation

* Generates personalized interview questions based on:

  * Job Role
  * Experience Level
  * Interview Type (Technical / HR)
  * Resume Content
  * Skills & Projects

### 📄 Resume Analysis

* Upload PDF resumes for automatic analysis.
* Extracts:

  * Role
  * Experience
  * Skills
  * Projects
* Uses AI to personalize interview questions.

### 🎙️ Real-Time Voice Interview

* AI interviewer asks questions using Text-to-Speech.
* Candidate answers using:

  * Voice (Speech Recognition)
  * Manual Text Input
* Human-like interview experience.

### ⏱️ Smart Interview Flow

* Difficulty progression:

  * Easy Questions
  * Medium Questions
  * Hard Questions
* Individual time limits for every question.
* Automatic submission on timeout.

### 📊 AI Evaluation Engine

Each answer is evaluated on:

* Confidence
* Communication
* Correctness

The system generates:

* Question-wise scores
* Personalized feedback
* Overall performance rating

### 📈 Analytics Dashboard

* Overall Interview Score
* Skill Evaluation Metrics
* Performance Trend Graph
* Question-wise Breakdown
* AI Feedback Analysis

### 📑 PDF Report Generation

Download a professional interview performance report including:

* Overall Rating
* Skill Scores
* Executive Summary
* Recommendations
* Question-wise Evaluation

### 🔐 Authentication & Credits

* Google Authentication
* JWT-based Authorization
* Secure HTTP-only Cookies
* Credit-based Interview System

### 📝 Interview History

* View previously completed interviews.
* Access detailed reports anytime.

---

# 🛠️ Tech Stack

## Frontend

* React.js
* Redux Toolkit
* Tailwind CSS
* Framer Motion
* Recharts
* React Circular Progressbar
* Axios
* React Router

## Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT Authentication
* Multer
* PDF.js

## AI & Voice Technologies

* OpenRouter API
* Large Language Models (LLMs)
* Web Speech API
* Speech Recognition API
* Speech Synthesis API

---

# 📂 Project Structure

```bash
InterviewIQ-AI
│
├── client
│   ├── src
│   │   ├── component
│   │   ├── pages
│   │   ├── redux
│   │   ├── assets
│   │   └── App.jsx
│
├── server
│   ├── Controllers
│   ├── Models
│   ├── Routes
│   ├── Middleware
│   ├── Services
│   └── Config
│
└── README.md
```

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/yourusername/interviewiq-ai.git
cd interviewiq-ai
```

## 2. Install Frontend Dependencies

```bash
cd client
npm install
```

## 3. Install Backend Dependencies

```bash
cd ../server
npm install
```

## 4. Configure Environment Variables

Create a `.env` file inside the server directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

OPENROUTER_API_KEY=your_openrouter_api_key
```

## 5. Run Backend

```bash
npm run dev
```

## 6. Run Frontend

```bash
cd client
npm run dev
```

---

# 🔄 Interview Workflow

```text
Upload Resume
      ↓
AI Resume Analysis
      ↓
Generate Personalized Questions
      ↓
Voice-Based Interview
      ↓
AI Answer Evaluation
      ↓
Performance Analytics
      ↓
PDF Report Generation
```

---

# 📊 Evaluation Criteria

| Metric        | Description                             |
| ------------- | --------------------------------------- |
| Confidence    | Candidate's confidence and presentation |
| Communication | Clarity and structure of response       |
| Correctness   | Accuracy and relevance of answer        |
| Final Score   | Average evaluation score                |

---

# 🔒 Security Features

* JWT Authentication
* Protected Routes
* HTTP-only Cookies
* User-based Interview Ownership
* Credit Validation System

---

# 🌟 Future Improvements

* Multi-language Interviews
* AI Video Avatars
* Coding Round Simulation
* Company-Specific Interview Sets
* Real-Time Emotion Analysis
* Interview Scheduling
* Leaderboards & Rankings

---

# 📄 License

This project is licensed under the MIT License.

Feel free to use, modify, and contribute.
