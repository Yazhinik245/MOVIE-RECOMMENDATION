'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { Film, Play, Star, Users, Calendar, Zap } from "lucide-react";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="home-container">
      {/* Background Image */}
      <div className="background-image">
        <Image
          src="/images/movie-collage-bg.png"
          alt="Movie collage background"
          fill
          style={{ objectFit: "cover" }}
          priority
        />
        <div className="background-overlay" />
      </div>






      {/* Header */}
      <header className="header">
        <nav className="nav">
          <div className="logo">
            <div className="logo-icon">
              <Film size={24} color="white" />
            </div>
            <div className="logo-text">
              <h1>MovieRecommendation.com</h1>
              <p>Pick A Movie You Like</p>
            </div>
          </div>

          <div className="nav-links">
            <Link href="#">MOVIE PICKER</Link>
            <Link href="#">TOP GENRES</Link>
            <Link href="#">TOP ACTORS</Link>
            <Link href="#">BLOG</Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-container">
          {/* Left Side - Features */}
          <div>
            <div className="features-box">
              <div className="feature-item">
                <Zap className="feature-icon" />
                <span className="feature-text">time-saving & easy to use</span>
              </div>
              <div className="feature-item">
                <Users className="feature-icon" />
                <span className="feature-text">free & no registration</span>
              </div>
              <div className="feature-item">
                <Play className="feature-icon" />
                <span className="feature-text">watch trailers directly</span>
              </div>
              <div className="feature-item">
                <Star className="feature-icon" />
                <span className="feature-text">only high-quality movies</span>
              </div>
              <div className="feature-item">
                <Calendar className="feature-icon" />
                <span className="feature-text">special recommendations for movie dates</span>
              </div>
              <div className="feature-item">
                <Film className="feature-icon" />
                <span className="feature-text">
                  special categories (e.g. movies based on true stories, wedding movies ...)
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Main CTA */}
          <div className="hero-section">
            <h1 className="hero-title">TAMIL MOVIE RECOMMENDATION ENGINE</h1>
            <p className="hero-subtitle">Can't decide which Tamil movie to watch from thousands available?</p>
            <p className="hero-description">Answer 6 questions and discover your perfect Tamil film!</p>

            {/* ✅ Updated to use router.push instead of Link */}
            <button onClick={() => router.push('/signup')} className="cta-button">
              Start Now
            </button>
          </div>
        </div>
      </main>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          <div>
            <div className="stat-number">500+</div>
            <p className="stat-label">Tamil Movies in Database</p>
          </div>
          <div>
            <div className="stat-number">25</div>
            <p className="stat-label">Tamil Genres Available</p>
          </div>
          <div>
            <div className="stat-number">10,000+</div>
            <p className="stat-label">Happy Users</p>
          </div>
        </div>
      </section>
    </div>
  );
}
