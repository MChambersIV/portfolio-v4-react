import React, {useState} from 'react';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import Resume from './components/pages/Resume';
import Home from './components/pages/Home';


export default function Main() {
  
  const [currentPage, setCurrentPage] = useState('Home');

   const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    } if (currentPage === 'Contact') {
      return <Contact />;
    } if (currentPage === 'Projects') {
      return <Projects />;
    } if (currentPage === 'Resume') {
      return <Resume />;
    }
  };
  
  const changePage = (page) => setCurrentPage(page);
  
  return (
    <div className="bg-dark text-light">
      <div>
        <Header />
      </div>

      <div>
        <Nav currentPage={currentPage} changePage={changePage} />
        {renderPage()}
      </div>
    
      <div>
        <Footer />
      </div>
    </div>
  );
}