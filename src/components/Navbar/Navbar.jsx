import React from "react";

export const Navbar = ({logo}) => {

const navbarStyle ={
  display: "flex",
  justifyContent:"space-between",
  paddingRight: "0.5em",
  marginBottom: '10em'
}
const logoStyle = {
  maxWidth: '12em',
  maxHeight: '8em',
  marginLeft: '1.5em'
}

const liStyle = {
  display:"flex",
  flexDirection: "column",
  listStyleType: "none",
  padding: "20px",
  gap: "20px",
}

const aStyle = {
  color: "white",
  fontSize: "clamp(15px, 8vw, 60px)",
  fontFamily: "montserrat",
  fontWeight: 200,
  fontStyle: "normal",
  textDecoration: "none"
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