import emailjs from "@emailjs/browser";
import { useState } from "react";

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
          message: message,
        },
        publicKey,
      )
      .then(
        (response) => {
          console.log("Email sent!", response.status, response.text);
        },
        (error) => {
          console.error(`Error sending email:`, error);
        },
      );

    // Clear form inputs
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section className="Contact" id="Contact">
      <h2 className="text-gradient">Contact Me</h2>
      <div className="contactCard flex row justify-space align-center">
        <div className="text flex column">
          <div className="introCard flex">I'm currently open to new opportunities and collaborations.</div>
          <p>Email: <a href="http://mailto:joutria@gmail.com" target="_blank" rel="noopener noreferrer">joutria@gmail.com</a></p>
          <p>Telegram: <a href="https://t.me/joutria" target="_blank" rel="noopener noreferrer">@joutria</a></p>
          <p>Linkedin: <a href="https://www.linkedin.com/in/joutria" target="_blank" rel="noopener noreferrer">linkedin.com/in/joutria</a></p>
          <p>Github: <a href="https://github.com/joutria" target="_blank" rel="noopener noreferrer">github.com/joutria</a></p>
        </div>
        <div className="imgBox flex"><img src="my-icon.png" alt="joutria icon" /></div>
      </div>
      <p>Feel free to reach out to me via the form below!</p>
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
          className="contact-textarea"
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
