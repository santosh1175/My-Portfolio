import React, { useState } from "react";
import './Work.css'
import img1 from '../../assets/portfolio-1.png'
import img2 from '../../assets/portfolio-2.png'
import img3 from '../../assets/portfolio-3.png'
import img4 from '../../assets/portfolio-4.png'
import img5 from '../../assets/portfolio-5.png'
import img6 from '../../assets/portfolio-6.png'
import img7 from '../../assets/st.png';



const Work = () => {
    const [openProject, setOpenProject] = useState(null);

    return (
        <div className="work" id="portfolio">
            <h2 className="workTitle">My Portfolio</h2>
            <span className="workDesc">
                This section showcases some of my recent web and app design projects. Each project reflects my passion for creating responsive, user-friendly, and visually appealing digital experiences.
            </span>

            <div className="workImgs">
                {/* <img src={img1} alt="" className="workImg" />
                <img src={img2} alt="" className="workImg" />
                <img src={img3} alt="" className="workImg" />
                <img src={img4} alt="" className="workImg" />
                <img src={img5} alt="" className="workImg" />
                <img src={img6} alt="" className="workImg" /> */}

               <div className="project">
                    <div className="projectName">
                       <h2>College Event Alert App</h2>
                           <p>A mobile application designed to streamline college event management and notifications. Users can view detailed notices and register for events, while admins can post, update, and delete notices or events. Built with Java, Android Studio, and Firebase Realtime Database, this app enhances student engagement and simplifies event communication.</p>
                           <p className="projectTools">
                              <span className="toolsLabel">Tools:</span> Java, Firebase, Android Studio
                           </p>   
                            <a href="https://github.com/yourusername/college-event-alert-app" 
                                target="_blank" rel="noopener noreferrer" className="projectBtn">
                                View on GitHub
                            </a>
                    </div>
                </div> 
                <div className="project">
                    <div className="projectName">
                       <h2>My Portfolio</h2>
                           <p>A personal web portfolio that showcases my projects, skills, and experience in web and app development. Built with React.js, HTML, CSS, and JavaScript, it features a modern, responsive design, highlighting projects with images, descriptions, tools used, and GitHub links for recruiters and clients.</p>
                            <p className="projectTools">
                              <span className="toolsLabel">Tools:</span> React.js, HTML, CSS, and JavaScript
                           </p>   
                            <a href="https://github.com/yourusername/college-event-alert-app" 
                                target="_blank" rel="noopener noreferrer" className="projectBtn">
                                View on GitHub
                            </a>
                    </div>
                </div>
                <div className="project">
                    <div className="projectName">
                       <h2>Jyotarlinga Yatra</h2>
                           <p>A travel website providing information and guides for the Jyotirlinga pilgrimage. Users can explore temples, plan trips, and learn historical details. Developed using HTML, CSS, JavaScript, and React.js, it combines user-friendly navigation with visually appealing layouts to enhance the travel planning experience.</p>
                            <p className="projectTools">
                              <span className="toolsLabel">Tools:</span> HTML and CSS
                           </p>   
                            <a href="https://github.com/yourusername/college-event-alert-app" 
                                target="_blank" rel="noopener noreferrer" className="projectBtn">
                                View on GitHub
                            </a>
                    </div>
                </div>
                

            </div>

            {/* <button className="workBtn">See More</button> */}
        </div>
    );
};

export default Work;
