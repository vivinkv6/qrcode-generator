import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navbars() {
  return (
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
  )
}

export default Navbars
