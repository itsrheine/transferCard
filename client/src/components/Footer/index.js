import React from 'react';

const footerStyle = {
    backgroundColor: "black",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
    color: "white",
    opacity: 0.35
};

const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%",
    opacity: 0.4,
};

function Footer({ children }) {

    return (

        <div>
            <div style={phantomStyle} />
            <div style={footerStyle}>{children}</div>
        </div>
    )
}

export default Footer;