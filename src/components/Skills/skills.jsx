import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png' ;
import WebDesign from '../../assets/website-design.png';
// import AppDesign from '../../assets/app-design.png';
// import Anchor from '../../assets/Anchor-2.png';
import SM from '../../assets/smlogof.png';
import BB from '../../assets/bblogo.jpg';


const Skills = () => {
  return (
    <div>
      <section id='skills'>

       <span className="skillTitile">About me</span>
        <span className="skillDesc">These endeavors reflect my curiosity and drive to explore new ideas, enhance my skills, and contribute to causes I care deeply about.</span>

      

{/* 1 */}

<div className="skillBars">
        <div className="skillBar">
            <img src={SM} alt="OENA" className="skillBarImg" />

            <div className="skillBarText">
                <h2>Ocean Engineering and Naval Architecture</h2>
                <p>Ocean Engineering and Naval Architecture focus on designing and building ships and marine structures. This field combines engineering principles with marine science to create efficient, safe, and sustainable vessels and offshore platforms.</p>
            </div>

        </div>
      </div>

      <div className="skillBars">
        <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg" />

            <div className="skillBarText">
                <h2>WebDesign</h2>
                <p >I design user-friendly, visually captivating experiences. Through research, I solve complex problems with elegant solutions that drive user satisfaction. UI/UX expertise ensures functional, beautiful, successful projects.</p>
            </div>

        </div>
      </div>

      <div className="skillBars">
        <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg" />

            <div className="skillBarText">
                <h2>UI/UX Design</h2>
                <p>As a passionate UI/UX Designer, I specialize in creating intuitive and visually appealing digital experiences. With a focus on user-centered design, I excel at transforming complex problems into elegant solutions that enhance user satisfaction and engagement. My expertise spans user research, wireframing, prototyping, and visual design, ensuring that every project I work on is both functional and aesthetically pleasing.</p>
            </div>

        </div>
      </div>
 {/* 2 */}

       

      {/* 3 */}

      <div className="skillBars">
        <div className="skillBar">
            <img src={BB} alt="Basketball" className="skillBarImg" />

            <div className="skillBarText">
                <h2>Playing Basketball</h2>
                <p>Playing basketball is a dynamic and fun hobby that boosts fitness, improves coordination, and fosters teamwork. It offers a great way to stay active and socialize with others.</p>
            </div>

        </div>
      </div>


      </section>
    </div>
  )
}

export default Skills
