import React from 'react'
import {QRCodeCanvas} from 'qrcode.react';

function Qrcode({url}) {
  return (
    <>
       <QRCodeCanvas value={url} style={{height:'180px',width:'180px'}} />
    </>
  )
}

export default Qrcode
