import React from 'react';

const Navigation = ({onRouteChange, isSignedIn}) => {
    if(isSignedIn) {
        return (
            <nav className="navbar">
                <p 
                    className="f3 link dim black underline pa3 pointer"
                    onClick={() => onRouteChange('sign-out')}
                >Sign Out</p>
            </nav>
        );
    } else {
        return (
            <nav className="navbar">
                <p 
                    className="f3 link dim black underline pa3 pointer"
                    onClick={() => onRouteChange('sign-in')}
                >Sign In</p>
                <p 
                    className="f3 link dim black underline pa3 pointer"
                    onClick={() => onRouteChange('register')}
                >Register</p>
            </nav>
        );
    }
    
}

export default Navigation;