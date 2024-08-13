import React, { useState } from 'react';
import emailjs from 'emailjs-com';

function Contact() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID, // your service ID
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // your template ID
      {
        fullname: formData.fullname,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message
      },
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY // your public key
    ).then((response) => {
      alert('Message sent successfully!');
    }).catch((error) => {
      alert('Failed to send the message, please try again later.');
    });
  
    setFormData({
      fullname: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };
  

  return (
    <>
      <section className="contact" id="contact">
        <h2 className="heading">Contact <span>Me</span></h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <div className="input-box">
              <input
                type="text"
                name="fullname"
                placeholder="Fullname"
                value={formData.fullname}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="input-box">
              <input
                type="number"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="input-group-2">
            <textarea
              name="message"
              cols="30"
              rows="10"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <input
              type="submit"
              value="Send Message"
              className="btn"
            />
          </div>
        </form>
      </section>
    </>
  );
}

export default Contact;
