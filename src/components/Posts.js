import React from 'react';
import { NavLink } from 'react-router-dom';

const Posts = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to = "/posts/1">Post 1</NavLink>
                </li>
                <li>
                    <NavLink to = "/posts/2">Post 2</NavLink>
                </li>
                <li>
                    <NavLink to = "/posts/3">Post 3</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Posts;