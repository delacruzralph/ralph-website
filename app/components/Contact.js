'use client'

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact({ id, title }) {
  const formToSend = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    let formErrors = {};
    if (!form.name) formErrors.name = "Name is required";
    if (!form.email) formErrors.email = "Email is required";
    if (!form.message) formErrors.message = "Message is required";
    setErrors(formErrors);

    // If no errors, submit form
    if (!Object.keys(formErrors).length) {
      // Submit form
      emailjs.sendForm('service_of6aipd', 'template_18o1u49', formToSend.current, '-NRfx1qgtJx6P-pQ5')
        .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });

      console.log(form);
      e.target.reset();
      setForm({ name: '', email: '', message: '' });
      setErrors({ name: '', email: '', message: '' });
    }
  };

  return (
    <section id={id} style={{
      backgroundColor: 'darkgray',
      height: 'calc(100vh - 8rem)',
      marginBlock: '2rem',
      borderTopRightRadius: '4rem',
      borderBottomRightRadius: '4rem',
      scrollSnapAlign: 'start',
      padding: '2rem',
    }}>
      <h1 style={{ marginBottom: '1rem' }}>{title}</h1>
      <div className="contact-content" style={{
        display: 'grid',
        gridTemplateColumns: '2fr 1fr',
        fontSize: '1.5vh',
        lineHeight: '1.5',
        height: 'calc(100vh - 16rem)',
        gap: '1rem',
        alignItems: 'center',
      }}>
        <div className="contact-text" >
          <form ref={formToSend} onSubmit={handleSubmit}>
            <label htmlFor="name" style={{ display: 'block', fontWeight: 'bold' }}><h3>Name</h3></label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              style={{ display: 'block', width: '100%', borderRadius: '.75vh', border: 'none', padding: '.5rem', marginBottom: '.5rem' }}
            />
            {errors.name && <p style={{ marginTop: '-0.25rem', color: 'darkred' }}>{errors.name}</p>}

            <label htmlFor="email" style={{ display: 'block', fontWeight: 'bold' }}><h3>Email</h3></label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              style={{ display: 'block', width: '100%', borderRadius: '.75vh', border: 'none', padding: '.5rem', marginBottom: '.5rem' }}
            />
            {errors.email && <p style={{ marginTop: '-0.25rem', color: 'darkred' }}>{errors.email}</p>}

            <label htmlFor="message" style={{ display: 'block', fontWeight: 'bold' }}><h3>Message</h3></label>
            <textarea rows="4"
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              style={{ display: 'block', width: '100%', borderRadius: '.75vh', border: 'none', padding: '.5rem', marginBottom: '.5rem', resize: "vertical" }}
            />
            {errors.message && <p style={{ marginTop: '-0.25rem', color: 'darkred' }}>{errors.message}</p>}

            <button type="submit" style={{
              width: '100%', paddingBlock: '.5rem', borderRadius: '.75vh', border: 'none', marginTop: '.5rem', fontWeight: 'bold'
            }}>Send</button>
          </form>
        </div>
        <div className="contact-img" style={{ justifySelf: 'center' }}>hi</div>
      </div>
    </section>
  );
}
