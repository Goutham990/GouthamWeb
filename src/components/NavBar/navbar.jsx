import React, { useState } from 'react' ;
import './navbar.css';
import logo from '../../assets/logof.png';
import {Link} from 'react-scroll' ;
// import contactImg from '../../assets/contact.png';
import Menu from '../../assets/menu.png';




const Navbar = () => {

  const[ showMenu, setShowMenu] = useState(false);

  return (
    
      <nav className="navbar">
        <a href="/">
        <img src={logo} alt="Logo" className='logo' />
        </a>
       
        <div className='desktopMenu'>
          <Link activeClass='active' to ='intro' spy={true} smooth={true} offset={-100} duration={500}
          className="desktopMenuListItem">Home</Link>


          <Link activeClass='active' to ='skills' spy={true} smooth={true} offset={-40} duration={500}
          
          className="desktopMenuListItem">About</Link>

           <Link activeClass='active'  smooth={true} offset={-65} duration={500}className="desktopMenuListItem" onClick={(e) => {
      e.preventDefault();
      window.open('https://drive.google.com/file/d/1yI4YF3F-B-sUh3r923FzqhVLv5Vqu-vy/view?usp=sharing', "_blank");
      }} >Resume</Link>

           <Link activeClass='active' to ='contact' spy={true} smooth={true} offset={-65} duration={500}className="desktopMenuListItem">Contact</Link>






          {/* <Link activeClass='active' to ='works' spy={true} smooth={true} offset={-65} duration={500}className="desktopMenuListItem">Projects</Link>


          <Link activeClass='active' to ='clients' spy={true} smooth={true} offset={-60} duration={500}className="desktopMenuListItem">Clients</Link> */}

        </div>

        {/* <button  className="desktopMenuBtn" onClick={() =>{
          document.getElementById('contact').scrollIntoView( {behaviour : 'smooth'} );
        }} >
         <img src={contactImg} alt='Contact Me' className='desktopMenuImgBtn'/>
         Contact Me
        </button> */}

        {/* menu
      */}


<img src={Menu} alt="Menu" className='mobMenu' onClick={()=> setShowMenu(!showMenu)} />
        <div className='navMenu' style=
        {{display : showMenu? 'flex' : 'none' }}>
          <Link activeClass='active' to ='intro' spy={true} smooth={true} offset={-100} duration={500}
          className="listItem" onClick={()=> setShowMenu(false)}>Home</Link>


          <Link activeClass='active' to ='skills' spy={true} smooth={true} offset={-50} duration={500}
          
          className="listItem" onClick={()=> setShowMenu(false)}>About</Link>


          {/* <Link activeClass='active' to ='works' spy={true} smooth={true} offset={-60} duration={500}className="listItem" onClick={()=> setShowMenu(false)}>Projects</Link>


          <Link activeClass='active' to ='clients' spy={true} smooth={true} offset={-50} duration={500}className="listItem" onClick={()=> setShowMenu(false)}>Clients</Link> */}

         <Link activeClass='active'  className="listItem" onClick={(e) => {
      e.preventDefault();
      window.open('https://drive.google.com/file/d/1yI4YF3F-B-sUh3r923FzqhVLv5Vqu-vy/view?usp=sharing', "_blank");
      }} >Resume</Link>


          <Link activeClass='active' to ='contact' spy={true} smooth={true} offset={-50} duration={500}className="listItem"onClick={()=> setShowMenu(false)}>Contact</Link>

          

        </div>


      </nav>
    
  )
}

export default Navbar ;
