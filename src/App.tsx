import React from 'react';
import logo from './logo.svg';
import './App.css';
import avatar from './assets/avatar.png';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <img 
        src={avatar} 
        alt="Avatar" 
        style={{
          width: "150px", 
          height: "150px", 
          borderRadius: "50%", 
          objectFit: "cover",
          marginBottom: "20px",
          border: "3px solid #1890ff"
        }} 
      />
      <h1>Nguyễn Duy Đạt - 22110307</h1>
      <p>Khoa CNTT - ĐH Sư Phạm Kỹ Thuật</p>
    </div>
  );
}

export default App;
