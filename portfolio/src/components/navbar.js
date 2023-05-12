import React from 'react'; 
import { Link } from 'react-router-dom';

const navBar = () => {
    return (
       <div>
        <ul>
            <li><Link to="/">.Home</Link></li>
            <li><Link to="/contact">.Contact</Link></li>
        </ul>
       </div>
      
    );
};

export default navBar;