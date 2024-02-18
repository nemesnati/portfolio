import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

function Contact({cv}) {
    const aStyle = {
        color: "white",
        fontSize: "clamp(40px, 4vw, 70px)",
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
        fontSize: "clamp(40px, 8vw, 80px)",
        fontFamily: "roboto",
        fontWeight: 400,
        fontStyle: "normal",
        marginLeft: "20px",
      
        color: "white",
      }

      const liStyle = {
        display:"flex",
        flexDirection: "column",
        listStyleType: "none",
        padding: "2px",
        gap: "20px",
      }

      const cvStyle = {
        maxHeight: "0.8em",
        maxWidth: "auto",
        fontSize: '0.9em'
      }

  return (
    <>
<h1 style={h1Style} id='contact'>.Contact</h1>
            <ul style={ulStyle}>
                <li style={liStyle}>
                  <a href="mailto:nemes.nati86@gmail.com" style={aStyle}>
                       <EmailIcon alt="email" sx={{maxHeight: 65, maxWidth: 55, fontSize: '0.8em'}}/>
                   </a>
                </li>
                <li style={liStyle}>
                    <a href="https://www.facebook.com/nemes.natalia.14/" style={aStyle}>
                        <FacebookIcon alt="facebook"sx={{maxHeight: 65, maxWidth: 55, fontSize: '0.8em'}}/>
                    </a>
                </li>
                <li style={liStyle}>
                    <a href="https://www.linkedin.com/in/natália-nemes-476524292/" style={aStyle}>
                        <LinkedInIcon alt="linked in"sx={{maxHeight: 65, maxWidth: 55, fontSize: '0.8em'}}/>
                    </a>
                </li>
                <li style={liStyle}>
                    <a href="https://github.com/nemesnati" style={aStyle}>
                        <GitHubIcon alt="github"sx={{maxHeight: 65, maxWidth: 55, fontSize: '0.8em'}}/>
                    </a>
                </li>
                <li style={liStyle}>
                    <a href="/portfolio/src/assets/Natália Nemes CV.pdf" style={aStyle}>
                        <img src={cv} alt="cv" style={cvStyle}/>
                    </a>
                </li>
            </ul>
    </>
  )
}

export default Contact