import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const formStyle = {
  padding: '1rem',
  marginBottom: '1rem',
};

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3001/auth/signup', { name, email, password });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Kayıt başarısız oldu.');
    }
  };

  return (
    <div style={{ backgroundColor: '#343a40', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ textAlign: 'center', color: 'white' }}>
        <h2>Kayıt Ol</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="İsim" value={name} onChange={(e) => setName(e.target.value)} style={formStyle} />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="E-posta" value={email} onChange={(e) => setEmail(e.target.value)} style={formStyle} />
          </div>
          <div className="mb-3">
            <input type="password" className="form-control" placeholder="Şifre" value={password} onChange={(e) => setPassword(e.target.value)} style={formStyle} />
          </div>
          <button type="submit" className="btn btn-primary me-2">Kayıt Ol</button>
          <Link to="/Login" className="btn btn-secondary">Giriş</Link>
        </form>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default Register;
