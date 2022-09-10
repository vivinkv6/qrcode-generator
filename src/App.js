import './App.css';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Navbars from './components/Navbars';
import Input from './components/Input';
import Qrcode from './components/Qrcode';

function App() {
  const [url, setUrl] = useState('');
  const [visible, setVisible] = useState(false);
  const [error, setError] = useState(false);
  const submition = (e) => {
    e.preventDefault();
    if (!isNaN(url)) {
      setError(true);
      setVisible(false);

    }
    else {
      setError(false);
      setVisible(true);
    }

  }
  return (
    <div className="App">

      <Navbars />

      <div style={{ backgroundColor: '#f0f0f0', display: 'inline-block', padding: '20px', marginTop: '30px' }}>
        <Input url={url} setUrl={setUrl} submition={submition} />

        {error &&
          <Alert className='mt-3' variant='danger'>
            Invalid Input
          </Alert>
        }
      </div>

      <br />
      <div style={{ height: '500px', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div>


          {visible &&
            <Qrcode url={url} />
          }
        </div>
      </div>
    </div>
  );
}

export default App;
