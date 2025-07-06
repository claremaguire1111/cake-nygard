import React from 'react';
import '../styles/App.css';

const Contact = () => {
  return (
    <main className="contact-container">
      <h1>Contact</h1>
      
      <div className="contact-info">
        <p className="studio-info">
          Cake Nygard<br />
          Minneapolis, MN
        </p>
        
        <p className="contact-section">
          <a href="mailto:clare@noprblm.com" className="contact-link">clare@noprblm.com</a>
        </p>
        
        <p className="contact-section">
          <a href="https://www.instagram.com/cakenygardart/" target="_blank" rel="noopener noreferrer" className="contact-link">Instagram</a>
        </p>
        
        <p className="contact-note">
          For sales, exhibitions and collaborations please contact via email.
        </p>
      </div>
    </main>
  );
};

export default Contact;