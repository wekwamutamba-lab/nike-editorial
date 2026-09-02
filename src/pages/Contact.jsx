import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="contact-page">
      <header className="contact-header">
        <span className="section-label">// DIRECT INQUIRIES</span>
        <h1>START A CONVERSATION.</h1>
      </header>

      <div className="contact-container">
        <div className="contact-info">
          <h3>GLOBAL HQ</h3>
          <p>One Bowerman Drive<br />Beaverton, OR 97005</p>

          <h3 className="meta-heading">PRESS & ARCHIVE</h3>
          <p>press@nike-editorial.com</p>

          <h3 className="meta-heading">STUDIO VISITS</h3>
          <p>Mon — Fri / 09:00 — 18:00 EST</p>
        </div>

        <div className="contact-form-wrapper">
          {submitted ? (
            <div className="thank-you-msg">
              <h2>MESSAGE RECEIVED.</h2>
              <p>Our editorial team will respond within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label>YOUR NAME</label>
                <input 
                  type="text" 
                  required 
                  placeholder="e.g. Stacy Mutamba"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>EMAIL ADDRESS</label>
                <input 
                  type="email" 
                  required 
                  placeholder="name@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>MESSAGE / INQUIRY</label>
                <textarea 
                  rows="5" 
                  required 
                  placeholder="Describe your request or collaboration proposal..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">SEND MESSAGE →</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}