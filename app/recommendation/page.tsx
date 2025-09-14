"use client"

import { useEffect, useState } from "react"
import { Star, Clock, Calendar, Play, RotateCcw } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

// Expanded Tamil movie database with better variety and categorization
const movieDatabase = [
  // ACTION & THRILLER
  {
    id: 1,
    title: "Vikram",
    year: 2022,
    genre: "action",
    duration: 174,
    rating: 8.4,
    description: "A black-ops agent and a drug enforcement officer team up to hunt down a masked vigilante.",
    poster: "https://feeds.abplive.com/onecms/images/uploaded-images/2021/07/10/273e787ba809e725948334340c658e68_original.jpg?impolicy=abp_cdn&imwidth=1200?height=400&width=300&text=Vikram movie poster with Kamal Haasan in action thriller style",
    tags: ["thriller", "crime", "kamal haasan", "latest", "commercial"],
    mood: ["excited", "thoughtful"],
    era: "latest",
    type: "commercial",
    matchReasons: [],
  },
  {
    id: 2,
    title: "Kaithi",
    year: 2019,
    genre: "action",
    duration: 145,
    rating: 8.4,
    description: "A recently released prisoner becomes the unlikely hero when a drug bust goes wrong.",
    poster:
      "https://i.pinimg.com/564x/e9/17/bd/e917bd39a7eec51cba7ea07915cf3618.jpg?q=tbn:ANd9GcSPcm_xY8Cm8_rY4maycca6-O5kXh7Akpl1Jg&s?height=400&width=300&text=Kaithi movie poster with Karthi in dark action thriller night scene",
    tags: ["thriller", "single night", "karthi", "recent", "realistic"],
    mood: ["excited"],
    era: "recent",
    type: "realistic",
    matchReasons: [],
  },
  {
    id: 3,
    title: "Thani Oruvan",
    year: 2015,
    genre: "action",
    duration: 160,
    rating: 8.0,
    description:
      "An honest IPS officer takes on a brilliant scientist who uses his intelligence for criminal activities.",
    poster:
      "https://media-cache.cinematerial.com/p/500x/x2jtstg1/thani-oruvan-indian-movie-poster.jpg?v=1515276453?height=400&width=300&text=Thani Oruvan poster with Jayam Ravi as police officer vs villain",
    tags: ["cat and mouse", "intelligent", "jayam ravi", "recent", "commercial"],
    mood: ["excited", "thoughtful"],
    era: "recent",
    type: "commercial",
    matchReasons: [],
  },
  {
    id: 4,
    title: "Aaranya Kaandam",
    year: 2011,
    genre: "action",
    duration: 126,
    rating: 8.0,
    description: "A neo-noir crime film following various characters in Chennai's underworld over one day.",
    poster:
      "https://www.scrolldroll.com/wp-content/uploads/2022/07/Aaranya-Kaandam-Best-Tamil-crime-thriller-movies-768x1126.jpg?height=400&width=300&text=Aaranya Kaandam neo-noir crime poster with dark urban Chennai setting",
    tags: ["neo-noir", "crime", "underworld", "modern", "realistic"],
    mood: ["thoughtful"],
    era: "modern",
    type: "realistic",
    matchReasons: [],
  },
  {
    id: 5,
    title: "Maanagaram",
    year: 2017,
    genre: "action",
    duration: 129,
    rating: 7.8,
    description: "Multiple stories of people in Chennai intersect in unexpected ways during urban challenges.",
    poster:
      "https://popcornreviewss.com/wp-content/uploads/2020/11/Maanagaram-vertical-1536x2048.jpg?height=400&width=300&text=Maanagaram poster showing Chennai city life with multiple characters",
    tags: ["urban", "interconnected", "realistic", "recent", "social"],
    mood: ["thoughtful", "excited"],
    era: "recent",
    type: "realistic",
    matchReasons: [],
  },

  // DRAMA & SOCIAL
  {
    id: 6,
    title: "Soorarai Pottru",
    year: 2020,
    genre: "drama",
    duration: 153,
    rating: 8.7,
    description:
      "Inspired by Captain GR Gopinath's life, following a man's dream to make flying affordable for everyone.",
    poster:
      "https://i.pinimg.com/originals/41/99/00/4199001a1cced80374c89ccf1078d345.jpg?height=400&width=300&text=Soorarai Pottru poster with Suriya as pilot with airplane background",
    tags: ["biographical", "inspiring", "suriya", "latest", "social"],
    mood: ["happy", "thoughtful"],
    era: "latest",
    type: "social",
    matchReasons: [],
  },
  {
    id: 7,
    title: "Asuran",
    year: 2019,
    genre: "drama",
    duration: 141,
    rating: 8.4,
    description:
      "A farmer and his family face the wrath of a powerful landlord when they refuse to give up their land.",
    poster:
      "https://www.tamilnow.com/movies/gallery/asuran/dhanush-asuran-movie-image-530.jpg?height=400&width=300&text=Asuran movie poster with Dhanush as farmer in rural Tamil setting",
    tags: ["social", "caste", "dhanush", "recent", "realistic"],
    mood: ["emotional", "thoughtful"],
    era: "recent",
    type: "realistic",
    matchReasons: [],
  },
  {
    id: 8,
    title: "Visaranai",
    year: 2015,
    genre: "drama",
    duration: 118,
    rating: 8.2,
    description: "Four migrant workers are arrested and tortured by police, exposing custodial violence.",
    poster: "http://www.behindwoods.com/tamil-movies/visaranai/images/visaranai-box-office-feb-07.jpg?height=400&width=300&text=Visaranai realistic drama poster showing police custody theme",
    tags: ["realistic", "social issue", "hard hitting", "recent", "social"],
    mood: ["thoughtful", "emotional"],
    era: "recent",
    type: "realistic",
    matchReasons: [],
  },
  {
    id: 9,
    title: "Pariyerum Perumal",
    year: 2018,
    genre: "drama",
    duration: 154,
    rating: 8.1,
    description: "A law student from a lower caste faces discrimination and violence in college.",
    poster:
      "https://wallpapercave.com/wp/wp7791886.jpg?height=400&width=300&text=Pariyerum Perumal social drama poster about caste discrimination in college",
    tags: ["caste", "education", "social justice", "recent", "social"],
    mood: ["thoughtful", "emotional"],
    era: "recent",
    type: "social",
    matchReasons: [],
  },
  {
    id: 10,
    title: "Peranbu",
    year: 2018,
    genre: "drama",
    duration: 147,
    rating: 8.0,
    description:
      "A father's unconditional love for his intellectually disabled daughter and his journey to ensure her happiness.",
    poster:
      "https://image.tmdb.org/t/p/original/elSTCvnRZLGOixUZXK4jfWItHsh.jpg?height=400&width=300&text=Peranbu emotional poster with Mammootty and daughter relationship theme",
    tags: ["emotional", "father-daughter", "mammootty", "recent", "realistic"],
    mood: ["emotional", "thoughtful"],
    era: "recent",
    type: "realistic",
    matchReasons: [],
  },
  {
    id: 11,
    title: "Super Deluxe",
    year: 2019,
    genre: "drama",
    duration: 176,
    rating: 8.3,
    description: "An anthology of four interconnected stories exploring human relationships and morality.",
    poster:
      "https://i.pinimg.com/originals/dc/37/18/dc37180e65710ad43bb182768360fa67.jpg?height=400&width=300&text=Super Deluxe anthology poster with multiple characters and stories",
    tags: ["anthology", "dark comedy", "experimental", "recent", "realistic"],
    mood: ["thoughtful"],
    era: "recent",
    type: "realistic",
    matchReasons: [],
  },
  {
    id: 12,
    title: "Kadaikutty Singam",
    year: 2018,
    genre: "drama",
    duration: 158,
    rating: 7.2,
    description: "A young man fights to save his family's agricultural land and preserve traditional farming.",
    poster:
      "https://lk-aps.bmscdn.com/iedb/movies/images/website/poster/large/-kadaikutty-singam-et00000388-11-07-2018-04-15-55.jpg?height=400&width=300&text=Kadaikutty Singam poster with Karthi in rural agricultural family setting",
    tags: ["family", "agriculture", "karthi", "recent", "social"],
    mood: ["happy", "thoughtful"],
    era: "recent",
    type: "social",
    matchReasons: [],
  },

  // ROMANCE
  {
    id: 13,
    title: "96",
    year: 2018,
    genre: "romance",
    duration: 158,
    rating: 8.5,
    description:
      "A travel photographer returns to his school reunion after 22 years and reconnects with his first love.",
    poster:
      "https://i.pinimg.com/736x/5d/f7/af/5df7afbb4a0b3237d94f3d03df4786fd.jpg?height=400&width=300&text=96 romantic poster with Vijay Sethupathi and Trisha in nostalgic school theme",
    tags: ["nostalgia", "school love", "vijay sethupathi", "recent", "realistic"],
    mood: ["emotional", "happy"],
    era: "recent",
    type: "realistic",
    matchReasons: [],
  },

  // COMEDY
  {
    id: 14,
    title: "Anbe Sivam",
    year: 2003,
    genre: "comedy",
    duration: 160,
    rating: 8.7,
    description:
      "Two contrasting individuals travel together, leading to self-discovery and understanding life's values.",
    poster:
      "https://image.tmdb.org/t/p/original/nT556HbikCCLABe8xQ4zQ2QIb0O.jpg?height=400&width=300&text=Anbe Sivam poster with Kamal Haasan philosophical comedy friendship theme",
    tags: ["philosophy", "friendship", "kamal haasan", "modern", "realistic"],
    mood: ["happy", "thoughtful"],
    era: "modern",
    type: "realistic",
    matchReasons: [],
  },
]

