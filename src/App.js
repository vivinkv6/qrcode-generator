
import './App.css';
import {QRCodeCanvas} from 'qrcode.react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Alert from 'react-bootstrap/Alert';

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

<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <div style={{display:'flex',flexDirection:'row'}}>
            <img
              alt=""
              src="https://www.qr-code-generator.com/wp-content/themes/qr/new_structure/markets/core_market_full/generator/dist/generator/assets/images/websiteQRCode_noFrame.png"
              width="30"
              height="30"
              className="d-inline-block align-top me-3"
            />{' '}
           <span className='fw-bolder'>QRCode Generator</span>
           </div>
          </Navbar.Brand>
        </Container>
      </Navbar>

     
      <div style={{backgroundColor:'#f0f0f0',display:'inline-block',padding:'20px',marginTop:'30px'}}>
      <input type="text" style={{borderRadius:'5px'}} placeholder="Enter URL" value={url} onChange={(e)=>setUrl(e.target.value)} required />
      <br />
    
      <button className='btn btn-secondary' onClick={submition} style={{marginTop:'10px'}}>Generate QRCode</button>
      {error &&
      <Alert className='mt-3'  variant='danger'>
      Invalid Input
    </Alert>
}
      </div>
    
      <br />
       <div style={{height:'500px',width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
        <div>
      

      {visible &&
    <QRCodeCanvas value={url} style={{height:'180px',width:'180px'}} />
      }
      </div>
      </div>
    </div>
  );
}

export default App;
