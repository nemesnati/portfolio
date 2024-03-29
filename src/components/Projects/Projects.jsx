import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@mui/material'


function Projects({spaceInvader, burgerLand, rickAndMorty, memory}) {

    const h1Style = {
        fontSize: "clamp(60px, 10vw, 170px)",
        fontFamily: "roboto",
        fontWeight: 400,
        fontStyle: "normal",
        marginLeft: '0.1em',
      
        color: "white",
      }

      const h2Styles = {
        fontSize: "clamp(20px, 4vw, 30px)",
        fontFamily: "montserrat",
        fontWeight: 300,
        color: "rgb(115, 45, 246)",
        textAlign: "left"
    }
    const project = {  
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        padding: 18,
        gap: "5em",
    }

    const projectCards = {
       display: "flex",
       flexWrap: "wrap",
       flexDirection: "row",
       justifyContent: "space-evenly",
       gap: "1em",
    }

    const fontStyle = {
        fontSize: "clamp(5px, 7vw, 20px)",
        fontFamily: "roboto",
        fontWeight: 600,
        color: "rgb(115, 45, 246)",
    }

    const fontParaStyle = {
        fontSize: "clamp(2px, 5vw, 20px)",
        fontFamily: "montserrat",
        fontWeight: 400,
        color: "rgb(115, 45, 246)",
    }


    const spaceLink = () => {
        window.open('https://nemesnati.github.io/space_invaders_clone/');
    }
    const spaceLinkGit = () => {
        window.open('https://github.com/nemesnati/space_invaders_clone/');
    }

    const burgerLink = () => {
        window.open('https://nemesnati.github.io/burger_webshop_frontend_only/');
    }
    const burgerLinkGit = () => {
        window.open('https://github.com/nemesnati/burger_webshop_frontend_only/');
    }
    const rickLink = () => {
        window.open('https://nemesnati.github.io/rickandmorty/');
    }
    const rickLinkGit = () => {
        window.open('https://github.com/nemesnati/rickandmorty/');
    }
    const memoryLink = () => {
        window.open('https://nemesnati.github.io/memory-game/');
    }
    const memoryLinkGit = () => {
        window.open('https://github.com/nemesnati/memory-game/');
    }



    return (
        <>
        <h1 style={h1Style} id='projects'>.Projects</h1>
        <div style={project}>
        <Card variant='outlined' sx={{
          maxHeight: "fit-content",
          maxWidth: "75em", 
          boxShadow: 10,
          alignItems: "center",
          padding: '2.5em', 
          margin: "1em",
          backgroundColor: "#f0efed"}}>
        <h2 style={h2Styles}>
        I embarked on an exciting journey to enhance my skills as a frontend developer by attending a frontend bootcamp. I immersed myself in <strong>an intensive learning environment.</strong> <br></br>
        One of the highlights of the bootcamp was <strong>collaborating with fellow developers on real-world projects</strong>, allowing me to apply my newfound knowledge to <strong>solve complex challenges</strong> and deliver impactful solutions.
        <br></br>
        It not only equipped me with technical skills but also instilled in me <strong>a strong foundation in problem-solving, collaboration, and continuous learning.</strong>  It was a transformative experience that prepared me for a successful career in frontend development.
        </h2>
        </Card>
        <div style={projectCards}>
        <Card sx={{ maxWidth: 440 , maxHeight: "fit-content", boxShadow: 5, padding: '0em',backgroundColor: "#f0efed"}}>
            <CardMedia component="img"
        alt="space invader"
        height="140"
        src={spaceInvader}/>
                <CardContent>
                    <Typography style={fontStyle}>
                        SPACE INVADER
                    </Typography>
                    <Typography style={fontParaStyle}>
                    I wanted to get into game development and remembered this game from when i was little and thought i would give it a try. It was a bit challenging but i learnt a lot from it! <br></br>
                    </Typography>
                    <CardActions>
                         <Button variant='outlined' onClick={spaceLink}>LIVE DEMO</Button>
                         <Button onClick={spaceLinkGit}>SOURCE CODE</Button>
                    </CardActions>
                 </CardContent>
       </Card>
        <Card sx={{ maxWidth: 440 ,maxHeight: "fit-content", boxShadow: 5,padding: '0em',backgroundColor: "#f0efed"}}>
             <CardMedia component="img"
        alt="burger land"
        height="140"
        src={burgerLand}/>
                 <CardContent>
                    <Typography style={fontStyle}>
                        BURGER LAND - TEAM WEBSHOP PROJECT
                    </Typography>
                   <Typography style={fontParaStyle}>
                   This was a team project on my frontend course that we did, but it was originally built with backend, so I recreated it to be frontend only. <br></br>This project helped me learn a lot about responsive design.<br></br> (backend version on my github)
                   </Typography>
                   <CardActions>
                     <Button variant="outlined" onClick={burgerLink}>LIVE DEMO</Button>
                     <Button onClick={burgerLinkGit}>SOURCE CODE</Button>
                   </CardActions>
                 </CardContent>
       </Card>
        <Card sx={{ maxWidth: 440, maxHeight: "fit-content", boxShadow: 5, padding: '0em',backgroundColor: "#f0efed" }}>
            <CardMedia component="img"
        alt="rick and morty"
        height="140"
        src={rickAndMorty}/>
                <CardContent>
                <Typography style={fontStyle}>
                    RICK AND MORTY DATABASE
                </Typography>
                    <Typography style={fontParaStyle}>
                    I used the Rick and Morty RESTApi for this project. It collects the characters data and gives informations about the characters in detail, kind of like in a detective data style.
                    </Typography>
                    <CardActions>
                     <Button variant='outlined' onClick={rickLink}>LIVE DEMO</Button>
                     <Button onClick={rickLinkGit}>SOURCE CODE</Button>
                    </CardActions>
                </CardContent>
        </Card>
        <Card sx={{ maxWidth: 440, maxHeight: "fit-content",boxShadow: 5, padding: '0em',backgroundColor: "#f0efed" }}>
            <CardMedia component="img"
        alt="memory game"
        height="140"
        src={memory}/>
                <CardContent>
                    <Typography style={fontStyle}>
                        MEMORY GAME
                    </Typography>
                    <Typography style={fontParaStyle}>
                    I had a really fun time putting this together. I had difficulties with flips in the beginning, but than i got the hang of it and succeeded. I learned a lot of patience during this project.
                    </Typography>
                    <CardActions>
                        <Button variant='outlined' onClick={memoryLink}>LIVE DEMO</Button>
                        <Button onClick={memoryLinkGit}>SOURCE CODE</Button>
                    </CardActions>
                </CardContent>
        </Card>
        </div>
    </div>
</>
    )
}

export default Projects