export default function RecommendationPage() {
  const [recommendedMovie, setRecommendedMovie] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const answers = localStorage.getItem("movieAnswers")
    if (answers) {
      const parsedAnswers = JSON.parse(answers)
      const movie = getRecommendation(parsedAnswers)
      setRecommendedMovie(movie)
    }
    setLoading(false)
  }, [])

  const getRecommendation = (answers: Record<number, string>) => {
    const filteredMovies = [...movieDatabase]
    const matchReasons = []
    const scoreMap = new Map()

    // Initialize scores for all movies
    filteredMovies.forEach((movie) => {
      scoreMap.set(movie.id, 0)
    })

    // Genre matching (Question 1) - High priority
    if (answers[1] && answers[1] !== "any") {
      filteredMovies.forEach((movie) => {
        if (movie.genre === answers[1]) {
          scoreMap.set(movie.id, scoreMap.get(movie.id) + 10)
        }
      })
      const genreNames = {
        action: "action & thriller",
        comedy: "comedy",
        drama: "drama & social",
        horror: "horror & psychological",
        romance: "romance",
        scifi: "sci-fi & fantasy",
      }
      matchReasons.push(`Perfect ${genreNames[answers[1] as keyof typeof genreNames]} pick for you`)
    }

    // Duration matching (Question 2) - Medium priority
    if (answers[2]) {
      filteredMovies.forEach((movie) => {
        let durationMatch = false
        switch (answers[2]) {
          case "short":
            if (movie.duration < 120) {
              durationMatch = true
              matchReasons.push("Perfect for a quick Tamil movie session")
            }
            break
          case "medium":
            if (movie.duration >= 120 && movie.duration <= 150) {
              durationMatch = true
              matchReasons.push("Just the right length for a complete experience")
            }
            break
          case "long":
            if (movie.duration > 150) {
              durationMatch = true
              matchReasons.push("Epic Tamil cinema experience")
            }
            break
          case "any":
            durationMatch = true
            break
        }
        if (durationMatch) {
          scoreMap.set(movie.id, scoreMap.get(movie.id) + 5)
        }
      })
    }

    // Era matching (Question 3) - Medium priority
    if (answers[3] && answers[3] !== "any") {
      filteredMovies.forEach((movie) => {
        if (movie.era === answers[3]) {
          scoreMap.set(movie.id, scoreMap.get(movie.id) + 7)
        }
      })

      const eraNames = {
        classic: "Classic Tamil cinema gem",
        modern: "From the golden modern era of Tamil cinema",
        recent: "New age Tamil cinema at its best",
        latest: "Latest Tamil blockbuster",
      }
      if (eraNames[answers[3] as keyof typeof eraNames]) {
        matchReasons.push(eraNames[answers[3] as keyof typeof eraNames])
      }
    }

    // Viewing context (Question 4) - Low priority but adds flavor
    if (answers[4]) {
      const contextReasons = {
        family: "Great for Tamil family viewing",
        partner: "Perfect for a Tamil movie date",
        friends: "Awesome for watching with friends",
        alone: "Perfect for solo movie time",
      }
      if (contextReasons[answers[4] as keyof typeof contextReasons]) {
        matchReasons.push(contextReasons[answers[4] as keyof typeof contextReasons])
      }
    }

    // Mood matching (Question 5) - High priority
    if (answers[5]) {
      filteredMovies.forEach((movie) => {
        if (movie.mood.includes(answers[5])) {
          scoreMap.set(movie.id, scoreMap.get(movie.id) + 8)
        }
      })

      const moodReasons = {
        happy: "Will definitely lift your spirits",
        emotional: "Prepare for an emotional Tamil cinema journey",
        excited: "High-octane Tamil entertainment",
        thoughtful: "Thought-provoking Tamil cinema",
        relaxed: "Perfect for easy, relaxed viewing",
      }
      if (moodReasons[answers[5] as keyof typeof moodReasons]) {
        matchReasons.push(moodReasons[answers[5] as keyof typeof moodReasons])
      }
    }

    // Cinema type preferences (Question 6) - High priority
    if (answers[6]) {
      filteredMovies.forEach((movie) => {
        if (movie.type === answers[6]) {
          scoreMap.set(movie.id, scoreMap.get(movie.id) + 9)
        }
      })

      const typeReasons = {
        commercial: "Mainstream Tamil cinema entertainment",
        realistic: "Realistic Tamil cinema masterpiece",
        social: "Meaningful social message film",
        entertainment: "Pure entertainment value",
      }
      if (typeReasons[answers[6] as keyof typeof typeReasons]) {
        matchReasons.push(typeReasons[answers[6] as keyof typeof typeReasons])
      }
    }

    // Sort movies by score and rating
    const scoredMovies = filteredMovies
      .map((movie) => ({
        ...movie,
        score: scoreMap.get(movie.id),
      }))
      .sort((a, b) => {
        if (b.score !== a.score) {
          return b.score - a.score
        }
        return b.rating - a.rating
      })

    const recommended = scoredMovies[0]
    return { ...recommended, matchReasons }
  }

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-content">
          <div className="spinner"></div>
          <p className="loading-text">Finding your perfect movie...</p>
        </div>
      </div>
    )
  }

  if (!recommendedMovie) {
    return (
      <div className="loading-container">
        <div className="loading-content">
          <p className="loading-text">No recommendation found. Please try again.</p>
          <Link href="/questionnaire">
            <button className="action-button primary-button" style={{ marginTop: "1rem" }}>
              Retake Quiz
            </button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="recommendation-container">
      <div className="recommendation-content">
        {/* Header */}
        <div className="recommendation-header">
          <h1 className="recommendation-title">🎬 Your Perfect Movie Match!</h1>
          <p className="recommendation-subtitle">Based on your preferences, we recommend:</p>
        </div>

        {/* Movie Recommendation Card */}
        <div className="movie-card">
          <div className="movie-content">
            {/* Movie Poster */}
            <Image
              src={recommendedMovie.poster || "/placeholder.svg"}
              alt={`${recommendedMovie.title} poster`}
              width={300}
              height={400}
              className="movie-poster"
            />

            {/* Movie Details */}
            <div className="movie-details">
              <div className="movie-header">
                <div className="movie-title-row">
                  <h2 className="movie-title">{recommendedMovie.title}</h2>
                  <div className="rating-badge">
                    <Star size={16} />
                    <span>{recommendedMovie.rating}</span>
                  </div>
                </div>

                <div className="movie-meta">
                  <div className="meta-item">
                    <Calendar size={16} />
                    {recommendedMovie.year}
                  </div>
                  <div className="meta-item">
                    <Clock size={16} />
                    {recommendedMovie.duration} min
                  </div>
                </div>

                <div className="tags-container">
                  <span className="genre-tag">{recommendedMovie.genre.toUpperCase()}</span>
                  {recommendedMovie.tags.map((tag: string) => (
                    <span key={tag} className="movie-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <p className="movie-description">{recommendedMovie.description}</p>

              {/* Match Reasons */}
              <div className="match-reasons">
                <h3 className="match-title">Why this movie?</h3>
                <ul className="reasons-list">
                  {recommendedMovie.matchReasons.map((reason: string, index: number) => (
                    <li key={index} className="reason-item">
                      <div className="reason-dot"></div>
                      {reason}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="action-buttons">
                <button className="action-button primary-button">
                  <Play size={16} />
                  Watch Trailer
                </button>
                <Link href="/questionnaire" className="action-button secondary-button">
                  <RotateCcw size={16} />
                  Get Another Recommendation
                </Link>
                <Link href="/" className="action-button ghost-button">
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="additional-info">
          <p>Not satisfied with this recommendation?</p>
          <Link href="/questionnaire" className="retry-link">
            Take the quiz again for a different suggestion
          </Link>
        </div>
      </div>
    </div>
  )
}
