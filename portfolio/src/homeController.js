import React, {useState} from 'react';
import About from './components/about';
import Physical from './components/physical';
import Virtual from './components/virtual';
import Contact from './components/contact';
import HomeRender from './components/home';

export default function Home() {
  const [currentPage, setCurrentPage] = useState('Home');
     const renderPage = () => {
         if (currentPage === 'Contact') {
             return <Contact />;
         }
         if (currentPage === 'About') {
           return <About />;
         }
         if (currentPage === 'Pysical') {
           return <Physical />;
         }
         if (currentPage === 'Virtual') {
             return <Virtual />;
        };
       };
  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div>
        <HomeRender currentPage={currentPage} handlePageChange={handlePageChange} />
        {renderPage()}
        </div>
  );
}