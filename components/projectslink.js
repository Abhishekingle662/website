'use client';

import React from 'react';
import '../styles/project.css';
import githubImage from '../assets/giphy.webp';
import resume from '../assets/resume.gif';
import cg from '../assets/teapot-2.gif';
import studyres from '../assets/study.gif';
import cam from '../assets/camera.gif';
import anim from '../assets/animation.gif';

const PortfolioItem = ({ image, title, link, buttonText, icon }) => (
  <div className="col-4 col-6-medium col-12-small">
    <section className="box">
      <div className="image featured">
        <img src={image} alt="project" />
      </div>
      <header>
        <h3>{title} {icon && <i className={icon}></i>}</h3>
      </header>
      <footer>
        <ul className="actions">
          <li><a href={link} className="button alt">{buttonText}</a></li>
        </ul>
      </footer>
    </section>
  </div>
);

const Portfolio = () => {
  const portfolioItems = [
    {
      image: githubImage ,
      title: "Github",
      link: "https://github.com/Abhishekingle662",
      buttonText: "Explore?",
      icon: "fab fa-github"
    },
    {
      image: resume,
      title: "resume",
      link: "https://drive.google.com/file/d/1uc2NSycHOMAodNrkX15Q2Rw2kQrR0XPq/view?usp=sharing",
      buttonText: "Take a look!",
      icon: "📄"
    },
    {
      image: cg,
      title: "Computer Graphics",
      link: "https://abhishekingleportfoliocom.netlify.app/",
      buttonText: "Dive in",
      icon: "💻🎐"
    },
    {
      image: studyres,
      title: "Study Resources",
      link: "#",
      buttonText: "Coming soon...",
    },
    {
      image: cam,
      title: "Photography",
      link: "https://www.flickr.com/photos/200652770@N03/",
      buttonText: "Click me!",
    },
    {
      image: anim,
      title: "Animation",
      link: "https://www.behance.net/abhishekingle3",
      buttonText: "Stream here!",
    }
  ];

  return (
    <section id="main">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <section>
              <header className="major">
                <h2>My Portfolio</h2>
              </header>
              <div className="row">
                {portfolioItems.map((item, index) => (
                  <PortfolioItem key={index} {...item} />
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;