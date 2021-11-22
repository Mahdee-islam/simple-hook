import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <nav>
                <li><NavLink to = "/home">Home</NavLink></li>
                <li><NavLink to = "/posts">Posts</NavLink></li>
            </nav>
        </div>
    );
};

export default Header;