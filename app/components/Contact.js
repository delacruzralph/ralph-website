'use client'

import styles from './Contact.module.css';
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
    <section id={id} className={styles.section}>
      <h1 className={styles.h2}>{title}</h1>
      <div className={styles.contactContent}>
        <div className="contact-text">
          <form ref={formToSend} onSubmit={handleSubmit}>
            <label htmlFor="name" className={styles.label}><h3>Name</h3></label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              className={styles.input}
            />
            {errors.name && <p className={styles.error}>{errors.name}</p>}

            <label htmlFor="email" className={styles.label}><h3>Email</h3></label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className={styles.input}
            />
            {errors.email && <p className={styles.error}>{errors.email}</p>}

            <label htmlFor="message" className={styles.label}><h3>Message</h3></label>
            <textarea rows="4"
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              className={styles.input}
            />
            {errors.message && <p className={styles.error}>{errors.message}</p>}

            <button type="submit" className={styles.button}>Send</button>
          </form>
        </div>
        <div className={styles.contactImg}>
          <h2>My Email</h2>
          <p>ralphlewisdelacruz@gmail.com</p>
          <h2>My Phone Number</h2>
          <p>201-982-5628</p>
          <h2>My Location</h2>
          <p>NJ/NYC</p>
        </div>
      </div>
    </section>
  );
}
