import React from "react";
import './Skills.css'
import ui from '../../assets/ui-design.png'
import web from '../../assets/website-design.png'
import app from '../../assets/app-design.png'


const Skills=()=>{
    return(
        <section id='skills' >
            <span className="skillTitle">What I Do</span>
            <span className="skillDesc">
                I design and develop modern, responsive, and user-friendly websites using the latest web technologies.
My focus is on building clean and efficient web applications that deliver a great user experience.
I work mainly with HTML, CSS, JavaScript, and React JS, and I also have experience connecting apps with Firebase for real-time data and authentication.

Whether it’s developing a college project, a personal portfolio, or a dynamic web app, I love turning ideas into interactive digital experiences.
            </span>
            <div className="skillBar">
                <img src={ui} alt=""  className="skillbarImg"/>
                <div className="skillbarText">
                    <h2>UI/UX</h2>
                    <p>
                        I have a strong passion for crafting interfaces that are both visually appealing and easy to use. My design process focuses on understanding the user’s needs and behavior to create intuitive layouts and smooth interactions. I pay attention to every detail from color balance and typography to spacing and usability to ensure a seamless user experience. My goal is to bridge the gap between user expectations and business goals through creative and functional design solutions.
                    </p>
                </div>
                
            </div>
            <div className="skillBar">
                <img src={web} alt=""  className="skillbarImg"/>
                <div className="skillbarText">
                    <h2>Website Design</h2>
                    <p>
                        I specialize in building modern, responsive, and high-performing websites that adapt beautifully to all devices and screen sizes. My designs combine creativity with clean code, ensuring every website is both attractive and efficient. I use HTML, CSS, JavaScript, and React JS to create websites that not only look great but also load fast and function smoothly. From layout planning to deployment, I focus on delivering designs that reflect professionalism and engage users effectively.
                    </p>
                </div>
                
            </div>
            <div className="skillBar">
                <img src={app} alt=""  className="skillbarImg"/>
                <div className="skillbarText">
                    <h2>App Design</h2>
                    <p>
                        I design mobile and web app interfaces that focus on clarity, simplicity, and usability. My approach involves understanding user journeys and designing flows that make apps easy to navigate and enjoyable to use. I aim to deliver functional yet visually impressive app designs that align with brand identity and user goals. Whether it’s a productivity app, an event management app, or a personal project, I strive to create designs that feel natural, engaging, and efficient.
                    </p>
                </div>
            </div>
        </section>
    )
}
export default Skills