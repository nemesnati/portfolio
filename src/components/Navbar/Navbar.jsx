import React from "react";
import './Navbar.css'

export const Navbar = ({logo}) => {

const navbarStyle ={
  display: "flex",
  justifyContent:"space-between",
  paddingRight: "0.5em",
}
const logoStyle = {
  maxWidth: '10em',
  maxHeight: '7em',
  marginLeft: '1.5em',
  marginTop: '1em'
}

const liStyle = {
  display:"flex",
  flexDirection: "column",
  listStyleType: "none",
  padding: "20px",
  gap: "20px"
}

const aStyle = {
  color: "white",
  fontSize: "clamp(5px, 8vw, 60px)",
  fontFamily: "montserrat",
  fontWeight: 200,
  fontStyle: "normal",
  textDecoration: "none",

  display: 'inline-block',
  position: 'relative'
}


  return (
    <>
    <nav style={navbarStyle}>
    <img src={logo} style={logoStyle}/>
        <ul style={liStyle}>
          <li >
            <a href="#about" style={aStyle}>.About</a>
          </li>
          <li>
            <a href="#projects" style={aStyle}>.Projects</a>
          </li>
          <li>
            <a href="#contact" style={aStyle}>.Contact</a>
          </li>
        </ul>
    </nav>
    </>
  );
};