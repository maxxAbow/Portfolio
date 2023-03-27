import React from 'react';
import './../style/home.css';

export default function HomeRender({currentPage, handlePageChange}) {
    return(
        <div className="container">
            <button type="button" className={currentPage === 'Physical' ? 'nav-link active' : 'nav-link'} id='homeButton' onClick={() => handlePageChange('Physical')}>Physical</button>
            <button type="button" className={currentPage === 'Virtual' ? 'nav-link active' : 'nav-link'} id='homeButton' onClick={() => handlePageChange('Virtual')}>Virtual</button>
            <button type="button" className={currentPage === 'About' ? 'nav-link active' : 'nav-link'} id='homeButton' onClick={() => handlePageChange('About')}>About</button>
            <button type="button" className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} id='homeButton' onClick={() => handlePageChange('Contact')}>Contact</button>
        </div>
    )
}