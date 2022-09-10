import React from 'react'

function Input({url,setUrl,submition}) {
  return (
   <>
   <input type="text" style={{borderRadius:'5px'}} placeholder="Enter URL" value={url} onChange={(e)=>setUrl(e.target.value)} required />
   <br />
    
    <button className='btn btn-secondary' onClick={submition} style={{marginTop:'10px'}}>Generate QRCode</button>
   </>
  )
}

export default Input
