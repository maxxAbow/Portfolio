import React, {useState} from 'react';
import './style/home.css';
import About from './components/about';
import Physical from './components/physical';
import Virtual from './components/virtual';
import Contact from './components/contact';
import HomeRender from './components/home';
import HomePage from './components/home';

export default function Home() {
    const [currentPage, setCurrentPage] = useState('HomePage');
    const renderPage = () => {
        console.log('Button has been clicked');
        if (currentPage === 'HomePage') {
          return <HomePage />;
        }
        if (currentPage === 'About') {
          return <About />;
        }
        if (currentPage === 'Pysical') {
          return <Physical />;
        }
        if (currentPage === 'Virtual') {
            return <Virtual />;
          }
          if (currentPage === 'Contact') {
            return <Contact />;
          }
      };

    const handlePageChange = (page) => setCurrentPage(page);

    return(
        <div>
        <HomeRender currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        </div>
    );
}