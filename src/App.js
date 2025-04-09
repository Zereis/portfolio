import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import profileImage from './assets/David Hoang.jpg'; // Updated import path
import funny from './assets/monkey.jpeg'; // Updated import path
import funny1 from './assets/cv.png'; // Updated import path
import funny2 from './assets/cake.png'; // Updated import path
import funny3 from './assets/trippy.png'; // Updated import path

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would handle sending the form data (e.g., to a server)
    console.log('Form data:', formData);
    // Reset the form after submission
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="App">
      <Header />
      <section id="home" className="section home">
        <h1>Hello, I'm David 👋</h1>
        <img src={profileImage} alt="David Hoang's Portrait" className="profile-image" />
        <p>I’m a system developer passionate about building solutions that make life easier.</p>
      </section>

      <section id="about" className="section about">
      <h2>About Me</h2>
      <img src={funny} alt="David Hoang's Portrait" className="profile-image" />
      <p>
        Hello! I'm a recently graduated system developer with a strong passion for crafting clean, efficient, and user-friendly web solutions. My journey into web development has been incredibly rewarding, and I'm eager to apply my skills to real-world projects.
      </p>
      <p>
        My expertise lies in building responsive and dynamic web applications using modern technologies. I'm proficient in React, and I've successfully completed several projects that demonstrate my ability to deliver high-quality web experiences.
      </p>
      <p>
        I believe in continuous learning and staying up-to-date with the latest industry trends. My goal is to create websites that not only look great but also provide seamless functionality and enhance user engagement.
      </p>
      <p>
        In the "Projects" section, you'll find examples of my projects, including a fully functional e-commerce website, a dynamic portfolio site, and a real time chat application. These projects showcase my ability to tackle diverse web development challenges and deliver effective solutions.
      </p>
      <p>
        I am looking for opportunities to grow as a developer and contribute my skills to innovative projects. If you're looking for a dedicated and enthusiastic web developer, I'd love to connect!
      </p>
      </section>

      <section id="portfolio" className="section portfolio">
        <h2>My Works</h2>
        <div className="projects-container">
          <div className="project">
          <a href="https://github.com/Zereis/cv" target="_blank" rel="noopener noreferrer">
            <img src={funny1} alt="CV Portfolio Website" className="project-image" />
          </a>
            <h3>CV Portfolio Website</h3>
            <p>A personal portfolio website showcasing my skills and experience.</p>
          </div>
          <div className="project">
          <a href="https://github.com/Zereis/munamii-cakery" target="_blank" rel="noopener noreferrer">
            <img src={funny2} alt="Munamii Cakery Website" className="project-image" />
            </a>
            <h3>Munamii Cakery Website</h3>
            <p>An e-commerce website for a local cakery, built with React.</p>
          </div>
          <div className="project">
          <a href="https://github.com/Zereis/tour-master" target="_blank" rel="noopener noreferrer">
            <img src={funny3} alt="Tour App" className="project-image" />
            </a>
            <h3>Tour App</h3>
            <p>A tour application that allows users to find and book tours.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>If you wish to contact or connect with me, please fill out the form below:</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
      <Footer />
    </div>
  );
}

export default App;
