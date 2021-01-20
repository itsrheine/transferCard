import React from 'react';

const footerStyle = {
    backgroundColor: "black",
    opacity: 0.4,
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%"
};

const phantomStyle = {
    display: "block",
    padding: "20px",
    height: "60px",
    width: "100%"
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