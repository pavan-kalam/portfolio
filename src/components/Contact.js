import React from 'react';
import { FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa';

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <div className="contact-info">
        <a href="mailto:kalampavan369@gmail.com"><FaEnvelope /> kalampavan369@gmail.com</a>
        <a href="tel:+19132634885"><FaPhone /> +1 9132634885</a>
        <a href="https://github.com/pavan-kalam" target="_blank" rel="noopener noreferrer"><FaGithub /> pavan-kalam</a>
      </div>
    </section>
  );
}

export default Contact;