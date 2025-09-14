'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function ResetPasswordPage() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const resetEmail = localStorage.getItem('resetEmail');
    if (!resetEmail) {
      router.push('/login'); // if no email in storage, go back
    } else {
      setEmail(resetEmail);
    }
  }, [router]);

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();

    let users = JSON.parse(localStorage.getItem('users') || '[]');

    // update password inside users array
    users = users.map((user: any) =>
      user.email === email ? { ...user, password: newPassword } : user
    );

    localStorage.setItem('users', JSON.stringify(users));
    localStorage.removeItem('resetEmail');

    alert('Password reset successful! Please login.');
    router.push('/login');
  };

  return (
    <div style={{maxWidth:'300px',margin:'100px auto',padding:'20px',background:'#fff',borderRadius:'8px',textAlign:'center'}}>
      <h2>Reset Password</h2>
      <form onSubmit={handleReset}>
        <input
          type="password"
          placeholder="Enter new password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          style={{width:'100%',padding:'10px',margin:'10px 0'}}
          required
        />
        <button type="submit" style={{width:'100%',padding:'10px',background:'green',color:'white',border:'none'}}>
          Set Password
        </button>
      </form>
    </div>
  );
}
