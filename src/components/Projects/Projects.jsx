import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

function Projects() {

    const h1Style = {
        position: "relative",
        width: "fit-content",
        fontSize: "150px",
        fontFamily: "roboto",
        fontWeight: 400,
        fontStyle: "normal",
        marginLeft: "20px",
      
        color: "white",
      }

      const h2Styles = {
        fontSize: "25px",
        fontFamily: "montserrat",
        fontWeight: 200,
        color: "rgb(115, 45, 246)",
        textAlign: "left"
    }

    return (
        <>
        <h1 style={h1Style} id='projects'>.Projects</h1>
        <Card variant='outlined' sx={{
          height: "auto",
          maxWidth: 700, 
          border: 0 ,
          boxShadow: 5 ,
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          padding: 2}}>
        <h2 style={h2Styles}>
        I embarked on an exciting journey to enhance my skills as a frontend developer by attending a frontend bootcamp. I immersed myself in <strong>an intensive learning environment.</strong> <br></br>
        One of the highlights of the bootcamp was <strong>collaborating with fellow developers on real-world projects</strong>, allowing me to apply my newfound knowledge to <strong>solve complex challenges</strong> and deliver impactful solutions.
        <br></br>
        It not only equipped me with technical skills but also instilled in me <strong>a strong foundation in problem-solving, collaboration, and continuous learning.</strong>  It was a transformative experience that prepared me for a successful career in frontend development.
        </h2>
        </Card>
        <Card>
            <CardMedia/>
                <CardContent>
                    <Typography>
                
                    </Typography>
                 </CardContent>
       </Card>
        <Card>
             <CardMedia/>
                 <CardContent>
                   <Typography>

                   </Typography>
                 </CardContent>
       </Card>
        <Card>
            <CardMedia/>
                <CardContent>
                    <Typography>

                    </Typography>
                </CardContent>
        </Card>
        <Card>
            <CardMedia/>
                <CardContent>
                    <Typography>

                    </Typography>
                </CardContent>
        </Card>
        
        </>
    )
}

export default Projects