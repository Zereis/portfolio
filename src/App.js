import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import profileImage from './assets/David Hoang.jpg';
import funny from './assets/monkey.jpeg';
import funny1 from './assets/cv.png';
import funny2 from './assets/cake.png';
import funny3 from './assets/trippy.png';
import funny4 from './assets/skattplanbild2.png';
import funny5 from './assets/bubble.png';
import funny6 from './assets/weather.png';
import funny7 from './assets/detached.png';
import funny8 from './assets/download.png';
import funny9 from './assets/game.jpg';
import funny10 from './assets/gameshop.png';
import funny11 from './assets/E-Commerce.png';
import funny12 from './assets/Expense-Tracker.png';

const projects = [
  {
    image: funny4,
    title: "Skattplan",
    desc: "A modern web application to calculate and visualize Swedish tax per year, month, week and day - and show how the tax is distributed across different areas of society.",
    link: "https://github.com/Zereis/skattplan"
  },
  {
    image: funny5,
    title: "Event Planner",
    desc: "Event Planner is a feature-rich React application designed to help users efficiently manage tasks, events, and schedules. It features a sleek interface, an interactive calendar, and powerful task management tools—perfect for organizing your daily, weekly, or long-term activities.",
    link: "https://github.com/Zereis/Event-planner"
  },
  {
    image: funny6,
    title: "Weather App ",
    desc: "I undertook the enhancement of the Weather App React project (originally from fireclint) with the goal of advancing my skills in both front-end and back-end development, as well as API integration. The project has evolved from a purely front-end application to a fullstack solution with the following key contributions and improvements:",
    link: "https://github.com/Zereis/Weather-app-react"
  },


  {
    image: funny7,
    title: "Detached Game Project",
    desc: "Unique game mechanic: Solve puzzlesby detaching and using body parts.",
    link: "https://github.com/BigUngaBunga/Detached"
  },
  {
    image: funny8,
    title: "DiscoCube Game Project",
    desc: "This is a puzzle game where you take on the role of a cube. You could say that you are a cube part of a Rubik's cube that has come loose and is trying to find its way back to its place. On the way to the starting point (the goal), you will encounter various obstacles that make it more difficult to get there.",
    link: "https://github.com/Jonas96Lundin/DiscoCube"
  },
  {
    image: funny9,
    title: "2D Endless Runner Game",
    desc: "Mobile app game: Casual 2D endless runner made in Android Studio. Dodge obstacles , collect coins , and aim for a high score as the game speeds up over time. Scores saved in a database for a global leaderboard",
    link: "https://github.com/Zereis/tour-master"
  },


    {
    image: funny10,
    title: "Game Shop",
    desc: "In this project, I embarked on the journey of building a React-based e-commerce shop from scratch. Drawing upon my learnings from previous projects, I leveraged React.js, Tailwind CSS, and Redux Toolkit to create a dynamic and responsive online shopping experience.",
    link: "https://github.com/Zereis/Game-shopping-master"
  },
  {
    image: funny11,
    title: "E-Commerce-Store Angular",
    desc: "I undertook the task of building an Angular e-commerce shop by learning to code from scratch, following a comprehensive YouTube guide. This hands-on experience involved using an empty GitHub template as a starting point. Throughout the process, I explored various facets of web development, from initial project setup to the implementation of intricate features.",
    link: "https://github.com/Zereis/E-Commerce-Store-Angular"
  },
  {
    image: funny12,
    title: "Vue 3 Expense Tracker",
    desc: "Learned and implemented Vue 3 and composition API concepts by building an expense tracker app from scratch. Guided by online tutorials, particularly a comprehensive series from a skilled YouTuber, the project showcases proficiency in Vue 3's modern syntax and best practices.",
    link: "https://github.com/Zereis/vue-expense-tracker-main"
  },


  {
    image: funny1,
    title: "CV Portfolio Website",
    desc: "A personal portfolio website showcasing my skills and experience.",
    link: "https://github.com/Zereis/cv"
  },
  {
    image: funny2,
    title: "Munamii Cakery Website",
    desc: "An e-commerce website for a local cakery, built with React.",
    link: "https://github.com/Zereis/munamii-cakery"
  },
  {
    image: funny3,
    title: "Tour App",
    desc: "A tour application that allows users to find and book tours.",
    link: "https://github.com/Zereis/tour-master"
  },
  
];

function App() {
  const [carouselIndex, setCarouselIndex] = useState(0);
  const projectsPerPage = 3;

  const totalProjects = projects.length;
  const maxIndex = Math.max(0, totalProjects - projectsPerPage);

  const handlePrev = () => {
    setCarouselIndex(i => (i - projectsPerPage < 0 ? maxIndex : i - projectsPerPage));
  };

  const handleNext = () => {
    setCarouselIndex(i => (i + projectsPerPage > maxIndex ? 0 : i + projectsPerPage));
  };

  const visibleProjects = projects.slice(carouselIndex, carouselIndex + projectsPerPage);

  return (
    <div className="App">
      <Header />
      <section id="home" className="section home">
        <div className="section-content">
          <h1>Hello, I'm David 👋</h1>
          <img src={profileImage} alt="David Hoang's Portrait" className="profile-image" />
          <p>I’m a system developer passionate about building solutions that make life easier.</p>
        </div>
      </section>

      <section id="about" className="section about">
        <div className="section-content">
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
        </div>
      </section>

      <section id="portfolio" className="section portfolio">
        <h2>My Works</h2>
        <div className="carousel">
          <button onClick={handlePrev}>&lt;</button>
          <div className="projects-container" style={{display: 'flex', gap: '24px'}}>
            {visibleProjects.map((project, idx) => (
              <div className="project" key={carouselIndex + idx}>
                <img src={project.image} alt={project.title} className="project-image" />
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <a href={project.link} target="_blank" rel="noopener noreferrer">View on GitHub</a>
              </div>
            ))}
          </div>
          <button onClick={handleNext}>&gt;</button>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
