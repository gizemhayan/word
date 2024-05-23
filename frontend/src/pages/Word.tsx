import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const inputStyle = {
  marginBottom: '1rem',
  padding: '0.5rem',
  width: '100%',
};

function Word() {
  const [english, setEnglish] = useState('');
  const [turkish, setTurkish] = useState('');
  const [image, setImage] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/words/create-word', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ english, turkish, image }),
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Kelime başarıyla eklendi!');
        setEnglish('');
        setTurkish('');
        setImage('');
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Kelime eklenirken bir hata oluştu:', error);
    }
  };

  const handleChangeEnglish = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setEnglish(e.target.value);
  };

  const handleChangeTurkish = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setTurkish(e.target.value);
  };

  const handleChangeImage = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setImage(e.target.value);
  };

  return (
    <div style={{ backgroundColor: '#343a40', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <form onSubmit={handleSubmit} style={{ width: '300px', textAlign: 'center' }}>
        <input
          type="text"
          className="form-control"
          placeholder="English"
          value={english}
          onChange={handleChangeEnglish}
          style={inputStyle}
          required
        />
        <input
          type="text"
          className="form-control"
          placeholder="Turkish"
          value={turkish}
          onChange={handleChangeTurkish}
          style={inputStyle}
          required
        />
        <input
          type="text"
          className="form-control"
          placeholder="Image URL"
          value={image}
          onChange={handleChangeImage}
          style={inputStyle}
          required
        />
        <button type="submit" className="btn btn-primary" style={inputStyle}>Kelime Ekle</button>
        <Link to="/Main" className='btn btn-primary' style={{ color: 'white', marginLeft: '20px', textDecoration: 'none' }}>Anasayfa</Link>
        <p style={{ color: 'white', marginTop: '10px' }}>{message}</p>
      </form>
    </div>
  );
}

export default Word;
