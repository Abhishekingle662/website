import React from 'react';
import '../styles/about.css'; // Ensure this is properly linked to apply styles
import photo from '../assets/photo.jpg';
function About() {
 
  return (
    <div className="about-container">

      <section id="intro" className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4">
            <section className="first">
              <img className="profilePic img-fluid" src={photo} alt='photsdfo' />
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