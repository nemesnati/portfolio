import React from 'react'
import { Card } from '@mui/material'

function About({me, css, figma, html, js, react}) {

const aboutStyles = {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
}
 const imgStyles = {
   height: "450px",
   width: "auto",
   borderRadius: "10px",

 }
 const h1Styles = {
  fontSize: "150px",
  fontFamily: "roboto",
  fontWeight: 400,
  fontStyle: "normal",
  margin: "20px",
  color: "rgb(115, 45, 246)",
}

const h2Styles = {
    fontSize: "25px",
    fontFamily: "montserrat",
    fontWeight: 200,
    color: "rgb(115, 45, 246)",
    textAlign: "left"
}
const skillStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  top: "100px",
  gap: "15px"
}

const h3Style = {
    fontSize: "50px",
    fontFamily: "montserrat",
    fontWeight: 400,
    color: "rgb(115, 45, 246)",
    margin: "20px"
}

  return (
    <>
    <h1 style={h1Styles} id='about'>.About</h1>
      <div style={aboutStyles} >
        <img src={me} style={imgStyles}/>
        <Card variant='outlined' sx={{
          height: 450,
          maxWidth: 500, 
          border: 0 ,
          boxShadow: 5 ,
          display: "flex",
          alignItems: "center",
          padding: 2}}>
          <h2 style={h2Styles}>I'm a frontend developer driven by a passion for creativity and design. With expertise in HTML, CSS, and JavaScript, I'm dedicated to crafting visually stunning and user-friendly interfaces. I believe in starting each project with the question: "What would I love, if it were on a website?"This approach ensures that every element I create resonates with users and adds value to their browsing experience.
          </h2>
      </Card>
    </div>
        <div style={skillStyle}>
         <h3 style={h3Style}>skills:</h3>
          <img src={css}/>
          <img src={html}/>
          <img src={js} style={{height: 75}}/>
          <img src={react}/>
          <img src={figma}/>
        </div>
    </>
  )
}

export default About