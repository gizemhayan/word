import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const formStyle = {
  padding: '1rem',
  marginBottom: '1rem',
};

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/auth/login', { email, password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Giriş başarısız oldu.');
    }
  };

  return (
    <div style={{ backgroundColor: '#343a40', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', color: 'white' }}>
        <h2>Giriş Yap</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control"
            placeholder="E-posta"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={formStyle}
          />
          <input
            type="password"
            className="form-control"
            placeholder="Şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={formStyle}
          />
          <button type="submit" className="btn btn-primary me-2">Giriş Yap</button>
          <Link to="/Register" className="btn btn-secondary">Kayıt Ol</Link>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Login;
