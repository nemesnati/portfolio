import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Contact() {
    const aStyle = {
        color: "white",
        fontSize: "60px",
        fontFamily: "montserrat",
        fontWeight: 200,
        fontStyle: "normal",
        textDecoration: "none"
      }
    
      const ulStyle = {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center"

      }

      const h1Style = {
        position: "relative",
        width: "fit-content",
        fontSize: "80px",
        fontFamily: "roboto",
        fontWeight: 200,
        fontStyle: "normal",
        marginLeft: "20px",
      
        color: "white",
      }

      const liStyle = {
        display:"flex",
        flexDirection: "column",
        listStyleType: "none",
        padding: "20px",
        gap: "20px",
      }

  return (
    <>
<h1 style={h1Style} id='contact'>.Contact</h1>
            <ul style={ulStyle}>
                <li style={liStyle}>
                  <a href="mailto:nemes.nati86@gmail.com" style={aStyle}>
                       <EmailIcon alt="email" sx={{height: 50, width: 40}}/>
                   </a>
                </li>
                <li style={liStyle}>
                    <a href="https://www.facebook.com/nemes.natalia.14/" style={aStyle}>
                        <FacebookIcon alt="facebook"sx={{height: 50, width: 40}}/>
                    </a>
                </li>
                <li style={liStyle}>
                    <a href="https://www.linkedin.com/in/natália-nemes-476524292/" style={aStyle}>
                        <LinkedInIcon alt="linked in"sx={{height: 50, width: 40}}/>
                    </a>
                </li>
                <li style={liStyle}>
                    <a href="https://github.com/nemesnati" style={aStyle}>
                        <GitHubIcon alt="github"sx={{height: 50, width: 40}}/>
                    </a>
                </li>
            </ul>
    </>
  )
}

export default Contact