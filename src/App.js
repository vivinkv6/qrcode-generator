import logo from './logo.svg';
import './App.css';
import {QRCodeCanvas} from 'qrcode.react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  const [url,setUrl]=useState('');
  const [visible,setVisible]=useState(false);
  const [error,setError]=useState(false);
  const submition=(e)=>{
    e.preventDefault();
    if(!isNaN(url))
    {
      setError(true);
      setVisible(false);

    }
    
    else{
      setError(false);
      setVisible(true);
    }

  }
  return (
    <div className="App">
      <h2 style={{marginBottom:'20px'}}>QRCode Generator</h2>
      <div style={{backgroundColor:'#f0f0f0',display:'inline-block',padding:'20px',marginTop:'30px'}}>
      <input type="text" value={url} onChange={(e)=>setUrl(e.target.value)} required />
      <br />
      {error &&
      <p style={{color:'red'}}>*Invalid Input</p>
}
      <button onClick={submition} style={{marginTop:'10px'}}>Generate QRCode</button>
      </div>
      <br />
       <div style={{height:'500px',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div>

      {visible &&
    <QRCodeCanvas value={url} />
      }
      </div>
      </div>
    </div>
  );
}

export default App;
