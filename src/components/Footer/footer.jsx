import React from 'react';
import './footer.css';
import uparrow from '../../assets/up-arrow.png'


const Footer = () => {

  const top = () => {
    window.scrollTo(0,0);
  }


  return (
    <footer className="footer">
      
        Copyright &#169; 2024 Goutham Nayak. All rights recevied.

        {/* <a href="/">
        <img src={uparrow} alt="uparrow" className='uparw'/>
        </a> */}
        {/* back to top */}
        {/* <button  onClick={top} className="topbtn">
          <img src={uparrow} alt="uparror" className='topbtnimg' />
        </button> */}

    </footer>
  )
}

export default Footer
