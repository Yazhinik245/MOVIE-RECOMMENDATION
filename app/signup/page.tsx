'use client';
import './signup.css';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SignupPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: '', email: '', password: '' });
  const [emailError, setEmailError] = useState('');

  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isValidEmail(form.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    if (users.find((u: any) => u.email === form.email)) {
      alert('User already exists!');
      return;
    }
    users.push(form);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful! Please log in.');
    router.push('/login');
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setForm({ ...form, email: value });
    if (!isValidEmail(value)) {
      setEmailError('Invalid email format');
    } else {
      setEmailError('');
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h2>Sign Up</h2>

        <input
          type="text"
          required
          placeholder="Enter your username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />

        <input
          type="email"
          required
          placeholder="Enter your email"
          value={form.email}
          onChange={handleEmailChange}
        />
        {emailError && <p style={{ color: 'red', fontSize: '0.9rem' }}>{emailError}</p>}

        <input
          type="password"
          required
          placeholder="Enter your password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button type="submit">Sign Up</button>

        <p style={{ textAlign: 'center', marginTop: '1rem' }}>
          Already have an account?{' '}
          <span
            style={{ color: '#0070f3', cursor: 'pointer', textDecoration: 'underline' }}
            onClick={() => router.push('/login')}
          >
            Login here
          </span>
        </p>
      </form>
    </div>
  );
}
