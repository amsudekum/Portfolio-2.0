import React from 'react';


const Header = ({ children }) => {
    return(
        <header className="header">
            {children}
            <h2>.ASHLEY SUDEKUM.</h2>
        <ul>
            <li><a href="#mywork">.Work</a></li>
            <li><a href="#mywork">Resume.</a></li>
        </ul>
        </header>
    )
};

export default Header;