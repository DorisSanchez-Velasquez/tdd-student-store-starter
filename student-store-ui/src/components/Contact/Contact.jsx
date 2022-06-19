import * as React from "react"
import "../Contact/Contact.css"

export default function Contact(props) 
{
    return(
        <div>
            <h1>Contact Us</h1>
            <div className="contact">
                <div className="contact-text">
                    <p>Email: code@path.org</p>
                    <p>Phone: 1-800-CODEPATH</p>
                    <p>Address: 123 Fake Street, San Francisco, CA</p>
                    <p>Socials: </p>
                </div>
                <div>
                    <img src="../src/people.png" id="contact-img"/>
                </div>
            </div>
        </div>
    )
}