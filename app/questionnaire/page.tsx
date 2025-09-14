"use client"
import './questionnaire.css';

import { useState } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const questions = [
  {
    id: 1,
    question: "What genre are you in the mood for?",
    options: [
      { value: "action", label: "Action & Thriller" },
      { value: "comedy", label: "Comedy" },
      { value: "drama", label: "Drama & Social" },
      { value: "horror", label: "Horror & Psychological" },
      { value: "romance", label: "Romance & Love Story" },
      { value: "scifi", label: "Sci-Fi & Fantasy" },
    ],
  },
  {
    id: 2,
    question: "How much time do you have?",
    options: [
      { value: "short", label: "Less than 2 hours (120 min)" },
      { value: "medium", label: "2-2.5 hours (120-150 min)" },
      { value: "long", label: "More than 2.5 hours (150+ min)" },
      { value: "any", label: "I don't mind the duration" },
    ],
  },
  {
    id: 3,
    question: "What's your preferred Tamil cinema era?",
    options: [
      { value: "classic", label: "Classic Tamil Cinema (Before 2000)" },
      { value: "modern", label: "Modern Era (2000-2015)" },
      { value: "recent", label: "New Age Tamil Cinema (2015+)" },
      { value: "latest", label: "Latest Releases (2020+)" },
      { value: "any", label: "Any era is fine" },
    ],
  },
  {
    id: 4,
    question: "Are you watching alone or with others?",
    options: [
      { value: "alone", label: "Just me" },
      { value: "partner", label: "With my cousins" },
      { value: "friends", label: "With friends" },
      { value: "family", label: "Family movie night" },
    ],
  },
  {
    id: 5,
    question: "What's your mood right now?",
    options: [
      { value: "happy", label: "Want something uplifting & inspiring" },
      { value: "emotional", label: "Ready for an emotional journey" },
      { value: "excited", label: "Want high-energy entertainment" },
      { value: "thoughtful", label: "Something meaningful & deep" },
      { value: "relaxed", label: "Light & easy watching" },
    ],
  },
  {
    id: 6,
    question: "What type of Tamil cinema do you prefer?",
    options: [
      { value: "commercial", label: "Commercial & Mainstream" },
      { value: "realistic", label: "Realistic & Art Cinema" },
      { value: "social", label: "Social Issues & Message Films" },
      { value: "entertainment", label: "Pure Entertainment" },
    ],
  },
]

export default function QuestionnairePage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const router = useRouter()

  const handleAnswer = (value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questions[currentQuestion].id]: value,
    }))
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      localStorage.setItem("movieAnswers", JSON.stringify(answers))
      router.push("/recommendation")
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const progress = ((currentQuestion + 1) / questions.length) * 100
  const currentAnswer = answers[questions[currentQuestion].id]

  return (
    <div className="questionnaire-container">
      <div className="questionnaire-content">
        {/* Header */}
        <div className="questionnaire-header">
          <Link href="/" className="back-link">
            <ArrowLeft size={16} />
            Back to Home
          </Link>
          <h1 className="questionnaire-title">Movie Recommendation Quiz</h1>
          <p className="question-counter">
            Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        {/* Question Card */}
        <div className="question-card">
          <div className="question-header">
            <h2 className="question-title">{questions[currentQuestion].question}</h2>
            <p className="question-description">Choose the option that best describes your preference</p>
          </div>
          <div className="question-content">
            <div className="options-container">
              {questions[currentQuestion].options.map((option) => (
                <div key={option.value} className="option-item">
                  <input
                    type="radio"
                    id={option.value}
                    name="answer"
                    value={option.value}
                    checked={currentAnswer === option.value}
                    onChange={(e) => handleAnswer(e.target.value)}
                    className="radio-input"
                  />
                  <label htmlFor={option.value} className="option-label">
                    {option.label}
                  </label>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="navigation-buttons">
              <button onClick={handlePrevious} disabled={currentQuestion === 0} className="nav-button prev-button">
                <ArrowLeft size={16} />
                Previous
              </button>

              <button onClick={handleNext} disabled={!currentAnswer} className="nav-button next-button">
                {currentQuestion === questions.length - 1 ? "Get Recommendation" : "Next"}
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
