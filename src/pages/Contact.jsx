import React from 'react'
import Navbar from '../components/Navbar'
import './Contact.css' 
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <h1 className="contact-heading">Contact Us</h1>

<p className="contact-description">
  Contact us about anything related to our company or services.
  We'll do our best to get back to you as soon as possible.
</p>

<form className="contact-form">
  <label htmlFor="name">Your Name:</label>
  <input type="text" id="name" name="name" placeholder="Enter Your Name" required />

  <label htmlFor="email">Email:</label>
  <input type="email" id="email" name="email" placeholder="Enter Your Email" required />

  <label htmlFor="phone">Phone Number:</label>
  <input type="tel" id="phone" name="phone" placeholder="Enter Your Phone Number" required />

  <label htmlFor="company">Your Company:</label>
  <input type="text" id="company" name="company" placeholder="Your Company Name" required />

  <label htmlFor="message">Message:</label>
  <textarea id="message" name="message" rows="4" placeholder="Write your message..." required></textarea>

  <button type="submit" id="submit">Submit</button>
</form>
{/* End of form */}
<div className="company-info">
  <h2>SD WOT LLP</h2>
  <p>Plot No. 19, Phase I<br />
    IDA Cherlapally<br />
    Hyderabad - 500051<br />
    Telangana, TS<br />
    India
  </p>
 
  <a href="https://maps.google.com/?q=SD+WOT+LLP+Cherlapally+Hyderabad" 
     target="_blank" 
     rel="noopener noreferrer" 
     className="map-link">
    📍 View on Google Maps
  </a>
</div>
{/* Footer */}
      <Footer />
    </div>
  )
}

export default Contact
