
'use client';

import React from 'react';
import Image from 'next/image';
import '../styles/about.css';
import photo from '../assets/luffy.gif';

function About() {
  return (
    <div className="about-container">
      <section id="intro" className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <section className="first">
              <Image 
                className="profilePic img-fluid" 
                src={photo} 
                alt='profile photo'
                width={150}
                height={150}
                sizes="responsive"
              />
              <header>
                <h2>Abhishek Ingle</h2>
              </header>
              <p style={{fontSize: '1rem', fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'}}>
                just another Tech Guy. Learning Tensorflow and Unreal Engine 5 right now...
              </p>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
