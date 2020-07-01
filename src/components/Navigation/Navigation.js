import React from 'react';

const Navigation = ({onRouteChange}) => {
    return (
        <nav className="navbar">
            <p 
                className="f3 link dim black underline pa3 pointer"
                onClick={() => onRouteChange('sign-in')}
            >Sign Out</p>
        </nav>
    );
}

export default Navigation;