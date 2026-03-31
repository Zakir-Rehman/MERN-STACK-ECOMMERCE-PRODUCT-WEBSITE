import React from 'react'
import './Section2Imgs.css'
function SecurityForSec2() {
   let styles  =  {
    // backgroundImage: (url'https://images.unsplash.com/photo-1556742419-3d4480213f85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxzZWFyY2h8MXx8aGFyZHdhcmV8ZW58MHx8MHx8fDA%3D'),
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: '50%',
    height:' 400px'
   }

  return (
    <>
     <div className="rightImg transition-transform hover:scale-105 cursor-pointer" style={styles}>
      
     </div>
     <div className="leftImg">
      <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHNlbGxpbmd8ZW58MHx8MHx8fDA%3D" alt="" className='transition-transform hover:scale-105 cursor-pointer' />
      <img src="https://plus.unsplash.com/premium_photo-1681702156223-ea59bfbf1065?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bGFwdG9wfGVufDB8fDB8fHww" alt="" className='transition-transform hover:scale-105 cursor-pointer'/>
      <img src="https://i.ebayimg.com/thumbs/images/g/sMoAAOSw7s1nfprV/s-l960.webp" alt=""className='transition-transform hover:scale-105 cursor-pointer' />
      <img src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VsbGluZ3xlbnwwfHwwfHx8MA%3D%3D" alt="" className='transition-transform hover:scale-105 cursor-pointer'/>
     </div>

    </>
  )
}

export default SecurityForSec2
