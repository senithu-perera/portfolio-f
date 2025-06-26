import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    to_name: "",
    reply_to: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_s3odf3k", // Replace with your EmailJS Service ID
        "template_jo8bfrs", // Replace with your EmailJS Template ID
        formData,
        "cXpsFe_HFGHH5Kd09" // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          setIsSubmitted(true);
          setFormData({ to_name: "", reply_to: "", message: "" }); // Reset form
        },
        (error) => {
          console.error("Failed to send email.", error);
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        <h2>Contact Me</h2>
        <p>Feel free to send me a message. I'll get back to you as soon as possible!</p>
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="to_name"
              id="to_name"
              value={formData.to_name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="reply_to"
              id="reply_to"
              value={formData.reply_to}
              onChange={handleChange}
              required
              placeholder="Your Email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Your Message"
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
          {isSubmitted && <p className="success-message">Thank you! Your message has been sent.</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;