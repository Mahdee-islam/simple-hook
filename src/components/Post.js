import React from 'react';
import { useNavigate, useParams } from 'react-router';

const Post = () => {
    const params = useParams();
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/home')
    }
    return (
        <div>
            <h3>Post id is: {params.postId} </h3>
            <button type = "button " onClick = { handleClick }>Go Home</button>
        </div>
    );
};

export default Post;