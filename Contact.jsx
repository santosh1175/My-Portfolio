import React, { useRef } from "react";
import './contact.css';
import emailjs from '@emailjs/browser';

import walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import facebookicon from '../../assets/facebook-icon.png';
import twittericon from '../../assets/twitter.png';
import youtubeicon from '../../assets/youtube.png';
import instagramicon from '../../assets/instagram.png';
import githubicon from '../../assets/github.png';
import linkedinicon from '../../assets/linkedin.png';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_18rd6qr',        // Your EmailJS service ID
            'template_523orth',       // Your EmailJS template ID
            form.current,
            'lod8kaMeZa6vqH_6g'       // Your EmailJS public key
        )
        .then(() => {
            console.log("SUCCESS!");
            alert("Message sent successfully!");
            form.current.reset();     // Clear the form
        })
        .catch((error) => {
            console.log("FAILED...", error);
            alert("Message failed to send!");
        });
    };

    return (
        <>
            <div id='contactPage'>
                <div id='clients'>
                    <h1 className="conmtactPageTitle">My clients</h1>
                    <span className="clientDesc">
                        I have had the opportunity to work with a few notable companies.
                    </span>
                    <div className="clientImgs">
                        <img src={walmart} alt="" className="clientImg"/>
                        <img src={Adobe} alt="" className="clientImg"/>
                        <img src={Microsoft} alt="" className="clientImg"/>
                        <img src={Facebook} alt="" className="clientImg"/>
                    </div>
                </div>

                <div id="contact">
                    <h1 className="contactPageTitle">Contact Me</h1>
                    <span className="clientDesc">
                        Please fill out the form below to discuss any work.
                    </span>

                    <form className="contactForm" ref={form} onSubmit={sendEmail}>
                        <input
                            type="text"
                            className="name"
                            placeholder="Your Name"
                            name="from_name"
                            required
                        />

                        <input
                            type="email"
                            className="email"
                            placeholder="Your Email"
                            name="from_email"
                            required
                        />

                        <input type="hidden" name="to_name" value="Aryan Gurav" />

                        <textarea
                            name="message"
                            placeholder="Your message"
                            rows={5}
                            className="msg"
                            required
                        />

                        <button type="submit" className="submitBtn">Submit</button>

                        <div className="links">
                            <a href="https://www.facebook.com/">
                                <img src={facebookicon} alt="" className="link" />
                            </a>

                            <a href="https://x.com/">
                                <img src={twittericon} alt="" className="link" />
                            </a>

                            <a href="https://www.instagram.com/">
                                <img src={instagramicon} alt="" className="link" />
                            </a>

                            <a href="https://www.linkedin.com/">
                                <img src={linkedinicon} alt="" className="link" />
                            </a>

                            <a href="https://github.com/">
                                <img src={githubicon} alt="" className="link" />
                            </a>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
