import React from 'react'
import { Card } from '@mui/material'

function About({me, css, figma, html, js, react, firebase, sass, postman}) {

const aboutStyles = {
    backgroundColor: "white",
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    margin: "auto",
    gap: "3.5em"
}
 const imgStyles = {
   maxHeight: "450px",
   maxWidth: "100% ",
   boxShadow: "0px 3px 5px -1px rgba(0,0,0,0.2), 0px 5px 8px 0px rgba(0,0,0,0.14), 0px 1px 14px 0px rgba(0,0,0,0.12)",
   borderRadius: '4px',
   padding: '0.8em',
   backgroundColor: "#f0efed",
 }
 const h1Styles = {
  fontSize: "clamp(70px, 10vw, 170px)",
  fontFamily: "roboto",
  fontWeight: 400,
  fontStyle: "normal",
  marginLeft: '0.1em',
  color: "rgb(115, 45, 246)",
}

const h2Styles = {
    fontSize: "clamp(20px, 4vw, 28px)",
    fontFamily: "montserrat",
    fontWeight: 300,
    color: "rgb(115, 45, 246)",
    textAlign: "left"
}
const skillStyle = {
  display: "flex",
  flexWrap: "wrap",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "2em",
  maxWidth:"fit-content",
  margin: "auto",
  boxShadow: 5,
  margin: '1em',
  padding: '0.5em',
  backgroundColor: "#f0efed"
}

const h3Style = {
    fontSize: "clamp(23px, 4vw, 50px)",
    fontFamily: "montserrat",
    fontWeight: 600,
    color: "rgb(115, 45, 246)",
    margin: "20px"
}

  return (
    <>
    <h1 style={h1Styles} id='about'>.About</h1>
      <div style={aboutStyles} >
        <img src={me} alt='profile picture' style={imgStyles}/>
        <Card variant='outlined' sx={{
          maxHeight: 550,
          maxWidth: "36em", 
          border: 0 ,
          boxShadow: 5 ,
          display: "flex",
          alignItems: "center",
          padding: 3,
          margin: '1em', backgroundColor: "#f0efed"}}>
          <h2 style={h2Styles}>I'm a frontend developer driven by a passion for <strong>creativity and design.</strong> With expertise in <strong>HTML, CSS, JavaScript and React</strong>, I'm dedicated to crafting visually stunning and user-friendly interfaces.
          <br></br> I believe in starting each project with the question: <strong>"What would I love, if it were on a website?"</strong> This approach ensures that every element I create resonates with users and adds value to their browsing experience.
          </h2>
      </Card>
        <Card style={skillStyle}>
         <h3 style={h3Style}>Skills:</h3>
          <img src={css}/>
          <img src={html}/>
          <img src={js} style={{height: 75}}/>
          <img src={react}/>
          <img src={figma}/>
          <img src={sass} style={{height: 75}}/>
          <img src={postman} style={{height: 75}}/>
          <img src={firebase} style={{height: 75}}/>
        </Card>
        </div>
    </>
  )
}

export default About