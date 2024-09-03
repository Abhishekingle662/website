
'use client';

import React from 'react';
import Image from 'next/image';
import '../styles/about.css';

function About() {
  return (
    <div className="about-container">
      <section id="intro" className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <section className="first">
            <Image src="/luffy-rindo-muito-luffy.gif" alt="Luffy" width={200} height={200}  style={{ borderRadius: '50%' }} />
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
