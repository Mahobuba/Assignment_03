// components/NotFound.jsx
import React from 'react';
import "./NotFound.css"; // Import the CSS file

const NotFound = () => {
    return (
        <div className="not-found-container">
            <h1 className="title">404 - Not Found</h1>
            <img src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg" alt="404" className="not-found-image" />
        </div>
    );
};

export default NotFound;

  