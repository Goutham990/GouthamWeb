import React from 'react';
import "./gemail.css";
import FacebookIcon from '../../assets/facebook-icon.png';
import TwitterIcon from '../../assets/x-32px.png';
import LinkedinIcon from '../../assets/linkedinicon.png';
import InstagramIcon from '../../assets/instagram.png';

export default function App() {
  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbzdRdo-74RtBW6-hfmQ_rcjoH1ODkAVj4y2pTnxQE84eanok3E9tnmnqbqgRyj32_59OA/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="App">
      
      <section className="contactPage">
      <div id="contact">
          <h1 className="contactPageTitile">
            Let's Work together
          </h1>
          <span className="contactDesc">Need a creative caffeine fix? Hit me up!</span>

        <form className="contactForm" onSubmit={(e) => Submit(e)}>
          <input className="Name" placeholder="Your Name" name="Name" type="text" required data-form-input/>


          <input className="Email" placeholder="Your Email" name="Email" type="text" spellCheck='false' required data-form-input />


          {/* <script>
            var emailField = document.getElementById("email-field");
            var emailError = document.getElementById("email-error");

            function validateEmail() {
              
              if(!emailField.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
                emailError.innerHTML = "please";

                return false;
              }

              emailError.innerHTML = "";
              return true;
            }




          </script> */}



          <textarea className="Message" placeholder="Your Message" rows="5" name="Message" type="text" required data-form-input>
               </textarea>
          <button className="submitBtn"name="Name" type="submit">Submit</button>
          <div className="links">
            <a href="https://www.facebook.com/profile.php?id=100087708483886" className="fb" target='_blank'>
            <img src={FacebookIcon} alt="Facebook" className="link" />
            </a>
              

            <a href="https://www.instagram.com/gouthamxt/" className="insta" target='_blank'>
             <img src={InstagramIcon} alt="Instagram" className="link" />


             </a>

             <a href="https://www.linkedin.com/in/goutham-5a0890256/" className="linkedin" target='_blank'>
             <img src={LinkedinIcon} alt="Linkedin" className="link" />


             </a>
             

             
             <a href="https://x.com/Gouthamnayak99" className="twitter" target='_blank'>
             <img src={TwitterIcon} alt="Twitter" className="link" />


             </a>
            

             
             



             

              
            
              
            </div>

            
        </form>
        <div className='mailf'>
      

      
        <ion-icon className="mailicon"  name="mail-outline"></ion-icon>
             <a href="mailto:kgouthamnayak61039@gmail.com" className="mail" target='_blank' >kgouthamnayak61039@gmail.com</a>


             {/* <ion-icon name="phone-portrait-outline"></ion-icon>
             <a href="tel:+918688906548" class="contact-link">+(91) 7262-352-282</a> */}
           

        </div>
        
        
      </div>
      </section>
    </div>
   
  );
}
