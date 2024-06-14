import React from 'react';
import './works.css';
import kshitij1 from '../../assets/ktj.jpeg';

const Works = () => {
  return (
    <section className="works">

           <div className="container" id='projects'>   
            <h3 className="title">My <b>Projects</b></h3>
            <h4 className="subtitle">Here are some of my recent works</h4>
            <div className="innerContainer">
                

               <div className="car">
                    <div className="box1">
                        <div className="image1">
                          <img src={kshitij1} alt="" />

                        </div>
                       

                    </div>
                    <div className="box2">
                        <div className="projectTitle">
                            <b>Website for Kshitij(Techno-Management Fest)</b>
                        </div>
                        <ul className="descriptionList">
                            <li>Kshitij is one of the Asia's largest Techno-Management Fest</li>
                            <li>Utilised by thousands of guests during fest time</li>
                        </ul>
                          <div className="projectSubtitle">Tech Stack</div>
                        <ul className="stackList">
                            <li>React</li>
                            <li>Node JS</li>
                            <li>MongoDB</li>
                            <li>Express JS</li>
                        </ul>
                           </div>
                </div> 

                </div>
                




        {/* <h2 className="worksTitle">My Projects</h2>
        <span className="worksDesc">
            i take pride
        </span>
        <div className="workImgs">
            <img src={Portfolio1} alt="Portfolio" className="worksImg" />
            <img src={Portfolio2} alt="Portfolio" className="worksImg" />
            <img src={Portfolio3} alt="Portfolio" className="worksImg" />
            <img src={Portfolio4} alt="Portfolio" className="worksImg" />
            <img src={Portfolio5} alt="Portfolio" className="worksImg" />
            <img src={Portfolio6} alt="Portfolio" className="worksImg" />
            
        </div>

        <button className="worksBtn">See more
        </button> */}
         </div>
        
    </section>
  );
}

export default Works;
