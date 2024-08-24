import React from 'react';
import '../styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} - Designed and developed by [Abhishek Ingle]</p>
        <p>&quot;Building the future with code and creativity.&quot;</p>
      </div>
    </footer>
  );
}

export default Footer;
