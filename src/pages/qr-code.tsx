import React, { useState, ChangeEvent } from 'react';
import MainLogo from '@/main-logo';
import QRCode from 'qrcode.react';

function QRCodeGenerator() {
  const [text, setText] = useState('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div className='extended-container'>
     <MainLogo/>
     <h2>Most Advanced QR Code Generator 🗲</h2>
      <input type="text" value={text} placeholder='enter your text' onChange={handleInputChange} />
      <div>
       <QRCode value={text} className='canvas-element' />
      </div>
    </div>
  );
}

export default QRCodeGenerator;