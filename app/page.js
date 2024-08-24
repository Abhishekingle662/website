
import dynamic from 'next/dynamic';
import About from '../components/about';
import Education from '../components/education';
import Contact from '../components/contact';
import Footer from '../components/footer';
import WebLink from '../components/projectslink';
import "../styles/App.css";

const P5Sketch = dynamic(() => import('../components/P5Sketch'), { ssr: false });

export default function Home() {
  return (
    <>
      <div className="p5Background">
        <P5Sketch />
      </div>
      <div>
        <About />
        <WebLink />
        <Education />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
