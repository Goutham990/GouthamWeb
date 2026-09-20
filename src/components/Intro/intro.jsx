import React from 'react';
import './intro.css';
import bg from '../../assets/DP_N.png';
import {Link} from 'react-scroll' ;
import btnImg from '../../assets/hireme.png';
import btn2Img from '../../assets/google-docs.png'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="hello">Hello,</span>
            <span className="introText">Im <span className="introName">Goutham</span>
            <br />
          </span>

        

          <p className="introPara">I am a web developer, Designer and I'm currently pursuing a bachelor’s degree in Ocean Engineering and Naval Architecture from IIT Kharagpur.
<br />
<br />
Get to know more interesting about me!
</p>


          
          <Link>
        
          {/* <a  href="https://drive.google.com/file/d/1SlOowUrdyLSR7hghkZbIafkWgQGnjX4y/view" target="blank">
          <button className='btn2' >
            <img src={btn2Img} alt="Resume" className='btnImg' />Resume</button>
            
          </a> */}
          
          {/* <button className='btn'  onClick={() =>{
          document.getElementById('contact').scrollIntoView( {behaviour : 'smooth'});
        }}>
            <img src={btnImg} alt="Hire me" className='btnImg' />Hire Me</button> */}

<button className='btn'  onClick={(e) => {
      e.preventDefault();
      window.open('https://drive.google.com/file/d/1yI4YF3F-B-sUh3r923FzqhVLv5Vqu-vy/view?usp=sharing', "_blank");
      }}>
            <img src={btnImg} alt="Hire me" className='btnImg' />My Resume(Tech)</button>
<br />
            <button className='btn'  onClick={(e) => {
      e.preventDefault();
      window.open('https://drive.google.com/file/d/1t_-ntwUqViDLe6K5gTTUA-ZCby5JK82S/view?usp=sharing', "_blank");
      }}>
            <img src={btnImg} alt="Hire me" className='btnImg' />My Resume(Core)</button>

           
            </Link>

            



        </div>
        <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro;
