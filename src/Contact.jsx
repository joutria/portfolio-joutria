import emailjs from "@emailjs/browser";
import { useState } from "react";
import "./css/ContactForm.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Send email using EmailJS
    const serviceId = "Joutria_Portfolio_123";
    const templateId = "template_9ocl6ea";
    const publicKey = "ZutUTWox5cQJD8zEV";
    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: name,
          from_email: email,
          message: message
        },
        publicKey
      )
      .then(
        (response) => {
          console.log("Email sent!", response.status, response.text);
        },
        (error) => {
          console.error(`Error sending email:`, error);
        }
      );

    // Clear form inputs
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section className="Contact" id="Contact">
      <h2>Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          className="contact-input"
          type="text"
          name="name"
          placeholder="Your Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="contact-input"
          type="email"
          name="email"
          placeholder="Your Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <textarea
          className="contact-input"
          name="message"
          placeholder="Your Message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
        <button className="contact-btn" type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}
