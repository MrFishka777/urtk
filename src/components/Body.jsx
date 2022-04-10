import React from 'react';
import Nav from "./Nav";
import Card from "./Card";

const Body = ({ children }) => {
    return (
        <div style={{marginTop: '10%'}} className="g-sidenav-show">
            <header id="headre_app" />
            <div id="body_cont">
                {children}
            </div>
        </div>
    );
};

export default Body;