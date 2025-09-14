'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import './forget.css';

export default function ForgetPage() {
  const router = useRouter();
  const [email, setEmail] = useState('');

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const userExists = users.find((user: any) => user.email === email);

    if (userExists) {
      localStorage.setItem('resetEmail', email); // temp store
      router.push('/reset-password');
    } else {
      alert('Email not found. Please signup first.');
    }
  };

  return (
    <div className="forgot-page">
      <div className="forgot-box">
        <h2>Forgot Password</h2>
        <form onSubmit={handleEmailSubmit}>
          <input
            type="email"
            placeholder="Enter registered email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">
            Next
          </button>
        </form>
      </div>
    </div>
  );
}
