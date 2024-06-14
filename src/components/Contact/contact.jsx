import React from 'react';
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/twitter.png';
import YoutubeIcon from '../../assets/youtube.png';
import InstagramIcon from '../../assets/instagram.png';







const Contact = () => {

  return (
    <div>
      <section className="contactPage">
        <div id="clients">
         <h1 className="contactPageTitile">My Clients</h1>
         <p className="clientDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui dolor impedit quasi eligendi enim hic eos in et eius repellendus iure soluta, quidem, perspiciatis rerum iste alias temporibus voluptates. Ipsam.</p>

         <div className="clientImgs">
            <img src={Walmart} alt="Walmart" className="clientImg" />
            
            <img src={Adobe} alt="Adobe" className="clientImg" />
            <img src={Microsoft} alt="Microsoft" className="clientImg" />
            <img src={Facebook} alt="Facebook" className="clientImg" />
         </div>
        </div>




        {/* <div id="contact">
          <h1 className="contactPageTitile">
            contact me
          </h1>
          <span className="contactDesc">Lorem ipsum, dolor sit amet consectetur adipisicing em, nulla harum laboriosam esse, tempora dolorem laudantium soluta.</span>


          <form className="contactForm">
            <input type="text" className="Name" placeholder='Your Name' />
            <input type="text" className="Email" placeholder='Your Email'/>
            <textarea className='Message' name="message" rows="5" placeholder='Your Message'>
               </textarea>
            <button type='submit' value='send' className="submitBtn">Submit</button>
            <div className="links">
              <img src={FacebookIcon} alt="Facebook" className="link" />
              <img src={TwitterIcon} alt="Twitter" className="link" />
              <img src={YoutubeIcon} alt="Youtube" className="link" />
              <img src={InstagramIcon} alt="Intsagram" className="link" />
            </div>
          </form>
      

        </div> */}

        
      </section>
    </div>
  )
}



export default Contact ;


